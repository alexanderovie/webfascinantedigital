#!/usr/bin/env node

/**
 * 🚀 CONFIGURACIÓN ELITE DNS CLOUDFLARE
 * Configuración profesional para Fascinante Digital
 * 
 * Objetivo: Permitir que tanto Google Workspace como Resend
 * usen info@fascinantedigital.com
 */

const https = require('https');

// Configuración
const DOMAIN = 'fascinantedigital.com';
const ZONE_ID = '805bb4fea4f198df0f788aaaad22a1be'; // Del whoami
const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;

// Headers para API
const headers = {
  'Authorization': `Bearer ${API_TOKEN}`,
  'Content-Type': 'application/json'
};

// Función para hacer requests a Cloudflare API
function cloudflareRequest(endpoint, method = 'GET', data = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.cloudflare.com',
      port: 443,
      path: endpoint,
      method: method,
      headers: headers
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          const result = JSON.parse(body);
          resolve({ status: res.statusCode, data: result });
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', reject);

    if (data) {
      req.write(JSON.stringify(data));
    }

    req.end();
  });
}

// Función para obtener records DNS
async function getDNSRecords() {
  console.log('🔍 Obteniendo records DNS actuales...');
  
  try {
    const response = await cloudflareRequest(`/client/v4/zones/${ZONE_ID}/dns_records`);
    
    if (response.status === 200) {
      console.log('✅ Records DNS obtenidos correctamente');
      return response.data.result;
    } else {
      throw new Error(`Error: ${response.status} - ${response.data.errors?.[0]?.message || 'Unknown error'}`);
    }
  } catch (error) {
    console.error('❌ Error obteniendo records DNS:', error.message);
    return null;
  }
}

// Función para actualizar SPF record
async function updateSPFRecord(records) {
  console.log('📧 Actualizando SPF record...');
  
  // Buscar record SPF existente
  const spfRecord = records.find(record => 
    record.type === 'TXT' && 
    record.name === DOMAIN && 
    record.content.includes('v=spf1')
  );

  if (!spfRecord) {
    console.log('❌ SPF record no encontrado');
    return false;
  }

  // Verificar si ya incluye Resend
  if (spfRecord.content.includes('resend.com')) {
    console.log('✅ SPF record ya incluye Resend');
    return true;
  }

  // Actualizar SPF para incluir Resend
  const newSPF = spfRecord.content.replace(
    'v=spf1 include:_spf.google.com ~all',
    'v=spf1 include:_spf.google.com include:_spf.resend.com ~all'
  );

  try {
    const response = await cloudflareRequest(
      `/client/v4/zones/${ZONE_ID}/dns_records/${spfRecord.id}`,
      'PUT',
      {
        type: 'TXT',
        name: DOMAIN,
        content: newSPF,
        ttl: 300
      }
    );

    if (response.status === 200) {
      console.log('✅ SPF record actualizado correctamente');
      console.log('   Nuevo SPF:', newSPF);
      return true;
    } else {
      throw new Error(`Error: ${response.status} - ${response.data.errors?.[0]?.message || 'Unknown error'}`);
    }
  } catch (error) {
    console.error('❌ Error actualizando SPF record:', error.message);
    return false;
  }
}

// Función para verificar DKIM records
async function verifyDKIMRecords(records) {
  console.log('🔐 Verificando DKIM records...');
  
  const googleDKIM = records.find(record => 
    record.type === 'TXT' && 
    record.name === `google._domainkey.${DOMAIN}`
  );

  const resendDKIM = records.find(record => 
    record.type === 'TXT' && 
    record.name === `resend._domainkey.${DOMAIN}`
  );

  console.log('Google DKIM:', googleDKIM ? '✅' : '❌');
  console.log('Resend DKIM:', resendDKIM ? '✅' : '❌');

  return { google: !!googleDKIM, resend: !!resendDKIM };
}

// Función para verificar DMARC
async function verifyDMARC(records) {
  console.log('🛡️ Verificando DMARC...');
  
  const dmarcRecord = records.find(record => 
    record.type === 'TXT' && 
    record.name === `_dmarc.${DOMAIN}`
  );

  if (dmarcRecord) {
    console.log('✅ DMARC configurado:', dmarcRecord.content);
    return true;
  } else {
    console.log('❌ DMARC no configurado');
    return false;
  }
}

// Función principal
async function configureEliteDNS() {
  console.log('🚀 INICIANDO CONFIGURACIÓN ELITE DNS CLOUDFLARE');
  console.log('=' .repeat(50));
  
  // Verificar API token
  if (!API_TOKEN) {
    console.error('❌ CLOUDFLARE_API_TOKEN no configurado');
    console.log('   Configura: export CLOUDFLARE_API_TOKEN=tu_token_aqui');
    return;
  }

  // Obtener records DNS
  const records = await getDNSRecords();
  if (!records) return;

  // Verificar DKIM records
  const dkimStatus = await verifyDKIMRecords(records);
  
  // Verificar DMARC
  const dmarcStatus = await verifyDMARC(records);
  
  // Actualizar SPF
  const spfStatus = await updateSPFRecord(records);

  // Resumen
  console.log('\n📊 RESUMEN DE CONFIGURACIÓN:');
  console.log('=' .repeat(30));
  console.log('SPF (Google + Resend):', spfStatus ? '✅' : '❌');
  console.log('DKIM Google:', dkimStatus.google ? '✅' : '❌');
  console.log('DKIM Resend:', dkimStatus.resend ? '✅' : '❌');
  console.log('DMARC:', dmarcStatus ? '✅' : '❌');

  if (spfStatus && dkimStatus.google && dkimStatus.resend && dmarcStatus) {
    console.log('\n🎉 CONFIGURACIÓN ELITE COMPLETADA');
    console.log('   info@fascinantedigital.com está listo para Google Workspace y Resend');
  } else {
    console.log('\n⚠️  CONFIGURACIÓN INCOMPLETA');
    console.log('   Revisa los elementos marcados con ❌');
  }
}

// Ejecutar configuración
configureEliteDNS().catch(console.error);
