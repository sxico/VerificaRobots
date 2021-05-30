const https = require('https')


const options = {
  hostname: '<url>',
  port: 443,
  path: '/<arquivo_ou_pagina>',
  method: 'GET'
}


const req = https.request(options, res => {
  console.log('statusCode:' ,res.statusCode)
  console.log('header:' ,res.headers)
  
  res.on("data", function(dados) {
    console.log("Arquivo: " + dados);
  });
}).on('error', function(err) {
  console.log("Erro: " + err.message);
  });

req.end()