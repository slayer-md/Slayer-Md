//═══════[© 2022 Turbo Bot Inc.]════════\\

//~you can re-upload but tag my channel
//or put my channel link in the description.
//~you can recode or copy the codes but give
//credit.
//~Thank you to LORD BUDDHA, ME AND MY 
//FAMILY.

//═══════[modules]════════\\

const fs = require('fs')
const chalk = require('chalk')

//═══════[api website]════════\\
global.APIs = {
	zenz: 'https://zenzapi.xyz', //credit zenz, thank you so much bro <3
}
//═══════[api key of the website]════════\\
global.APIKeys = {
	'https://zenzapi.xyz': 'sanzychan01', //thank you to zenz
}

//═══════[automatically]════════\\
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = false //auto reading in gc (true to on, false to off)
global.autoReadAll = false // auto reading in all pchat gc and status (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = false //auto available (true to on, false to off)

//═══════[documents]════════\\
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//═══════[modification]════════\\
global.owner = ['916380260672'] //owner number, u can put multiple owner number, within quotations and seperated by comma.
global.pemilik = ['916380260672'] //another owner number
global.premium = ['916380260672'] //premium number
global.pengguna = 'Turbo' //username
global.reactmoji = "🌹"
global.botnma = 'ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩' //bot name
global.ownernma = 'Turbo Mods' //owner name
global.packname = 'ꪶ𝗦𝗟𝚫𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩' //sticker package name
global.author = 'Turbo Mods' //sticker author name
global.location = "Coimbatore Tamilnadu, India"
global.sessionName = 'session' //session name
global.prefa = ['#','!','/',''] //prefix
global.sp = '⭔' //design
global.mess = {
    success: 'Dᴏɴᴇ ✓',
    admin: 'Tʜɪs Fᴇᴀᴛᴜʀᴇ Is Oɴʟʏ Fᴏʀ Aᴅᴍɪɴ!',
    botAdmin: 'Bᴏᴛ Mᴜsᴛ Bᴇ Aᴅᴍɪɴ Fɪʀsᴛ!',
    owner: 'Tʜɪs Fᴇᴀᴛᴜʀᴇ Is Oɴʟʏ Fᴏʀ Oᴡɴᴇʀ',
    group: 'Fᴇᴀᴛᴜʀᴇ Usᴇᴅ Oɴʟʏ Fᴏʀ Gʀᴏᴜᴘs!',
    private: 'Fᴇᴀᴛᴜʀᴇs Usᴇᴅ Oɴʟʏ Fᴏʀ Pʀɪᴠᴀᴛᴇ Cʜᴀᴛ!',
    bot: 'Tʜɪs Fᴇᴀᴛᴜʀᴇ Iɴ Oɴʟʏ Fᴏʀ Tʜᴇ Bᴏᴛ Nᴜᴍʙᴇʀ',
    wait: 'Pʟᴇᴀsᴇ Wᴀɪᴛ A Mɪɴᴜᴛᴇ ...',
    endLimit: 'Yᴏᴜʀ Dᴀɪʟʏ Lɪᴍɪᴛ Hᴀs Exᴘɪʀᴇᴅ, Tʜᴇ Lɪᴍɪᴛ Wɪʟʟ Bᴇ Rᴇsᴇᴛ Eᴠᴇʀʏ 12 Hᴏᴜʀs',
}
global.limitawal = {
    premium: "Infinity", //premium user limit
    free: 100 //free user limit
}
global.thumb = fs.readFileSync('./TurboMedia/slayer.jpg')
global.vidmenu = fs.readFileSync('./TurboMedia/menuvideo.mp4')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
