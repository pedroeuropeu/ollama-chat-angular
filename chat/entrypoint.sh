#!/bin/sh

# Substituir a variável de ambiente no env.js
sed -i "s|\${OLLAMA_URL}|${OLLAMA_URL}|g" /usr/share/nginx/html/env.js
sed -i "s|\${OLLAMA_MODEL}|${OLLAMA_MODEL}|g" /usr/share/nginx/html/env.js

# Iniciar o Nginx
nginx -g 'daemon off;'
