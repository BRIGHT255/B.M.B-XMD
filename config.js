const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "BWM-XMD;;;H4sIAAAAAAAAA5VUwZKiSBD9l7pqDCCIaERHLAIKiIqiqGzsoYQCShCwqlBxwn/fwJ6ensPubO+tSDIyX758L7+DosQUzVADRt9BRfAVMtQ+WVMhMALjOo4RAV0QQQbBCMyskOSWdLcSZ9V/iGxB5E7CrR+UdWaLg4kPsjqdXTxbFtU38OyCqj7mOPxNQd3fHCRuag6a5bk+79Ep2d9N9aDM06Xa44P+daU2EZRTP8vewLOtCDHBRWJUKTojAvMZalyIydfgJ0aYFkSPrL2U3R65u/ZQjPy+Ms+Jd+Ovl1uuWE3Fdq6hfA3+WhlmBBseXUb8KrR7gXE9To6Ham1PFDXhIzEYb6C48zYp/w6f4qRAkRWhgmHWfJn3cs7FuhwWD30tCifN6cj4gncCf+nTAu810XcOfUF5zHZm9jXgJ2c/YBK+PyRqVnI9YdNqLe/HMYw7BzHlCt8buhexSi5p+Stwl3xoJfs/vGum0JC8Q3Ec+wGHhYFbzcNjfL8TN9mdVo7bsSNvuhJ14YuyWZXl8aIL6aXynXRMvWhqpI67y7f5wPGkWBCUwDfkoDe+JZ/wIavJ71AqeLjZqSsnSzRn2znuzAnnZElwtcvkUAQuTATS49yhnyR3K2i4KufHfnndGldpdm80+xShzaFaRHspufjny2anzXhTV99eE2WosSIwEp5dQFCCKSOQ4bJ4xZRhF8Do6qGQIPaiF4iFiTI8nkx23PqWFcujNaaaQXeD46DhYLzQ9QXEm9nDPllvoAsqUoaIUhSZmLKSNHNEKUwQBaM//+qCAt3Z++LadqLQBTEmlG2LuspLGH1s9eMnDMOyLpjXFKHWPhABI/4zjBjDRUJbHusCkjDFV6SlkFEwimFO0c8JEUERGDFSo5+u1cqoJd5XpP5279ugC86vheAIjEBPFgfKQOD7A14cCeIf9NutLQur6luBGOiC/D1N4mWB7w36cl8Rhm1iG3/+BNjWixCDOKet8hy94oY33XBPdqpY06m6TVQtUcHnQB/KeGdeeJgeDTabSxmTLFdhf0/DZXg5pRt9OOOMOnRI4J4S5dgL3/6hSCurRZEVy0y2GM9sKRq7/WVg1CTzOcwv/RW2j7Y0Lw4zaXmZDHJuPqWaVOxX035lO3uY77PTUejVmhdcDTTXBX95msy01VvbLUJXHKJfmx3GtHqsaR6sO2ujrvvaYnN4qFbtGkms0rSmcCgLuhwLG9PQxN1QW0xE0RLt/XipHSUrME1P7i16HTpo8My58T2OLPXbu2Zfnsl/3Cr8UlO7qvYzxuhl/QK2C/zv1b0DbxXGP7u/1PhxTP7FkOMovPNkuuXliyn37dW09gemXsxKaXvjvOvdKTS5t5EkdzoswPP5VxdUOWRxSc5gBGARkRJHoAtIWbeStYq4/N2NUi1LX71PnkPK1E8bbPAZUQbPFRgJA2koSMqwNUqb5ZKyMiFNW88m7tbOwPNv6ZY4oFQHAAA=",
// add your Session Id
AUTO_BIO: process.env.AUTO_BIO || "false", 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS*",
// set the auto reply massage on status reply
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/6lwftg.jpg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "B.M.B-XMD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "B.M.B-XMD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "255767862457",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "bmb xmd",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙱.𝙼.𝙱-𝚇𝙼𝙳*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/6lwftg.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *B.M.B-XMD*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "true",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "255 767 862 457",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "false",
// true for anti once view
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*", 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
