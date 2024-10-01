const menuprincipal = (sender, isVip, SoDono, emojibot, prefix) => {
return `╭─────「 ${emojibot} 」─────╮
│👤 Usuário: @${sender.split('@')[0]}
│💎 Vip: ${isVip ? '✅' : '🚫'}
│👑 Dono: ${SoDono ? '✅' : '🚫'}
├─────「 ${emojibot} 」─────
│✨ - *Menu Principal*        
├─────「 ${emojibot} 」─────
│🔑 ${prefix}menudono        
│👮 ${prefix}menuadm         
│🌟 ${prefix}menuvip         
│⚔️ ${prefix}menurpg         
│💫 ${prefix}menuefeitos     
│🔧 ${prefix}menualteradores 
│🎨 ${prefix}menulogos       
│🎲 ${prefix}menubrincadeiras 
│🕹️ ${prefix}menujogos      
│💻 ${prefix}menudw   
│🔍 ${prefix}menups
│🖼️ ${prefix}menufigu       
│😈 ${prefix}menuadulto   
├─────「 ${emojibot} 」─────
│🛒 ${prefix}alugarbot
│📡 ${prefix}gtts
│🌃 ${prefix}avaliar
│🧩 ${prefix}sugerir
│🔗 ${prefix}wame
│🔗 ${prefix}download-link
│🔮 ${prefix}url
│🧙‍♀️ ${prefix}perfil
│🔣 ${prefix}tabela
│🧮 ${prefix}calcular
│📛 ${prefix}nick
│🛟 ${prefix}resgatargc
│🧬 ${prefix}listagc
│📖 ${prefix}conselhobiblico
│💌 ${prefix}correio
│👩‍❤️‍💋‍👨 ${prefix}metadinha
│❣️ ${prefix}cantada
│🗣️ ${prefix}simi
│🫥 ${prefix}emoji
│🎎 ${prefix}emojimix   
├─────「 ${emojibot} 」─────
│⚡ ${prefix}ping
│🤖 ${prefix}infobot
│🤴 ${prefix}infodono
│ℹ️ ${prefix}infogp
│🔎 ${prefix}infocmd
│⚠️ ${prefix}regras
│👮 ${prefix}listaadmins
│👮‍♂️ ${prefix}admins
│📆 ${prefix}dados
│🏴󠁧󠁢󠁥󠁮󠁧󠁿 ${prefix}idiomas
│☎️ ${prefix}checknmr
│☎️ ${prefix}level
├─────「 ${emojibot} 」─────
│🆘 ${prefix}suporte
╰─────「 ${emojibot} 」─────╯`
}

exports.menuprincipal = menuprincipal

const menuadm = (sender, emojibot, prefix) => {
return `╭─────「 ${emojibot} 」─────╮ 
│👤 Usuário: @${sender.split('@')[0]}
├─────「 ${emojibot} 」───── 
│✨ - *Menu Adm* 
├─────「 ${emojibot} 」───── 
│🎭 ${prefix}hidetag
│🏷️ ${prefix}totag
│📋 ${prefix}cita
│✍️ ${prefix}marcar
│🔖 ${prefix}marcar2
│📲 ${prefix}marcarwa
│📤 ${prefix}mandarprovasco
│🤝 ${prefix}recrutar
│🔕 ${prefix}mute
│🔊 ${prefix}desmute
│🔕 ${prefix}mute2
│🔊 ${prefix}desmute2
│📈 ${prefix}adv
│🗑️ ${prefix}rmadv
│📊 ${prefix}status
│🧹 ${prefix}limpar
│🧟‍♂️  ${prefix}limpar-mortos
│🕵🏻 ${prefix}revelarvisu
│🔗 ${prefix}linkgp
│🏷️ ${prefix}nomegp
│🔄 ${prefix}reverse-nomegp
│🖼️ ${prefix}fotogp
│🔄 ${prefix}reverse-fotogp
│📝 ${prefix}descgp
│🚫 ${prefix}listanegra 
│🗑️ ${prefix}tirardalista 
│📩 ${prefix}requestgp 
│👥 ${prefix}grupo
│🔝 ${prefix}promover
│🔻 ${prefix}rebaixar
│🔻 ${prefix}check
│🗄️ ${prefix}criartabela
│📋 ${prefix}tabelagp
│➡️ ${prefix}rg_aviso 
│➡️ ${prefix}rm_aviso 
│➡️ ${prefix}rm_avisos 
│📚 ${prefix}anotacoes 
│🖊️ ${prefix}anotar 
│📝 ${prefix}rmnota
│🎉 ${prefix}sorteio
├─────「 ${emojibot} 」─────
│🖼️ ${prefix}antiimg 
│🎥 ${prefix}antivideo 
│🎵 ${prefix}antiaudio 
│📎 ${prefix}antisticker 
│📍 ${prefix}antiloc 
│🔗 ${prefix}advlink 
│🚫 ${prefix}antilinkgp
│🔒 ${prefix}antilinkhard 
│🚫 ${prefix}antifake 
│📋 ${prefix}antinotas 
│📑 ${prefix}anticatalogo 
│🚫 ${prefix}antipalavrao  
│🚫 ${prefix}antivisuunica 
│🔡 ${prefix}limitecaracteres
│🗑️ ${prefix}odelete  
│👥 ${prefix}x9adm 
│👤 ${prefix}so_adm  
│📊 ${prefix}leveling 
│🔧 ${prefix}autofigu
│🔁 ${prefix}autorepo 
├─────「 ${emojibot} 」─────
│🔞 ${prefix}modoadulto
│🎭 ${prefix}modobrincadeira
│🎮 ${prefix}modogamer 
│⚔️ ${prefix}modorpg
├─────「 ${emojibot} 」─────
│🎉 ${prefix}simih1 
│🎊 ${prefix}simih2 
│🎈 ${prefix}bemvindo 
│🎈 ${prefix}bemvindo2 
│📜 ${prefix}legendabv 
│📜 ${prefix}legendabv2 
│📜 ${prefix}legendasaiu
│📜 ${prefix}legendasaiu2 
├─────「 ${emojibot} 」───── 
│🔄 ${prefix}multiprefixo
│🏷️ ${prefix}add_prefixo 
│✂️ ${prefix}tirar_prefixo 
├─────「 ${emojibot} 」───── 
│🖼️ ${prefix}legenda_imagem 
│🎥 ${prefix}legenda_vídeo 
│🌍 ${prefix}legenda_estrangeiro 
├─────「 ${emojibot} 」─────
│🎯 ${prefix}atividades
│☎️ ${prefix}ranklevel
│🏅 ${prefix}rankativos
│🏆 ${prefix}rankinativos
╰─────「 ${emojibot} 」─────╯`
}

exports.menuadm = menuadm

const menudono = (sender, emojibot, prefix) => {
return `╭─────「 ${emojibot} 」─────╮
│👤 Usuário: @${sender.split('@')[0]}
├─────「 ${emojibot} 」─────
│✨ - *Menu Dono*        
├─────「 ${emojibot} 」─────
│🔒 ${prefix}bangp        
│🔓 ${prefix}unbangp      
│🦸‍♂️ ${prefix}savegp    
│🦹‍♂️ ${prefix}unsavegp
│⛔ ${prefix}sairgp
│🗃️ ${prefix}listagp   
│🚈 ${prefix}entrar
│💤 ${prefix}ausente 
│✅ ${prefix}ativo
│❗ ${prefix}blockcmd       
│❕ ${prefix}unblockcmd
│‼️ ${prefix}listacmdblock
│🫸 ${prefix}blockcmdg
│💯 ${prefix}unblockcmdg
│☑️ ${prefix}listacmdblockg
│👎 ${prefix}blockuser
│👍 ${prefix}unblockuser
│🖐️ ${prefix}blocklist
│😡 ${prefix}listanegrag
│☺️ ${prefix}tirardalistag
│💠 ${prefix}servip
│🔹 ${prefix}addvip
│🔸 ${prefix}delvip
│💎 ${prefix}listavip
│🔷 ${prefix}addcmdvip
│🔶 ${prefix}delcmdvip
│💎 ${prefix}listacmdvip
│💳 ${prefix}gerargc
│⁉️ ${prefix}delgc
│ℹ️ ${prefix}infocmd_add
│❌ ${prefix}infocmd_del
│🌆 ${prefix}fundobv
│🗽 ${prefix}fundosaiu
│❔ ${prefix}addpalavra_forca
│❓ ${prefix}delpalavra_forca
│💵 ${prefix}addpix
│💸 ${prefix}delpix
│⭐ ${prefix}addxp
│⭐ ${prefix}rmxp
│⭐ ${prefix}addlevel
│⭐ ${prefix}rmlevel
│⚠️ ${prefix}blockcont
│⚠️ ${prefix}unblockcont
│🥳 ${prefix}addrent
│😓 ${prefix}rmrent
│‼️ ${prefix}delrent
│💳 ${prefix}cortesia
│🗃️ ${prefix}listrent
│🌟 ${prefix}lastrent
│🗝️ ${prefix}listkeys
│🔑 ${prefix}gerarkeygp
│🪪 ${prefix}gerarkeycort
│🗑️ ${prefix}delcodekey
│0⃣ ${prefix}zerarg
│🚯 ${prefix}tirarrg
│🧼 ${prefix}resetrpg
│👀 ${prefix}visualizarmsg
│🗣️ ${prefix}audio-menu
│🎛️ ${prefix}botoes
│✅ ${prefix}verificado
│🐦‍🔥 ${prefix}dono1
│🐦‍🔥 ${prefix}dono2
│🐦‍🔥 ${prefix}dono3
│🐦‍🔥 ${prefix}dono4
│🐦‍🔥 ${prefix}dono5
│🐦‍🔥 ${prefix}dono6
├─────「 ${emojibot} 」─────
│⏱️ ${prefix}limitarcmd   
│🔐 ${prefix}modoprivado
│🛒 ${prefix}modoaluguel
│🛍️ ${prefix}modoaluguelg
│📴 ${prefix}antiligar
│❎ ${prefix}antipv
│❎ ${prefix}antipv2
├─────「 ${emojibot} 」─────
│⚙️ ${prefix}fotomenu
│⚙️ ${prefix}setprefix
│⚙️ ${prefix}setemoji
│⚙️ ${prefix}setchat
│⚙️ ${prefix}setbio
│⚙️ ${prefix}setnomebot
│⚙️ ${prefix}setnickdono
│⚙️ ${prefix}setnmrdn
╰─────「 ${emojibot} 」─────╯`
}

exports.menudono = menudono

const menulogos = (sender, emojibot, prefix) => {
return `╭─────「 ${emojibot} 」─────╮ 
│👤 Usuário: @${sender.split('@')[0]} 
├─────「 ${emojibot} 」───── 
│✨ - *Menu Logos* 
├─────「 ${emojibot} 」───── 
│🎮 ${prefix}logogame 
│🛠️ ${prefix}cria 
│🎨 ${prefix}anime1 
│⚔️ ${prefix}ff1 
│👾 ${prefix}game 
│🎮 ${prefix}ff2 
│🌟 ${prefix}anime2 
│🌅 ${prefix}entardecer 
│🦄 ${prefix}indian 
│❄️ ${prefix}ffrose 
│🌿 ${prefix}ffgren 
│🐉 ${prefix}chufuyu 
│🐺 ${prefix}wolf 
│🐲 ${prefix}dragonred 
╰─────「 ${emojibot} 」─────╯`
}

exports.menulogos = menulogos

const menualteradores = (sender, emojibot, prefix) => {
return `╭─────「 ${emojibot} 」─────╮ 
│👤 Usuário: @${sender.split('@')[0]}
├─────「 ${emojibot} 」───── 
│✨ - *Menu Alteradores* 
├─────「 ${emojibot} 」───── 
│🎥 ${prefix}videolento 
│⚡ ${prefix}videorapido 
│🔄 ${prefix}videocontrario 
│🔊 ${prefix}audiolento 
│🚀 ${prefix}audiorapido 
│🐢 ${prefix}grave 
│🐢 ${prefix}grave2 
│🐿️ ${prefix}esquilo 
│💥 ${prefix}estourar 
│🎶 ${prefix}bass 
│🎵 ${prefix}bass2 
│👶 ${prefix}vozmenino
╰─────「 ${emojibot} 」─────╯`
}

exports.menualteradores = menualteradores

const menuvip = (sender, emojibot, prefix) => { 
return `╭─────「 ${emojibot} 」─────╮ 
│👤 Usuário: @${sender.split('@')[0]} 
├─────「 ${emojibot} 」───── 
│✨ - *Menu VIP* 
├─────「 ${emojibot} 」───── 
│🎉 ${prefix}destrava 
│🎊 ${prefix}destrava2 
│📞 ${prefix}ddd 
│🆔 ${prefix}gerarcpf 
│🚀 ${prefix}encurtarlink 
│🌟 ${prefix}encurtarlink2 
│🎈 ${prefix}encurtarlink3
│📱 ${prefix}celular 
│🌐 ${prefix}ip 
│📬 ${prefix}cep 
│🔍 ${prefix}stalkear 
│🪀 ${prefix}statuszap
│🤖 ${prefix}gpt 
│♊ ${prefix}gemini 
│🔤 ${prefix}totext 
│📄 ${prefix}summerize 
│✍️ ${prefix}redacao 
╰─────「 ${emojibot} 」─────╯`
}

exports.menuvip = menuvip

const menujogos = (sender, emojibot, prefix) => {
return `╭─────「 ${emojibot} 」─────╮ 
│👤 Usuário: @${sender.split('@')[0]}
├─────「 🎮 」───── 
│✨ - *Menu Jogos* 
├─────「 ${emojibot} 」───── 
│🕹️ ${prefix}jogodavelha
│🧩 ${prefix}anagrama 
│🎨 ${prefix}gartic 
│🐾 ${prefix}quizanimais 
│🕵️‍♂️ ${prefix}enigma 
│😄 ${prefix}emojis 
│🔪 ${prefix}jogodaforca
│✂️ ${prefix}ppt
│⛏️ ${prefix}mina
│💬 ${prefix}ppp
│⚔️ ${prefix}duelo
├─────「 🎮 」───── 
│🔍 ${prefix}revelaranagrama
│🔍 ${prefix}revelargartic
│🔍 ${prefix}revelaranimal
│🔍 ${prefix}revelarenigma
│📊 ${prefix}status_duelo
├─────「 ${emojibot} 」───── 
│🔄 ${prefix}resetarvelha
│🔄 ${prefix}resetarforca
│🔄 ${prefix}resetarmina
│🔄 ${prefix}resetarppp
│🔄 ${prefix}resetarduelo
╰─────「 ${emojibot} 」─────╯`
}

exports.menujogos = menujogos

const menubrincadeiras = (sender, emojibot, prefix) => {
return `╭─────「 ${emojibot} 」─────╮  
│👤 Usuário: @${sender.split("@")[0]}  
├─────「 ${emojibot} 」─────  
│✨ - *Menu Brincadeiras*  
├─────「 ${emojibot} 」─────  
│🎉 ${prefix}gay  
│🌈 ${prefix}lesbica  
│👫 ${prefix}hetero  
│😜 ${prefix}feio  
│😏 ${prefix}feia  
│😈 ${prefix}corno  
│👀 ${prefix}corna  
│🤪 ${prefix}vesgo  
│🙃 ${prefix}vesga  
│🍻 ${prefix}cachaceiro  
│🍸 ${prefix}cachaceira  
│😍 ${prefix}gostoso  
│😘 ${prefix}gostosa  
│🐂 ${prefix}gado  
│🐄 ${prefix}gada  
│⚔️ ${prefix}nazista  
│🎮 ${prefix}otaku  
│🤗 ${prefix}abracar  
│💋 ${prefix}beijo  
│🔪 ${prefix}matar
│👋 ${prefix}tapa  
│🥊 ${prefix}chute  
│💰 ${prefix}golpista  
│💔 ${prefix}infiel  
│❤️ ${prefix}amor  
│💞 ${prefix}shippo  
├─────「 ${emojibot} 」─────  
│🏆 ${prefix}rankgay  
│🥇 ${prefix}rankgado  
│🥈 ${prefix}rankcorno  
│🥉 ${prefix}rankgostoso  
│🏅 ${prefix}rankgostosa  
│🎖️ ${prefix}ranknazista  
│🏆 ${prefix}rankotaku  
├─────「 ${emojibot} 」─────  
│🔮 ${prefix}chance  
│⏳ ${prefix}quando  
│💕 ${prefix}casal  
│🔍 ${prefix}prever  
│🗨️ ${prefix}mencionar  
│🔮 ${prefix}cigana  
│😩 ${prefix}sofrendo  
│🤡 ${prefix}trouxa  
│🎬 ${prefix}jogosmortais  
│🌌 ${prefix}ceu  
│🔥 ${prefix}inferno  
╰─────「 ${emojibot} 」─────╯`
}

exports.menubrincadeiras = menubrincadeiras

const menuefeitos = (sender, emojibot, prefix) => {
return `╭─────「 ${emojibot} 」─────╮
│👤 Usuário: @${sender.split('@')[0]}
├─────「 ${emojibot} 」─────│
│✨ - *Menu Efeitos* 
├─────「 ${emojibot} 」─────│
│🌟 ${prefix}comunismo 
│🌼 ${prefix}bolsonaro 
│🎊 ${prefix}bnw 
│🎮 ${prefix}affect 
│🐾 ${prefix}del 
│🔫 ${prefix}circle 
│💻 ${prefix}beatifui 
│👾 ${prefix}dither 
│🎉 ${prefix}facepalm 
│🕊️ ${prefix}invert 
│💖 ${prefix}lgbt 
│🖌️ ${prefix}magik 
│📜 ${prefix}rotate 
│🎈 ${prefix}rip 
│❄️ ${prefix}jail 
│⚪ ${prefix}trash 
│✨ ${prefix}pixelate 
│🛠️ ${prefix}sepia 
│🎨 ${prefix}wanted 
│⚔️ ${prefix}wasted 
│👾 ${prefix}animeia 
│🎮 ${prefix}zombie 
│🔎 ${prefix}tohd
╰─────「 ${emojibot} 」─────╯`
}

exports.menuefeitos = menuefeitos

const menufigurinhas = (sender, emojibot, prefix) => {
return `╭─────「 ${emojibot} 」─────╮ 
│👤 Usuário: @${sender.split('@')[0]} 
├─────「 ${emojibot} 」───── 
│✨ - *Menu Figurinhas* 
├─────「 ${emojibot} 」───── 
│🖼️ ${prefix}ttp 
│🎨 ${prefix}attp 
│🌟 ${prefix}sticker 
│🎭 ${prefix}fsticker 
│🌈 ${prefix}s-fundo 
│📸 ${prefix}rgfigu 
│🖌️ ${prefix}figu 
│✏️ ${prefix}rm-rgfigu
│💬 ${prefix}qc 
│🔤 ${prefix}qc2 
│🗨️ ${prefix}fakechat 
│🔄 ${prefix}rename 
│🪄 ${prefix}roubar  
│🖼️ ${prefix}toimg
│🎥 ${prefix}togif 
│📦 ${prefix}figurinhas 
│🎉 ${prefix}figumemes 
│🐾 ${prefix}figuflork
│💖 ${prefix}figuemoji 
│🌸 ${prefix}figucoreana 
│🍼 ${prefix}figubebe
│🎌 ${prefix}figuanime 
│😂 ${prefix}figufunny
│🐶 ${prefix}figuanimais 
│🎨 ${prefix}figudesenho
│👾 ${prefix}figuraiva
│🎮 ${prefix}figuroblox
╰─────「 ${emojibot} 」─────╯`
}

exports.menufigurinhas = menufigurinhas

const menudownload = (sender, emojibot, prefix) => {
return `╭─────「 ${emojibot} 」─────╮  
│👤 Usuário: @${sender.split('@')[0]}  
├─────「 ${emojibot} 」─────  
│✨ - *Menu Downloads*  
├─────「 ${emojibot} 」─────  
│🎶 ${prefix}play  
│🎶 ${prefix}play2  
│🎶 ${prefix}play3  
│🎶 ${prefix}play4  
│🎶 ${prefix}play5  
│📺 ${prefix}playvid  
│📄 ${prefix}playdoc  
│🎤 ${prefix}playmix  
│🎧 ${prefix}ytmp3  
│🎬 ${prefix}ytmp4  
│🎶 ${prefix}instamp3  
│📹 ${prefix}instamp4  
│🎵 ${prefix}tiktokmp3  
│📹 ${prefix}tiktokmp4  
│🔗 ${prefix}mediafire  
│🌍 ${prefix}googledrive  
│🎤 ${prefix}audiomeme
╰─────「 ${emojibot} 」─────╯`
}

exports.menudownload = menudownload

const menupesquisa = (sender, emojibot, prefix) => {
return `╭─────「 ${emojibot} 」─────╮ 
│👤 Usuário: @${sender.split('@')[0]} 
├─────「 ${emojibot} 」───── 
│✨ - *Menu Pesquisas* 
├─────「 ${emojibot} 」───── 
│🌈 ${prefix}clima 
│🌟 ${prefix}signo 
│🎶 ${prefix}shazam 
│📱 ${prefix}playstore 
│📥 ${prefix}aptoide 
│📚 ${prefix}wikipedia 
│🔍 ${prefix}ytsearch
│🎵 ${prefix}ytplaylist 
│🎬 ${prefix}imdbinfo 
│🛒 ${prefix}amazon 
│🌐 ${prefix}googlesrc 
│📌 ${prefix}pinterest 
│🖼️ ${prefix}gimage 
│🔄 ${prefix}traduzir 
│💻 ${prefix}ssweb 
│💭 ${prefix}pensador 
│📚 ${prefix}book
│🎥 ${prefix}movie 
│📺 ${prefix}imdb 
│🍿 ${prefix}animetv 
│📺 ${prefix}serie 
│🎮 ${prefix}esportenews 
│📰 ${prefix}gamesnews 
╰─────「 ${emojibot} 」─────╯`
}

exports.menupesquisa = menupesquisa

const menuadulto = (sender, emojibot, prefix) => { 
return `╭─────「 ${emojibot} 」─────╮
│👤 Usuário: @${sender.split('@')[0]}
├─────「 ${emojibot} 」─────
│✨  - *Menu Adulto*        
├─────「 ${emojibot} 」─────
│😈 ${prefix}only1         
│😈 ${prefix}only2       
│😈 ${prefix}only3     
│😈 ${prefix}only4 
│🔞 ${prefix}only5 
│🔞 ${prefix}only6     
│🔞 ${prefix}only7 
│🔞 ${prefix}only8  
│🔞 ${prefix}only9  
│🔞 ${prefix}only10        
│🔞 ${prefix}only11 
│🔞 ${prefix}only12       
├─────「 ${emojibot} 」─────
│🔥 ${prefix}comprarpack     
├─────「 ${emojibot} 」─────
│❎ ${prefix}site-xvideos
│❎ ${prefix}site-xvideos2
│✖️ ${prefix}site-hentai
│✖️ ${prefix}site-hentai2   
├─────「 ${emojibot} 」─────    
│🪵 ${prefix}pau
│🪵 ${prefix}pauzudo
│🕳️ ${prefix}xrc
│🕳️ ${prefix}xerecuda
│🍼 ${prefix}punheteiro
│🍯 ${prefix}siririqueira
│👯‍♀️ ${prefix}puta
│🫦 ${prefix}websexo
│📞 ${prefix}gf   
├─────「 ${emojibot} 」─────
│🥛 ${prefix}rankpunheteiro
│🤼‍♀ ${prefix}rankputa
│🪓 ${prefix}rankpau
│🙀 ${prefix}rankxrc
│👥 ${prefix}surubao
╰─────「 ${emojibot} 」─────╯`
}

exports.menuadulto = menuadulto

const menurpg = (sender, emojibot, prefix) => {
return `╭─────「 ${emojibot} 」─────╮  
│👤 Usuário: @${sender.split("@")[0]}
├─────「 ${emojibot} 」─────  
│✨ - *Menu RPG*  
├─────「 ${emojibot} 」─────  
│🔑 ${prefix}registrar  
│🕵️‍♂️ ${prefix}meurg  
│🚀 ${prefix}delrg  
│⚔️ ${prefix}rankrpg  
│💸 ${prefix}s-coins  
│🛍️ ${prefix}loja  
├─────「 ${emojibot} 」─────  
│📲 ${prefix}carteira  
│🔗 ${prefix}pix  
│💖 ${prefix}chavepix  
│🧳 ${prefix}meupix  
│🌊 ${prefix}pescaria  
│🍖 ${prefix}churrascaria  
│🧙‍♂️ ${prefix}traficar  
│💞 ${prefix}prostituir  
│💬 ${prefix}puteiro  
│🎲 ${prefix}aviator  
│🎮 ${prefix}tigrinho  
│🎰 ${prefix}cassino  
│📝 ${prefix}treinar  
│🛡️ ${prefix}assaltar  
│💳 ${prefix}pagar-fiança  
│🔄 ${prefix}retirar  
│🔒 ${prefix}prender   
│✨ ${prefix}soltar
│📦 ${prefix}comprarestabulo  
│🛠️ ${prefix}estabulo  
│🌟 ${prefix}avaliarestabulo  
│📈 ${prefix}venderestabulo  
│🚴‍♀️ ${prefix}comprarcavalo  
│💰 ${prefix}vendercavalo7  
│🐎 ${prefix}meucavalo  
│📦 ${prefix}setcavalo  
│⬆️ ${prefix}upcavalo  
│📜 ${prefix}cdcv3  
│🩹 ${prefix}atadura  
│🐴 ${prefix}corridadecavalos  
│🐔 ${prefix}comprargalinheiro  
│🐓 ${prefix}comprargalo  
│🐥 ${prefix}cendergalo  
│🐣 ${prefix}comprargalinha  
│🐔 ${prefix}vendergalinha  
│🧬 ${prefix}cruzargg  
│🥚 ${prefix}chocarovo  
│🏡 ${prefix}galinheiro  
│⬆️ ${prefix}upgalo  
│🐓 ${prefix}brigadegalos  
├─────「 ${emojibot} 」─────  
│❤️ ${prefix}namorar  
│🚫 ${prefix}cancelarpedido  
│👫 ${prefix}dupla  
│❌ ${prefix}terminar  
│💍 ${prefix}casar  
│🚫 ${prefix}cancelarcasorio  
│💑 ${prefix}esposo  
│💑 ${prefix}esposa  
│💔 ${prefix}divorciar  
│💔 ${prefix}divorcio  
├─────「 ${emojibot} 」─────  
│📸 ${prefix}criarinsta  
│👁️ ${prefix}meuinsta  
│🔍 ${prefix}verinsta  
│✏️ ${prefix}edit  
│🖼️ ${prefix}edit-foto  
│📝 ${prefix}criarnota  
│👥 ${prefix}seguir  
│🚫 ${prefix}deixardeseguir  
│👥 ${prefix}seguidores  
│👤 ${prefix}users  
│📤 ${prefix}postar  
│📤 ${prefix}post  
│📜 ${prefix}verposts  
│🗑️ ${prefix}delpost  
│💖 ${prefix}curtir  
│🚫 ${prefix}rmcurtida  
│💬 ${prefix}comentar  
│🚫 ${prefix}rmcomentario  
│🧳 ${prefix}kitardoinsta  
│🗑️ ${prefix}rminsta  
├─────「 ${emojibot} 」─────  
│🔑 ${prefix}abrironlyfans  
│📸 ${prefix}meuonly  
│🎞️ ${prefix}onlyfans  
│✍️ ${prefix}edit-only  
│📤 ${prefix}postarpack  
│📦 ${prefix}packs  
│📦 ${prefix}c-pack  
│🗑️ ${prefix}delpack  
│🗑️ ${prefix}delonly  
│🚫 ${prefix}rmonly  
├─────「 ${emojibot} 」─────  
│🔄 ${prefix}rgtinder  
│👤 ${prefix}meutinder  
│💌 ${prefix}tinder  
│🖼️ ${prefix}tinderfoto  
│🔤 ${prefix}tindernome  
│📅 ${prefix}tinderidade  
│📝 ${prefix}tinderbio  
│🔞 ${prefix}tindersex  
│🔍 ${prefix}tinderfiltro  
│⚙️ ${prefix}tindergene  
╰─────「 ${emojibot} 」─────╯`
}

exports.menurpg = menurpg