function _0x3903(){const _0x27f6b9=['2652561yqHiNm','56yGhOum','existsSync','test','435izhIuJ','3997819ZAXYNO','788490WDTdhr','1798794NWTmeI','packname','fs-extra','sendMessage','split','81066YkmTOd','alloc','3181476uUuOEU','32MelgZW','author','from','isBuffer','66117OFUWIG'];_0x3903=function(){return _0x27f6b9;};return _0x3903();}const _0x121cfa=_0x5e6a;(function(_0x3b6cd8,_0x4bbf32){const _0x5a0908=_0x5e6a,_0x24c18c=_0x3b6cd8();while(!![]){try{const _0x564391=parseInt(_0x5a0908(0x1e0))/0x1+parseInt(_0x5a0908(0x1ee))/0x2*(parseInt(_0x5a0908(0x1ec))/0x3)+-parseInt(_0x5a0908(0x1e7))/0x4+-parseInt(_0x5a0908(0x1f1))/0x5*(parseInt(_0x5a0908(0x1e5))/0x6)+-parseInt(_0x5a0908(0x1de))/0x7+-parseInt(_0x5a0908(0x1e8))/0x8*(-parseInt(_0x5a0908(0x1ed))/0x9)+-parseInt(_0x5a0908(0x1df))/0xa;if(_0x564391===_0x4bbf32)break;else _0x24c18c['push'](_0x24c18c['shift']());}catch(_0x223699){_0x24c18c['push'](_0x24c18c['shift']());}}}(_0x3903,0xedcba));function _0x5e6a(_0x47c78a,_0x520a12){const _0x390318=_0x3903();return _0x5e6a=function(_0x5e6a49,_0x338d01){_0x5e6a49=_0x5e6a49-0x1de;let _0x5ac294=_0x390318[_0x5e6a49];return _0x5ac294;},_0x5e6a(_0x47c78a,_0x520a12);}const fs=require(_0x121cfa(0x1e2)),{imageToWebp2,videoToWebp2,writeExifImg2,writeExifVid2}=require('./exif2'),{getBuffer}=require('../funcoes/functions.js'),sendImageAsSticker2=async(_0x426e0c,_0x370648,_0x115fa4,_0x1cede4,_0xce9977={})=>{const _0x2354bd=_0x121cfa;let _0x7ae801=Buffer[_0x2354bd(0x1eb)](_0x115fa4)?_0x115fa4:/^data:.*?\/.*?;base64,/i[_0x2354bd(0x1f0)](_0x115fa4)?Buffer[_0x2354bd(0x1ea)](_0x115fa4['split']`,`[0x1],'base64'):/^https?:\/\//['test'](_0x115fa4)?await await getBuffer(_0x115fa4):fs[_0x2354bd(0x1ef)](_0x115fa4)?fs['readFileSync'](_0x115fa4):Buffer[_0x2354bd(0x1e6)](0x0),_0x594fdd;return _0xce9977&&(_0xce9977[_0x2354bd(0x1e1)]||_0xce9977[_0x2354bd(0x1e9)])?_0x594fdd=await writeExifImg2(_0x7ae801,_0xce9977):_0x594fdd=await imageToWebp2(_0x7ae801),await _0x426e0c[_0x2354bd(0x1e3)](_0x370648,{'sticker':{'url':_0x594fdd},..._0xce9977},{'quoted':_0x1cede4}),_0x594fdd;},sendVideoAsSticker2=async(_0x58ec50,_0x32266e,_0x334d75,_0x1db4cf,_0x4ff4ee={})=>{const _0x5489d0=_0x121cfa;let _0x1c3138=Buffer[_0x5489d0(0x1eb)](_0x334d75)?_0x334d75:/^data:.*?\/.*?;base64,/i[_0x5489d0(0x1f0)](_0x334d75)?Buffer[_0x5489d0(0x1ea)](_0x334d75[_0x5489d0(0x1e4)]`,`[0x1],'base64'):/^https?:\/\//[_0x5489d0(0x1f0)](_0x334d75)?await await getBuffer(_0x334d75):fs[_0x5489d0(0x1ef)](_0x334d75)?fs['readFileSync'](_0x334d75):Buffer[_0x5489d0(0x1e6)](0x0),_0x5c4fdf;return _0x4ff4ee&&(_0x4ff4ee['packname']||_0x4ff4ee[_0x5489d0(0x1e9)])?_0x5c4fdf=await writeExifVid2(_0x1c3138,_0x4ff4ee):_0x5c4fdf=await videoToWebp2(_0x1c3138),await _0x58ec50[_0x5489d0(0x1e3)](_0x32266e,{'sticker':{'url':_0x5c4fdf},..._0x4ff4ee},{'quoted':_0x1db4cf}),_0x5c4fdf;};module['exports']={'sendVideoAsSticker2':sendVideoAsSticker2,'sendImageAsSticker2':sendImageAsSticker2};