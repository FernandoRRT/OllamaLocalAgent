const axios = require('axios');
const fs = require('fs');
const path = require('path');

const targetUrl = process.argv[2];
const savePath = process.argv[3];

if (!targetUrl || !savePath) {
  console.log("❌ Uso: node fetch-docs.js <URL> <CAMINHO_DE_SAIDA>");
  process.exit(1);
}

async function fetchAndClean() {
  console.log(`📥 Baixando de: ${targetUrl}...`);
  
  try {
    const response = await axios.get(`https://r.jina.ai/${targetUrl}`);
    let md = response.data;

    console.log("🧹 Sanitizando conteúdo...");

    // 1. CORTA O CABEÇALHO (O Menu Global)
    // O Jina injeta 'Copy page' logo antes do H1 real do conteúdo.
    const copyIndex = md.indexOf('Copy page');
    if (copyIndex !== -1) {
      // Corta tudo antes e inclui o tamanho do 'Copy page' para removê-lo também
      md = md.substring(copyIndex + 'Copy page'.length);
    } else {
      // Fallback de segurança caso não tenha 'Copy page'
      const onThisPageIndex = md.indexOf('On this page');
      if (onThisPageIndex !== -1) {
        md = md.substring(onThisPageIndex);
      }
    }

    // 2. CORTA O RODAPÉ
    const footerIndex = md.indexOf('Was this helpful?');
    if (footerIndex !== -1) {
      md = md.substring(0, footerIndex);
    }

    // 3. REMOVE IMAGENS 
    md = md.replace(/!\[.*?\]\(.*?\)/g, '');
    md = md.replace(/!Image\s\d+:.*?(\n|$)/g, ''); 

    // 4. REMOVE LINKS (Mantendo apenas o texto âncora)
    md = md.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

    // 5. LIMPEZA DE ESPAÇOS E TRAÇOS ÓRFÃOS (Gerados ao remover os links do menu)
    md = md.replace(/^\*\s+$/gm, ''); // Remove bullets vazios
    md = md.replace(/\n{3,}/g, '\n\n'); // Padroniza quebras de linha

    // Salva o arquivo final
    const fullPath = path.resolve(__dirname, savePath);
    const dir = path.dirname(fullPath);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(fullPath, md.trim(), 'utf-8');
    console.log(`✅ Arquivo limpo e salvo em: ${fullPath}`);

  } catch (error) {
    console.error("❌ Erro ao buscar documento:", error.message);
  }
}

fetchAndClean();
