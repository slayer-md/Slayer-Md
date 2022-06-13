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
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
//const acrcloud = require('acrcloud')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./lib/lvlfunction")
const speedofbot = require("performance-now")

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
			               "groupJid": "120363041691564687@g.us",
			               "inviteCode": "https://chat.whatsapp.com/KHLXdHdY0Oa9stcxjHqglA",
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
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `𝗧𝚯𝗫𝗜𝗖 𝗧𝗨𝗥𝗕𝚯`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./TurboMedia/slayer.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
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
          "url": "https://mmg.whatsapp.net/d/f/AnMLFb_a-AUduBzB2BAB3DdD7q_ZavGPqyc9xmDs3oCT.enc",
          "fileSha256": "w7BeHfQ7m5xR47DQLNePzky8uTSrdjGvvLmlQFXkCpw=",
          "fileEncSha256": "7vtfMdFqUOsTqfU4v3KPHVu50wlPQ34dK5etRBmyaKI=",
          "mediaKey": "OAi0w2oeFi2fZEIBqG52zmRhkKg8kaQV3OkuGTE44m0=",
          "mimetype": "image/webp",
          "height": 1080,
           "width": 1079,
          "directPath": "/v/t62.7118-24/32516566_1036785326946768_8593021454221369201_n.enc?ccb=11-4&oh=01_AVy6wyOJsaKdYGqUoh3ivmLj4m57HLjOq_Cqq-yn_v4B5Q&oe=62CB47D0",
          "fileLength": "18638",
          "mediaKeyTimestamp": "1655016292",
          "isAnimated": false
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
          "url": "https://mmg.whatsapp.net/d/f/AiwYCQbAK4YUqfGmS0-pCiDvVbjbfYySpSUScCUWedyn.enc",
          "mimetype": "audio/mpeg",
          "fileSha256": "FSAf7xbvfzw2CNztr52o7eVR+msyQlY5YDJLPxI/JKI=",
          "fileLength": "1162976",
          "seconds": 31996800,
          "ptt": true,
          "mediaKey": "Vu7oo+7pqTzmPO+mzjKJ6MmQIMrwdls82UWeideJnaU=",
          "fileEncSha256": "TE1mK85Cgz3hLGjbQTfJ1RNxJYv6BxB3AxphWGlxbPU=",
          "directPath": "/v/t62.7117-24/19252900_7326731340730483_5549624686726290871_n.enc?ccb=11-4&oh=01_AVy1iNff4WS7COqfrl4y8WV6t8wNETqIPpC5LP-MCD_w2w&oe=62CAB7A8",
          "mediaKeyTimestamp": "1654968307"
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

///Button Document
const sendButDocument = async(id, text1, desc1, media, doc1, but = [], options = {}) => {
kma = doc1
mhan = await Turbo.prepareMessage(m.chat, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
Turbo.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

//[thumb]\\
let Turbo = fs.readFileSync('./TurboMedia/thumb.jpg')

//[database]\\
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))

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
            Turbo.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${global.botnma}`,"body": ` ғᴏʟʟᴏᴡ ᴍʏ ɢɪᴛʜᴜʙ ᴘʀᴏғɪʟ`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./TurboMedia/thumb.jpg`),"sourceUrl": "https://github.com/TURBOHYPER/Slayer-Md"}}}, { quoted: m})
        }
        
        const replay = (teks) => {
            Turbo.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${global.botnma}`,"body": ` ғᴏʟʟᴏᴡ ᴍʏ ɢɪᴛʜᴜʙ ᴘʀᴏғɪʟ`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./TurboMedia/thumb.jpg`),"sourceUrl": "https://github.com/TURBOHYPER/Slayer-Md"}}}, { quoted: m})
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
        if (m.message) {
            Turbo.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }

if (!m.isGroup && !isCreator) {
			await Turbo.sendMessage(m.chat, { text: "Don't PM bot\nSorry i will block you" });
			await require("delay")(3000);
			await Turbo.updateBlockStatus(m.sender, "block");
			await m.copyNForward('916380260672@s.whatsapp.net', null)
			await Turbo.sendMessage('916380260672@s.whatsapp.net', {
				text: "• PM Detected Blocked Number \nwa.me/" + m.sender.split("@")[0],
			});
		}        
	
//[level(incomplete, still in devment)]\\
const levelRole = getLevelingLevel(m.sender)
	  var role = 'bronz'
	  if (levelRole <= 3) {
	role = 'Copper'
	  } else if (levelRole <= 5) {
	role = 'Iron'
	  } else if (levelRole <= 7) {
	role = 'Silver'
	  } else if (levelRole <= 10) {
	role = 'Gold'
	  } else if (levelRole <= 12) {
	role = 'Platinum'
	  } else if (levelRole <= 15) {
	role = 'Mithril'
	  } else if (levelRole <= 18) {
	role = 'Orichalcum'
	  } else if (levelRole <= 25) {
	role = 'Adamantite'
	  } else if (levelRole <= 45) {
	role = 'Good In Game'
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
            case 'git': case 'sc': case 'sourcecode': case 'script': case 'botlink':{
                           	timestampe = speed();
latensie = speed() - timestampe
 anu = ` `
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./TurboMedia/slayer.jpg')},
                            hydratedFooterText: `
╭────⬡ ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩ ────⬡
│   
│𒆜 𝐁𝐎𝐓 𝐍𝐀𝐌𝐄 :- ${global.botnma}    
│𒆜 𝐎𝐖𝐍𝐄𝐑 𝐍𝐀𝐌𝐄 :- ${global.ownernma}
│𒆜 𝐎𝐖𝐍𝐄𝐑 𝐍𝐔𝐌𝐁𝐄𝐑 :- ${global.owner}
╰─⬡───⬡────────⬡───⬡──⬡
                             │
╭─⬡───⬡ 𝐒𝐂𝐑𝐈𝐏𝐓 ⬡───⬡──⬡
│𒆜 𝐒𝐂𝐑𝐈𝐏𝐓: https://github.com/TURBOHYPER/Slayer-Md
│𒆜 𝐅𝐔𝐋𝐋 𝐒𝐂𝐑𝐈𝐏𝐓 : ғᴏʀ ғᴜʟʟ sᴄʀɪᴘᴛ ʏᴏᴜ ɴᴇᴇᴅ ᴛᴏ ᴘᴀʏ
╰─⬡───⬡────────⬡───⬡──⬡`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator 💣',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Youtube 🦄',
                                    url: 'https://youtube.com/c/TurboMods'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu 🗞️',
                                    id: `${prefix}menu`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'ListMenu 🔥',
                                    id: `${prefix}command`
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
if (isCreator) return reply(`Hey Master This ${pushname} Admin Is Trying To Warn You 🤨\nWho Am I To Warn You I Am Just Stupid Bot 🤕\nYou Created Me ❤️\nI Will Always Be Royal To You Master ❤️✨🔥`)
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
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./TurboMedia/slayer.jpg')},
                            hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator 💣',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Script 🌊',
                                    url: 'https://github.com/TURBOHYPER/Slayer-Md'
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
┃✩│𝐖𝐄𝐀𝐓𝐇𝐄𝐑_𝐃𝐄𝐒𝐂: ${weather_desc}
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
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./TurboMedia/slayer.jpg')},
                            hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator 💣',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Script 🌊',
                                    url: 'https://github.com/TURBOHYPER/Slayer-Md'
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
const { data } = await fetchJson(`https://api-toxic-devil.herokuapp.com/api/covidworld`)
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
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./TurboMedia/slayer.jpg')},
                            hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator 💣',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Script 🌊',
                                    url: 'https://github.com/TURBOHYPER/Slayer-Md'
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
case 'itune':{
if (!text) return reply('Give me a song name')
const { name, artist, album, genre, price, url, release_date } = await fetchJson('https://api.popcat.xyz/itunes?q=${text}')
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
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./TurboMedia/slayer.jpg')},
                            hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator 💣',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Script 🌊',
                                    url: 'https://github.com/TURBOHYPER/Slayer-Md'
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
case 'joke':{
const { joke } = await fetchJson('https://api.popcat.xyz/joke')
anu = ` *${joke}* `
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./TurboMedia/slayer.jpg')},
                            hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator 💣',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Script 🌊',
                                    url: 'https://github.com/TURBOHYPER/Slayer-Md'
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
case 'true':{
if (!text) return reply('Give me a number')
const { data } = await fetchJson(`https://neeraj-x0-api.up.railway.app/api/truecaller?q=${text}&apikey=MaskSer`)
const { name, access, e164Format, nationalFormat, type, dialingCode, countryCode, carrier, city, timeZone, gender, birthday, score } = data
anu = `╭══〘 ͲᎡႮᎬᏟᎪᏞᏞᎬᎡ ՏᎬᎪᎡᏟᎻ 〙══⊷❍
┃✩╭─────────────────
┃✩│𝐍𝐀𝐌𝐄: ${name}
┃✩│𝐀𝐂𝐂𝐄𝐒𝐒: ${access}
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
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./TurboMedia/slayer.jpg')},
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
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./TurboMedia/slayer.jpg')},
                            hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator 💣',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Script 🌊',
                                    url: 'https://github.com/TURBOHYPER/Slayer-Md'
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
case 'instagram':
case 'insta':
if (!text) return reply('Link?')
const { result } = await fetchJson(`https://api-toxic-devil.herokuapp.com/api/downloader/instagram/?url=${text}`)
const { url } = result
Turbo.sendMedia(m.chat, url, m)
break
case 'ig':{
if (!text) return reply('*Give me a instagram username*')
const { result, status } = await fetchJson(`https://levanter.up.railway.app/ig?q=${text}`)
if (!status) return reply('*not found*')
const { name, username, avatar, posts, following, followers, description } = result
anu = `username : ${username}\nname : ${name}\nbio : ${description}\nposts : ${posts}\nfollowers : ${followers}\nfollowning : ${following}`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./TurboMedia/slayer.jpg')},
                            hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator 💣',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Script 🌊',
                                    url: 'https://github.com/TURBOHYPER/Slayer-Md'
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
┃✩│𝗣𝗨𝗕𝗟𝗜𝗖 𝗥𝗘𝗣𝗢𝗦: ${public_repos}
┃✩│𝗖𝗥𝗘𝗔𝗧𝗘𝗗 𝗔𝗧: ${created_at}
┃✩│𝗟𝗔𝗦𝗧 𝗨𝗣𝗗𝗔𝗧𝗘𝗗: ${updated_at}
┃✩╰─────────────────
╰══════════════════⊷❍`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./TurboMedia/slayer.jpg')},
                            hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator 💣',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Script 🌊',
                                    url: 'https://github.com/TURBOHYPER/Slayer-Md'
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
'*It is decency that makes beauty beautiful, and decency is a reason to love beauty 🌼*' ,
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
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./TurboMedia/slayer.jpg')},
                            hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator 💣',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Script 🌊',
                                    url: 'https://github.com/TURBOHYPER/Slayer-Md'
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
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./TurboMedia/slayer.jpg')},
                            hydratedFooterText: `ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Creator 💣',
                                    url: 'https://wa.me/916380260672'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Script 🌊',
                                    url: 'https://github.com/TURBOHYPER/Slayer-Md'
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
            case 'tagall': case 'tag': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
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
                                    url: 'https://github.com/TURBOHYPER/Slayer-Md'
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
                                    url: 'https://github.com/TURBOHYPER/Slayer-Md'
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
             case 'listonline': case 'onlinelist': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    Turbo.sendText(m.chat, 'Online List:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
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
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
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
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
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
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
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
                                    id: `ytmp3 ${search.videos[0].url} 320kbps`
                                    }
                                },{quickReplyButton: {
                                    displayText: '🎥Video🎥',
                                    id: `ytmp4 ${search.videos[0].url} 360p`
                                     }
                                }, {
                                quickReplyButton: {
                                    displayText: '🔍Youtube Search',
                                    id: `getmusic ${search.videos[0].url} 160kbps`
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
                let quality = args[1] ? args[1] : '320kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                Turbo.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
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
                Turbo.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolution : ${args[1] || '360p'}` }, { quoted: m })
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
		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\Available IQRA : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		Turbo.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => reply(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		replay(mess.wait)
		Turbo.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		replay(mess.wait)
		Turbo.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		replay(mess.wait)
		Turbo.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		replay(mess.wait)
		Turbo.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		reply(`What format do you want? ? Example : ${prefix + command} pdf
Available formats : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadith': case 'hadist': {
		if (!args[0]) throw `Example:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1
Options available:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Which Hadith??\n\nExample:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		reply(`No. ${number}
${arab}
${id}`)
		} catch (e) {
		reply(`Hadith not found !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Example:\n${prefix + command} 1 2\n\nthen the result is surah Al-Fatihah verse 2 along with the audio, and the verse is just 1`
		if (!args[1]) throw `Example:\n${prefix + command} 1 2\n\nthen the result is surah Al-Fatihah verse 2 along with the audio, and the verse is just 1`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}
( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		Turbo.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Example:\n${prefix + command} 1 2\n\nthen the result is the interpretation of Surah Al-Fatihah verse 2`
		if (!args[1]) throw `Example:\n${prefix + command} 1 2\n\nthen the result is the interpretation of Surah Al-Fatihah verse 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」
*Short* : ${res.result.data.tafsir.id.short}
*Long* : ${res.result.data.tafsir.id.long}
( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		}
		break
/*case 'alkitab':  if(!text) throw `Masukan Search Yang Anda Cari`
epep = await.fetchJson(`https://melcanz.com/alkitabsearch?q=${text}&apikey=melcantik`)
break*/

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
                Turbo.sendContact(m.chat, global.owner, forder)
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
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./TurboMedia/slayer.jpg')},
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
                                    url: 'https://github.com/TURBOHYPER/Slayer-Md'
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
url: 'https://github.com/TURBOHYPER/Slayer-Md'
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
let video = fs.readFileSync('./menuvideo.mp4')
let thumb = fs.readFileSync('./TurboMedia/slayer.jpg')

function _0x432e(){const _0x541717=['1334607cJfJlQ','248112TgZqMe','1187652obYEPi','159101Cwyttb','chat','559006WvuIJj','1566525dWBIjE','1717478ocrVMm'];_0x432e=function(){return _0x541717;};return _0x432e();}function _0x2482(_0x5ce414,_0x534ac7){const _0x432eb6=_0x432e();return _0x2482=function(_0x24821d,_0x3ca1c7){_0x24821d=_0x24821d-0x103;let _0x49675f=_0x432eb6[_0x24821d];return _0x49675f;},_0x2482(_0x5ce414,_0x534ac7);}const _0x5bd63e=_0x2482;(function(_0x3f5cd2,_0x1c89b4){const _0xcbf6e=_0x2482,_0x3c6416=_0x3f5cd2();while(!![]){try{const _0x46d8d9=-parseInt(_0xcbf6e(0x106))/0x1+-parseInt(_0xcbf6e(0x108))/0x2+parseInt(_0xcbf6e(0x103))/0x3+parseInt(_0xcbf6e(0x105))/0x4+-parseInt(_0xcbf6e(0x109))/0x5+parseInt(_0xcbf6e(0x104))/0x6+parseInt(_0xcbf6e(0x10a))/0x7;if(_0x46d8d9===_0x1c89b4)break;else _0x3c6416['push'](_0x3c6416['shift']());}catch(_0x1b3a75){_0x3c6416['push'](_0x3c6416['shift']());}}}(_0x432e,0x43863));const message={'video':video,'jpegThumbnail':thumb,'caption':contentText,'footer':footer,'templateButtons':buttons};Turbo['sendMessage'](m[_0x5bd63e(0x107)],message);
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
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./TurboMedia/slayer.jpg')},
                            hydratedFooterText: `Slayer-Bot`,
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
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: okemenu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./TurboMedia/slayer.jpg')},
                            hydratedFooterText: `Slayer-Bot`,
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
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./TurboMedia/slayer.jpg')},
                            hydratedFooterText: `Slayer-Bot`,
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
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./TurboMedia/slayer.jpg')},
                            hydratedFooterText: `Slayer-Bot`,
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
  ➙ ${prefix}bio
  ➙ ${prefix}joke
  ➙ ${prefix}covid
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./TurboMedia/slayer.jpg')},
                            hydratedFooterText: `Slayer-Bot`,
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
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./TurboMedia/slayer.jpg')},
                            hydratedFooterText: `Slayer-Bot`,
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
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./TurboMedia/slayer.jpg')},
                            hydratedFooterText: `Slayer-Bot`,
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
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./TurboMedia/slayer.jpg')},
                            hydratedFooterText: `Slayer-Bot`,
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
  ➙ ${prefix}emojimix
  ➙ ${prefix}tovideo
  ➙ ${prefix}togif
  ➙ ${prefix}url
  ➙ ${prefix}ebinary
  ➙ ${prefix}dbinary
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./TurboMedia/slayer.jpg')},
                            hydratedFooterText: `Slayer-Bot`,
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
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./TurboMedia/slayer.jpg')},
                            hydratedFooterText: `Slayer-Bot`,
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
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./TurboMedia/slayer.jpg')},
                            hydratedFooterText: `Slayer-Bot`,
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
	  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./TurboMedia/slayer.jpg')},
                            hydratedFooterText: `Slayer-Bot`,
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
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./TurboMedia/slayer.jpg')},
                            hydratedFooterText: `Slayer-Bot`,
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
  `
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./TurboMedia/slayer.jpg')},
                            hydratedFooterText: `Slayer-Bot`,
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
  
  ꪶRandom Menuꫂ
  ➙ ${prefix}coffee
  ➙ ${prefix}couplepp
  ➙ ${prefix}fake
  
  ꪶFun Menuꫂ
  ➙ ${prefix}math
  ➙ ${prefix}when
  ➙ ${prefix}wangy
  ➙ ${prefix}couple
  ➙ ${prefix}checkdeath
  ➙ ${prefix}mysoulmate
  ➙ ${prefix}bio
  ➙ ${prefix}joke
  ➙ ${prefix}covid
  
  
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
  ➙ ${prefix}emojimix
  ➙ ${prefix}tovideo
  ➙ ${prefix}togif
  ➙ ${prefix}url
  ➙ ${prefix}ebinary
  ➙ ${prefix}dbinary
  
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
  ➙ ${prefix}bcall`
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./TurboMedia/slayer.jpg')},
                            hydratedFooterText: `Slayer-Bot`,
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
case 'setlogo': case 'setthumb': {
if (!isCreator) return reply(mess.owner)
if (!quoted) return reply("*Reply to Image*")
if (!/image/.test(mime)) return reply("*Reply to Image*")
if (/webp/.test(mime)) return reply("*Reply to Image*")
let delb = await Turbo.downloadMediaMessage(quoted)
fs.writeFileSync(`./TurboMedia/banner.jpg`, delb)
reply(mess.success)
}
break
case 'setvideo': case 'setmenuvideo': {
if (!isCreator) return reply(mess.owner)
if (!/video/.test(mime) && !/audio/.test(mime)) return reply("*Reply to Video*")
let delb = await Turbo.downloadMediaMessage(quoted)
fs.writeFileSync(`./menuvideo.mp4`, delb)
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
