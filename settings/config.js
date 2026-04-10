/// Created By Rynzz Mods

const fs = require('fs')

const config = {
    owner: "6289509171402", //GANTI NOMER KALIAN AGAR BISA AKSES BOT
    botNumber: "6289509171402", //GANTI NOMER KALIAN AGAR BISA AKSES BOT
    setPair: "DANZOFFC",
    thumbUrl: "https://files.catbox.moe/edfedi.jpg",
    thumbSholat: "https://files.catbox.moe/fjb29r.jpg", 
    session: "sessions",
    status: {
        public: true, //UBAH KE false JIKA INGIN BOT KALIAN KE MODE self
        terminal: true, //JANGAN DI UBAH, JIKA UBAH KE false MAKA AKAN MENGGUNAKAN QR CODE
        reactsw: false, //BEBAS UBAH KE true, AGAR AUTO REACT SW
    },
    message: {
        owner: "｢ ACCESS DENIED ｣",
        group: "Ketiknya Didalam Group Yang Mau Di Bug Bego.",
        admin: "｢ ACCESS DENIED ｣",
        private: "this is specifically for private chat"
    },
    settings: {
        title: "Developer Danzz",
        packname: 'Evil Crasher',
        description: "Script Crated By Danzz",
        author: 'https://telegram.com/danzxyyyy',
        footer: "EVIL - CRASHER"
    },
    newsletter: {
        name: "Information Miwa Crasher",
        id: "120363405503819770@newsletter"
    },
    socialMedia: {
        YouTube: "https://www.youtube.com/@RynzzMods-ID",
        Guthub: "https://github.com/Rynzz14440", 
        Telegram: "https://t.me/RynzzMods",
        ChannelWA: "https://whatsapp.com/channel/0029VbBAK2F6buMRPulhGb0i"
    }
}

module.exports = config;

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
