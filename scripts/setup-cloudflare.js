#!/usr/bin/env node

const https = require('https');

// Configuración de Cloudflare
const CLOUDFLARE_API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;
const DOMAIN = 'fascinantedigital.com';

if (!CLOUDFLARE_API_TOKEN) {
  console.log('❌ CLOUDFLARE_API_TOKEN no configurado');
  console.log('📋 Para configurar:');
  console.log('1. Ir a Cloudflare Dashboard > My Profile > API Tokens');
  console.log('2. Crear token con permisos: Zone:Read, DNS:Edit');
  console.log('3. Exportar variable: export CLOUDFLARE_API_TOKEN=tu_token');
  process.exit(1);
}

async function makeRequest(url, options = {}) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, {
      headers: {
        'Authorization': `Bearer ${CLOUDFLARE_API_TOKEN}`,
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          resolve(data);
        }
      });
    });

    req.on('error', reject);
    if (options.body) {
      req.write(JSON.stringify(options.body));
    }
    req.end();
  });
}

async function getZoneId() {
  console.log('🔍 Buscando Zone ID para', DOMAIN);

  try {
    const response = await makeRequest('https://api.cloudflare.com/client/v4/zones');

    if (response.success) {
      const zone = response.result.find(z => z.name === DOMAIN);
      if (zone) {
        console.log('✅ Zone encontrada:', zone.id);
        return zone.id;
      } else {
        console.log('❌ Zone no encontrada para', DOMAIN);
        return null;
      }
    } else {
      console.log('❌ Error en API:', response.errors);
      return null;
    }
  } catch (error) {
    console.log('❌ Error de conexión:', error.message);
    return null;
  }
}

async function getDNSRecords(zoneId) {
  console.log('🔍 Obteniendo records DNS...');

  try {
    const response = await makeRequest(`https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records`);

    if (response.success) {
      console.log('✅ Records obtenidos:', response.result.length);
      return response.result;
    } else {
      console.log('❌ Error obteniendo records:', response.errors);
      return [];
    }
  } catch (error) {
    console.log('❌ Error de conexión:', error.message);
    return [];
  }
}

async function updateSPFRecord(zoneId, records) {
  console.log('🔧 Actualizando SPF record...');

  const spfRecord = records.find(r => r.type === 'TXT' && r.name === DOMAIN && r.content.includes('v=spf1'));

  if (!spfRecord) {
    console.log('❌ SPF record no encontrado');
    return false;
  }

  const currentSPF = spfRecord.content;
  const newSPF = currentSPF.includes('resend.com')
    ? currentSPF
    : currentSPF.replace('~all', 'include:_spf.resend.com ~all');

  if (currentSPF === newSPF) {
    console.log('✅ SPF ya incluye Resend');
    return true;
  }

  try {
    const response = await makeRequest(`https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records/${spfRecord.id}`, {
      method: 'PUT',
      body: {
        type: 'TXT',
        name: DOMAIN,
        content: newSPF,
        ttl: 1 // Auto
      }
    });

    if (response.success) {
      console.log('✅ SPF actualizado correctamente');
      console.log('   Antes:', currentSPF);
      console.log('   Después:', newSPF);
      return true;
    } else {
      console.log('❌ Error actualizando SPF:', response.errors);
      return false;
    }
  } catch (error) {
    console.log('❌ Error de conexión:', error.message);
    return false;
  }
}

async function main() {
  console.log('🚀 Configurando Cloudflare para Resend...\n');

  // Obtener Zone ID
  const zoneId = await getZoneId();
  if (!zoneId) {
    process.exit(1);
  }

  // Obtener records DNS
  const records = await getDNSRecords(zoneId);
  if (records.length === 0) {
    process.exit(1);
  }

  // Mostrar records actuales
  console.log('\n📊 Records DNS actuales:');
  records.forEach(record => {
    if (record.type === 'TXT' && (record.content.includes('spf1') || record.content.includes('DMARC1'))) {
      console.log(`   ${record.type} ${record.name}: ${record.content}`);
    }
  });

  // Actualizar SPF
  const spfUpdated = await updateSPFRecord(zoneId, records);

  console.log('\n📊 Resumen:');
  console.log('1. Zone ID:', zoneId);
  console.log('2. Records encontrados:', records.length);
  console.log('3. SPF actualizado:', spfUpdated ? '✅' : '❌');

  if (spfUpdated) {
    console.log('\n🎉 Configuración completada!');
    console.log('⏱️  Esperar 1-24 horas para propagación DNS');
  }
}

// Ejecutar
main().catch(console.error);
