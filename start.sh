#!/bin/bash

PURPLE='\033[1;35m'
WHITE='\033[1;37m'

if [ ! -d "node_modules" ]; then
echo "${WHITE}❌ - Ops, não encontrei as dependências necessárias, instalando...\n"
npm install
if [ $? -ne 0 ]; then
echo "${WHITE}❌ - Ops, ocorreu um erro ao instalar os módulos...\n"
exit 1
fi
echo "${WHITE}✅ - Psiu, os módulos foram instalados com sucesso!\n"
fi

while true
do
echo "${PURPLE}Conectando Gwen Bot, aguarde...\n"
node --no-warnings connect.js --code
sleep 1
echo "${WHITE}❌ - Ops, algo de errado não está certo...\n"
done