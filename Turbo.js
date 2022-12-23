//[© 2022 Turbo Bot Inc.]\\

//~you can re-upload but tag my channel
//or put my channel link in the description.
//~you can recode or copy the codes but give
//credit.
//~Thank you to LORD BUDDHA, ME AND MY 
//FRIENDS.

//Codded by @TURBOHYPER
//Whatsapp: wa.me/+916380260672 
//Instagram: toxic_turbo777
//Thanks:Turbo
//*İdea by @TURBOHYPER
//copy with credits

//[modules]\\
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
let fetch = require('node-fetch')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
//const acrcloud = require('acrcloud')
const path = require('path')
const Config = require('./turboco');
const os = require('os')
const hx = require("hxz-api")
const hxz = require('./lib/hxz-api')
const simpleGit = require('simple-git');
const git = simpleGit();
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const Heroku = require('heroku-client');
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const { mediafireDl } = require('./lib/mediafire.js')
const speedofbot = require("performance-now")

//message type
let turboco = fs.readFileSync('./TurboMedia/slayer.jpg') 

//turbo api keys
const setting = JSON.parse(fs.readFileSync('./apikey.json'))

const fvid = {
	 key: { 
          fromMe: false,
	      participant: "0@s.whatsapp.net", 
	     remoteJid: "916380260672@g.us" 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
                 "h": `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
                 'duration': '99999', 
                 'caption': `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
                 'jpegThumbnail': global.thumb
                        }
                       }
	                  }
	                  
const forder = {
	key : {
                          participant : "0@s.whatsapp.net",
                          remoteJid: "status@broadcast"
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            itemCoun : 404,
                            surface : 404,
                            message: `© ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
                            orderTitle: 'B',
                            thumbnail: global.thumb, 
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }
                      
const fstatus = {
	 key: { 
	      participant : "0@s.whatsapp.net",
          remoteJid: "status@broadcast"
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
                 "title": `Bot Made By Turbo`,
                 'jpegThumbnail': global.thumb
                        }
	                  } 
                     }
                     
const fakegroup = {
                     key: {
		                participant: "0@s.whatsapp.net",
		                  remoteJid: "0@s.whatsapp.net"
	               },
	              message: {
		               "groupInviteMessage": {
			               "groupJid": "994403219940-1631515755@g.us",
			               "inviteCode": "https://chat.whatsapp.com/LWjJ4tu2qe9BWQZ1JzRZgp",
			               "groupName": "𝗦𝗟𝚫𝗬𝚵𝗥 ₪ 𝗕𝚯𝗧", 
                           "caption": `𝗧𝚯𝗫𝗜𝗖 𝗧𝗨𝗥𝗕𝚯`, 
                           'jpegThumbnail': fs.readFileSync(`./TurboMedia/slayer.jpg`)
		                }
	               }
             } 

      const fakeimage = {
                    key: {
                        participant : "0@s.whatsapp.net",
                          remoteJid: "status@broadcast"
                    },
                    message: {
                        "imageMessage": {
          "url": "https://mmg.whatsapp.net/d/f/ApzXtaNsWZn4Fp79SCc92XyH6MKqNTrEiijpGUlrpyDt.enc",
          "mimetype": "image/jpeg",
          "fileSha256": "aye0kjabdUJNkjpTalMZ+aUH6x2enoqOQoztxEeQchw=",
          "fileLength": "47286",
          "height": 488,
          "width": 999,
          "mediaKey": "yzSXMHxM3KLZnJlkB+RceJZoAFokybsmsUx94MBCL8I=",
          "fileEncSha256": "bl7T5LLXhcUjvGjcL99ypQogWcvkFntNd5X47NVlLq8=",
          "directPath": "/v/t62.7118-24/19977568_1059189351353756_81029636651423545_n.enc?ccb=11-4&oh=01_AVwd1MKWlqU3nq4RcYJONg8C9TG7RGWozT7N8g4sfb1Vqw&oe=62CD5CE7",
          "mediaKeyTimestamp": "1655232099",
          "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAB8AQAMBIgACEQEDEQH/xAAuAAADAQEBAAAAAAAAAAAAAAACAwQABQEBAAMBAAAAAAAAAAAAAAAAAAABAwT/2gAMAwEAAhADEAAAAIsbNuNLfSnUFdCEA1AUnwyHR1usnydfPcsSx3jP/8QAKBABAAICAAQGAQUAAAAAAAAAAQACAxEEFCFRBRASEyIjFTEyM0Nh/9oACAEBAAE/AOXZy7OXe0xcNu+kJm4YLhWnRnLvacu9p7DK+Igm6CR8Tqvxwk5/f9YT03v9tXUc+QxVb4zp+rLcfdspQn5KnT6ZbxKvq/iAm4LN5EfizFca0o5ELfu/ycS46Y2pntZ7ag37MWw9Yu/IUdkOMzlGhY0zDxHtmkmTiS4dHc5jLrW5a1ru7O3y/8QAHREAAQQDAQEAAAAAAAAAAAAAAQACERIDECFRUv/aAAgBAgEBPwC7fFleYELE8wbK7fnR6hzX/8QAGxEAAgIDAQAAAAAAAAAAAAAAAAECAxESEyP/2gAIAQMBAT8AVN7KqppvoWVTk/M4XmWbM2Zln//Z",
          "scansSidecar": "NWPzV40ZtSQvDHMJhAHp/qno78kM/ClrvbvqQbgmeYFOvc4Q3ofsFg=="
                        }
                    }
                } 
                
      
const fakesticker = {
                    key: {
                        participant : "0@s.whatsapp.net",
                          remoteJid: "status@broadcast"
                    },
                    message: {
                        "stickerMessage": {
          "url": "https://mmg.whatsapp.net/d/f/AjqDfZAEVMpI9Njr0ixGN57sOFEC3afkIj0QfDh0j9ZT.enc",
      "fileSha256": "yRo++JN9JMrvYMbBEumABtiOrSuApk6s98zY8NtlkFw=",
      "fileEncSha256": "hixYVeaI35HsVwFxQ9wnAj8z+NAZfoqNh9z3J6u4XFY=",
      "mediaKey": "0kGQEWhkXEUGawUbfH/syYujP9D3vNz8pvNlXv1nRJo=",
      "mimetype": "image/webp",
      "height": 64,
      "width": 64,
      "directPath": "/v/t62.7118-24/35743771_923834289010034_8199316146326341415_n.enc?ccb=11-4&oh=01_AVxAuvkz_z3yduY4HvlStGRHTI4uHHycYqqb64vY1gDSqg&oe=63309146",
      "fileLength": "19326",
      "mediaKeyTimestamp": "1661738481",
      "isAnimated": false
                        }
                    }
               }

const fakegif = {
                    key: {
                        participant : "0@s.whatsapp.net",
                          remoteJid: "status@broadcast"
                    },
                    message: {
                        "videoMessage": {
          "url": "https://mmg.whatsapp.net/d/f/Ag9HvMl8RZade3xUiQuj7CRtnuJKO0LY61qG9F8a-wRd.enc",
          "mimetype": "video/mp4",
          "fileSha256": "mepITwTA+fF2WDw3LvrOGsJHRbpyNyziOr4igKboNUE=",
          "fileLength": "128301",
          "seconds": 4,
          "mediaKey": "5sf7XxQ1zlXdoV9q2iHQbrSV5RXiLItLomVoxIv5LNc=",
          "gifPlayback": true,
          "height": 480,
          "width": 854,
          "fileEncSha256": "ArMeE/FNtaGmOuMWlfHRm68EIBb1bxN9tfWK7fc7tT8=",
          "directPath": "/v/t62.9505-24/13969368_1240985299770129_7222221816691172032_n.enc?ccb=11-4&oh=01_AVwKStTfAAWEV1R7_8CPUCaZPo6sEncb3jKl6u8OV2XTGQ&oe=62CF1C28",
          "mediaKeyTimestamp": "1655291483",
          "jpegThumbnail": "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",
          "gifAttribution": "NONE"
                        }
                    }
                }

const fakevn = {
                    key: {
                        participant : "0@s.whatsapp.net",
                          remoteJid: "status@broadcast"
                    },
                    message: {
                        "audioMessage": {
      "url": "https://mmg.whatsapp.net/d/f/AvXynmvbVJsxS5d4PBUepVKoet0KdW1xAii1MMfCoJrL.enc",
      "mimetype": "audio/mp4",
      "fileSha256": "PFGyneGh5RHTDCdPhadN3/u5lXZ7pggBB9dsmzQewfs=",
      "fileLength": "1309483",
      "seconds": 21,
      "ptt": true,
      "mediaKey": "Unkgeqf/9AwTJXo5Wf3u7HkocpHyTpeByN8oFx/ElJ8=",
      "fileEncSha256": "/D7h03iX8TBBAB1Iy5620G7nexKk8o8T//G2mokiMYw=",
      "directPath": "/v/t62.7114-24/30687773_195750809554516_4474472945531059814_n.enc?ccb=11-4&oh=01_AVzGeiGCrPpcmgrpcD1e_mcRYHZTQIH8ZUpgsp-1T8LSwg&oe=6333FA2D",
      "mediaKeyTimestamp": "1661960218"
                        }
                    }
                }
                

const faketurbo = {
                    key: {
                        participant : "0@s.whatsapp.net",
                          remoteJid: "status@broadcast"
                    },
                    message: {
                        "contactMessage": {
          "displayName": "⛾ 𝗧𝗼𝘅𝗶𝗰 𝗧𝘂𝗿𝗯𝗼",
          "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:𝗧𝘂𝗿𝗯𝗼;⛾;𝗧𝗼𝘅𝗶𝗰;;\nFN:⛾ 𝗧𝗼𝘅𝗶𝗰 𝗧𝘂𝗿𝗯𝗼\nitem1.TEL;waid=916380260672:+91 6380 260 672\nitem1.X-ABLabel:Phone\nPHOTO;BASE64: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\nEND:VCARD"
                        }
                    }
                }

const fcatalogue = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 10000,
                            status: 1,
                            surface : 1,
                            message: `▢ ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩ ▢`,
                            orderTitle: ``,
                            thumbnail: ('./TurboMedia/slayer.jpg'),
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      } 
                      
                      const fakecatalogue2 = {
                    key: {
                        participant : "0@s.whatsapp.net",
                          remoteJid: "status@broadcast"
                    },
                    message: {
    "productMessage": {
      "product": {
        "productImage": {
          "url": "https://mmg.whatsapp.net/d/f/AsudvG_JczCoAi9BZisJ74ZW3PbvmBLAnjKkxFTm4EjC.enc",
          "mimetype": "image/jpeg",
          "fileSha256": "9kTOkBt7L+O1FLbJLpLz+LqQzgtZ8mDcOHsfUeJqxIY=",
          "fileLength": "166742",
          "height": 1280,
          "width": 1280,
          "mediaKey": "NZ9kiX/3U8uj9noTPotsjXhJ5YiBqIptCZQ2+0I3dUs=",
          "fileEncSha256": "4XNRr4HbKjS5TRxj9OWJ5DaPWWCSoK5flsda+1DiZ8E=",
          "directPath": "/v/t62.7118-24/35258651_715239156612479_9128289573273735838_n.enc?ccb=11-4&oh=01_AVzboxdITrBTQ0-65xEoMh6AzDXq6uQB6RRCcvRqTU6QLQ&oe=6332307D",
          "mediaKeyTimestamp": "1661865725",
          "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAAABQIDBAYBAQEBAQEAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAADn4y2GFjtZC8YyXnMbxGnp4Fznn3UstqHWrOUdM1Sh2t9Y5UsEzPFbdVsNkW6t6y2Oqpw09OOAzmNR6DmXJfja0LmwdLWJxyn3zzlRjcLALwDZkAhnAiAf/8QAJxAAAgICAgIBBAIDAAAAAAAAAQIAAwQREiETMSIFQVFhEBQyM4H/2gAIAQEAAT8ABX7iED7TUxsE2qHg+n1AdiNhga4iX1GsnYhJB9TcRWc6A3EwbDokgSvDqAG+4qhAFA/jqfUQ/AaHUPv+MMgWrGAq2D+djcGVWnXKLaLq+aRi5A4mAP0oGyZlU2NXwXiYMK7ycShEsTieA77lR1Yh/c+onTUv+VjEaBA6Mw8kV7rI6aFgi79iUfNea+p5T52X5b5dTKLNQikdkdzXGxiSRqVJ2p/cyE8+LWyjZUxqm65DUOP9wZXe4RqmM+mXuj+EmeNNliqhvzLk5AktqZVDU7bkCCZWyCv13MMl6yCp6OxLd+QkjUHo6ly6PKU/5Bge4M0unDRLTKvvFBUj3HDsoBaYGhcNruVZNrdbCzIJstPxJ69xgayPiezHqL1t8exKw4DnR/E1fVpq9yy666sLYDsy0aAEqc1OC25VkUgDQJBgdr/9b8AB61MxW50oFJCjZMoVU4sR20sorZb6kYAltmNbWtDFD6GhBe5NhZtgCX2MQAO/3NqREtCeoMsuOPPiYM65TxsaDJbW/JP7ju54f9aPlcNhG2TDYzg8j7hI1P/EABsRAAICAwEAAAAAAAAAAAAAAAEgAhIAAyFB/9oACAECAQE/AHHWGuRjZBlz4/8A/8QAGxEBAAIDAQEAAAAAAAAAAAAAAQAQAhEgIVH/2gAIAQMBAT8A6Cmw8jHI3qxYuxIYfe//2Q==",
          "scansSidecar": "IQKEgtcN8GuRO/84nsizBZBn6NyjiJxd2vls/8ELV9b6L5mumocYLQ==",
          "scanLengths": [
            18820,
            66680,
            33335,
            47907
          ],
          "midQualityFileSha256": "aqn2wxTGHm1HYEpf6vEUTr1aO6QNdqPyy2q8eOEFlJ4="
        },
        "productId": "5145937735502115",
        "title": "Slayer-Bot",
        "description": "New Test",
        "currencyCode": "INR",
        "priceAmount1000": "0",
        "retailerId": "4",
        "url": "https://github.com/TURBOHYPER/Slayer-Md",
        "productImageCount": 1
      },
      "businessOwnerJid": "918270026275@s.whatsapp.net"
    }
    }
    } 
    
    const fakepay = {
    	key: {
                        participant : "0@s.whatsapp.net",
                          remoteJid: "status@broadcast"
                    },
        message: {
    "requestPaymentMessage": {
      "currencyCodeIso4217": "INR",
      "amount1000": "100000",
      "requestFrom": "918270026275@s.whatsapp.net",
      "noteMessage": {
        "extendedTextMessage": {
          "text": "ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩ 𝚩𝐘 𝗧𝚯𝗫𝗜𝗖 ₪ 𝗧𝗨𝗥𝗕𝚯\n\n𝐖𝚮𝚫𝚻𝐒𝚫𝚸𝚸: 916380260672\n\n𝐖𝚮𝚫𝚻𝐒𝚫𝚸𝚸 𝟐: 2347014889291\n\n𝚩𝐔𝚰𝐒𝚴𝚵𝐒𝐒 𝐖𝚮𝚫𝚻𝐒𝚫𝚸𝚸: 918270026275"
        }
      },
      "expiryTimestamp": "0",
      "amount": {
        "value": "100000",
        "offset": 1000,
        "currencyCode": "INR"
      }
    }
   }
   }
    
    const flokasi = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
locationMessage: {
name: `India, Tamilnadu, Coimbatore`,
jpegThumbnail: `${global.thumb}`
}
}
}
                      
                   const fdocs = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: `${global.botnma}`, 
jpegThumbnail: `${global.thumb}`
}
}
}
                                        
const todlink =[
'https://youtu.be/IiYRFELAC0s',
'https://youtu.be/bNoFWGc1iJ0',
'https://youtu.be/DKm8Fg7dAp0',
'https://youtu.be/PagvjtVfsPk',
'https://youtu.be/CQLgEvxPs2w',
'https://youtu.be/MsLnLxxjzPE',
'https://youtu.be/YkDCqgk-QZY',
'https://youtu.be/RGihGa5eAA8',
'https://youtu.be/YkDCqgk-QZY',
'https://youtu.be/KCOdjVN-x64',
'https://youtu.be/6t_fdHhFrTg',
'https://youtu.be/xzu_ODGpCRs',
'https://youtu.be/Rz1diG58Rhs',
'https://youtu.be/umQDV0UHUsQ',
'https://youtu.be/W3m3yKpMTDg',
'https://youtu.be/jRDJv5lfiH0',
'https://youtu.be/FjdUiHW5JpQ',
'https://youtu.be/i3OgJLwB2lc',
'https://youtu.be/r1_EDhYbsHA',
'https://youtu.be/MsLnLxxjzPE',
'https://youtu.be/JWHV8lPTzPs',
'https://youtu.be/EjVcqMknvUU',
'https://youtu.be/2iCEd94TZ4o',
'https://youtu.be/S8F2L3v10mA',
'https://youtu.be/xvRWA9_18So',
'https://youtu.be/sSynIGIVjUs',
'https://youtu.be/E6NQYmO2qbA',
'https://youtu.be/usY2mQGtpyw',
'https://youtu.be/dMPnLAXAOBY',
'https://youtu.be/b0md2fEIFpg',
'https://youtu.be/e08eDavj0oI',
'https://youtu.be/IYo8iXPCmgQ',
'https://youtu.be/iuHy1fHikVo',
'https://youtu.be/TwbhA23jSsw',
]
let tod = todlink[Math.floor(Math.random() * (todlink.length))]

//[thumb]\\
let Turbo = fs.readFileSync('./TurboMedia/thumb.jpg')
let ytmenulogo = fs.readFileSync('./TurboMedia/ytlogo.jpg')

//[database]\\
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
autoreadsw = false

//[database reader]\\
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    chats: {},
    ...(global.db || {})
}
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []
	
module.exports = Turbo = async (Turbo, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await Turbo.decodeJid(Turbo.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	
//[gc]\\
        const groupMetadata = m.isGroup ? await Turbo.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const isAntiLink = m.isGroup ? antilink.includes(m.chat) : false
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
//════════[runtime]═════════//

const runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hour, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minute, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Second") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}
	
//[target]\\
const reply = (teks) => {
    Turbo.sendMessage(m.chat, {text: teks, contextInfo: {"externalAdReply": {title: "ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩",mediaType: 2, renderLargerThumbnail: false, body: "ғᴏʟʟᴏᴡ ᴍʏ ɢɪᴛʜᴜʙ ᴘʀᴏғɪʟ", thumbnail: fs.readFileSync('./TurboMedia/slayer.jpg'),sourceUrl: "https://github.com/TURBOHYPER/Toxic-Alexa_V3"}}})
}
const replay = (teks) => {
    Turbo.sendMessage(m.chat, {text: teks, contextInfo: {"externalAdReply": {title: "ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩",mediaType: 3, renderLargerThumbnail: false, body: "ғᴏʟʟᴏᴡ ᴍʏ ɢɪᴛʜᴜʙ ᴘʀᴏғɪʟ", thumbnail: fs.readFileSync('./TurboMedia/slayer.jpg'),sourceUrl: "https://github.com/TURBOHYPER/Toxic-Alexa_V3"}}})
}
try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.users[m.sender]
            if (typeof user !== 'object') global.db.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            let chats = global.db.chats[m.chat]
                if (typeof chats !== 'object') global.db.chats[m.chat] = {}
                if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('wame' in chats)) chats.wame = false
             } else global.db.chats[m.chat] = {
                mute: false,
                wame: false,
        }
        } catch (err) {
            console.error(err)
        }
	    

//[public/self]\\
        if (!Turbo.public) {
            if (!m.key.fromMe) return
        }

//[push msg to console & autoread]\\

if (!m.isGroup && !isCreator) {
			await Turbo.sendMessage(m.chat, { text: "Don't PM bot\nSorry i will block you" });
			await require("delay")(3000);
			await Turbo.updateBlockStatus(m.sender, "block");
			await m.copyNForward('916380260672@s.whatsapp.net', null)
			await Turbo.sendMessage('916380260672@s.whatsapp.net', {
				text: "• PM Detected Blocked Number \nwa.me/" + m.sender.split("@")[0],
			});
		}        
                
    //auto read whatsapp status
if (autoreadsw) {
		if (from === 'status@broadcast') {
		Turbo.chatRead(from)
	}
	}
//autoreader gc and pm
if (global.autoreadpmngc) {
if (command) {
await Turbo.sendPresenceUpdate('composing', m.chat)
Turbo.sendReadReceipt(m.chat, m.sender, [m.key.id])}
}
  //autoread gc only
  if (global.autoReadGc) {
  if (m.isGroup) { Turbo.sendReadReceipt(m.chat, m.sender, [m.key.id]) }
}
//autoread all
  if (global.autoReadAll) { if (m.chat) { Turbo.sendReadReceipt(m.chat, m.sender, [m.key.id]) }
  }
  //auto recording all
    if (global.autoRecord) { if (m.chat) { Turbo.sendPresenceUpdate('recording', m.chat) }
}
//autotyper all
  if (global.autoTyping) { if (m.chat) { Turbo.sendPresenceUpdate('composing', m.chat) }
}
//auto available all
  if (global.available) { if (m.chat) { Turbo.sendPresenceUpdate('available', m.chat) }
  }
  
	
//[Antilink]\\
	if (isAntiLink) 
if (budy.includes('https://chat.whatsapp.com/')) {
               if (!m.key.fromMe) {
               let gclink = (`https://chat.whatsapp.com/`+await Turbo.groupInviteCode(m.chat))
               let isLinkThisGc = new RegExp(gclink, 'i')
               let isgclink = isLinkThisGc.test(m.text)
               if (isgclink) return reply(`Group Is Installed With Anti-Link But I Will Not Kick You 😉, Because You Sent This Group Link❤️`)
               if (isAdmins) return reply(`Group Is Installed With Anti-Link But I Will Not Kick You 😉, Because You Are An Admin Of The Group❤️`)	
               if (isCreator) return reply(`Group Is Installed With Anti-Link But I Will Not Kick You 😉, Because Your My Creator Your The Reason That I Am Still Alive\nI Will Always Be Royal To You Turbo My Master ✨❤️ `)
               let sianj = m.sender
               await Turbo.groupParticipantsUpdate(m.chat, [sianj], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
               }
	  }
	if (db.chats[m.chat].wame) {
        if (budy.match(`wa.me/`)) {
        m.reply(`「 WA.ME DETECTED 」\n\nYou have been detected sending a wa.me link, sorry you will be kicked !`)
          if (!isBotAdmins) return m.reply(`Bot must be admin first`)
        let gclink = (`https://wa.me/`)
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Eh sorry it didn't happen, because you sent this wa.me link`)
        if (isAdmins) return m.reply(`Ehh sorry you admin`)
        if (isCreator) return m.reply(`Ehh sorry you are the owner of me`)
        Turbo.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
	    
//[mute chat]\\
      if (db.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
//[write database every 1min]\\
	setInterval(() => {
            fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
        }, 60 * 1000)

//[reset limit every 12hrs]\\
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })
	    
//[respond cmd with media]\\
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
        let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: Turbo.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, Turbo.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        Turbo.ev.emit('messages.upsert', msg)
        }
        
        //media detect \\
	
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Answer the following questions :\n${room.soal}\n\n\nThere is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Give up!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            Turbo.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Turbo.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Guess The Music' }, type: 1 }], `🎮 Guess The Song 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, Turbo.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Wrong answer!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Math Quiz  🎮\n\nCorrect answer 🎉\n\nWant to play again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Turbo.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, Turbo.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Turbo.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, Turbo.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Turbo.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Guess Lontong' }, type: 1 }], `🎮 Guess Lontong 🎮\n\nCorrect answer 🎉\n*${deskripsi}*\n\nWant to play again? press the button below`, Turbo.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Turbo.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, Turbo.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Turbo.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, Turbo.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Turbo.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Riddles' }, type: 1 }], `🎮 Riddles 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, Turbo.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
        
//[tictactoe]\\
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game has ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}
${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}
${isWin ? `@${winner.split('@')[0]} Win!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}
Type *give up* to surrender and admit defeat`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await Turbo.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await Turbo.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

//[suit]\\
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|sure|oke?|reject|dont|later|yes|can|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|dont|later|n|no|can)/i.test(m.text)) {
	    Turbo.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} reject the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    Turbo.sendText(m.chat, `Suit has been sent to chat
@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}
Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) Turbo.sendText(roof.p, `Please select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) Turbo.sendText(roof.p2, `Please select \n\nRock🗿\nPaper📄\nScissor✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) Turbo.sendText(m.chat, `Both players don't want to play,\nSuit canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    Turbo.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} didn't choose suit, game over`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) Turbo.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) Turbo.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    Turbo.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}
@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
Don't tag him!
He's in Offline/AFK, ${reason ? 'with reason ' + reason : 'no reason'}
Its been ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.users[m.sender].afkTime > -1) {
            let user = global.db.users[m.sender]
            reply(`
You came back online from AFK${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(command) {
	    case 'afk': {
                let user = global.db.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} Already Afk${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'You are still in the game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            reply('Partner found!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}
${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}
Waiting @${room.game.currentTurn.split('@')[0]}
Type *give up* to surrender and admit defeat`
            if (room.x !== room.o) await Turbo.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await Turbo.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            reply('Waiting for partner' + (text ? ` type the command below ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            Turbo.sendText(m.chat, `Successfully delete the TicTacToe session`, m)
            } else if (!this.game) {
            reply(`TicTacToe Session🎮 there is not any`)
            } else throw '?'
            } catch (e) {
            reply('error')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Complete your previous suit`)
	    if (m.mentionedJid[0] === m.sender) return reply(`Can't play with myself !`)
            if (!m.mentionedJid[0]) return reply(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `The person you are challenging is playing suit with someone else :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_
@${m.sender.split`@`[0]} challenging @${m.mentionedJid[0].split`@`[0]} to play suit
Please @${m.mentionedJid[0].split`@`[0]} to type accept/reject`
            this.suit[id] = {
            chat: await Turbo.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) Turbo.sendText(m.chat, `_Suit time out_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'sc': case 'script': case 'donate': case 'donate': case 'git': case 'botgit': case 'botlink': case 'sourcecode': {
let sclog0 = fs.readFileSync("TurboMedia/slayer.jpg"),
scte3t = `*「 ${global.botnma} Script 」*\n\nYouTube: https://youtube.com/c/TurboMods\nGitHub: https://github.com/TURBOHYPER/Toxic-Alexa_V3\n\nDont forgot to follow 🫂`
let scbuttons = [
{buttonId: `owner`, buttonText: {displayText: 'Owner 🌹'}, type: 1}
]
let buttonMessage = {
image: sclog0,
jpegThumbnail: sclog0,
caption: scte3t,
footer: `Turbo Mods`,
buttons: scbuttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"I Deserve Something For My Hardwork",
body: "So Follow My Instagram Account", 
thumbnail: fs.readFileSync("TurboMedia/slayer.jpg"),
mediaType:1,
mediaUrl: 'https://Instagram.com/toxic_turbo777',
sourceUrl: "https://Instagram.com/toxic_turbo777"
}}
}
Turbo.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'find2': {
const _0x28800a=_0x156b;(function(_0x1e59e2,_0x9528){const _0x335ecd=_0x156b,_0x273cc6=_0x1e59e2();while(!![]){try{const _0x342676=parseInt(_0x335ecd(0xa0))/0x1+parseInt(_0x335ecd(0xa8))/0x2*(parseInt(_0x335ecd(0xab))/0x3)+-parseInt(_0x335ecd(0xa5))/0x4+-parseInt(_0x335ecd(0xa4))/0x5*(-parseInt(_0x335ecd(0xa6))/0x6)+-parseInt(_0x335ecd(0xa7))/0x7+parseInt(_0x335ecd(0xa3))/0x8+parseInt(_0x335ecd(0xac))/0x9*(-parseInt(_0x335ecd(0xa1))/0xa);if(_0x342676===_0x9528)break;else _0x273cc6['push'](_0x273cc6['shift']());}catch(_0x3398e8){_0x273cc6['push'](_0x273cc6['shift']());}}}(_0x462f,0x8b806));let acrcloud=require(_0x28800a(0xaa)),acr=new acrcloud({'host':_0x28800a(0xa9),'access_key':_0x28800a(0xa2),'access_secret':_0x28800a(0xad)});function _0x156b(_0x22f99c,_0x47707d){const _0x462fd8=_0x462f();return _0x156b=function(_0x156b1d,_0x23cf49){_0x156b1d=_0x156b1d-0xa0;let _0x51f50b=_0x462fd8[_0x156b1d];return _0x51f50b;},_0x156b(_0x22f99c,_0x47707d);}function _0x462f(){const _0x3fdbd6=['c816ad50a2bd6282e07b90447d93c38c','289728qZgToK','230DaDAAR','3541664lxnBuP','119628JNjFYg','7462637KfkXmg','18682iJUkiZ','identify-eu-west-1.acrcloud.com','acrcloud','351SUetiO','1667691cidzfK','ZpYSwmCFpRovcSQBCFCe1KArX7xt8DTkYx2XKiIP','661943aOBccV','10vPjXov'];_0x462f=function(){return _0x3fdbd6;};return _0x462f();}
try{
const _0x3cb8a1=_0x3a2f;function _0x3a2f(_0x4c7a69,_0x50b672){const _0x2501c8=_0x2501();return _0x3a2f=function(_0x3a2f8f,_0x44e9b6){_0x3a2f8f=_0x3a2f8f-0x18e;let _0x17f5d3=_0x2501c8[_0x3a2f8f];return _0x17f5d3;},_0x3a2f(_0x4c7a69,_0x50b672);}(function(_0x5943b9,_0x562543){const _0x29b049=_0x3a2f,_0x349c16=_0x5943b9();while(!![]){try{const _0x36eaa1=parseInt(_0x29b049(0x18e))/0x1+parseInt(_0x29b049(0x194))/0x2*(-parseInt(_0x29b049(0x192))/0x3)+parseInt(_0x29b049(0x193))/0x4+parseInt(_0x29b049(0x199))/0x5+parseInt(_0x29b049(0x195))/0x6*(parseInt(_0x29b049(0x196))/0x7)+-parseInt(_0x29b049(0x18f))/0x8*(-parseInt(_0x29b049(0x190))/0x9)+parseInt(_0x29b049(0x197))/0xa*(-parseInt(_0x29b049(0x191))/0xb);if(_0x36eaa1===_0x562543)break;else _0x349c16['push'](_0x349c16['shift']());}catch(_0x316988){_0x349c16['push'](_0x349c16['shift']());}}}(_0x2501,0x73bb5));function _0x2501(){const _0x44b151=['820IwYyoo','256998MuoEeI','35cRTmHZ','80Jeyyvj','quoted','2182260rnZAAH','341457gdEbZs','680ahTTSP','51687BawMGn','1307548IaAfQA','3726Adybbv','1815888MobZis'];_0x2501=function(){return _0x44b151;};return _0x2501();}let q=m[_0x3cb8a1(0x198)]?m[_0x3cb8a1(0x198)]:m;
const _0xa83b50=_0x1f41;function _0x1f41(_0x497263,_0x631f78){const _0x549299=_0x5492();return _0x1f41=function(_0x1f4176,_0xd2c650){_0x1f4176=_0x1f4176-0x88;let _0x3045f4=_0x549299[_0x1f4176];return _0x3045f4;},_0x1f41(_0x497263,_0x631f78);}(function(_0x1d044c,_0x434010){const _0x227343=_0x1f41,_0x41b468=_0x1d044c();while(!![]){try{const _0x5eb8d6=parseInt(_0x227343(0x90))/0x1+-parseInt(_0x227343(0x8d))/0x2+-parseInt(_0x227343(0x8f))/0x3+-parseInt(_0x227343(0x8a))/0x4+parseInt(_0x227343(0x92))/0x5+parseInt(_0x227343(0x88))/0x6*(-parseInt(_0x227343(0x91))/0x7)+-parseInt(_0x227343(0x8e))/0x8*(-parseInt(_0x227343(0x8b))/0x9);if(_0x5eb8d6===_0x434010)break;else _0x41b468['push'](_0x41b468['shift']());}catch(_0x5c83cb){_0x41b468['push'](_0x41b468['shift']());}}}(_0x5492,0x2247b));function _0x5492(){const _0x19b3c4=['msg','350852QGRbqy','33368WkOIKo','489126uFrKKt','217141BmMDDZ','3339UlMFjs','141025dFWfHc','1116qZChMu','mimetype','1063424FPlwzp','1269vSFFGK'];_0x5492=function(){return _0x19b3c4;};return _0x5492();}let mime=(q[_0xa83b50(0x8c)]||q)[_0xa83b50(0x89)]||'';
if (/audio|video/.test(mime)) {
const _0xc9a650=_0x21c7;function _0x13a3(){const _0x984d0c=['105326djpdir','10030RUoXyX','4874478hdfOMz','download','277974uUsNxs','6009priOvr','1GULkiK','1177IZAMpW','216GDQjIQ','2840257OdvMDC','120yrEyss','3501125IDWnpj'];_0x13a3=function(){return _0x984d0c;};return _0x13a3();}function _0x21c7(_0x51d834,_0x3917b0){const _0x13a386=_0x13a3();return _0x21c7=function(_0x21c7d1,_0x1fd25b){_0x21c7d1=_0x21c7d1-0xd0;let _0x4a055e=_0x13a386[_0x21c7d1];return _0x4a055e;},_0x21c7(_0x51d834,_0x3917b0);}(function(_0x13a938,_0x544855){const _0x216eb5=_0x21c7,_0x1408ae=_0x13a938();while(!![]){try{const _0x478453=-parseInt(_0x216eb5(0xd2))/0x1*(parseInt(_0x216eb5(0xd8))/0x2)+-parseInt(_0x216eb5(0xd1))/0x3*(parseInt(_0x216eb5(0xd6))/0x4)+-parseInt(_0x216eb5(0xd7))/0x5+parseInt(_0x216eb5(0xda))/0x6+-parseInt(_0x216eb5(0xd5))/0x7+parseInt(_0x216eb5(0xd4))/0x8*(parseInt(_0x216eb5(0xd0))/0x9)+-parseInt(_0x216eb5(0xd9))/0xa*(-parseInt(_0x216eb5(0xd3))/0xb);if(_0x478453===_0x544855)break;else _0x1408ae['push'](_0x1408ae['shift']());}catch(_0x321515){_0x1408ae['push'](_0x1408ae['shift']());}}}(_0x13a3,0x8298f));let media=await q[_0xc9a650(0xdb)]();
function _0x29b3(_0x1376f6,_0x2aea4f){const _0x2fa204=_0x2fa2();return _0x29b3=function(_0x29b3ba,_0x17f019){_0x29b3ba=_0x29b3ba-0x185;let _0x17aecc=_0x2fa204[_0x29b3ba];return _0x17aecc;},_0x29b3(_0x1376f6,_0x2aea4f);}(function(_0x5efdb2,_0xb7290a){const _0x2b4cd0=_0x29b3,_0x394c52=_0x5efdb2();while(!![]){try{const _0x5f03c0=-parseInt(_0x2b4cd0(0x18a))/0x1+parseInt(_0x2b4cd0(0x186))/0x2+parseInt(_0x2b4cd0(0x188))/0x3*(parseInt(_0x2b4cd0(0x18e))/0x4)+-parseInt(_0x2b4cd0(0x18b))/0x5+-parseInt(_0x2b4cd0(0x189))/0x6*(-parseInt(_0x2b4cd0(0x187))/0x7)+-parseInt(_0x2b4cd0(0x18c))/0x8+-parseInt(_0x2b4cd0(0x18d))/0x9*(-parseInt(_0x2b4cd0(0x185))/0xa);if(_0x5f03c0===_0xb7290a)break;else _0x394c52['push'](_0x394c52['shift']());}catch(_0x134188){_0x394c52['push'](_0x394c52['shift']());}}}(_0x2fa2,0x1be61));function _0x2fa2(){const _0x187690=['317992xYRnWF','777aTTQjt','83301kOTFPo','2694nLNfGr','28866nQMmFi','1090460CFVNpl','28240HdKsoN','9peszlN','4szUHmA','1281590BNmGjN'];_0x2fa2=function(){return _0x187690;};return _0x2fa2();}let ext=mime['split']('/')[0x1];
var _0x3c9f59=_0xa619;(function(_0x3d3dcc,_0xfcf725){var _0x4a3fba=_0xa619,_0x45ac5c=_0x3d3dcc();while(!![]){try{var _0x3f6a0f=parseInt(_0x4a3fba(0xb1))/0x1*(-parseInt(_0x4a3fba(0xaa))/0x2)+parseInt(_0x4a3fba(0xb4))/0x3*(parseInt(_0x4a3fba(0xb2))/0x4)+parseInt(_0x4a3fba(0xb3))/0x5+parseInt(_0x4a3fba(0xac))/0x6+parseInt(_0x4a3fba(0xb6))/0x7*(parseInt(_0x4a3fba(0xae))/0x8)+-parseInt(_0x4a3fba(0xb0))/0x9*(parseInt(_0x4a3fba(0xab))/0xa)+parseInt(_0x4a3fba(0xaf))/0xb*(-parseInt(_0x4a3fba(0xa9))/0xc);if(_0x3f6a0f===_0xfcf725)break;else _0x45ac5c['push'](_0x45ac5c['shift']());}catch(_0x458255){_0x45ac5c['push'](_0x45ac5c['shift']());}}}(_0x4e5d,0xc739c),fs[_0x3c9f59(0xb5)]('./'+m[_0x3c9f59(0xad)]+'.'+ext,media));function _0xa619(_0x1186bc,_0x2ae8cd){var _0x4e5dd3=_0x4e5d();return _0xa619=function(_0xa6190c,_0x110a01){_0xa6190c=_0xa6190c-0xa9;var _0x1dbd46=_0x4e5dd3[_0xa6190c];return _0x1dbd46;},_0xa619(_0x1186bc,_0x2ae8cd);}function _0x4e5d(){var _0x207ec7=['7577540dtQOCR','2462664HaFKVT','sender','296qSJSRM','2690083ZrZuAA','18fzvKxQ','156153MbnzTd','8qEauTs','2913905RFHMrV','1237065cNtrgJ','writeFileSync','172977MAkzYu','12weGHMO','2ThSegR'];_0x4e5d=function(){return _0x207ec7;};return _0x4e5d();}
function _0x133a(_0x2190ff,_0x1bc3f8){const _0x20c2c7=_0x20c2();return _0x133a=function(_0x133a1f,_0x5eb683){_0x133a1f=_0x133a1f-0x126;let _0x323455=_0x20c2c7[_0x133a1f];return _0x323455;},_0x133a(_0x2190ff,_0x1bc3f8);}const _0x3a3f29=_0x133a;(function(_0x342df9,_0x5cd3ef){const _0x19bb63=_0x133a,_0x2e3a62=_0x342df9();while(!![]){try{const _0x3da404=-parseInt(_0x19bb63(0x126))/0x1*(parseInt(_0x19bb63(0x127))/0x2)+parseInt(_0x19bb63(0x130))/0x3*(parseInt(_0x19bb63(0x132))/0x4)+-parseInt(_0x19bb63(0x128))/0x5*(parseInt(_0x19bb63(0x12a))/0x6)+-parseInt(_0x19bb63(0x12b))/0x7*(-parseInt(_0x19bb63(0x131))/0x8)+parseInt(_0x19bb63(0x12e))/0x9*(-parseInt(_0x19bb63(0x12d))/0xa)+parseInt(_0x19bb63(0x12f))/0xb+-parseInt(_0x19bb63(0x129))/0xc;if(_0x3da404===_0x5cd3ef)break;else _0x2e3a62['push'](_0x2e3a62['shift']());}catch(_0x1c408c){_0x2e3a62['push'](_0x2e3a62['shift']());}}}(_0x20c2,0xcfb3a));function _0x20c2(){const _0x4ed267=['16638852HacSPW','1360458BdJHKf','823088zJgRlV','readFileSync','280XDCyno','37602tbFqww','9171657zYkYdi','4749aYXPfj','104gxdFrK','2028cJRVcf','4QCNuzf','291958TrjzBj','5YTdzgU'];_0x20c2=function(){return _0x4ed267;};return _0x20c2();}let res=await acr['identify'](fs[_0x3a3f29(0x12c)]('./'+m['sender']+'.'+ext));
function _0x3688(_0x3327bb,_0x4860b6){const _0x5623af=_0x5623();return _0x3688=function(_0x368878,_0x2f296f){_0x368878=_0x368878-0x1c2;let _0x4c964a=_0x5623af[_0x368878];return _0x4c964a;},_0x3688(_0x3327bb,_0x4860b6);}const _0x48b076=_0x3688;function _0x5623(){const _0xebbec0=['5879490RMvhLm','3388464DWOgHN','751096niigsh','2513XDJCeU','status','2860424UyoqqD','2856iDAOJv','16944147jzgIJI','939090bnRkxy','1hzFcPI'];_0x5623=function(){return _0xebbec0;};return _0x5623();}(function(_0x52f0e5,_0x41867c){const _0xc01080=_0x3688,_0x36b68a=_0x52f0e5();while(!![]){try{const _0xdf4c2f=parseInt(_0xc01080(0x1c5))/0x1*(-parseInt(_0xc01080(0x1c8))/0x2)+parseInt(_0xc01080(0x1c4))/0x3+parseInt(_0xc01080(0x1c7))/0x4+parseInt(_0xc01080(0x1c6))/0x5+-parseInt(_0xc01080(0x1c2))/0x6*(-parseInt(_0xc01080(0x1c9))/0x7)+parseInt(_0xc01080(0x1cb))/0x8+-parseInt(_0xc01080(0x1c3))/0x9;if(_0xdf4c2f===_0x41867c)break;else _0x36b68a['push'](_0x36b68a['shift']());}catch(_0x5181d2){_0x36b68a['push'](_0x36b68a['shift']());}}}(_0x5623,0x9402a));let {code,msg}=res[_0x48b076(0x1ca)];
if (code !== 0) throw msg
function _0x17c0(_0x4fa9d3,_0xc16dea){const _0x1e220f=_0x1e22();return _0x17c0=function(_0x17c084,_0x1e1b69){_0x17c084=_0x17c084-0x175;let _0x1ed7e2=_0x1e220f[_0x17c084];return _0x1ed7e2;},_0x17c0(_0x4fa9d3,_0xc16dea);}function _0x1e22(){const _0x1bfcdd=['metadata','273021KDmKOk','2510704KJfjfT','1233861NqYBVq','1065656cuAvrc','8upsECC','5SNQgZO','6966822EWkIlX','music','225692tNXllW','636624IWPuej'];_0x1e22=function(){return _0x1bfcdd;};return _0x1e22();}const _0xb484b7=_0x17c0;(function(_0xd7198f,_0x42c2bb){const _0x16feef=_0x17c0,_0x11ce3e=_0xd7198f();while(!![]){try{const _0x2cbed3=parseInt(_0x16feef(0x17e))/0x1+parseInt(_0x16feef(0x17a))/0x2*(parseInt(_0x16feef(0x178))/0x3)+-parseInt(_0x16feef(0x179))/0x4*(parseInt(_0x16feef(0x17b))/0x5)+-parseInt(_0x16feef(0x17c))/0x6+parseInt(_0x16feef(0x176))/0x7+parseInt(_0x16feef(0x177))/0x8+parseInt(_0x16feef(0x17f))/0x9;if(_0x2cbed3===_0x42c2bb)break;else _0x11ce3e['push'](_0x11ce3e['shift']());}catch(_0x5ccbb9){_0x11ce3e['push'](_0x11ce3e['shift']());}}}(_0x1e22,0xd3a32));let {title,artists,album,genres,release_date}=res[_0xb484b7(0x175)][_0xb484b7(0x17d)][0x0];
const _0x4bd1d8=_0x5556;(function(_0x2823b0,_0x3d6591){const _0x4ce00a=_0x5556,_0x2c1044=_0x2823b0();while(!![]){try{const _0x4800e2=parseInt(_0x4ce00a(0x172))/0x1+-parseInt(_0x4ce00a(0x175))/0x2+-parseInt(_0x4ce00a(0x176))/0x3*(parseInt(_0x4ce00a(0x171))/0x4)+parseInt(_0x4ce00a(0x17b))/0x5+-parseInt(_0x4ce00a(0x179))/0x6+parseInt(_0x4ce00a(0x177))/0x7+parseInt(_0x4ce00a(0x17a))/0x8*(parseInt(_0x4ce00a(0x178))/0x9);if(_0x4800e2===_0x3d6591)break;else _0x2c1044['push'](_0x2c1044['shift']());}catch(_0x1e44f9){_0x2c1044['push'](_0x2c1044['shift']());}}}(_0xb908,0x6b9fa));function _0x5556(_0x2ec804,_0x2a78da){const _0xb9085=_0xb908();return _0x5556=function(_0x555674,_0x242a20){_0x555674=_0x555674-0x171;let _0x5e111b=_0xb9085[_0x555674];return _0x5e111b;},_0x5556(_0x2ec804,_0x2a78da);}let button=[{'buttonId':_0x4bd1d8(0x174)+title,'buttonText':{'displayText':_0x4bd1d8(0x173)},'type':0x1}];function _0xb908(){const _0x46589b=['220256mKXlxA','400924EWrzUY','𝐏𝐥𝐚𝐲\x20𝐈𝐭\x20𝐇𝐞𝐫𝐞','song\x20','1706184pUGMoN','21XXbSPC','3659257VvaEtZ','1305ajeKJy','1262454qeLAwA','33728hRemfz','1773900qWJcBr'];_0xb908=function(){return _0x46589b;};return _0xb908();}
const _0x24ba83=_0x5f1c;function _0x2436(){const _0x169376=['723LexVoD','name','115WHQoHH','1300415xrHEhI','36711730rMXTgw','272PeUpoY','13910886TdBRHz','530yHXFKP','╭────⬡\x20ꪶ𝐒𝐎𝐍𝐆\x20𝐅𝐎𝐔𝐍𝐃ꫂ⁩⁩⁩\x20────⬡\x0a│\x20\x20\x20\x0a│𒆜\x20𝐒𝐎𝐍𝐆\x20𝐓𝐈𝐓𝐋𝐄\x20:-\x20','5342094cHjfXp','\x0a│\x0a│𒆜\x20𝐆𝐄𝐍𝐑𝐄𝐒\x20:-\x20','44492mcPKUM','\x0a│\x0a│𒆜\x20𝐀𝐋𝐁𝐔𝐌\x20:-\x20','join','map','95851MDMiCl'];_0x2436=function(){return _0x169376;};return _0x2436();}function _0x5f1c(_0x195412,_0x5edb3b){const _0x24366d=_0x2436();return _0x5f1c=function(_0x5f1c10,_0x2553cb){_0x5f1c10=_0x5f1c10-0xb0;let _0xcb7bc1=_0x24366d[_0x5f1c10];return _0xcb7bc1;},_0x5f1c(_0x195412,_0x5edb3b);}(function(_0x10bc13,_0x303cf0){const _0x111a05=_0x5f1c,_0x4d6b94=_0x10bc13();while(!![]){try{const _0x576d7f=-parseInt(_0x111a05(0xba))/0x1+parseInt(_0x111a05(0xbe))/0x2*(-parseInt(_0x111a05(0xb7))/0x3)+parseInt(_0x111a05(0xb2))/0x4*(-parseInt(_0x111a05(0xb9))/0x5)+parseInt(_0x111a05(0xb0))/0x6+parseInt(_0x111a05(0xb6))/0x7*(-parseInt(_0x111a05(0xbc))/0x8)+-parseInt(_0x111a05(0xbd))/0x9+parseInt(_0x111a05(0xbb))/0xa;if(_0x576d7f===_0x303cf0)break;else _0x4d6b94['push'](_0x4d6b94['shift']());}catch(_0x621f67){_0x4d6b94['push'](_0x4d6b94['shift']());}}}(_0x2436,0xe3195));let txt=_0x24ba83(0xbf)+title+'\x0a│\x20\x20\x20\x0a│𒆜\x20𝐌𝐔𝐒𝐈𝐂\x20𝐀𝐑𝐓𝐈𝐒𝐓\x20:-\x20'+(artists!==undefined?artists['map'](_0xd40bcd=>_0xd40bcd['name'])[_0x24ba83(0xb4)](',\x20'):'')+_0x24ba83(0xb3)+(album[_0x24ba83(0xb8)]||'')+_0x24ba83(0xb1)+(genres!==undefined?genres[_0x24ba83(0xb5)](_0x2cc2e8=>_0x2cc2e8[_0x24ba83(0xb8)])['join'](',\x20'):'')+'\x0a│\x0a│𒆜\x20𝐒𝐎𝐍𝐆\x20𝐑𝐄𝐋𝐄𝐀𝐒𝐄\x20𝐃𝐀𝐓𝐄\x20:-\x20'+release_date+'\x0a╰────⬡\x20ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩\x20────⬡';
var _0x448a16=_0x2aae;function _0x4903(){var _0x15cce6=['3AcuyUd','8HBPomK','378778XVuFfg','1049648MsMEih','4758462LXluko','19294176aQVauE','369xslpEv','5oqvFws','6000SDgnyr','sender','529964Xtodzv','8440607qyzhKW'];_0x4903=function(){return _0x15cce6;};return _0x4903();}function _0x2aae(_0x526fe3,_0x4e0e49){var _0x490361=_0x4903();return _0x2aae=function(_0x2aae01,_0x143d9b){_0x2aae01=_0x2aae01-0x149;var _0x5c16a0=_0x490361[_0x2aae01];return _0x5c16a0;},_0x2aae(_0x526fe3,_0x4e0e49);}(function(_0x48e2aa,_0x37cffb){var _0xba3763=_0x2aae,_0x18ba3a=_0x48e2aa();while(!![]){try{var _0x5df711=-parseInt(_0xba3763(0x151))/0x1+-parseInt(_0xba3763(0x150))/0x2*(parseInt(_0xba3763(0x14e))/0x3)+-parseInt(_0xba3763(0x14c))/0x4+parseInt(_0xba3763(0x149))/0x5*(-parseInt(_0xba3763(0x152))/0x6)+-parseInt(_0xba3763(0x14d))/0x7*(-parseInt(_0xba3763(0x14f))/0x8)+-parseInt(_0xba3763(0x154))/0x9*(-parseInt(_0xba3763(0x14a))/0xa)+parseInt(_0xba3763(0x153))/0xb;if(_0x5df711===_0x37cffb)break;else _0x18ba3a['push'](_0x18ba3a['shift']());}catch(_0x2e979c){_0x18ba3a['push'](_0x18ba3a['shift']());}}}(_0x4903,0xc8264),fs['unlinkSync']('./'+m[_0x448a16(0x14b)]+'.'+ext));
var _0x5abe6=_0x135d;function _0x37bc(){var _0x4cb918=['sendButtonText','747aOdgzm','391030kUbrJw','name','458385EJTcTI','100112mtfgum','chat','7LiJGOi','user','1pKCpXq','565756eqKSvj','6590bNMbee','1228536oGeJmR','1436800DQUakz'];_0x37bc=function(){return _0x4cb918;};return _0x37bc();}function _0x135d(_0x11e56d,_0x262b47){var _0x37bcbb=_0x37bc();return _0x135d=function(_0x135d5f,_0x7e00b8){_0x135d5f=_0x135d5f-0xb9;var _0x132314=_0x37bcbb[_0x135d5f];return _0x132314;},_0x135d(_0x11e56d,_0x262b47);}(function(_0x5b46a4,_0x50d4bf){var _0x127c18=_0x135d,_0x44f16b=_0x5b46a4();while(!![]){try{var _0x5d0222=parseInt(_0x127c18(0xbf))/0x1*(parseInt(_0x127c18(0xbb))/0x2)+-parseInt(_0x127c18(0xba))/0x3+-parseInt(_0x127c18(0xc0))/0x4+-parseInt(_0x127c18(0xc6))/0x5+-parseInt(_0x127c18(0xc2))/0x6*(-parseInt(_0x127c18(0xbd))/0x7)+parseInt(_0x127c18(0xc3))/0x8+parseInt(_0x127c18(0xc5))/0x9*(parseInt(_0x127c18(0xc1))/0xa);if(_0x5d0222===_0x50d4bf)break;else _0x44f16b['push'](_0x44f16b['shift']());}catch(_0x1e49b4){_0x44f16b['push'](_0x44f16b['shift']());}}}(_0x37bc,0x1c7bd),await Turbo[_0x5abe6(0xc4)](m[_0x5abe6(0xbc)],button,txt,Turbo[_0x5abe6(0xbe)][_0x5abe6(0xb9)],m));
} else throw 'Reply audio/video!'
}catch(e){
	m.reply(`${e}`)
  }}
       break
case 'find' :{
let acrcloud = require('acrcloud')
let acr = new acrcloud({
	host: 'identify-eu-west-1.acrcloud.com',
	access_key: 'c816ad50a2bd6282e07b90447d93c38c',
	access_secret: 'ZpYSwmCFpRovcSQBCFCe1KArX7xt8DTkYx2XKiIP'
})
	try{
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || ''
	if (/audio|video/.test(mime)) {
		let media = await q.download()
		let ext = mime.split('/')[1]
		fs.writeFileSync(`./${m.sender}.${ext}`, media)
		let res = await acr.identify(fs.readFileSync(`./${m.sender}.${ext}`))
		let { code, msg } = res.status
		if (code !== 0) throw msg
		let { title, artists, album, genres, release_date } = res.metadata.music[0]
		let button = [
                    {buttonId: `song ${title}`, buttonText: {displayText: '𝐏𝐥𝐚𝐲 𝐈𝐭 𝐇𝐞𝐫𝐞'}, type: 1}
                ]
		let txt = `╭────⬡ ꪶ𝐒𝐎𝐍𝐆 𝐅𝐎𝐔𝐍𝐃ꫂ⁩⁩⁩ ────⬡
│   
│𒆜 𝐒𝐎𝐍𝐆 𝐓𝐈𝐓𝐋𝐄 :- ${title}
│   
│𒆜 𝐌𝐔𝐒𝐈𝐂 𝐀𝐑𝐓𝐈𝐒𝐓 :- ${artists !== undefined ? artists.map(v => v.name).join(', ') : ''}
│
│𒆜 𝐀𝐋𝐁𝐔𝐌 :- ${album.name || ''}
│
│𒆜 𝐆𝐄𝐍𝐑𝐄𝐒 :- ${genres !== undefined ? genres.map(v => v.name).join(', ') : ''}
│
│𒆜 𝐒𝐎𝐍𝐆 𝐑𝐄𝐋𝐄𝐀𝐒𝐄 𝐃𝐀𝐓𝐄 :- ${release_date}
╰────⬡ ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩ ────⬡`
		fs.unlinkSync(`./${m.sender}.${ext}`)
		
     await Turbo.sendButtonText(m.chat, button, txt, Turbo.user.name, m)
	//	await m.reply(txt)
	} else throw 'Reply audio/video!'
}catch(e){
    m.reply(`${e}`)
  }}
       break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    Turbo.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    Turbo.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    Turbo.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    Turbo.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    Turbo.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    Turbo.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    Turbo.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
	    case 'family100hdiejebdjdijdjdjdj': { //this is in indonesian so if u want to activate u can but will be in indonesian
                if ('family100'+m.chat in _family100) {
                    reply('There are still unfinished sessions!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Answer the following questions :*\n${random.soal}\n\nThere is *${random.jawaban.length}* Answer ${random.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await Turbo.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halahkdkdkd': case 'hilihdkksls': case 'huluhkdksls': case 'helehkdkdkd': case 'holohkdkskks': //this is in indonesian so if u want to activate u can but will be in indonesian (thanks to respected creator of this case)
            if (!m.quoted && !text) throw `Send/reply text with caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebakjxkzkossihdhdidii': { //this is in indonesian so if u want to activate u can but will be in indonesian (thanks to respected creator of this case)
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. music\n2. picture\n3. word\n4. sentence\n5. lyrics\n6.rice cake`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await Turbo.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    Turbo.sendText(m.chat, `The song is a song from?\n\nArtist : ${result.artist}\nTime : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    Turbo.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Time Out\nAnswer:  ${tebaklagu[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, Turbo.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Turbo.sendImage(m.chat, result.img, `Please answer the questions above\n\nDescription : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    Turbo.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Time has run out\Answer:  ${tebakgambar[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, Turbo.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Turbo.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nTime : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    Turbo.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Time has run out\nAnswer:  ${tebakkata[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, Turbo.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Turbo.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nTime : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    Turbo.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Turbo.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Turbo.sendText(m.chat, `These are the lyrics of the song? : *${result.soal}*?\nTime : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    Turbo.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Turbo.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Turbo.sendText(m.chat, `*Answer the following questions :*\n${result.soal}*\nTime : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    Turbo.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Turbo.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
		
                    }
                }
            }
            break
            case 'mathquiz': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nExample: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                Turbo.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} seconds`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    reply("Time Out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'mysoulmate': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Your match is
@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    await Turbo.sendButtonText(m.chat, buttons, jawab, Turbo.user.name, m, {mentions: ments})
            }
            break
            case 'couple': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Ciee Whats Going On💖👀`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: '❤️congrats', buttonText: { displayText: '❤️congrats' }, type: 1 }
                    ]
                    await Turbo.sendButtonText(m.chat, buttons, jawab, Turbo.user.name, m, {mentions: menst})
            }
           break
case 'imagetopdf': {
 if (!/image/.test(mime)) throw `*Send/Reply Image With Caption* ${prefix + command}`
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let medi = await Turbo.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(medi)            
hayo = `https://xteam.xyz/imagetopdf?url=${anu}&APIKEY=${setting.riy}`
Turbo.sendMessage(m.chat, {document: await getBuffer(hayo), mimetype: 'application/pdf', fileName: `${botnma}.pdf`}, {quoted:m}).catch ((err) => m.reply('*Sorry Problem In Our Turbo Api*'))     
}
break
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Enter the group link!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                replay(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await Turbo.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
           break
case 'warn':{
const time = moment().tz('Asia/Kolkata').format("HH:mm:ss")
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
if (!isBotAdmins) throw mess.botAdmin
const limitedwarn =[
'2',
'1',
'0',
]
let twarn = limitedwarn[Math.floor(Math.random() * (limitedwarn.length))]
if (!text) return replay(`Reply To The Message, Example : ${prefix + command} Do Not Spam`)
 anu = `╭──⧀〔 *⚠︎ 𝖶𝖠𝖱𝖭𝖨𝖭𝖦 ⚠︎* 〕
│
│➟ *ᴘᴀʀᴛɪᴄɪᴘᴀɴᴛ:* wa.me/${m.mentionedJid[0].split`@`[0]}
│➟ *ʀᴇᴀsᴏɴ:* ${text}
│➟ *ʀᴇᴍᴀɪɴɪɴɢ:* ${twarn}
│➟ *ᴛᴏᴛᴀʟ ʟɪᴍɪᴛ:* 3
│➟ *ɢʀᴏᴜᴘ:* ${groupName}
│➟ *ᴡᴀʀɴᴇʀ:* wa.me/${m.sender.split("@")[0]}
│➟ *ᴛɪᴍᴇ:* ${time}
╰──⧁ `
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./TurboMedia/slayer.jpg')}, { upload: Turbo.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: anu,
           hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
           hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator 💣',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Script 🌊',
                                    url: 'https://github.com/TURBOHYPER/Toxic-Alexa_V3'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'I Am Sorry 😕',
                                    id: `${prefix}aosjkwkje`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'I Will Not Do This Again 🙂',
                                    id: `${prefix}oaaosj`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '👤Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }),{ userJid: m.chat })
                Turbo.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'weather':{
if (!text) return reply('Give me a location')
const { result } = await fetchJson(`https://api-toxic-devil.herokuapp.com/api/weather?place=${text}`)
const { location, latitude, longitude, weather_desc, max_temp, min_temp, humidity, clouds, wind_speed, pressure, sunrise, sunset, timezone } = result
anu = `╭══〘 ᏔᎬᎪͲᎻᎬᎡ ᎠᎬͲᎪᏆᏞՏ 〙══⊷❍
┃✩╭─────────────────
┃✩│𝐋𝐎𝐂𝐀𝐓𝐈𝐎𝐍: ${location}
┃✩│𝐋𝐀𝐓𝐈𝐓𝐔𝐃𝐄: ${latitude}
┃✩│𝐋𝐎𝐍𝐆𝐈𝐓𝐔𝐃𝐄: ${longitude}
┃✩│𝐖𝐄𝐀𝐓𝐇𝐄𝐑_𝐃𝐄𝐒??: ${weather_desc}
┃✩│𝐌𝐀𝐗_𝐓𝐄𝐌𝐏: ${max_temp}
┃✩│𝐌𝐈𝐍_𝐓𝐄𝐌𝐏: ${min_temp}
┃✩│𝐇𝐔𝐌𝐈𝐃𝐈𝐓𝐘: ${humidity}
┃✩│𝐂𝐋𝐎𝐔𝐃𝐒: ${clouds}
┃✩│𝐖𝐈𝐍𝐃_𝐒𝐏𝐄𝐄𝐃: ${wind_speed}
┃✩│𝐏𝐑𝐄𝐒𝐒𝐔𝐑𝐄: ${pressure}
┃✩│𝐓𝐈𝐌𝐄𝐙𝐎𝐍𝐄: ${timezone}
┃✩│𝐒𝐔𝐍𝐑𝐈𝐒𝐄: ${sunrise}
┃✩│𝐒𝐔𝐍𝐒𝐄𝐓: ${sunset}
┃✩╰─────────────────
╰══════════════════⊷❍`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./TurboMedia/slayer.jpg')}, { upload: Turbo.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: anu,
           hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
           hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator 💣',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Script 🌊',
                                    url: 'https://github.com/TURBOHYPER/Toxic-Alexa_V3'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Fake Identity Generator',
                                    id: `${prefix}fake`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Bio',
                                    id: `${prefix}bio`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '👤Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }),{ userJid: m.chat })
                Turbo.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'covid':{
const { data } = await fetchJson('https://api-toxic-devil.herokuapp.com/api/covidworld')
const { totalCases, totalDeaths, totalTests, totalRecovered, todayCases, todayDeaths, todayRecovered, affectedCountries, critical } = data
anu = `╭══〘 ᏟϴᏙᏆᎠ ᎠᎬͲᎪᏆᏞՏ 〙══⊷❍
┃✩╭─────────────────
┃✩│𝐂𝐀𝐒𝐄𝐒: ${totalCases}
┃✩│𝐃𝐄𝐀𝐓𝐇𝐒: ${totalDeaths}
┃✩│𝐓𝐄𝐒𝐓𝐒: ${totalTests}
┃✩│𝐑𝐄𝐕𝐎𝐕𝐄𝐑𝐄𝐃: ${totalRecovered}
┃✩│𝐓𝐎𝐃𝐀𝐘𝐂𝐀𝐒𝐄𝐒: ${todayCases}
┃✩│𝐓𝐎𝐃𝐀𝐘𝐃𝐄𝐀𝐓𝐇𝐒: ${todayDeaths}
┃✩│𝐓𝐎𝐃𝐀𝐘𝐑𝐄𝐂𝐎𝐕𝐄𝐑𝐄𝐃: ${todayRecovered}
┃✩│𝐀𝐅𝐅𝐄𝐂𝐓𝐄𝐃𝐂𝐎𝐔𝐍𝐓𝐑𝐈𝐄𝐒: ${affectedCountries}
┃✩│𝐂𝐑𝐈𝐓𝐈𝐂𝐀𝐋: ${critical}
┃✩╰─────────────────
╰══════════════════⊷❍`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./TurboMedia/slayer.jpg')}, { upload: Turbo.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: anu,
           hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
           hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator 💣',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Script 🌊',
                                    url: 'https://github.com/TURBOHYPER/Toxic-Alexa_V3'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Fake Identity Generator',
                                    id: `${prefix}fake`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Bio',
                                    id: `${prefix}bio`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '👤Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }),{ userJid: m.chat })
                Turbo.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'encode': {
if (!text) return reply('Give me a text')
const { binary } = await fetchJson(`https://api.popcat.xyz/encode?text=${text}`)
reply(binary)
}
break
case 'decode': {
if (!text) return reply('Give me a text')
const { binary } = await fetchJson(`https://api.popcat.xyz/decode?binary=${text}`)
reply(binary)
}
break
case 'itune': case 'itunes': {
if (!text) return reply('Give me a song name')
const { name, artist, album, genre, price, url, release_date } = await fetchJson(`https://api.popcat.xyz/itunes?q=${text}`)
anu = `╭══〘 ᏆͲႮΝᎬՏ ᎠᎬͲᎪᏆᏞՏ 〙══⊷❍
┃✩╭─────────────────
┃✩│𝐍𝐀𝐌𝐄: ${name}
┃✩│𝐀𝐑𝐓𝐈𝐒𝐓: ${artist}
┃✩│𝐀𝐋𝐁𝐔𝐌: ${album}
┃✩│𝐆𝐄𝐍𝐑𝐄: ${genre}
┃✩│𝐏𝐑𝐈𝐂𝐄: ${price}
┃✩│𝐑𝐄𝐋𝐄𝐀𝐒𝐄 𝐃𝐀𝐓𝐄: ${release_date}
┃✩│𝐔𝐑𝐋: ${url}
┃✩╰─────────────────
╰══════════════════⊷❍`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./TurboMedia/slayer.jpg')}, { upload: Turbo.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: anu,
           hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
           hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator 💣',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Script 🌊',
                                    url: 'https://github.com/TURBOHYPER/Toxic-Alexa_V3'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Covid',
                                    id: `${prefix}covid`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Play It',
                                    id: `${prefix}song ${name}`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '👤Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }),{ userJid: m.chat })
                Turbo.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'take': {
            if (!quoted) return replay(`sᴇɴᴅ ʀᴇᴘʟʏ ᴛᴏ ᴀ sᴛɪᴄᴋᴇʀ\nᴇxᴀᴍᴘʟᴇ ${prefix + command} 𝗧𝚯𝗫𝗜𝗖 𝗧𝗨𝗥𝗕𝚯`)
            reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await Turbo.sendImageAsSticker(m.chat, media, m, { packname: text })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 Seconds!')
                let media = await quoted.download()
                let encmedia = await Turbo.sendVideoAsSticker(m.chat, media, m, { packname: text })
                await fs.unlinkSync(encmedia)
            } else {
                reply(`sᴇɴᴅ ʀᴇᴘʟʏ ᴛᴏ ᴀ sᴛɪᴄᴋᴇʀ\nᴇxᴀᴍᴘʟᴇ ${prefix + command} 𝗧𝚯𝗫𝗜𝗖 𝗧𝗨𝗥𝗕𝚯`)
                }
            }
            break
case 'wame': {
if (!text) throw `Example : ${prefix + command} 916380260672`
const { result } = await fetchJson(`https://api-toxic-devil.herokuapp.com/api/wa-me-link?number=${text}`)
const { link, api_link } = result
anu = `*Wame Type Link: ${link}*\n\n*Api Whatsapp Type Link: ${api_link}*`
reply(anu)
}
break
case 'gender': case 'checkgender': { 
if (!text) return reply('Give me a name')
const { name, gender, probability, count } = await fetchJson(`https://api.genderize.io/?name=${text}`)
anu = `╭══〘 ᏀᎬΝᎠᎬᎡ ᏟᎻᎬᏟᏦ 〙══⊷❍
┃✩╭─────────────────
┃✩│𝐍𝐀𝐌𝐄: ${name}
┃✩│𝐆𝐄𝐍𝐃𝐄𝐑: ${gender}
┃✩│𝐂𝐎𝐔𝐍𝐓: ${count}
┃✩│𝐏𝐑𝐎𝐁𝐀𝐁𝐈𝐋𝐈𝐓𝐘: ${probability}
┃✩╰─────────────────
╰══════════════════⊷❍`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./TurboMedia/slayer.jpg')}, { upload: Turbo.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: anu,
           hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
           hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator 💣',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Script 🌊',
                                    url: 'https://github.com/TURBOHYPER/Toxic-Alexa_V3'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Joke',
                                    id: `${prefix}joke`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Fact',
                                    id: `${prefix}fact`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '👤Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }),{ userJid: m.chat })
                Turbo.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'joke':{
const { joke } = await fetchJson('https://api.popcat.xyz/joke')
anu = ` *${joke}* `
let message = await prepareWAMessageMedia({ video: fs.readFileSync('./TurboMedia/menuvideo.mp4'), gifPlayback: true }, { upload: Turbo.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
           hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator 💣',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Script 🌊',
                                    url: 'https://github.com/TURBOHYPER/Toxic-Alexa_V3'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Bio',
                                    id: `${prefix}bio`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Covid',
                                    id: `${prefix}covid`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '👤Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }),{ userJid: m.chat })
                Turbo.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'fact':{
const { fact } = await fetchJson('https://api.popcat.xyz/fact')
anu = ` *${fact}* `
let message = await prepareWAMessageMedia({ video: fs.readFileSync('./TurboMedia/menuvideo.mp4'), gifPlayback: true }, { upload: Turbo.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
           hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator 💣',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Script 🌊',
                                    url: 'https://github.com/TURBOHYPER/Toxic-Alexa_V3'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Bio',
                                    id: `${prefix}bio`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Joke',
                                    id: `${prefix}joke`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '👤Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }),{ userJid: m.chat })
                Turbo.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'lyrics': {
if (!text) return reply(`Use example ${prefix}lyrics stay`)
m.reply(mess.wait)
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
m.reply(`
 *TITLE :* *${result.title}*
 *AUTHOR :* ${result.author}
 LYRICS : ${result.lyrics}
 
`.trim())
}
break
case 'true':{
if (!text) return reply('Give me a number')
const { data } = await fetchJson(`https://neeraj-x0-api.up.railway.app/api/truecaller?q=${text}&apikey=MaskSer`)
const { name, access, e164Format, nationalFormat, type, dialingCode, countryCode, carrier, city, timeZone, gender, birthday, score } = data
anu = `╭══〘 ͲᎡႮᎬᏟᎪᏞᏞᎬᎡ ՏᎬᎪᎡᏟᎻ 〙══⊷❍
┃✩╭─────────────────
┃✩│𝐍𝐀𝐌𝐄: ${name}
┃✩│??𝐂𝐂𝐄𝐒𝐒: ${access}
┃✩│𝐍𝐔𝐌𝐁𝐄𝐑: ${e164Format}
┃✩│𝐍𝐀𝐓𝐈𝐎𝐍𝐀𝐋 𝐅𝐎𝐑𝐌𝐀𝐓: ${nationalFormat}
┃✩│𝐓𝐘𝐏𝐄: ${type}
┃✩│𝐏𝐑𝐄𝐅𝐈𝐗: ${dialingCode}
┃✩│𝐂𝐎𝐔𝐍𝐓𝐘 𝐂𝐎𝐃𝐄: ${countryCode}
┃✩│𝐂𝐀𝐑𝐑𝐈𝐄𝐑: ${carrier}
┃✩│𝐂𝐈𝐓𝐘: ${city}
┃✩│𝐆𝐄𝐍𝐃𝐄𝐑: ${gender}
┃✩│𝐁𝐈𝐑𝐓𝐇𝐃𝐀𝐘: ${birthday}
┃✩│𝐒𝐂𝐎𝐑𝐄: ${score}
┃✩│𝐓𝐈𝐌𝐄𝐙𝐎𝐍𝐄: ${timeZone}
┃✩╰─────────────────
╰══════════════════⊷❍`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./TurboMedia/slayer.jpg')}, { upload: Turbo.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: anu,
           hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
           hydratedButtons: [{
                                urlButton: {
                                displayText: 'Number',
                                    url: `${text}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }),{ userJid: m.chat })
                Turbo.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'fake':{
const { name, gender, age, birtday, occupation, address, zip_code, state, country, email, password, phone, card, code, date, pin_code, weight, height, blood_type, status } = await fetchJson('https://docs-jojo.herokuapp.com/api/fake_identity')
anu = `*name* : _${name}_\n *gender* : _${gender}_\n *age* :  _${age}_\n *birtday* : _${birtday}_\n *occupation* : _${occupation}_\n *address* : _${address}_\n *zip_code* : _${zip_code}_\n *state* : _${state}_\n *country* : _${country}_\n *email* : ${email} *password* : _${password}_\n *phone* : _${phone}_\n *card* : _${card}_\n *code* : _${code}_\n *date* : _${date}_\n *pin_code* : _${pin_code}_\n *weight* : _${weight}_\n *height* : _${height}_\n *blood_type* : _${blood_type}_\n *status* : ${status}`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./TurboMedia/slayer.jpg')}, { upload: Turbo.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: anu,
           hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
           hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator 💣',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Script 🌊',
                                    url: 'https://github.com/TURBOHYPER/Toxic-Alexa_V3'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'This Person Does Not Exist 😲',
                                    id: `${prefix}aosjkwkje`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Wow 😲',
                                    id: `${prefix}oaaosj`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '👤Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }),{ userJid: m.chat })
                Turbo.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'jid':{
reply(m.chat)
}
break
case 'ig':{
if (!text) return reply('*Give me a instagram username*')
const { result, status } = await fetchJson(`https://levanter.up.railway.app/ig?q=${text}`)
if (!status) return reply('*not found*')
const { name, username, avatar, posts, following, followers, description } = result
anu = `username : ${username}\nname : ${name}\nbio : ${description}\nposts : ${posts}\nfollowers : ${followers}\nfollowning : ${following}`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./TurboMedia/slayer.jpg')}, { upload: Turbo.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: anu,
           hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
           hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator 💣',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Script 🌊',
                                    url: 'https://github.com/TURBOHYPER/Toxic-Alexa_V3'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu 🗞️',
                                    id: `${prefix}menu`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Thanks ❤️',
                                    id: `${prefix}oaaosj`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '👤Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }),{ userJid: m.chat })
                Turbo.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'insta': case 'instagram': case 'instagramreels': case 'igreels': {
if (!args[0]) return reply(`Example :\n${prefix + command} https://www.instagram.com/p/CcvJGuxh9VI/?igshid=YmMyMTA2M2Y=`)
try {
hx.igdl(args[0]).then(async(resed) => {
ini_anu = []
anu_list = []
textbv = `*| INSTAGRAM DOWNLOADER |*\n\n${global.themeemoji} Username : ${resed.user.username ? resed.user.name : "undefined"}\n${global.themeemoji} Followers : ${resed.user.followers}`
urut = 1
for (let i = 0; i < resed.medias.length; i++) {
ini_anu.push({
 "type": resed.medias[i].fileType,
 "url": resed.medias[i].url
})
}
ilod = 1
for (let i of ini_anu) {
anu_list.push({buttonId: `ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
}
textbv += `\n\n_Select the media below to download_`
let buttons = anu_list
let buttonMessage = {
image:log0,
jpegThumbnail:thum,
caption: textbv,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
Turbo.sendMessage(m.chat, buttonMessage, {quoted:m})
})
} catch (err) {
reply(String(err))
}
}
break
case 'wyr': case 'would you rather': {
const { ops1, ops2 } = await fetchJson(`https://api.popcat.xyz/wyr`)
anu = `ᏔϴႮᏞᎠ ᎽϴႮ ᎡᎪͲᎻᎬᎡ

${ops1}

${ops2}`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./TurboMedia/slayer.jpg')}, { upload: Turbo.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: anu,
           hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
           hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator 💣',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Script 🌊',
                                    url: 'https://github.com/TURBOHYPER/Toxic-Alexa_V3'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'i choose option one',
                                    id: `${prefix}opshehesend`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'i choose option two',
                                    id: `${prefix}opshehesend`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '👤Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }),{ userJid: m.chat })
                Turbo.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'ytcomment': {
if (!text) throw `Example : ${prefix + command} TurboMods,https://i.imgur.com/cqpUhQl.jpeg,Hi`
let [text1, text2, text3] = text.split`,`
const ytcommenthehe = await fetchJson(`https://some-random-api.ml/canvas/misc/youtube-comment?username=${encodeURIComponent(text1)}&avatar=${encodeURIComponent(text2)}&comment=${encodeURIComponent(text3)}`)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await Turbo.downloadAndSaveMediaMessage(ytcommenthehe)                
                let anu = await TelegraPh(media)
            Turbo.sendMessage(m.chat, { image: anu, caption: `Made By Turbo Mods` }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                break
case 'github':{
if (!text) return reply('*Give me a github username*')
const {avatar_url,name,login,id,html_url,type,company,location,email,bio,twitter_username,public_repos,public_gists,following,followers,created_at,updated_at} = await fetchJson(`https://api.github.com/users/${text}`)
anu = `╭══〘 𝚄𝚂𝙴𝚁 𝙳𝙴𝚃𝙰𝙸𝙻𝚂 〙══⊷❍
┃✩╭─────────────────
┃✩│𝗡𝗔𝗠𝗘: ${name}
┃✩│𝗨𝗦𝗘𝗥 𝗡𝗔𝗠𝗘: ${login}
┃✩│𝗜𝗗: ${id}
┃✩│𝗟𝗜𝗡𝗞: ${html_url}
┃✩│𝗧𝗬𝗣𝗘: ${type}
┃✩│𝗙𝗢𝗟𝗟𝗢𝗪𝗜𝗡𝗚: ${following}
┃✩│𝗙𝗢𝗟𝗟𝗢𝗪𝗘𝗥𝗦: ${followers}
┃✩│𝗖𝗢𝗠𝗣𝗔𝗡𝗬: ${company}
┃✩│𝗟𝗢𝗖𝗔𝗧𝗜𝗢𝗡: ${location}
┃✩│𝗘𝗠𝗔𝗜𝗟: ${email}
┃✩│𝗕𝗜𝗢: ${bio}
┃✩│𝗧𝗪𝗜𝗧𝗧𝗘𝗥: ${twitter_username}
┃✩│𝗣𝗨𝗕𝗟𝗜𝗖 𝗚𝗜𝗦𝗧𝗦: ${public_gists}
┃✩│𝗣𝗨𝗕𝗟𝗜𝗖 𝗥𝗘𝗣𝗢??: ${public_repos}
┃✩│𝗖𝗥𝗘𝗔𝗧𝗘𝗗 𝗔𝗧: ${created_at}
┃✩│𝗟??𝗦𝗧 𝗨𝗣𝗗𝗔𝗧𝗘𝗗: ${updated_at}
┃✩╰─────────────────
╰══════════════════⊷❍`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./TurboMedia/slayer.jpg')}, { upload: Turbo.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: anu,
           hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
           hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator 💣',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Script 🌊',
                                    url: 'https://github.com/TURBOHYPER/Toxic-Alexa_V3'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu 🗞️',
                                    id: `${prefix}menu`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Thanks ❤️',
                                    id: `${prefix}oaaosj`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '👤Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }),{ userJid: m.chat })
                Turbo.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'truth':{
const {truth} = await fetchJson(`https://api-toxic-devil.herokuapp.com/api/truth-or-dare/truth?lang=en`)
anu = `${truth}`
let message = await prepareWAMessageMedia({ video: fs.readFileSync('./TurboMedia/menuvideo.mp4'), gifPlayback: true }, { upload: Turbo.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
           hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator 💣',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Script 🌊',
                                    url: 'https://github.com/TURBOHYPER/Toxic-Alexa_V3'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu 🗞️',
                                    id: `${prefix}menu`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Dare',
                                    id: `${prefix}dare`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '👤Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }),{ userJid: m.chat })
                Turbo.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
let resultsend = result[Math.floor(Math.random()*result.length)]
case 'dare':{
const {dare} = await fetchJson(`https://api-toxic-devil.herokuapp.com/api/truth-or-dare/dare?lang=en`)
anu = `${dare}`
let message = await prepareWAMessageMedia({ video: fs.readFileSync('./TurboMedia/menuvideo.mp4'), gifPlayback: true }, { upload: Turbo.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
           hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator 💣',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Script 🌊',
                                    url: 'https://github.com/TURBOHYPER/Toxic-Alexa_V3'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu ??️',
                                    id: `${prefix}menu`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Truth',
                                    id: `${prefix}truth`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '👤Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }),{ userJid: m.chat })
                Turbo.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'bio':{
	const tbio =[
'*What is the distance you call? Did not we love Allah without seeing 🕊* ',
'*Do not sweat in other bodies and do not follow me, you will get cold. 🌌* ',
'*If you do not go to the one who calls with prayer, will the one you call with prayer ever come to you✨* ',
'*My God is either Kavuş or Forget ... 🥀⛓* ',
'*My Fan Is For Those Who Know Both His Limits And His Lord...* ',
 '*You Are The Most Beautiful Thing That Has Happened To Me In This World..❤* ',
'*We Are Obligated To Love? God knows it...🌿* ',
'*I do not regret it, if I see that smile, I will succumb again🍂🌒* ',
'*Love Souls, Bodies Will Rot...🍂🍂* ',
'*Our Faith Is: The World Is A Load God Is Great...✨* ',
'*I found you among eight billion people, but you could not find my heart among my 78 organs.* ',
'*I do not owe anyone any memory, I do not like coffee anyway..! 🖤* ',
'*Do not Trust Those Who Will Never Do It Because of What We Always Said She Would not Do* ',
'*May Allah protect us not from those who do not love us, but from those who pretend to love us. 🐆* ',
'*I entrusted dreams to you, you to prayer, and prayer to God. 🔐❤️* ',
'*...Toxic Turbo Is The Best...* ',
'*Sleepy dreams are deceiving people if we wake up 🕊* ',
'*I do not trust anyone, they write well, they speak well, language is different, heart is different* ',
'*Our heart is like a bird forced to migrate without learning to fly.🖤🔗* ',
'*Time does not heal everything, you realize that when you plant flowers on a grave...🥀* ',
'*We said good things take time, time took good things* ',
'*Do not look twice at what you can not have in life, now you can exit your profile :)*' ,
'*I am not the same for everyone. From whom did you listen to me...🥀*' ,
'*If you are in the dark, even your shadow leaves you alone.*' ,
'*Everything Good Is Forgotten You Remember Me Bad...🚬🥀*' ,
'*It is decency that makes beauty beautiful, and decency is a reason to love beauty ??*' ,
'*A bullet stands in my heart more honorable than you.*' ,
'*What Was The Poet Saying? A Wish Is Not Made To The Star Of Every Night...🕊* ',
'*And then she said to the dry leaf branch, do not forget our green days 🍀* ',
'*I knew that Allah would take my life, but I did not know that her servant would take my breath away.* ',
'*We Did not Have A Bright Enough To Light Up The Darkness Of The Night..😏🍷🥂* ',
'*I live not to be different, I live to be happy...🌹🙂* ',
'*I do not care about your return, my only concern was your departure...😒* ',
'*♤...♡...♤ what is the difference in the price of the watch on our wrist as every second of us goes to death ♤...♡...♤* ',
'*dont forget! Someone died by blowing the heart that you turned to ashes 🥀🕊️🍂* ',
'*I am strong... Because I have no other choice, I know I won not be able to catch up if I fall...🚬* ',
'*Temporary people teach permanent lessons🥀* ',
'*In this life, you are going to pull you out so that there is room for those who love you 🔥🤍* ',
'*If everything was as it is seen, the sea water you take in your hand would be blue, no one understood, I preferred to keep silent...* ',
'*Pleasing people is an unattainable goal, and pleasing God is a goal that should not be abandoned.. * ',
'*Dreams were nice too, if they could be lived...* ',
'*The World Is Just A Hell For Sensitive Hearts🥀* ',
'*I would not mind if they gave me the whole city, I hesitate when I am walking down that street* ',
'*Maybe I won not be a poet, but you will be the most beautiful poem I will ever lived 🍁🌹* ',
'*No good words come out of a cold heart, do not wait, you will get hurt...🥀* ',
'*I HOPE IT IS VALUABLE FOR THE VOICES THAT YOU PREFER..!* ',
'*We were buried in the wrong soil when we bloomed beautifully* ',
'*If I did what I forgive, they would not forgive 🙂* ',
'*We did not even have to drink tea, We got up and fell in love...🍂* ',
'*Let those who go go, let those who delete erase. If you have a bone to throw, you will have many dogs to come..! 😉* ',
'*All people who love beauty will fall for the wrong hearts again...💔😒☄️* ',
'*The sound that echoes even on a wall sometimes does not touch a persons heart. 🍂🖤* ',
'*your look! my legacy🗝️* ',
'*I looked at you once. My eyes could not see another garden..🍁🍂* ',
'*I had a nerve for every purse, but I used to laugh when I saw you❤☘* ',
'*I do not know how many prayers you will come after, but I sacrificed my hands to the sky ♥️...* ',
'*May my heart be the desire of my heart, let my pillow be made of stone..🕊🔐* ',
'*My dreams live as long as a butterfly 💔🥀* ',
'*It is not the age, but the experiences that make a person grow🖇️🍃* ',
'*I LOVED LONELINESS AS I KNEW PEOPLE ... 🙂🌹* ',
'*MY SILENCE WILL BE AS BRUTAL AS THE FIRST BULLET LEAVING THE BARREL*',
'*Pain Is not Important, Hope Tires You....😒💔* ',
]
let tgbio = tbio[Math.floor(Math.random() * (tbio.length))]
anu = `${tgbio}`
let message = await prepareWAMessageMedia({ video: fs.readFileSync('./TurboMedia/menuvideo.mp4'), gifPlayback: true }, { upload: Turbo.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
           hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator 💣',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Script 🌊',
                                    url: 'https://github.com/TURBOHYPER/Toxic-Alexa_V3'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu 🗞️',
                                    id: `${prefix}menu`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Thanks ❤️',
                                    id: `${prefix}oaaosj`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '👤Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }),{ userJid: m.chat })
                Turbo.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'opshehesend': {
const opsallhehesend =[
'*Wow Good Choice 😍*',
'*What A Crazy Person 😒*',
'*Thats A Bad Choice 💩*',
'*Some Thing Problem With Your Brain 🤥*',
'*Wow Wonderful 🌹*',
]
let opsallrg = opsallhehesend[Math.floor(Math.random() * (opsallhehesend.length))]
anu = `${opsallrg}`
reply(anu)
}
break
case 'translate': case 'trt': case 'tr': {
if (!text) return reply('*Give Me A Text*')
const { result } = await fetchJson(`https://api-toxic-devil.herokuapp.com/api/translator?text=${text}&lang=en`)
const { original, translated } = result
anu = `*Original Message: ${original}*\n\n*Translated Message: ${translated}*`
reply(anu)
}
break
case 'tiny': {
if (!text) return reply('*Give Me A Url*')
const { result } = await fetchJson(`https://api-toxic-devil.herokuapp.com/api/short/tiny?url=${text}`)
const { link } = result
anu = `*Original Link: ${text}*\n\n*Tiny Link: ${link}*`
reply(anu)
}
break
case 'log':
reply(JSON.stringify(m.message.extendedTextMessage.contextInfo, null, 3))
break
case 'rules':{
 anu = `*_RULES BOT_*
1. Do Not Spam Bot Command.
Sanctions: *Block*
2. Do Not Call Bot.
Sanctions: *Block*
,
3. Do Not Pm Bot.
Sanctions: *Permanen Block*
Any Bug Report To Turbo Type Bug And Enter The Bug
──「 *${global.ownernma}* 」── `
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./TurboMedia/slayer.jpg')}, { upload: Turbo.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: anu,
           hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
           hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator 💣',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Script 🌊',
                                    url: 'https://github.com/TURBOHYPER/Toxic-Alexa_V3'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'I Am Sorry 😕',
                                    id: `${prefix}aosjkwkje`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'I Will Not Do This Again 🙂',
                                    id: `${prefix}oaaosj`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '👤Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }),{ userJid: m.chat })
                Turbo.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'tts': {
const name = m.sender
const fkonn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '2347014889291@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${Turbo.getName(name)}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  const gtts = require('./lib/gtts.js')(args[0])
  if (args.length < 1) return Turbo.sendMessage(m.chat, `ᴇxᴀᴍᴘʟᴇ: ${prefix}ᴇɴ ʜᴇʟʟᴏ`, text, {quoted: m})
  if (args.length < 2) return Turbo.sendMessage(m.chat, `ᴇxᴀᴍᴘʟᴇ: ${prefix}ᴇɴ ʜᴇʟʟᴏ`, text, {quoted: m})
 var dtt = body.slice(20)
  reply(mess.wait)
  var ranm = getRandom('.mp3')
		var	rano = getRandom('.ogg')
				dtt.length > 300
         gtts.save(ranm, dtt, function() {
          exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
          fs.unlinkSync(ranm)
          buffer = fs.readFileSync(rano)
          if (err) return reply('error')
          Turbo.sendMessage(m.chat,  audio, {quoted: fkonn, ptt:true})
          Turbo.sendMessage(m.chat, { audio: buffer, mimetype: 'audio/mp4', ptt: true, quoted: fkonn})
          fs.unlinkSync(rano)
          })
          })
          }
  break
case 'mforward' : {      
if (!isCreator) throw mess.owner   
let q = m.quoted ? m.quoted : m
if (/audio|video/.test(mime)) { 
let media = await q.download()
if (!text) throw 'Jid?' 
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
Turbo.sendMessage(text, {audio: audio,
 mimetype: 'audio/mpeg',
 ptt:true,
 contextInfo: {externalAdReply : {title : `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
 renderLargerThumbnail:false,
 body: `𝗧𝚯𝗫𝗜𝗖 ₪ 𝗧𝗨𝗥𝗕𝚯`,
 mediaType: 2,
 thumbnail: fs.readFileSync('./TurboMedia/slayer.jpg'),
 mediaUrl: `www.instagram.com`,
 sourceUrl: `https://wa.me/2347014889291` }}}, {quoted:fakecatalogue2})
} else throw 'Reply audio/video!'
}
case 'checknumber':
  reply(mess.wait)
  const turboska = {
    method: 'GET',
    url: 'https://phonenumbervalidatefree.p.rapidapi.com/ts_PhoneNumberValidateTest.jsp',
    qs: {number: `${text}`},
    headers: {
      'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
      'X-RapidAPI-Host': 'phonenumbervalidatefree.p.rapidapi.com',
      useQueryString: true
    }
  };
  let dhidhi = require('request')
  dhidhi(turboska, function (error, response, body) {
    if (error) throw new Error(error);
    reply(body);
    console.log(body);
  });
break
case 'ipdomain':
    reply(mess.wait)
    const turbohacker = {
      method: 'GET',
      url: 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation',
      qs: {ip: `${text}`, apikey: '873dbe322aea47f89dcf729dcc8f60e8'},
      headers: {
        'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
        'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com',
        useQueryString: true
      }
    };
    let mhamha = require('request')
    mhamha(turbohacker, function (error, response, body) {
      if (error) throw new Error(error);
       reply(body);
      console.log(body);
    });
    break
case 'veriphone':
  reply(mess.wait)
  const turbodrop = {
    method: 'GET',
    url: 'https://veriphone.p.rapidapi.com/verify',
    qs: {phone: `${text}`},
    headers: {
      'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
      'X-RapidAPI-Host': 'veriphone.p.rapidapi.com',
      useQueryString: true
    }
  };
  let mhati = require('request')
  mhati(turbodrop, function (error, response, body) {
    if (error) throw new Error(error);
    reply(body);
    console.log(body);
  });
  break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await Turbo.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                reply(mess.success)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Turbo.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                reply(mess.success)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Turbo.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Turbo.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                reply(mess.success)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Turbo.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'block': {
        reply(mess.success)	
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Turbo.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'unblock': {
        reply(mess.success)	
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Turbo.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await Turbo.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await Turbo.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setppbot': case 'setbotpp': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                let media = await Turbo.downloadAndSaveMediaMessage(quoted)
                await Turbo.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
           case 'setppgroup': case 'setgrouppp': case 'setgcpp': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                let media = await Turbo.downloadAndSaveMediaMessage(quoted)
                await Turbo.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
case 'powner': case 'promoteowner': { //corded by turbo
            if (!m.isGroup) throw mess.group
                    if (!isBotAdmins) throw mess.botAdmin
                    if (!isCreator) throw mess.owner
                let users =   m.sender[0] ? m.sender : text.replace(/[^global.owner]/g, '')+'@s.whatsapp.net'
            await Turbo.groupParticipantsUpdate(m.chat,  [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
        }
        break
case 'grupinfo': case 'groupinfo':
try{
 var pic = await Turbo.getProfilePicture(m.chat)
  } catch {
 var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
  }
let ingfo = `*G R O U P  I N F O*\n\n*Name :* ${groupName}\n*ID Group :* ${m.chat}\n*Made :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n*Group Owner:* @${groupMetadata.owner.split('@')[0]}\n*Number Of Admins :* ${groupAdmins.length}\n*Number Of Participants :* ${participants.length}\n*Desc :* \n${groupMetadata.desc}`
ds = await getBuffer(pic)
Turbo.sendMessage(m.chat, { image: ds,caption: ingfo, mentions: [groupMetadata.owner] }, { quoted: m})
break
            case 'tagall': case 'tagallgroup': { 
                if (!m.isGroup) throw mess.group
                if (!isCreator) throw mess.owner
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Message : ${q ? q : 'blank'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                Turbo.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isAdmins) throw mess.admin
            Turbo.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // response when limit runs out
		db.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Enter Query text!'
                let anu = await styletext(text)
                let teks = `Entered Text:  ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	    break
               case 'startvote': {
            if (!m.isGroup) throw mess.group
            if (!isAdmins) throw mess.admin
            if (m.chat in vote) throw `_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`
            if (!text) throw `Enter Reason for Vote, Example: *${prefix + command} Owner is handsome*`
            reply(`Voting starts!\n\n*${prefix}upvote* - for yes\n*${prefix}devote* - for no\n*${prefix}checkvote* - to check the votes\n*${prefix}deletevote* - to delete vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*
*Reason:* ${vote[m.chat][0]}
┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}
 
└────
┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}
 
└────
*${prefix}deletevote* - to delete votes`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '👍🏻Up-Vote👍🏻'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '👎🏻De-Vote👎🏻'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: Turbo.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            Turbo.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*Type ${prefix}startvote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You have Voted'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*
*Reason:* ${vote[m.chat][0]}
┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────
┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────
*${prefix}hapusvote* - to delete votes`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '👍🏻Up-Vote👍🏻'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '👎🏻De-Vote👎🏻'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: Turbo.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            Turbo.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
case 'getcase':
if (!isCreator) return reply(mess.owner)
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("Turbo.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
replay(`${getCase(q)}`)
break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}startvote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You Have Voted'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*
*Reason:* ${vote[m.chat][0]}
┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────
┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────
*${prefix}hapusvote* - to delete votes`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '👍🏻Up-Vote👍🏻'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '👎🏻De-Vote👎🏻'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: Turbo.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            Turbo.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
teks_vote = `*「 VOTE 」*
*Reason:* ${vote[m.chat][0]}
┌〔 UPVOTE 〕
 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────
┌〔 DEVOTE 〕
 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────
*${prefix}hapusvote* - to delete votes
©${Turbo.user.id}
`
Turbo.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - to start voting`
            delete vote[m.chat]
            reply('Successfully Deleted Vote Session In This Group')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await Turbo.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Successful Closing The Group`)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await Turbo.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Successful Opening The Group`)).catch((err) => reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: '⭕Open⭕' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: '🚫Close🚫' }, type: 1 }
                    ]
                    await Turbo.sendButtonText(m.chat, buttons, `Group Mode`, Turbo.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await Turbo.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await Turbo.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Close Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: '⭕Open⭕' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: '🚫Close🚫' }, type: 1 }
                    ]
                    await Turbo.sendButtonText(m.chat, buttons, `Mode Edit Info`, Turbo.user.name, m)

            }
            }
            break
case 'antilink':
	        if (!m.isGroup) return reply(`This feature only be used in group`)
			if (!isAdmins) return reply(`This feature could be used by admin only`)
			if (!isBotAdmins) return reply(`Bot must be admin first`)
					if (args[0] === 'on') {
						if (isAntiLink) return reply('Already Activated')
						antilink.push(m.chat)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Successfully activated the antilink feature')
						Turbo.sendMessage(m.chat,  {text: `ALLERT!!! This group has been installed anti-link\nIf you violate then I will kick`})
					} else if (args[0] === 'off') {
						if (!isAntiLink) return reply('already deactivated')
						var ini = antilink.indexOf(m.chat)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Successfully disabled antilink feature')
					} else if (!q){
 reply(`Type Antilink On / Off `)
					}
					break 
					case 'antiwame': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.chats[m.chat].wame) return m.reply(`Already Activated`)
                db.chats[m.chat].wame = true
                m.reply(`Anti Wa.me Activated!`)
                } else if (args[0] === "off") {
                if (!db.chats[m.chat].wame) return m.reply(`Already deactivated`)
                db.chats[m.chat].wame = false
                m.reply(`Anti Wa.me is not activated!`)
                } else {
                 let buttons = [
                        { buttonId: 'antiwame on', buttonText: { displayText: '⭕On⭕' }, type: 1 },
                        { buttonId: 'antiwame off', buttonText: { displayText: '❌Off❌' }, type: 1 }
                    ]
                    await Turbo.sendButtonText(m.chat, buttons, `Mode Anti Wa.me`, Turbo.user.name, m)
                }
             }
             break
					   case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isCreator) throw mess.owner
                if (args[0] === "on") {
                if (db.chats[m.chat].mute) return reply(`Already activated`)
                db.chats[m.chat].mute = true
                reply(`${Turbo.user.name} has been muted in this group !`)
                } else if (args[0] === "off") {
                if (!db.chats[m.chat].mute) return reply(`Already deactivated`)
                db.chats[m.chat].mute = false
                reply(`${Turbo.user.name} has been unmuted in this group!`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: '⭕On⭕' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: '❌Off❌' }, type: 1 }
                    ]
                    await Turbo.sendButtonText(m.chat, buttons, `Mute Bot`, Turbo.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'grouplink': case 'gclink': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await Turbo.groupInviteCode(m.chat)
                Turbo.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink of: ${groupMetadata.subject} Group`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Enter the enable/disable value, For Example ${prefix}ephemeral enable'
                if (args[0] === 'enable') {
                    await Turbo.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await Turbo.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'The message was not sent by a bot!'
                Turbo.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Where is the text?\n\nExample : ${prefix + command} hello guys, am back`
                let getGroups = await Turbo.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} second`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: '💣 Sc 💣',
                                    url: 'https://github.com/TURBOHYPER/Toxic-Alexa_V3'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Owner Number👤',
                                    phoneNumber: 'https://wa.me/916380260672'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '📶Bot Status📶',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                      fatihgans = fs.readFileSync('./TurboMedia/slayer.jpg')
                      let txt = `「 Slayer Bot Broadcast 」\n\n${text}`
                      Turbo.send5ButImg(i, txt, Turbo.user.name, fatihgans, btn)
                    }
                reply(`Successful Sending Broadcast To ${anu.length} Group(s)`)
            }
            break
case 'updatebcgc': case 'bcgcupdate': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Where is the text?\n\nExample : ${prefix + command} hello guys, new update`
                let getGroups = await Turbo.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} second`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: '💣 Sc 💣',
                                    url: 'https://github.com/TURBOHYPER/Toxic-Alexa_V3'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Owner Number👤',
                                    phoneNumber: 'https://wa.me/916380260672'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '📶Bot Status📶',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                      fatihgans = fs.readFileSync('./TurboMedia/updata.jpg')
                      let txt = `「 Slayer New Update 」\n\n${text}`
                      Turbo.send5ButImg(i, txt, Turbo.user.name, fatihgans, btn)
                    }
                reply(`Successful Sending Broadcast To ${anu.length} Group(s)`)
            }
            break
case 'bcimage': case 'bcvideo': case 'bcaudio': {
                if (!isCreator) throw mess.owner
                if (!/video/.test(mime) && !/image/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply Video/Audio/Image You Want to Broadcast With Caption* ${prefix + command}`
                let anu = await store.chats.all().map(v => v.id)
                let ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "916380260672@s.whatsapp.net"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: fs.readFileSync('./TurboMedia/slayer.jpg'), surface: 200, message: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`, orderTitle: 'ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
                m.reply(`*Send Broadcast To* ${anu.length} *Group Chat, Time ${anu.length * 1.5} minutes*`)
                for (let i of anu) {
                    await sleep(1500)
                    let butoon = [{
                                urlButton: {
                                    displayText: `Owner`,
                                    url: 'https://wa.me/916380260672'
                                }
                            },
                            {
                                quickReplyButton: {
                                    displayText: 'MENU',
                                    id: 'menu'
                                }
                            }]
                    let media = await Turbo.downloadAndSaveMediaMessage(quoted)
                    let buffer = fs.readFileSync(media)
                    if (/webp/.test(mime)) {
                    Turbo.sendMessage(i, { sticker: { url: media } }, { quoted: fakesticker })
                    } else if (/image/.test(mime)) {
                    let junn = `*_BROADCAST IMAGE_*${text ? '\n\n' + text : ''}`
                    Turbo.send5ButImg(i, junn, `${global.botname}`, buffer, butoon)
                    } else if (/video/.test(mime)) {
                    let junn = `*_BROADCAST VIDEO*${text ? '\n\n' + text : ''}`
                    Turbo.sendMessage(i, {video: buffer, caption: `${junn}`}, { quoted: fvid })
                    } else if (/audio/.test(mime)) {
                    Turbo.sendMessage(i, {audio: buffer, mimetype: 'audio/mp4', ptt: true}, { quoted : fakecatalogue2 })
                    } else {
                    m.reply(`*Send/Reply Video/Audio/Image You Want to Broadcast With Caption* ${prefix + command}`)
                    }
                    await fs.unlinkSync(media)
                    }
                m.reply(` *Send Broadcast To* ${anu.length} *Chats*`)
            }
            break
case 'attp': {
           if (!text) return reply(`Example : ${prefix + command} text`)
           await Turbo.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'Turbo', 'morou', m, {asSticker: true})
         }
         break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Where is the text?\n\nExample : ${prefix + command} Slayer bot here`
                let anu = await store.chats.all().map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Chat\nIn ${anu.length * 1.5} second`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Script🔖',
                                    url: 'https://github.com/TURBOHYPER/Toxic-Alexa_V3'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: 'owner'
                                }
                            }]
                      fatihgans = fs.readFileSync('./TurboMedia/slayer.jpg')
                      let txt = `「 Slayer Bot Broadcast 」\n\n${text}`
                      Turbo.send5ButImg(yoi, txt, `Broadcast By ${global.pengguna}`, fatihgans, btn)
		}
		reply('Broadcast Success')
            }
            break
            case 'chatinfo': {
                if (!m.quoted) reply('Reply to mesaage')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'The message was not sent by a bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `⭔ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━⭔ *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Read' : 'Unread'}\n\n`
                }
                Turbo.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return reply('Reply Message!!')
		let wokwol = await Turbo.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return reply('The message you replied to does not contain a reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
case 'tempo': {
        if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
        var req = args.join(' ')
        media = await Turbo.downloadAndSaveMediaMessage(quoted, "tempo")
        ran = getRandom('.mp3')
        exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
        fs.unlinkSync(media)
        if (err) return reply('Error!')
        hah = fs.readFileSync(ran)
        Turbo.sendMessage(m.chat, {audio:hah, mimetype:'audio/mp4', ptt:true}, {quoted:m})
        fs.unlinkSync(ran)
        })
        }
        break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *PERSONAL CHAT LIST*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Name :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 Turbo.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 if (!isCreator) throw mess.owner	
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *GROUP CHAT LIST*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await Turbo.groupMetadata(i)
                     teks += `⬡ *Name :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 Turbo.sendTextWithMentions(m.chat, teks, m)
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Reply Video/Image With Caption ${prefix + command}`
            replay(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await Turbo.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
                let media = await quoted.download()
                let encmedia = await Turbo.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`
                }
            }
            break
            case 'ebinary': {
            if (!m.quoted.text && !text) throw `Send/reply text with caption ${prefix + command}`
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            reply(eb)
        }
        break
            case 'dbinary': {
            if (!m.quoted.text && !text) throw `Send/reply text with caption ${prefix + command}`
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            reply(db)
        }
        break
            case 'emojimix': {
	        if (!text) throw `Example : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await Turbo.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'image': case 'photo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `reply to a sticker with caption *${prefix + command}*`
                replay(mess.wait)
                let media = await Turbo.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    Turbo.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `reply to a sticker with caption *${prefix + command}*`
                replay(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await Turbo.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await Turbo.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want Audio With Caption ${prefix + command}`
            if (!quoted) throw `Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`
            replay(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            Turbo.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'mp3': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return replay(`Send/Reply Video/Audio You Want To Convert into MP3 With Caption ${prefix + command}`)
            if (!quoted) return replay(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            Turbo.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
            replay(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            Turbo.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'gif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `reply to a video with caption *${prefix + command}*`
                replay(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await Turbo.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await Turbo.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'url': {
                replay(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await Turbo.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await Turbo.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    replay(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    Turbo.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                Turbo.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `⭔ *Title* : ${g.title}\n`
                teks += `⭔ *Description* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                reply(teks)
                })
                }
                break
        case 'gimage': case 'googleimage': {
        if (!text) throw `Example : ${prefix + command} ml nana`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: Turbo.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Turbo.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case 'video': case 'song': {
                if (!text) throw `Example : ${prefix + command} look at me`
                let yts = require("yt-search")
                let search = await yts(text)
                    ngen = `
⭔ Title : ${search.videos[0].title}
⭔ Ext : Search
⭔ ID : ${search.videos[0].videoId}
⭔ Duration : ${search.videos[0].timestamp}
⭔ Viewers : ${search.videos[0].views}
⭔ Uploaded : ${search.videos[0].ago}
⭔ Author : ${search.videos[0].author.name}
⭔ Channel : ${search.videos[0].author.url}
⭔ Description : ${search.videos[0].description}
`
message = await prepareWAMessageMedia({ image : { url: search.videos[0].thumbnail } }, { upload:   Turbo.waUploadToServer })
                template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: ngen,
                            hydratedFooterText: `${global.botnma}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '🌊Video Source Link🌊',
                                    url: `${search.videos[0].url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🎵Audio🎵',
                                    id: `ytmp3 ${search.videos[0].url} 128kbps`
                                    }
                                },{quickReplyButton: {
                                    displayText: '🎥Video🎥',
                                    id: `ytmp4 ${search.videos[0].url} 360p`
                                     }
                                }, {
                                quickReplyButton: {
                                    displayText: '🔍Youtube Search',
                                    id: `ytsearch ${search.videos[0].url}`
                                    }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                  Turbo.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'ytmp3': case 'getmusic': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 320kbps`)
                if (!isUrl(args[0]) && !args[0].includes('youtube.com')) throw '*The link you provided is not valid*'
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                buf = await getBuffer(media.thumb)
                Turbo.sendMessage(m.chat, {audio:{url:media.dl_link}, mimetype:"audio/mpeg", fileName: `${media.title}.mp3`,  quoted: m, contextInfo: { externalAdReply:{
                title:media.title,
                body:"ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩",
                mediaType:2,
                thumbnail:buf,
                mediaUrl:`${text}`, 
                sourceUrl: `https://youtu.be/n2bvbnfd3Fg` }}}, {quoted:m})
                }
            break 
case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtu.be/W725IHjXFHY 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 999999) return reply('Video size is too big '+util.format(media))
                Turbo.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resololution : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
case 'play': {
  reply(mess.wait)
  if (!text) throw `Example : ${prefix + command} xxxtension songs`
  let yts = require("yt-search")
  let search = await yts(text)                   
let sections = []   
let listmenu = [`ytmp4 ${search.all[0].url}`,`ytmp3 ${search.all[1].url}`,`ytmp4 ${search.all[2].url}`,`ytmp3 ${search.all[3].url}`,`ytmp4 ${search.all[4].url}`,`ytmp3 ${search.all[5].url}`,`ytmp4 ${search.all[6].url}`,`ytmp3 ${search.all[7].url}`,`ytmp4 ${search.all[8].url}`,`ytmp3 ${search.all[9].url}`,`ytmp4 ${search.all[10].url}`,`ytmp3 ${search.all[11].url}`,`ytmp4 ${search.all[12].url}`,`ytmp3 ${search.all[13].url}`,`ytmp4 ${search.all[14].url}`,`ytmp3 ${search.all[15].url}`,`ytmp4 ${search.all[16].url}`,`ytmp3 ${search.all[17].url}`,`ytmp4 ${search.all[18].url}`,`ytmp3 ${search.all[19].url}`]
      let listmenuu = [`VIDEO MP4∆: ${search.all[0].title}`,`SONG MP3∆: ${search.all[1].title}`,`VIDEO MP4∆: ${search.all[2].title}`,`SONG MP3∆: ${search.all[3].title}`,`VIDEO MP4∆: ${search.all[4].title}`,`SONG MP3∆: ${search.all[5].title}`,`VIDEO MP4∆: ${search.all[6].title}`,`SONG MP3∆: ${search.all[7].title}`,`VIDEO MP4∆: ${search.all[8].title}`,`SONG MP3∆: ${search.all[9].title}`,`VIDEO MP4∆: ${search.all[10].title}`,`SONG MP3∆: ${search.all[11].title}`,`VIDEO MP4∆: ${search.all[12].title}`,`SONG MP3∆: ${search.all[13].title}`,`VIDEO MP4∆: ${search.all[14].title}`,`SONG MP3∆: ${search.all[15].title}`,`VIDEO MP4∆: ${search.all[16].title}`,`SONG MP3∆: ${search.all[17].title}`,`VIDEO MP4∆: ${search.all[18].title}`,`SONG MP3∆: ${search.all[19].title}`]
      let listmenuuu = [`\n${search.all[0].description}`,`\n${search.all[1].description}`,`\n${search.all[2].description}`,`\n${search.all[3].description}`,`\n${search.all[4].description}`,`\n${search.all[5].description}`,`\n${search.all[6].description}`,`\n${search.all[7].description}`,`\n${search.all[8].description}`,`\n${search.all[9].description}`,`\n${search.all[10].description}`,`\n${search.all[11].description}`,`\n${search.all[12].description}`,`\n${search.all[13].description}`,`\n${search.all[14].description}`,`\n${search.all[15].description}`,`\n${search.all[16].description}`,`\n${search.all[17].description}`,`\n${search.all[18].description}`,`\n${search.all[19].description}`]
      let nombor = 1
      let startnum = 0
      let startnumm = 0
      for (let x of listmenu) {
      const list = {title: 'RESULT NUMBER ' + nombor++,
      rows: [
         {
          title: `${listmenuu[startnum++]}`,
          description: `${listmenuuu[startnumm++]}`,
          rowId: `${prefix}${x}`
}, 
]
}
sections.push(list)   
}
const sendm =  Turbo.sendMessage(
m.chat, 
{
text: "\n\n*_DONE SCRAPING DATA_*",
footer: `${botnma}`,
title: `HERE IS YOUR RESULTS CHOMIE FROM *${text}* _select song or video below_`,
buttonText: "CLICK HERE",
sections
}, { quoted : m })
}
break
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return reply('Reply Message')
                if (!m.quoted.isBaileys) throw `Can only reply to messages from bots`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Maybe The Message You Replied Does Not Contain Ytsearch Results`
                let quality = args[1] ? args[1] : '320kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 999999) return reply('Audio size is too big '+util.format(media))
                Turbo.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolution : ${args[1] || '320kbps'}`, m)
                Turbo.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return reply('Reply To A Message That Has Been Already Sent')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Maybe the message you replied does not contain the ytsearch result`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return reply('File Over Limit '+util.format(media))
                Turbo.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolution : ${args[1] || '360p'}`,
contextInfo: { externalAdReply:{
title:media.title,
                body:"ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩",
                mediaType:2,
                thumbnail:buf,
                mediaUrl:`${text}`, 
                sourceUrl: `https://youtu.be/n2bvbnfd3Fg` }}}, {quoted: m})
            }
            break
            case 'pinterest': {
                replay(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                Turbo.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
            }
            break
	    case 'anime': case 'sfw': {
            let buttons = [
                    {buttonId: `sfw`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://api-toxic-devil.herokuapp.com/api/random/anime?type=sfw' },
                    caption: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ`,
                    footer: Turbo.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Turbo.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'catimg': case 'catimage': {
            let buttons = [
                    {buttonId: `catimg`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                const { image } = await fetchJson('https://api-toxic-devil.herokuapp.com/api/random/cats?text=TURBO%20APIS&type=img')
                let buttonMessage = {
                    image: { url: image },
                    caption: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ`,
                    footer: Turbo.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Turbo.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'rpp': case 'randomprofilephoto': {
            let buttons = [
                    {buttonId: `rpp`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://zenzapis.xyz/randomimage/profil?apikey=2ebe79bcf6ca' },
                    caption: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ`,
                    footer: Turbo.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Turbo.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'nsfw': {
            let buttons = [
                    {buttonId: `nsfw`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://api-toxic-devil.herokuapp.com/api/random/anime?type=nsfw' },
                    caption: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ`,
                    footer: Turbo.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Turbo.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'naruto': {
            let buttons = [
                    {buttonId: `naruto`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://turboapis.herokuapp.com/api/wallpaper/naruto?apikey=TurboMods' },
                    caption: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ`,
                    footer: Turbo.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Turbo.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'couplepp': case 'ppcouple': {
                replay(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                Turbo.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                Turbo.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffee': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕Random Coffee☕`,
                    footer: Turbo.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Turbo.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'emoji': {
if (!args.join(" ")) return reply('Where is the emoji?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await Turbo.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `Here it is...`}, {quoted:m})
await Turbo.sendMessage(m.chat, {text:"reply -s to this image to make sticker"}, {quoted:m})
})
}
break
            case 'wallpaper': {
                if (!text) throw 'Enter Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: Turbo.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Turbo.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Enter Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
                    footer: Turbo.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Turbo.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanimekdksksksksk': case 'quoteanimexllzlzkl': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: '➡️Next➡️'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                Turbo.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: '➡️Next➡️'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                Turbo.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'mediafire': {
if (!text) throw '*Enter a Link!*'
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw '*The link you provided is not valid*'
const turbo1 = await mediafireDl(text)
if (turbo1[0].size.split('MB')[0] >= 100) return m.reply('*File Over Limit* '+util.format(turbo1))
const result4 = `*▊▊▊MEDIAFIRE DL▊▊▊*
				
*Name* : ${turbo1[0].nama}
*Size* : ${turbo1[0].size}
*Mime* : ${turbo1[0].mime}
*Link* : ${turbo1[0].link}\n
_please wait slayer was made by turbo i will try to be fast as my master turbo_ 

*𝗧𝚯𝗫𝗜𝗖 𝗧𝗨𝗥𝗕𝚯*`
m.reply(`${result4}`)
Turbo.sendMessage(m.chat, { document : { url : turbo1[0].link}, fileName : turbo1[0].nama, mimetype: turbo1[0].mime }, { quoted : m }).catch ((err) => m.reply('*sorry error in turbo api*'))
}
break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                if (!text) throw `Example : ${prefix + command} text`
                replay(mess.wait)
                Turbo.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
	    case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
                if (!text) throw 'where is the text?'
                replay(mess.wait)
                Turbo.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                if (!text) throw 'No Query Text'
                replay(mess.wait)
                Turbo.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
            case 'keberuntungan11111': case 'luck211111': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                Turbo.sendText(m.chat, `⭔ *Name :* ${anu.message.nama}\n⭔ *Born :* ${anu.message.tgl_lahir}\n⭔ *Results :* ${anu.message.result}`, m)
            }
            break
            case 'memancing1111': case 'fishing1111': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                Turbo.sendText(m.chat, `⭔ *Date :* ${anu.message.tgl_memancing}\n⭔ *Results :* ${anu.message.result}\n⭔ *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur111111': case 'fertiletimekekskdk': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} first day of menstruation, cycle`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return reply(anu.message)
                Turbo.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiakjfjdkkd': case 'zodiackckdkdk': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return reply(anu.message)
                Turbo.sendText(m.chat, `⭔ *Zodiac :* ${anu.message.zodiak}\n⭔ *Number :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Flower :* ${anu.message.bunga_keberuntungan}\n⭔ *Color :* ${anu.message.warna_keberuntungan}\n⭔ *Rock :* ${anu.message.batu_keberuntungan}\n⭔ *Element :* ${anu.message.elemen_keberuntungan}\n⭔ *Zodiac Couple :* ${anu.message.pasangan_zodiak}\n⭔ *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'shiondkskskso': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return reply(anu.message)
                Turbo.sendText(m.chat, `⭔ *Results :* ${anu.message}`, m)
            }
            break
	        case 'tiktok': case 'tiktoknowm': {
                if (!text) throw 'Enter Query Link!'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '💁🏻‍♂️With Watermark🤔'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '🎵Audio🎵'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                Turbo.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'Enter Query Link!'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '🎥Video🎥'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '🎵Audio🎵'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                Turbo.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw 'Enter Query Link!'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '💁🏻‍♂️No Watermark💁🏻‍♂️'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '👀With Watermark👀'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await Turbo.sendMessage(m.chat, buttonMessage, { quoted: m })
		let { toAudio } = require('./lib/converter')
		let nganu = await getBuffer(anu.result.nowatermark)
		let cnvrt = await toAudio(nganu, 'mp4')
                Turbo.sendMessage(m.chat, { audio: cnvrt, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await Turbo.sendImage(m.chat, anu.result.img, `⭔ Title : ${anu.result.lagu}\n⭔ Album : ${anu.result.album}\n⭔ Singer : ${anu.result.penyanyi}\n⭔ Publish : ${anu.result.publish}\n⭔ Lyrics :\n${anu.result.lirik.result}`, m)
                Turbo.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await Turbo.sendImage(m.chat, anu.result.thumb, `⭔ Title : ${anu.result.title}\n⭔ Url : ${isUrl(text)[0]}`)
                Turbo.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Enter Query Link!'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '🎵Audio🎵'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                Turbo.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Enter Query Link!'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '🎥Video🎥'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await Turbo.sendMessage(m.chat, buttonMessage, { quoted: m })
                Turbo.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdlkxkxkx': case 'fbkckxkxk': case 'facebookjfkddkk': {
                if (!text) throw 'Enter Query Link!'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                Turbo.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `⭔ Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindlkxkdksk': case 'pinterestdlksksks': {
                if (!text) throw 'Enter Query Link!'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                Turbo.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'umma': case 'ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '🎵Audio🎵'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '🎥Video🎥'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
To download media, please click one of the buttons below or enter the ytmp3/ytmp4 command with the url above
`,
			footer: Turbo.user.name,
			buttons,
			headerType: 4
		    }
		    Turbo.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        Turbo.sendMessage(m.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		Turbo.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                replay(mess.wait)
                let media = await Turbo.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                Turbo.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Reply to the audio you want to change with caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Message!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `No hashes`
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.sticker[hash]
                reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*Hash List*
Info: *bold* hash is locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                Turbo.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Message!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.sticker)) throw 'Hash not found in database'
                global.db.sticker[hash].locked = !/^un/i.test(command)
                reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message You Want To Save In Database'
                if (!text) throw `Example : ${prefix + command} message name`
                let msgs = global.db.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}
View list of message with ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} msg name\n\nView message list with ${prefix}listmsg`
                let msgs = global.db.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' not registered in message list`
                Turbo.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.database
	        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' not listed in the message list`)
		delete msgs[text.toLowerCase()]
		reply(`Successfully deleted '${text}' from the message list`)
            }
	    break
	    case 'anonymous': {
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [{
                                urlButton: {
                                    displayText: 'Report Bug🐛',
                                    url: 'https://wa.me/916380260672?text=hello+bro+i+found+a+bug+in+your+bot'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👻Start Anonymous👻',
                                    id: 'start'
                                }
                            }]
                Turbo.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await Turbo.getName(m.sender)} Welcome To Anonymous Chat\n\nClick The Button Below To Find A Partner\`\`\``, Turbo.user.name, m)
            }
			break
case 'sendkontak': case 'sendcontact': {
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                    ]
                    await Turbo.sendButtonText(m.chat, buttons, `_You Are Not In Anonymous Session, Press The Button To Find A Partner_`)
                    throw false
                }
                let profile = await Turbo.profilePictureUrl(room.b)
                let status = await Turbo.fetchStatus(room.b)
                let msg = await Turbo.sendImage(room.a, profile, `Name : ${await Turbo.getName(room.b)}\nBio : ${status.status}\nUser : @${room.b.split("@")[0]}`, m, { mentions: [room.b] })
                Turbo.sendContact(room.a, [room.b.split("@")[0]], msg)
            }
            break
case 'request': case 'suggest': {
    if (!args.join(" ")) return m.reply(`Example : ${prefix + command} turbo can you add setmenu`)
    teks = `*▊▊▊REQUEST FEATURE▊▊▊*`
    teks1 = `\n\n*NUMBER :* @${m.sender.split("@")[0]}\n*REQUEST :* ${args.join(" ")}`
    teks2 = `\n\nSucces Send To Turbo`
    for (let i of owner) {
    Turbo.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
    }
    Turbo.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
    }
    break
    case 'amino': {
      if (!text) throw `what are you looking for!, example : ${prefix + command} naruto`
      
      let anu = await fetchJson(`https://violetics.pw/api/search/amino?apikey=beta&query=${text}`)
      m.reply(`${util.format(anu)}`)
      }
  break
case 'searchanime': {
                if (!text) throw `Example : ${prefix + command} nama anime`
                anu = await getBuffer(`https://api.akuari.my.id/search/konachan?query=${text}`)
                Turbo.sendMessage(m.chat, { image: anu, caption: `${command}` }, { quoted: m}).catch((err) => m.reply('*Sorry Team Toxic Api Server Is Down*'))
	            }
                break
case 'repo': case 'gitclone':
            let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
            if (!args[0]) throw 'link github  EXAMPLE: https://github.com/TURBOHYPER/Toxic-Alexa'
    if (!regex1.test(args[0])) throw 'link!'
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    // 'attachment; filenameq=ZidniGanz.zip'
    m.reply(`*Please wait, sending repository..*`)
    Turbo.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => m.reply('*Sorry, the github link you provided is private, and cant be made into a file*'))
			break
case 'tagme': {
Turbo.sendMessage(m.chat, {text:`@${m.sender.split("@")[0]}`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}
break
case 'autoreadsw': case 'autoreadstatus':
if (!isCreator) return reply(mess.owner)
if (args[0] == 'on') {
if (autoreadsw) return reply('*Already activated!*')
autoreadsw = true
reply('*Successfully activate auto read status*')
} else if (args[0] == 'off') {
if (!autoreadsw) return reply('*Already deactivated!*')
autoreadsw = false
reply('*Successfully turn off auto read status*')
} else {
reply('Choose on or off!')
}
break
            case 'keluar': case 'leave': {
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                    ]
                    await Turbo.sendButtonText(m.chat, buttons, `_You Are Not In Anonymous Session, Press The Button To Find A Partner_`)
                    throw false
                }
                reply('Ok')
                let other = room.other(m.sender)
                if (other) await Turbo.sendText(other, `_Partner Has Left Anonymous Session_`, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'stop', buttonText: { displayText: '😏Stop😏' }, type: 1 }
                    ]
                    await Turbo.sendButtonText(m.chat, buttons, `_You Are Still In Anonymous Session, Press The Button Below To Terminate Your Anonymous Session_`, Turbo.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: '🍃Skip🍃' }, type: 1 },
                        { buttonId: 'stop', buttonText: { displayText: '😏Stop😏' }, type: 1 }
                    ]
                    await Turbo.sendButtonText(room.a, buttons, `_Successfully Found Partner, Now You Can Send Messages_`, Turbo.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await Turbo.sendButtonText(room.b, buttons, `_Successfully Found Partner, Now You Can Send Messages_`, Turbo.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: '😏Stop😏' }, type: 1 }
                    ]
                    await Turbo.sendButtonText(m.chat, buttons, `_Please Wait, Looking For A Partner_`, Turbo.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                    ]
                    await Turbo.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In Anonymous Session, Press The Button To Find A Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await Turbo.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: '🍃Skip🍃' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: '😏Stop😏' }, type: 1 }
                    ]
                    await Turbo.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, Turbo.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await Turbo.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, Turbo.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: '😏Stop😏' }, type: 1 }
                    ]
                    await Turbo.sendButtonText(m.chat, buttons, `\`\`\`Please wait, looking for a partner\`\`\``, Turbo.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                Turbo.public = true
                reply('Successfully Changed To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                Turbo.public = false
                reply('Successfully Changed To Self Usage')
            }
            break
case 'restart':
if (!isCreator) throw mess.owner
reply(`*Restarting*`)
sleep(5000)
reply('*Success*')
break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}
Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
NodeJS Memory Usaage
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
 `.trim()
                reply(respon)
            }
            break
           case 'owner': case 'creator': {
                Turbo.sendContact(m.chat, global.owner, fakecatalogue2)
           const devsound = fs.readFileSync('./TurboMedia/owner.mp3') //u can change the music in TurboMedia folder
           Turbo.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })
            }
            break
                    case 'bug': case 'report': {
                    	if(!text) throw `Enter The Bug Example\n\n${command} Menu Error `
                    	Turbo.sendMessage(`916380260672@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
Report Message: ${text}` })
reply(`Successfully Reported To The Owner\n\nPlease Make Sure The Bug Is Valid, If You Play With This, Use This Feature Again And Again For No Reason, You Will Be Blocked For Sure !`)
                    }
                    break
case 'alive': case 'bot': case 'robot': case 'slayer': case 'alexa':{
                           	timestampe = speed();
latensie = speed() - timestampe
 anu = ``
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./TurboMedia/slayer.jpg')}, { upload: Turbo.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: anu,
           hydratedFooterText: `
╭────⬡ 𝐀𝐋𝐈𝐕𝐄 𝐔𝐒𝐄𝐑 :- ${pushname} ────⬡
│   
│𒆜 𝐁𝐎𝐓 𝐍𝐀𝐌𝐄 :- ${global.botnma}    
│𒆜 𝐎𝐖𝐍𝐄𝐑 𝐍𝐀𝐌𝐄 :- ${global.ownernma}
│𒆜 𝐎𝐖𝐍𝐄𝐑 𝐍𝐔𝐌𝐁𝐄𝐑 :- ${global.owner}
╰─⬡───⬡────────⬡───⬡──⬡
                                      │
╭─⬡───⬡ 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎 ⬡───⬡──⬡
│𒆜 ??𝐎𝐓 𝐑𝐔𝐍𝐍𝐈𝐍𝐆 : ${runtime(process.uptime())}
│𒆜 𝐏𝐋𝐀𝐓𝐅𝐎𝐑𝐌 : ${os.platform()}
│𒆜 𝐒𝐏𝐄𝐄𝐃 : ${latensie.toFixed(4)} miliseconds
│𒆜 𝐇𝐎𝐒𝐓𝐍𝐀𝐌𝐄 : ${os.hostname()}
╰─⬡───⬡────────⬡───⬡──⬡
                                      │
╭─⬡───⬡ 𝐆𝐑𝐎𝐔𝐏 𝐈𝐍𝐅𝐎 ⬡─⬡──⬡
│𒆜 𝐆𝐑𝐎𝐔𝐏 𝐍𝐀𝐌𝐄 :- ${groupName}
│𒆜 𝐆𝐑𝐎𝐔𝐏 𝐈𝐃 :- ${m.chat}
│𒆜 𝐆𝐑𝐎𝐔𝐏 𝐂𝐑𝐄𝐀𝐓𝐄𝐃 :- ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}
│𒆜 𝐆𝐑𝐎𝐔𝐏 𝐀𝐃𝐌𝐈𝐍𝐒 :- ${groupAdmins.length}
╰─⬡───⬡ ${pushname}  ⬡─⬡──⬡`,
           hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator 💣',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Script 🌊',
                                    url: 'https://github.com/TURBOHYPER/Toxic-Alexa_V3'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu 🗞️',
                                    id: `${prefix}menu`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Speed Test 🐌',
                                    id: `${prefix}ping`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '👤Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }),{ userJid: m.chat })
                Turbo.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'alive2': case 'bot2': case 'robot2': case 'slayer2': case 'alexa2':{
                           	timestampe = speed();
latensie = speed() - timestampe
const alivebuttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu 🗞️'}, type: 1},
{buttonId: `ping`, buttonText: {displayText: 'Speed Test 🐌'}, type: 1},
{buttonId: `owner`, buttonText: {displayText: '👤Owner'}, type: 1}
]
let buttonMessage = {
image: `fs.readFileSync('./TurboMedia/slayer.jpg')`,
jpegThumbnail: `fs.readFileSync('./TurboMedia/slayer.jpg')`,
caption: ``,
footer: `
╭────⬡ 𝐀𝐋𝐈𝐕𝐄 𝐔𝐒𝐄𝐑 :- ${pushname} ────⬡
│   
│𒆜 𝐁𝐎𝐓 𝐍𝐀𝐌𝐄 :- ${global.botnma}    
│𒆜 𝐎𝐖𝐍𝐄𝐑 𝐍𝐀𝐌𝐄 :- ${global.ownernma}
│𒆜 𝐎𝐖𝐍𝐄𝐑 𝐍𝐔𝐌𝐁𝐄𝐑 :- ${global.owner}
╰─⬡───⬡────────⬡───⬡──⬡
                                      │
╭─⬡───⬡ 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎 ⬡───⬡──⬡
│𒆜 ??𝐎𝐓 𝐑𝐔𝐍𝐍𝐈𝐍𝐆 : ${runtime(process.uptime())}
│𒆜 𝐏𝐋𝐀𝐓𝐅𝐎𝐑𝐌 : ${os.platform()}
│𒆜 𝐒𝐏𝐄𝐄𝐃 : ${latensie.toFixed(4)} miliseconds
│𒆜 𝐇𝐎𝐒𝐓𝐍𝐀𝐌𝐄 : ${os.hostname()}
╰─⬡───⬡────────⬡───⬡──⬡
                                      │
╭─⬡───⬡ 𝐆𝐑𝐎𝐔𝐏 𝐈𝐍𝐅𝐎 ⬡─⬡──⬡
│𒆜 𝐆𝐑𝐎𝐔𝐏 𝐍𝐀𝐌𝐄 :- ${groupName}
│𒆜 𝐆𝐑𝐎𝐔𝐏 𝐈𝐃 :- ${m.chat}
│𒆜 𝐆𝐑𝐎𝐔𝐏 𝐂𝐑𝐄𝐀𝐓𝐄𝐃 :- ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}
│𒆜 𝐆𝐑𝐎𝐔𝐏 𝐀𝐃𝐌𝐈𝐍𝐒 :- ${groupAdmins.length}
╰─⬡───⬡ ${pushname}  ⬡─⬡──⬡`,
buttons: [
{buttonId: `menu`, buttonText: {displayText: 'Menu 🗞️'}, type: 1},
{buttonId: `ping`, buttonText: {displayText: 'Speed Test 🐌'}, type: 1},
{buttonId: `owner`, buttonText: {displayText: '👤Owner'}, type: 1}
]
headerType: 4,
contextInfo:{externalAdReply:{
title:"I Deserve Something For My Hardwork",
body: "So Follow My github Account", 
thumbnail: fs.readFileSync("TurboMedia/slayer.jpg"),
mediaType:1,
mediaUrl: 'https://instagram.com/',
sourceUrl: "https://github.com/TURBOHYPER"
}}
}
let anu = `
╭────⬡ 𝐀𝐋𝐈𝐕𝐄 𝐔𝐒𝐄𝐑 :- ${pushname} ────⬡
│   
│𒆜 𝐁𝐎𝐓 𝐍𝐀𝐌𝐄 :- ${global.botnma}    
│𒆜 𝐎𝐖𝐍𝐄𝐑 𝐍𝐀𝐌𝐄 :- ${global.ownernma}
│𒆜 𝐎𝐖𝐍𝐄𝐑 𝐍𝐔𝐌𝐁𝐄𝐑 :- ${global.owner}
╰─⬡───⬡────────⬡───⬡──⬡
                                      │
╭─⬡───⬡ 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎 ⬡───⬡──⬡
│𒆜 ??𝐎𝐓 𝐑𝐔𝐍𝐍𝐈𝐍𝐆 : ${runtime(process.uptime())}
│𒆜 𝐏𝐋𝐀𝐓𝐅𝐎𝐑𝐌 : ${os.platform()}
│𒆜 𝐒𝐏𝐄𝐄𝐃 : ${latensie.toFixed(4)} miliseconds
│𒆜 𝐇𝐎𝐒𝐓𝐍𝐀𝐌𝐄 : ${os.hostname()}
╰─⬡───⬡────────⬡───⬡──⬡
                                      │
╭─⬡───⬡ 𝐆𝐑𝐎𝐔𝐏 𝐈𝐍𝐅𝐎 ⬡─⬡──⬡
│𒆜 𝐆𝐑𝐎𝐔𝐏 𝐍𝐀𝐌𝐄 :- ${groupName}
│𒆜 𝐆𝐑𝐎𝐔𝐏 𝐈𝐃 :- ${m.chat}
│𒆜 𝐆𝐑𝐎𝐔𝐏 𝐂𝐑𝐄𝐀𝐓𝐄𝐃 :- ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}
│𒆜 𝐆𝐑𝐎𝐔𝐏 𝐀𝐃𝐌𝐈𝐍𝐒 :- ${groupAdmins.length}
╰─⬡───⬡ ${pushname}  ⬡─⬡──⬡`
Turbo.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
            case 'list': case 'menu': case 'help': case '?': {
timestampe = speed();
latensie = speed() - timestampe
let contentText = `Hi 🤚 ${pushname}
How Are You? 😊
╭─⬣「 INFO BOT 」⬣
│
│ Sᴘᴇᴇᴅ : ${latensie.toFixed(4)} miliseconds
│ Rᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
│ Bᴏᴛ Nᴀᴍᴇ : ${global.botnma}
│ Oᴡɴᴇʀ Nᴀᴍᴇ : ${global.ownernma}
│ Oᴡɴᴇʀ Nᴜᴍʙᴇʀ : ${global.owner}
│ Hᴏꜱᴛ Nᴀᴍᴇ : ${os.hostname()}
│ Pʟᴀᴛꜰᴏʀᴍ : ${os.platform()}
╰─⬣
Please Select Button Below
`

let buttons = [{
urlButton: {
displayText: 'YouTube🦠',
url: 'https://youtu.be/W725IHjXFHY'
}
}, {
urlButton: {
displayText: 'Script🌊',
url: 'https://github.com/TURBOHYPER/Toxic-Alexa_V3'
}
}, {
quickReplyButton: {
displayText: 'Menu 🗞️',
id: `${prefix}allmenu`
}
}, {
quickReplyButton: {
displayText: '🦄 List Menu 🦄',
id: `${prefix}command`
}
}, {
quickReplyButton: {
displayText: '👤Owner👤',
id: `${prefix}owner`
}
}]

let footer = ``
let video = fs.readFileSync('./TurboMedia/menuvideo.mp4')
let thumb = fs.readFileSync('./TurboMedia/slayer.jpg')

let message = await prepareWAMessageMedia({ video: fs.readFileSync('./TurboMedia/menuvideo.mp4'), gifPlayback: true }, { upload: Turbo.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           jpegThumbnail: fs.readFileSync('./TurboMedia/slayer.jpg'),
           hydratedContentText: contentText,
           hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
           hydratedButtons: [{
                                urlButton: {
displayText: 'YouTube🦠',
url: 'https://youtu.be/W725IHjXFHY'
}
}, {
urlButton: {
displayText: 'Script🌊',
url: 'https://github.com/TURBOHYPER/Toxic-Alexa_V3'
}
}, {
quickReplyButton: {
displayText: 'Menu 🗞️',
id: `${prefix}allmenu`
}
}, {
quickReplyButton: {
displayText: '🦄 List Menu 🦄',
id: `${prefix}command`
}
}, {
quickReplyButton: {
displayText: '👤Owner👤',
id: `${prefix}owner`
}
}]
                        }
                    }
                }), { userJid: m.chat })
                Turbo.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'command':{
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hi ${pushname}`,
                    description: `╭─⬣「 INFO BOT 」⬣
│
│ Sᴘᴇᴇᴅ : ${latensie.toFixed(4)} miliseconds
│ Rᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
│ Bᴏᴛ Nᴀᴍᴇ : ${global.botnma}
│ Oᴡɴᴇʀ Nᴀᴍᴇ : ${global.ownernma}
│ Oᴡɴᴇʀ Nᴜᴍʙᴇʀ : ${global.owner}
│ Hᴏꜱᴛ Nᴀᴍᴇ : ${os.hostname()}
│ Pʟᴀᴛꜰᴏʀᴍ : ${os.platform()}
╰─⬣`,
                    buttonText: "Click Here",
                    footerText: "_Slayer-Bot_",
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Group Features",
								"rows": [
									{
										"title": "Group Menu",
										"description": "Displays The List Of Group Features",
										"rowId": `${prefix}grupmenu`
									}
								]
							},
							{
								"title": "Bot Features",
								"rows": [
									{
										"title": "All Menu",
										"description": "Displays The List Of All The Features!",
										"rowId": `${prefix}allmenu`
									},
									{
										"title": "Download Menu",
										"description": "Displays The List Of Download Features",
										"rowId": `${prefix}downloadmenu`
									},
									{
										"title": "Search Menu",
										"description": "Displays The List Of Searching Features",
										"rowId": `${prefix}searchmenu`
									},
										{
										"title": "Tools Menu",
										"description": "Displays The List Of Tools Features",
										"rowId": `${prefix}toolsmenu`
									},
										{
											"title": "Image Menu",
										"description": "Displays The List Of Image Features",
										"rowId": `${prefix}imagemenu`
										},
										{
											"title": "Fun Menu",
										"description": "Displays The List Of Fun Features",
										"rowId": `${prefix}funmenu`
										},
										{
											"title": "Convert Menu",
										"description": "Displays The List Of Convert Features",
										"rowId": `${prefix}convertmenu`
										},
										{
										"title": "Main Menu",
										"description": "Displays The List Of Main Features",
										"rowId": `${prefix}nocategorymenu`
										},
										{
											"title": "Database Menu",
										"description": "Displays The List Of Database Features",
										"rowId": `${prefix}databasemenu`
										},
										{
											"title": "Voice Changer Menu",
										"description": "Displays The List Of Voice Changing Features",
										"rowId": `${prefix}voicemenu`
										}
								]
							},
							{
								"title": "Chat with fellow users",
								"rows": [
									{
										"title": "Anonymous Chat Menu",
										"description": "Displays The List Of Anonymous Chat Features",
										"rowId": `${prefix}anonymouschatmenu`
									}
								]
							},
							{
								"title": "Group System",
								"rows": [
									{
										"title": "System Menu",
										"description": "Displays The List Of Group System Features",
										"rowId": `${prefix}sistemmenu`
									}
								]
							},
							{
								"title": "Owner",
								"rows": [
									{
										"title": "Owner Menu",
										"description": "Displays The List Of Owner Features",
										"rowId": `${prefix}ownermenu`
									}
								]
							},
							{
								"title": "Credit",
								"rows": [
									{
										"title": "Thanks To",
										"description": "Displays The List Of Credit Of The Bot !!",
										"rowId": `${prefix}tqtt`
									}
								]
							}
						],
          listType: 1
                }
            }), {})
            Turbo.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'grupmenu': {
	            anu = `
╭─⬣「 INFO BOT 」⬣
│
│ Sᴘᴇᴇᴅ : ${latensie.toFixed(4)} miliseconds
│ Rᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
│ Bᴏᴛ Nᴀᴍᴇ : ${global.botnma}
│ Oᴡɴᴇʀ Nᴀᴍᴇ : ${global.ownernma}
│ Oᴡɴᴇʀ Nᴜᴍʙᴇʀ : ${global.owner}
│ Hᴏꜱᴛ Nᴀᴍᴇ : ${os.hostname()}
│ Pʟᴀᴛꜰᴏʀᴍ : ${os.platform()}
╰─⬣
    *Group Menu*
  
  ➙ ${prefix}grouplink
  ➙ ${prefix}ephemeral [option]
  ➙ ${prefix}setgrouppp
  ➙ ${prefix}setname [text]
  ➙ ${prefix}group [option]
  ➙ ${prefix}editinfo [option]
  ➙ ${prefix}grupinfo
  ➙ ${prefix}add @user
  ➙ ${prefix}kick @user
  ➙ ${prefix}promote @user
  ➙ ${prefix}demote @user
  ➙ ${prefix}warn
  ➙ ${prefix}startvote
  ➙ ${prefix}vote
  ➙ ${prefix}devote
  ➙ ${prefix}delvote
  ➙ ${prefix}tagme
  ➙ ${prefix}log
  `
  let message = await prepareWAMessageMedia({ video: fs.readFileSync('./TurboMedia/menuvideo.mp4'), gifPlayback: true }, { upload: Turbo.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
           hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator ✨',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner??',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Turbo.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'downloadmenu': {
	okemenu = `
╭─⬣「 INFO BOT 」⬣
│
│ Sᴘᴇᴇᴅ : ${latensie.toFixed(4)} miliseconds
│ Rᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
│ Bᴏᴛ Nᴀᴍᴇ : ${global.botnma}
│ Oᴡɴᴇʀ Nᴀᴍᴇ : ${global.ownernma}
│ Oᴡɴᴇʀ Nᴜᴍʙᴇʀ : ${global.owner}
│ Hᴏꜱᴛ Nᴀᴍᴇ : ${os.hostname()}
│ Pʟᴀᴛꜰᴏʀᴍ : ${os.platform()}
╰─⬣
	
	*Downloader Menu*
  
  ➙ ${prefix}tiktoknowm [url]
  ➙ ${prefix}tiktokwm [url]
  ➙ ${prefix}tiktokmp3 [url]
  ➙ ${prefix}instagram [url]
  ➙ ${prefix}ig [username]
  ➙ ${prefix}twitter [url]
  ➙ ${prefix}twittermp3 [url]
  ➙ ${prefix}ytmp3 [url]
  ➙ ${prefix}ytmp4 [url]
  ➙ ${prefix}getmusic [query]
  ➙ ${prefix}getvideo [query
  ➙ ${prefix}repo
  ➙ ${prefix}mediafire
  `
  let message = await prepareWAMessageMedia({ video: fs.readFileSync('./TurboMedia/menuvideo.mp4'), gifPlayback: true }, { upload: Turbo.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: downloadmenu,
           hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬??𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
           hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator ✨',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Turbo.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break 
            case 'searchmenu': {
            	anu = `
╭─⬣「 INFO BOT 」⬣
│
│ Sᴘᴇᴇᴅ : ${latensie.toFixed(4)} miliseconds
│ Rᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
│ Bᴏᴛ Nᴀᴍᴇ : ${global.botnma}
│ Oᴡɴᴇʀ Nᴀᴍᴇ : ${global.ownernma}
│ Oᴡɴᴇʀ Nᴜᴍʙᴇʀ : ${global.owner}
│ Hᴏꜱᴛ Nᴀᴍᴇ : ${os.hostname()}
│ Pʟᴀᴛꜰᴏʀᴍ : ${os.platform()}
╰─⬣
            
              *Search Menu*
  
  ➙ ${prefix}song [query]
  ➙ ${prefix}video [query]
  ➙ ${prefix}yts [query]
  ➙ ${prefix}google [query]
  ➙ ${prefix}gimage [query]
  ➙ ${prefix}pinterest [query]
  ➙ ${prefix}wallpaper [query]
  ➙ ${prefix}wikimedia [query]
  ➙ ${prefix}ytsearch [query]
  ➙ ${prefix}true [number]
  ➙ ${prefix}weather [country code or name]
  ➙ ${prefix}itunes [song name]
  ➙ ${prefix}encode [text]
  ➙ ${prefix}decode [text]
  ➙ ${prefix}lyrics [song name]
  ➙ ${prefix}searchanime
  ➙ ${prefix}pokedex
  `
  let message = await prepareWAMessageMedia({ video: fs.readFileSync('./TurboMedia/menuvideo.mp4'), gifPlayback: true }, { upload: Turbo.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
           hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator ✨',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Turbo.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'randommenu': {
	anu = `
╭─⬣「 INFO BOT 」⬣
│
│ Sᴘᴇᴇᴅ : ${latensie.toFixed(4)} miliseconds
│ Rᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
│ Bᴏᴛ Nᴀᴍᴇ : ${global.botnma}
│ Oᴡɴᴇʀ Nᴀᴍᴇ : ${global.ownernma}
│ Oᴡɴᴇʀ Nᴜᴍʙᴇʀ : ${global.owner}
│ Hᴏꜱᴛ Nᴀᴍᴇ : ${os.hostname()}
│ Pʟᴀᴛꜰᴏʀᴍ : ${os.platform()}
╰─⬣
	
	*Random Menu*
  
  ➙ ${prefix}coffee
  ➙ ${prefix}couplepp
  ➙ ${prefix}fake
  ➙ ${prefix}bio
  ➙ ${prefix}joke
  ➙ ${prefix}fact
  ➙ ${prefix}catimg
  ➙ ${prefix}rpp
  ➙ ${prefix}wyr
  ➙ ${prefix}naruto
  ➙ ${prefix}sexy
  `
  let message = await prepareWAMessageMedia({ video: fs.readFileSync('./TurboMedia/menuvideo.mp4'), gifPlayback: true }, { upload: Turbo.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
           hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator ✨',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Turbo.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'funmenu': {
	anu = `
╭─⬣「 INFO BOT 」⬣
│
│ Sᴘᴇᴇᴅ : ${latensie.toFixed(4)} miliseconds
│ Rᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
│ Bᴏᴛ Nᴀᴍᴇ : ${global.botnma}
│ Oᴡɴᴇʀ Nᴀᴍᴇ : ${global.ownernma}
│ Oᴡɴᴇʀ Nᴜᴍʙᴇʀ : ${global.owner}
│ Hᴏꜱᴛ Nᴀᴍᴇ : ${os.hostname()}
│ Pʟᴀᴛꜰᴏʀᴍ : ${os.platform()}
╰─⬣
	
	*Fun Menu*
  
  ➙ ${prefix}math
  ➙ ${prefix}when
  ➙ ${prefix}wangy
  ➙ ${prefix}couple
  ➙ ${prefix}checkdeath
  ➙ ${prefix}mysoulmate
  ➙ ${prefix}covid
  ➙ ${prefix}gender
  `
  let message = await prepareWAMessageMedia({ video: fs.readFileSync('./TurboMedia/menuvideo.mp4'), gifPlayback: true }, { upload: Turbo.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
           hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator ✨',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Turbo.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'voicemenu': {
	anu = `
╭─⬣「 INFO BOT 」⬣
│
│ Sᴘᴇᴇᴅ : ${latensie.toFixed(4)} miliseconds
│ Rᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
│ Bᴏᴛ Nᴀᴍᴇ : ${global.botnma}
│ Oᴡɴᴇʀ Nᴀᴍᴇ : ${global.ownernma}
│ Oᴡɴᴇʀ Nᴜᴍʙᴇʀ : ${global.owner}
│ Hᴏꜱᴛ Nᴀᴍᴇ : ${os.hostname()}
│ Pʟᴀᴛꜰᴏʀᴍ : ${os.platform()}
╰─⬣
	
	*Voice Changer Menu*
	
  ➙ ${prefix}bass
  ➙ ${prefix}blown
  ➙ ${prefix}deep
  ➙ ${prefix}earrape
  ➙ ${prefix}fast
  ➙ ${prefix}fat
  ➙ ${prefix}nightcore
  ➙ ${prefix}reverse
  ➙ ${prefix}robot
  ➙ ${prefix}slow
  ➙ ${prefix}squirrel
`
let message = await prepareWAMessageMedia({ video: fs.readFileSync('./TurboMedia/menuvideo.mp4'), gifPlayback: true }, { upload: Turbo.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
           hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator ✨',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Turbo.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'religionmenukdksoejdjj': {
	anu = `
╭─⬣「 INFO BOT 」⬣
│
│ Sᴘᴇᴇᴅ : ${latensie.toFixed(4)} miliseconds
│ Rᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
│ Bᴏᴛ Nᴀᴍᴇ : ${global.botnma}
│ Oᴡɴᴇʀ Nᴀᴍᴇ : ${global.ownernma}
│ Oᴡɴᴇʀ Nᴜᴍʙᴇʀ : ${global.owner}
│ Hᴏꜱᴛ Nᴀᴍᴇ : ${os.hostname()}
│ Pʟᴀᴛꜰᴏʀᴍ : ${os.platform()}
╰─⬣
	
	*Religion Menu*
	
     (Islamic)
  ➙ ${prefix}iqra
  ➙ ${prefix}hadith
  ➙ ${prefix}alquran
  ➙ ${prefix}juzamma
  ➙ ${prefix}tafsirsurah`
  
let message = await prepareWAMessageMedia({ video: fs.readFileSync('./TurboMedia/menuvideo.mp4'), gifPlayback: true }, { upload: Turbo.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
           hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator ✨',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Turbo.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'horoscopemenukcodk': {
	anu = `
╭─⬣「 INFO BOT 」⬣
│
│ Sᴘᴇᴇᴅ : ${latensie.toFixed(4)} miliseconds
│ Rᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
│ Bᴏᴛ Nᴀᴍᴇ : ${global.botnma}
│ Oᴡɴᴇʀ Nᴀᴍᴇ : ${global.ownernma}
│ Oᴡɴᴇʀ Nᴜᴍʙᴇʀ : ${global.owner}
│ Hᴏꜱᴛ Nᴀᴍᴇ : ${os.hostname()}
│ Pʟᴀᴛꜰᴏʀᴍ : ${os.platform()}
╰─⬣
	
	*Horoscope Menu*
  
  ➙ ${prefix}hockeynumber
  ➙ ${prefix}dreammeaning
  ➙ ${prefix}namemeaning
  ➙ ${prefix}fortunetelling
  ➙ ${prefix}marriageprediction
  ➙ ${prefix}wife&husband
  ➙ ${prefix}fortunetelling2
  ➙ ${prefix}matchname
  ➙ ${prefix}couplematch
  ➙ ${prefix}married
  ➙ ${prefix}businessnature
  ➙ ${prefix}sustenance
  ➙ ${prefix}profession
  ➙ ${prefix}fate
  ➙ ${prefix}potentialdisease
  ➙ ${prefix}tarot
  ➙ ${prefix}fengshui
  ➙ ${prefix}goodday
  ➙ ${prefix}badday
  ➙ ${prefix}unluckyday
  ➙ ${prefix}dragonday
  ➙ ${prefix}sustenance2
  ➙ ${prefix}luck
  ➙ ${prefix}weton
  ➙ ${prefix}character
  ➙ ${prefix}luck2
  ➙ ${prefix}fishing
  ➙ ${prefix}fertiletime
  ➙ ${prefix}zodiac
  ➙ ${prefix}shio`
  
  let message = await prepareWAMessageMedia({ video: fs.readFileSync('./TurboMedia/menuvideo.mp4'), gifPlayback: true }, { upload: Turbo.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
           hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator ✨',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '??Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Turbo.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'convertmenu': {
	anu = `
╭─⬣「 INFO BOT 」⬣
│
│ Sᴘᴇᴇᴅ : ${latensie.toFixed(4)} miliseconds
│ Rᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
│ Bᴏᴛ Nᴀᴍᴇ : ${global.botnma}
│ Oᴡɴᴇʀ Nᴀᴍᴇ : ${global.ownernma}
│ Oᴡɴᴇʀ Nᴜᴍʙᴇʀ : ${global.owner}
│ Hᴏꜱᴛ Nᴀᴍᴇ : ${os.hostname()}
│ Pʟᴀᴛꜰᴏʀᴍ : ${os.platform()}
╰─⬣
	
	*Convert Menu*
  
  ➙ ${prefix}photo
  ➙ ${prefix}removebg
  ➙ ${prefix}sticker
  ➙ ${prefix}take
  ➙ ${prefix}emojimix
  ➙ ${prefix}tovideo
  ➙ ${prefix}togif
  ➙ ${prefix}url
  ➙ ${prefix}ebinary
  ➙ ${prefix}dbinary
  ➙ ${prefix}attp
  ➙ ${prefix}emoji
  ➙ ${prefix}tempo
  ➙ ${prefix}translate
  ➙ ${prefix}wame
  ➙ ${prefix}tiny
  ➙ ${prefix}tts
  `
  let message = await prepareWAMessageMedia({ video: fs.readFileSync('./TurboMedia/menuvideo.mp4'), gifPlayback: true }, { upload: Turbo.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
           hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator ✨',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Turbo.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'nocategorymenu': {
	anu = `
╭─⬣「 INFO BOT 」⬣
│
│ Sᴘᴇᴇᴅ : ${latensie.toFixed(4)} miliseconds
│ Rᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
│ Bᴏᴛ Nᴀᴍᴇ : ${global.botnma}
│ Oᴡɴᴇʀ Nᴀᴍᴇ : ${global.ownernma}
│ Oᴡɴᴇʀ Nᴜᴍʙᴇʀ : ${global.owner}
│ Hᴏꜱᴛ Nᴀᴍᴇ : ${os.hostname()}
│ Pʟᴀᴛꜰᴏʀᴍ : ${os.platform()}
╰─⬣
	*Main Menu*
  
  ➙ ${prefix}ping
  ➙ ${prefix}owner
  ➙ ${prefix}donate
  ➙ ${prefix}menu / ${prefix}help / ${prefix}?
  ➙ ${prefix}delete
  ➙ ${prefix}chatinfo
  ➙ ${prefix}quoted
  ➙  ${prefix}rules
  ➙ ${prefix}listpc
  ➙ ${prefix}listgc
  ➙ ${prefix}listonline
  ➙ ${prefix}report (report bug to owner)
  `
  let message = await prepareWAMessageMedia({ video: fs.readFileSync('./TurboMedia/menuvideo.mp4'), gifPlayback: true }, { upload: Turbo.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
           hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator ✨',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Turbo.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'databasemenu': {
	anu = `
╭─⬣「 INFO BOT 」⬣
│
│ Sᴘᴇᴇᴅ : ${latensie.toFixed(4)} miliseconds
│ Rᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
│ Bᴏᴛ Nᴀᴍᴇ : ${global.botnma}
│ Oᴡɴᴇʀ Nᴀᴍᴇ : ${global.ownernma}
│ Oᴡɴᴇʀ Nᴜᴍʙᴇʀ : ${global.owner}
│ Hᴏꜱᴛ Nᴀᴍᴇ : ${os.hostname()}
│ Pʟᴀᴛꜰᴏʀᴍ : ${os.platform()}
╰─⬣
	
	*Database Menu*
  
  ➙ ${prefix}setcmd
  ➙ ${prefix}listcmd
  ➙ ${prefix}delcmd
  ➙ ${prefix}lockcmd
  ➙ ${prefix}addmsg
  ➙ ${prefix}listmsg
  ➙ ${prefix}getmsg
  ➙ ${prefix}delmsg
  `
  let message = await prepareWAMessageMedia({ video: fs.readFileSync('./TurboMedia/menuvideo.mp4'), gifPlayback: true }, { upload: Turbo.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
           hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator ✨',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Turbo.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'anonymouschatmenu': {
	anu = `
╭─⬣「 INFO BOT 」⬣
│
│ Sᴘᴇᴇᴅ : ${latensie.toFixed(4)} miliseconds
│ Rᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
│ Bᴏᴛ Nᴀᴍᴇ : ${global.botnma}
│ Oᴡɴᴇʀ Nᴀᴍᴇ : ${global.ownernma}
│ Oᴡɴᴇʀ Nᴜᴍʙᴇʀ : ${global.owner}
│ Hᴏꜱᴛ Nᴀᴍᴇ : ${os.hostname()}
│ Pʟᴀᴛꜰᴏʀᴍ : ${os.platform()}
╰─⬣
	
	*Anonymous Menu*
	
  ➙ ${prefix}start ( Start Chat )
  ➙ ${prefix}next ( Next user )
  ➙ ${prefix}stop ( stop Anonymous chat )
	`
	  let message = await prepareWAMessageMedia({ video: fs.readFileSync('./TurboMedia/menuvideo.mp4'), gifPlayback: true }, { upload: Turbo.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
           hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator ✨',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Turbo.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'toolsmenu': {
	anu = `
╭─⬣「 INFO BOT 」⬣
│
│ Sᴘᴇᴇᴅ : ${latensie.toFixed(4)} miliseconds
│ Rᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
│ Bᴏᴛ Nᴀᴍᴇ : ${global.botnma}
│ Oᴡɴᴇʀ Nᴀᴍᴇ : ${global.ownernma}
│ Oᴡɴᴇʀ Nᴜᴍʙᴇʀ : ${global.owner}
│ Hᴏꜱᴛ Nᴀᴍᴇ : ${os.hostname()}
│ Pʟᴀᴛꜰᴏʀᴍ : ${os.platform()}
╰─⬣
	
	*Tools Menu*
	
  ➙ ${prefix}checknumber
  ➙ ${prefix}encode [text]
  ➙ ${prefix}decode [text]
  ➙ ${prefix}log
  ➙ ${prefix}ipdomain
  ➙ ${prefix}veriphone
	`
	  let message = await prepareWAMessageMedia({ video: fs.readFileSync('./TurboMedia/menuvideo.mp4'), gifPlayback: true }, { upload: Turbo.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
           hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator ✨',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Turbo.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'sistemmenu': {
	anu = `
╭─⬣「 INFO BOT 」⬣
│
│ Sᴘᴇᴇᴅ : ${latensie.toFixed(4)} miliseconds
│ Rᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
│ Bᴏᴛ Nᴀᴍᴇ : ${global.botnma}
│ Oᴡɴᴇʀ Nᴀᴍᴇ : ${global.ownernma}
│ Oᴡɴᴇʀ Nᴜᴍʙᴇʀ : ${global.owner}
│ Hᴏꜱᴛ Nᴀᴍᴇ : ${os.hostname()}
│ Pʟᴀᴛꜰᴏʀᴍ : ${os.platform()}
╰─⬣
	
	*System Menu*
	
  ➙ ${prefix}antilink On/Off
  ➙ ${prefix}mute On/Off
  ➙ ${prefix}antiwame On/Off
`
let message = await prepareWAMessageMedia({ video: fs.readFileSync('./TurboMedia/menuvideo.mp4'), gifPlayback: true }, { upload: Turbo.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
           hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator ✨',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Turbo.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
  case 'ownermenu': {
  	anu = `
╭─⬣「 INFO BOT 」⬣
│
│ Sᴘᴇᴇᴅ : ${latensie.toFixed(4)} miliseconds
│ Rᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
│ Bᴏᴛ Nᴀᴍᴇ : ${global.botnma}
│ Oᴡɴᴇʀ Nᴀᴍᴇ : ${global.ownernma}
│ Oᴡɴᴇʀ Nᴜᴍʙᴇʀ : ${global.owner}
│ Hᴏꜱᴛ Nᴀᴍᴇ : ${os.hostname()}
│ Pʟᴀᴛꜰᴏʀᴍ : ${os.platform()}
╰─⬣
  *Owner Menu*
  
  ➙ ${prefix}chat [option]
  ➙ ${prefix}join [link]
  ➙ ${prefix}leave
  ➙ ${prefix}setbotpp
  ➙ ${prefix}block @user
  ➙ ${prefix}unblock @user
  ➙ ${prefix}bcgroup
  ➙ ${prefix}bcall
  ➙ ${prefix}bcimage
  ➙ ${prefix}bcaudio 
  ➙ ${prefix}bcvideo
  ➙ ${prefix}promoteowner
  ➙ ${prefix}getcase
  ➙ ${prefix}setvideo
  ➙ ${prefix}setlogo
  ➙ ${prefix}setownervn
  `
    let message = await prepareWAMessageMedia({ video: fs.readFileSync('./TurboMedia/menuvideo.mp4'), gifPlayback: true }, { upload: Turbo.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
           hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator ✨',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Turbo.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
  case 'allmenu': {
  	anu = `
╭─⬣「 INFO BOT 」⬣
│
│ Sᴘᴇᴇᴅ : ${latensie.toFixed(4)} miliseconds
│ Rᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
│ Bᴏᴛ Nᴀᴍᴇ : ${global.botnma}
│ Oᴡɴᴇʀ Nᴀᴍᴇ : ${global.ownernma}
│ Oᴡɴᴇʀ Nᴜᴍʙᴇʀ : ${global.owner}
│ Hᴏꜱᴛ Nᴀᴍᴇ : ${os.hostname()}
│ Pʟᴀᴛꜰᴏʀᴍ : ${os.platform()}
╰─⬣
  
  *All Menu*
  
  ꪶGroup Menuꫂ
  ➙ ${prefix}grouplink
  ➙ ${prefix}ephemeral [option]
  ➙ ${prefix}setgrouppp
  ➙ ${prefix}setname [text]
  ➙ ${prefix}group [option]
  ➙ ${prefix}editinfo [option]
  ➙ ${prefix}grupinfo
  ➙ ${prefix}add @user
  ➙ ${prefix}kick @user
  ➙ ${prefix}promote @user
  ➙ ${prefix}demote @user
  ➙ ${prefix}warn
  ➙ ${prefix}startvote
  ➙ ${prefix}vote
  ➙ ${prefix}devote
  ➙ ${prefix}delvote
  ➙ ${prefix}tagme
  
  ꪶDownload Menuꫂ
  ➙ ${prefix}tiktoknowm [url]
  ➙ ${prefix}tiktokwm [url]
  ➙ ${prefix}tiktokmp3 [url]
  ➙ ${prefix}instagram [url]
  ➙ ${prefix}ig [username]
  ➙ ${prefix}twitter [url]
  ➙ ${prefix}twittermp3 [url]
  ➙ ${prefix}ytmp3 [url]
  ➙ ${prefix}ytmp4 [url]
  ➙ ${prefix}getmusic [query]
  ➙ ${prefix}getvideo [query
  ➙ ${prefix}repo
  ➙ ${prefix}mediafire
  
  ꪶSearch Menuꫂ
  ➙ ${prefix}song [query]
  ➙ ${prefix}video [query]
  ➙ ${prefix}yts [query]
  ➙ ${prefix}google [query]
  ➙ ${prefix}gimage [query]
  ➙ ${prefix}pinterest [query]
  ➙ ${prefix}wallpaper [query]
  ➙ ${prefix}wikimedia [query]
  ➙ ${prefix}ytsearch [query]
  ➙ ${prefix}true [number]
  ➙ ${prefix}weather [country code or name]
  ➙ ${prefix}itunes [song name]
  ➙ ${prefix}lyrics [song name]
  ➙ ${prefix}searchanime
  ➙ ${prefix}pokedex
  
  ꪶRandom Menuꫂ
  ➙ ${prefix}coffee
  ➙ ${prefix}couplepp
  ➙ ${prefix}fake
  ➙ ${prefix}bio
  ➙ ${prefix}joke
  ➙ ${prefix}fact
  ➙ ${prefix}catimg
  ➙ ${prefix}rpp
  ➙ ${prefix}wyr
  ➙ ${prefix}naruto
  ➙ ${prefix}sexy
  
  ꪶFun Menuꫂ
  ➙ ${prefix}math
  ➙ ${prefix}when
  ➙ ${prefix}wangy
  ➙ ${prefix}couple
  ➙ ${prefix}checkdeath
  ➙ ${prefix}mysoulmate
  ➙ ${prefix}covid
  ➙ ${prefix}gender


  ꪶTools Menuꫂ
  ➙ ${prefix}checknumber
  ➙ ${prefix}encode [text]
  ➙ ${prefix}decode [text]
  ➙ ${prefix}log
  ➙ ${prefix}ipdomain
  ➙ ${prefix}veriphone

  
  ꪶVoice Changer Menuꫂ
  ➙ ${prefix}bass
  ➙ ${prefix}blown
  ➙ ${prefix}deep
  ➙ ${prefix}earrape
  ➙ ${prefix}fast
  ➙ ${prefix}fat
  ➙ ${prefix}nightcore
  ➙ ${prefix}reverse
  ➙ ${prefix}robot
  ➙ ${prefix}slow
  ➙ ${prefix}squirrel
   
  ꪶConvert Menuꫂ
  ➙ ${prefix}photo
  ➙ ${prefix}removebg
  ➙ ${prefix}sticker
  ➙ ${prefix}take
  ➙ ${prefix}emojimix
  ➙ ${prefix}tovideo
  ➙ ${prefix}togif
  ➙ ${prefix}url
  ➙ ${prefix}ebinary
  ➙ ${prefix}dbinary
  ➙ ${prefix}attp
  ➙ ${prefix}emoji
  ➙ ${prefix}tempo
  ➙ ${prefix}trt
  ➙ ${prefix}tts
  
  ꪶMain Menuꫂ
  ➙ ${prefix}ping
  ➙ ${prefix}owner
  ➙ ${prefix}donate
  ➙ ${prefix}menu / ${prefix}help / ${prefix}?
  ➙ ${prefix}delete
  ➙ ${prefix}chatinfo
  ➙ ${prefix}quoted
  ➙  ${prefix}rules
  ➙ ${prefix}listpc
  ➙ ${prefix}listgc
  ➙ ${prefix}listonline
  ➙ ${prefix}report (report bug to owner)
  
  ꪶDatabase Menuꫂ
  ➙ ${prefix}setcmd
  ➙ ${prefix}listcmd
  ➙ ${prefix}delcmd
  ➙ ${prefix}lockcmd
  ➙ ${prefix}addmsg
  ➙ ${prefix}listmsg
  ➙ ${prefix}getmsg
  ➙ ${prefix}delmsg
  
  ꪶAnonymous Menuꫂ
  ➙ ${prefix}start ( Start Chat )
  ➙ ${prefix}next ( Next user )
  ➙ ${prefix}stop ( stop Anonymous chat )
  
  ꪶSystem Menuꫂ
  ➙ ${prefix}antilink On/Off
  ➙ ${prefix}mute On/Off
  ➙ ${prefix}antiwame On/Off
  
  ꪶOwner Menuꫂ
  ➙ ${prefix}chat [option]
  ➙ ${prefix}join [link]
  ➙ ${prefix}leave
  ➙ ${prefix}setbotpp
  ➙ ${prefix}block @user
  ➙ ${prefix}unblock @user
  ➙ ${prefix}bcgroup
  ➙ ${prefix}bcall
  ➙ ${prefix}bcimage
  ➙ ${prefix}bcaudio 
  ➙ ${prefix}bcvideo
  ➙ ${prefix}promoteowner
  ➙ ${prefix}getcase
  ➙ ${prefix}setvideo
  ➙ ${prefix}setlogo
  ➙ ${prefix}setownervn`
  
    let message = await prepareWAMessageMedia({ video: fs.readFileSync('./TurboMedia/menuvideo.mp4'), gifPlayback: true }, { upload: Turbo.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
           hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator ✨',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Turbo.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case "setowner": 
if (!text) return reply("1. video\n2. normal\n3. catalog\n4. status\n5. group\n6. image\n7. order\n\nExample .setowner video")
if (q == "video") {
typeowner = 'video'
reply("Success Changing Owner Message To "+q)
} else if (q == "normal") {
typeowner = 'normal'
reply("Success Changing Owner Message To "+q)
} else if (q == "catalog") {
typeowner = 'catalog'
reply("Success Changing Owner Message To "+q)
} else if (q == "status") {
typeowner = 'status'
reply("Success Changing Owner Message To "+q)
} else if (q == "group") {
typeowner = 'group'
reply("Success Changing Owner Message To "+q)
} else if (q == "image") {
typeowner = 'image'
reply("Success Changing Owner Message To "+q)
} else if (q == "order") {
typeowner = 'order'
reply("Success Changing Owner Message To "+q)
} else if (q == "fakesticker") {
typeowner = 'fakesticker'
reply("Success Changing Owner Message To "+q)
} else if (q == "fakevn") {
typeowner = 'fakevn'
reply("Success Changing Owner Message To "+q)
}
break
case 'sendtoai': {
if (!isCreator) return reply(mess.owner)
hehe = ' *hey master the report is sent to your ai it will send to the reported person soon* '
reply(hehe)
}
break
case 'setlogo': case 'setthumb': {
if (!isCreator) return reply(mess.owner)
if (!quoted) return reply("*Reply to Image*")
if (!/image/.test(mime)) return reply("*Reply to Image*")
if (/webp/.test(mime)) return reply("*Reply to Image*")
let delb = await Turbo.downloadMediaMessage(quoted)
fs.writeFileSync(`./TurboMedia/slayer.jpg`, delb)
fs.writeFileSync(`./TurboMedia/thumb.jpg`, delb)
reply(mess.success)
}
break
case 'setvideo': case 'setmenuvideo': {
if (!isCreator) return reply(mess.owner)
if (!/video/.test(mime) && !/audio/.test(mime)) return reply("*Reply to Video*")
let delb = await Turbo.downloadMediaMessage(quoted)
fs.writeFileSync(`./TurboMedia/menuvideo.mp4`, delb)
reply(mess.success)
}
break
case 'setownervn': case 'setowneraudio': {
if (!isCreator) return reply(mess.owner)
if (!/audio/.test(mime) && !/audio/.test(mime)) return reply("*Reply to Audio*")
let delb = await Turbo.downloadMediaMessage(quoted)
fs.writeFileSync(`./TurboMedia/owner.mp3`, delb)
reply(mess.success)
}
break
case 'tqtt': 
reply(`Thanks to
Turbo (Me)
Amru
Abu
Jifi
And Our Team Who Helped Assemble This Slayer-Md Script !!!`)
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.database
		    if (!(budy.toLowerCase() in msgs)) return
		    Turbo.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})