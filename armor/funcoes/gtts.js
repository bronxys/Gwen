var _0x293667=_0x1868;function _0x2686(){var _0x1fc357=['Armenian','12uvHQIK','7580067SQCFgW','parse','Japanese','303560GhlPZK','Italian','?text=your+text','filter','Arabic','Turkish','fake-useragent','Dutch','createServer','finish','Vietnamese','Slovak','Tamil','?ie=UTF-8&tl=','Chinese\x20(Mandarin/Taiwan)','&idx=','Romanian','text','eachSeries','1705765BrfDUL','escape-string-regexp','join','535010AhdxeE','English\x20(Australia)','exports','Spanish\x20(Spain)','indexOf','http://translate.google.com/translate_tts','225qgWXfC','Chinese','host','Albanian','1929546EDxfLh','Serbian','request','Danish','length','Afrikaans','Error,\x20GTTS','substr','Thai','log','Latvian','async','&q=','Chinese\x20(Cantonese)','&client=tw-ob&textlen=','Polish','Finnish','Croatian','Text-to-Speech\x20Server\x20running\x20on\x20','Catalan','toLowerCase','application/json','Missing\x20text.\x20Please\x20try:\x20','Chinese\x20(Mandarin/China)','2aJLSlx','writeHead','German','Hindi','Norwegian','GET','url','Spanish\x20(United\x20States)','2751vtBdEV','No\x20text\x20to\x20speak','¡!()[]¶;|°•—«»≤≥«»‹›\x0a\x20','2986984heJZEU','map','Hungarian','Swedish','Esperanto','http','Macedonian','Portuguese\x20(Brazil)','English','Swahili','Icelandic','headers','Spanish','linguagem\x20no\x20cmd\x20gtts\x20incorreta:\x20','6QYQNHj','split','Czech','Haitian\x20Creole','lang','query','createWriteStream','pipe','13672uBkiCu','Indonesian'];_0x2686=function(){return _0x1fc357;};return _0x2686();}(function(_0x294045,_0x2fe882){var _0xc8067e=_0x1868,_0x4ce0a6=_0x294045();while(!![]){try{var _0x3e9911=parseInt(_0xc8067e(0x1c9))/0x1*(-parseInt(_0xc8067e(0x1eb))/0x2)+parseInt(_0xc8067e(0x1d3))/0x3+-parseInt(_0xc8067e(0x1f6))/0x4+-parseInt(_0xc8067e(0x1c6))/0x5*(-parseInt(_0xc8067e(0x204))/0x6)+-parseInt(_0xc8067e(0x1f3))/0x7*(parseInt(_0xc8067e(0x20c))/0x8)+parseInt(_0xc8067e(0x1cf))/0x9*(parseInt(_0xc8067e(0x213))/0xa)+-parseInt(_0xc8067e(0x210))/0xb*(-parseInt(_0xc8067e(0x20f))/0xc);if(_0x3e9911===_0x2fe882)break;else _0x4ce0a6['push'](_0x4ce0a6['shift']());}catch(_0x554444){_0x4ce0a6['push'](_0x4ce0a6['shift']());}}}(_0x2686,0x74edb));const request=require(_0x293667(0x1d5)),escapeStringRegexp=require(_0x293667(0x1c7)),async=require(_0x293667(0x1de)),fs=require('fs'),MultiStream=require('multistream'),fakeUa=require(_0x293667(0x219)),GOOGLE_TTS_URL=_0x293667(0x1ce),MAX_CHARS=0x64,LANGUAGES={'af':_0x293667(0x1d8),'sq':_0x293667(0x1d2),'ar':_0x293667(0x217),'hy':_0x293667(0x20e),'ca':_0x293667(0x1e6),'zh':_0x293667(0x1d0),'zh-cn':_0x293667(0x1ea),'zh-tw':_0x293667(0x1c1),'zh-yue':_0x293667(0x1e0),'hr':_0x293667(0x1e4),'cs':_0x293667(0x206),'da':_0x293667(0x1d6),'nl':_0x293667(0x21a),'en':_0x293667(0x1fe),'en-au':_0x293667(0x1ca),'en-uk':'English\x20(United\x20Kingdom)','en-us':'English\x20(United\x20States)','eo':_0x293667(0x1fa),'fi':_0x293667(0x1e3),'fr':'French','de':_0x293667(0x1ed),'el':'Greek','ht':_0x293667(0x207),'hi':_0x293667(0x1ee),'hu':_0x293667(0x1f8),'is':_0x293667(0x200),'id':_0x293667(0x20d),'it':_0x293667(0x214),'ja':_0x293667(0x212),'ko':'Korean','la':'Latin','lv':_0x293667(0x1dd),'mk':_0x293667(0x1fc),'no':_0x293667(0x1ef),'pl':_0x293667(0x1e2),'pt':'Portuguese','pt-br':_0x293667(0x1fd),'ro':_0x293667(0x1c3),'ru':'Russian','sr':_0x293667(0x1d4),'sk':_0x293667(0x21e),'es':_0x293667(0x202),'es-es':_0x293667(0x1cc),'es-us':_0x293667(0x1f2),'sw':_0x293667(0x1ff),'sv':_0x293667(0x1f9),'ta':_0x293667(0x1bf),'th':_0x293667(0x1db),'tr':_0x293667(0x218),'vi':_0x293667(0x21d),'cy':'Welsh'};function Text2Speech(_0x3dfe64,_0x28e6c3){var _0x985d08=_0x293667;try{var _0x2a2a96=_0x3dfe64||'en',_0x34746f=_0x28e6c3||![];_0x2a2a96=_0x2a2a96[_0x985d08(0x1e7)]();if(!LANGUAGES[_0x2a2a96])console[_0x985d08(0x1dc)](_0x985d08(0x203)+_0x2a2a96);var _0x30eaaa=getArgsFactory(_0x2a2a96);return{'tokenize':tokenize,'createServer':_0x2554c4=>createServer(_0x30eaaa,_0x2554c4),'stream':_0x25af5b=>stream(_0x30eaaa,_0x25af5b),'save':(_0x4fd5e6,_0x256d3c,_0x483038)=>save(_0x30eaaa,_0x4fd5e6,_0x256d3c,_0x483038)};}catch(_0x24de0e){console[_0x985d08(0x1dc)](_0x985d08(0x1d9));}}function save(_0x3c4737,_0x133c7f,_0x2acfa6,_0x30433f){var _0x59106d=_0x293667,_0x14b3c6=tokenize(_0x2acfa6),_0x6de7d5=_0x14b3c6[_0x59106d(0x1d7)];async[_0x59106d(0x1c5)](_0x14b3c6,function(_0x2dd4ee,_0x583b9c){var _0x5691c5=_0x59106d,_0x49d0d1=_0x14b3c6[_0x5691c5(0x1cd)](_0x2dd4ee),_0x19b747=getHeader(),_0x2f791c=_0x3c4737(_0x2dd4ee,_0x49d0d1,_0x6de7d5),_0x19ace5=GOOGLE_TTS_URL+_0x2f791c,_0x33590f=fs[_0x5691c5(0x20a)](_0x133c7f,{'flags':_0x49d0d1>0x0?'a':'w'});request({'uri':_0x19ace5,'headers':_0x19b747,'method':_0x5691c5(0x1f0)})[_0x5691c5(0x20b)](_0x33590f),_0x33590f['on'](_0x5691c5(0x21c),_0x583b9c),_0x33590f['on']('error',_0x583b9c);},_0x30433f);}function stream(_0x526e11,_0x52a6c8){var _0x1f9391=_0x293667,_0x53b883=tokenize(_0x52a6c8),_0x3f2d86=_0x53b883[_0x1f9391(0x1d7)];return MultiStream(_0x53b883[_0x1f9391(0x1f7)](function(_0x5ac777,_0x409fb2){var _0x4f1053=getHeader(),_0x49d4d8=_0x526e11(_0x5ac777,_0x409fb2,_0x3f2d86),_0x8b37dd=GOOGLE_TTS_URL+_0x49d4d8;return request({'uri':_0x8b37dd,'headers':_0x4f1053,'method':'GET'});}));}function getHeader(){var _0x209690={'User-Agent':fakeUa()};return _0x209690;}function _0x1868(_0x48b542,_0x474b9c){var _0x26867e=_0x2686();return _0x1868=function(_0x186807,_0x263a9e){_0x186807=_0x186807-0x1bf;var _0x2c69a8=_0x26867e[_0x186807];return _0x2c69a8;},_0x1868(_0x48b542,_0x474b9c);}function getArgsFactory(_0x816cf4){return function(_0x2a61ad,_0xfdb598,_0x21ef02){var _0x207d52=_0x1868,_0x4532b5=_0x2a61ad[_0x207d52(0x1d7)],_0xf839b8=encodeURIComponent(_0x2a61ad),_0x1d750c=_0x816cf4||'en';return _0x207d52(0x1c0)+_0x1d750c+_0x207d52(0x1df)+_0xf839b8+'&total='+_0x21ef02+_0x207d52(0x1c2)+_0xfdb598+_0x207d52(0x1e1)+_0x4532b5;};}function tokenize(_0x1a98fc){var _0x15f344=_0x293667,_0x280a81=[];if(!_0x1a98fc)throw new Error(_0x15f344(0x1f4));var _0xb59028=_0x15f344(0x1f5),_0x519062=_0xb59028[_0x15f344(0x205)]('')[_0x15f344(0x1f7)](function(_0x25179c){return escapeStringRegexp(_0x25179c);}),_0x132069=_0x519062[_0x15f344(0x1c8)]('|'),_0x400546=_0x1a98fc[_0x15f344(0x205)](new RegExp(_0x132069));_0x400546=_0x400546[_0x15f344(0x216)](_0x99b30=>_0x99b30[_0x15f344(0x1d7)]>0x0);var _0xa186a=[],_0x37d480=0x0;for(let _0x181140 of _0x400546){!_0xa186a[_0x37d480]&&(_0xa186a[_0x37d480]=''),_0xa186a[_0x37d480][_0x15f344(0x1d7)]+_0x181140[_0x15f344(0x1d7)]<MAX_CHARS?_0xa186a[_0x37d480]+='\x20'+_0x181140:(_0x37d480++,_0xa186a[_0x37d480]=_0x181140);}return _0xa186a[0x0]=_0xa186a[0x0][_0x15f344(0x1da)](0x1),_0xa186a;}function createServer(_0x5dc96e,_0x3c8ce0){var _0x12adb6=_0x293667,_0x6f261d=require(_0x12adb6(0x1fb)),_0x344b9e=require(_0x12adb6(0x1f1)),_0x669d1d=_0x6f261d[_0x12adb6(0x21b)](function(_0x58d643,_0x6eeb9f){var _0x2d489b=_0x12adb6,_0x5be1e9=_0x344b9e[_0x2d489b(0x211)](_0x58d643[_0x2d489b(0x1f1)],!![])[_0x2d489b(0x209)],_0x209a2b=_0x5dc96e;_0x5be1e9&&_0x5be1e9[_0x2d489b(0x208)]&&LANGUAGES[_0x5be1e9[_0x2d489b(0x208)]]&&(_0x209a2b=getArgsFactory(_0x5be1e9[_0x2d489b(0x208)])),_0x5be1e9&&_0x5be1e9[_0x2d489b(0x1c4)]?(_0x6eeb9f[_0x2d489b(0x1ec)](0xc8,{'Content-Type':'audio/mpeg'}),stream(_0x209a2b,_0x5be1e9[_0x2d489b(0x1c4)])[_0x2d489b(0x20b)](_0x6eeb9f)):(console[_0x2d489b(0x1dc)](_0x58d643[_0x2d489b(0x201)]),_0x6eeb9f['writeHead'](0xc8,{'Content-Type':_0x2d489b(0x1e8)}),_0x6eeb9f['end'](JSON['stringify']({'code':-0x1,'message':_0x2d489b(0x1e9)+_0x58d643['headers'][_0x2d489b(0x1d1)]+_0x2d489b(0x215)})));});_0x669d1d['listen'](_0x3c8ce0),console[_0x12adb6(0x1dc)](_0x12adb6(0x1e5)+_0x3c8ce0);}module[_0x293667(0x1cb)]=Text2Speech;