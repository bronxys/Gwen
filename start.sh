#!bin/bash
RED='\033[0;31m',
MANA='\033[1;35m'
while : 
do
printf "${MANA}Conectando GWEN-BOT aguarde...\n"
node connect.js --code
sleep 1
printf "${RED}︎Algo de errado não está certo...\n"
done
