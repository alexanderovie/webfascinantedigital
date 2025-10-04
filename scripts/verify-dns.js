#!/usr/bin/env node

const dns = require('dns').promises;

const domain = 'fascinantedigital.com';

async function verifyDNS() {
  console.log('🔍 Verificando configuración DNS para Resend...\n');

  try {
    // Verificar SPF
    console.log('📧 Verificando SPF record...');
    const spfRecords = await dns.resolveTxt(domain);
    const spfRecord = spfRecords.find(record => 
      record[0].includes('v=spf1')
    );
    
    if (spfRecord) {
      console.log('✅ SPF encontrado:', spfRecord[0]);
      if (spfRecord[0].includes('resend.com')) {
        console.log('✅ Resend incluido en SPF');
      } else {
        console.log('⚠️  Resend NO incluido en SPF');
        console.log('   Necesario: v=spf1 include:_spf.google.com include:_spf.resend.com ~all');
      }
    } else {
      console.log('❌ SPF record no encontrado');
    }

    // Verificar DKIM
    console.log('\n🔐 Verificando DKIM record...');
    try {
      const dkimRecords = await dns.resolveTxt(`resend._domainkey.${domain}`);
      if (dkimRecords.length > 0) {
        console.log('✅ DKIM encontrado:', dkimRecords[0][0].substring(0, 50) + '...');
      } else {
        console.log('❌ DKIM record no encontrado');
      }
    } catch (error) {
      console.log('❌ DKIM record no encontrado');
    }

    // Verificar DMARC
    console.log('\n🛡️  Verificando DMARC record...');
    try {
      const dmarcRecords = await dns.resolveTxt(`_dmarc.${domain}`);
      if (dmarcRecords.length > 0) {
        console.log('✅ DMARC encontrado:', dmarcRecords[0][0]);
      } else {
        console.log('❌ DMARC record no encontrado');
      }
    } catch (error) {
      console.log('❌ DMARC record no encontrado');
    }

    // Verificar CNAME para Vercel
    console.log('\n🌐 Verificando CNAME para Vercel...');
    try {
      const cnameRecords = await dns.resolveCname(`www.${domain}`);
      if (cnameRecords.includes('vercel-dns.com')) {
        console.log('✅ CNAME para Vercel configurado');
      } else {
        console.log('⚠️  CNAME para Vercel no configurado correctamente');
      }
    } catch (error) {
      console.log('❌ CNAME para Vercel no encontrado');
    }

    console.log('\n📊 Resumen:');
    console.log('1. SPF: ' + (spfRecord && spfRecord[0].includes('resend.com') ? '✅' : '❌'));
    console.log('2. DKIM: ' + (await checkDKIM() ? '✅' : '❌'));
    console.log('3. DMARC: ' + (await checkDMARC() ? '✅' : '❌'));
    console.log('4. CNAME: ' + (await checkCNAME() ? '✅' : '❌'));

  } catch (error) {
    console.error('❌ Error verificando DNS:', error.message);
  }
}

async function checkDKIM() {
  try {
    const dkimRecords = await dns.resolveTxt(`resend._domainkey.${domain}`);
    return dkimRecords.length > 0;
  } catch {
    return false;
  }
}

async function checkDMARC() {
  try {
    const dmarcRecords = await dns.resolveTxt(`_dmarc.${domain}`);
    return dmarcRecords.length > 0;
  } catch {
    return false;
  }
}

async function checkCNAME() {
  try {
    const cnameRecords = await dns.resolveCname(`www.${domain}`);
    return cnameRecords.includes('vercel-dns.com');
  } catch {
    return false;
  }
}

// Ejecutar verificación
verifyDNS();
