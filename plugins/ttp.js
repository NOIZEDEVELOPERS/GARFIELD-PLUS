/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const MyPnky = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('ttp');

if (Config.STANDPLK == 'off' || Config.STANDPLK == 'OFF') {
if (Config.WORKTYPE == 'private') {
    MyPnky.addCommand({ pattern: 'ttp ?(.*)', fromMe: true, desc: Lang.TTP_DESC }, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('https://api.xteam.xyz/ttp?file&text=' + uri, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'nanba inna pidi' })
    }));
    MyPnky.addCommand({ pattern: 'attp ?(.*)', fromMe: true, desc: Lang.ATTP_DESC }, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('https://api.xteam.xyz/attp?file&text=' + uri, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })
    }));
}
else if (Config.WORKTYPE == 'public') {
    MyPnky.addCommand({ pattern: 'ttp ?(.*)', fromMe: false, desc: Lang.TTP_DESC }, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('https://api.xteam.xyz/ttp?file&text=' + uri, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: ' *🧚‍♂️GARFIELD BY NOIZE PROJECTS 🧚‍♂️*
  *DEVELOPER*
*🌸 EMAIL* *Tharindunayanthaliyanage@gmail.com*
*🌸 𝖥𝖮𝖫𝖫𝖮𝖶 M𝖸 𝖨𝖭𝖲𝖳ΛG𝖱Λ𝖬*
*https://www.instagram.com/liyanage_tharindu_?r=nametag*
*🌸 FACEBOOK* *https://www.facebook.com/zenoixnoize*
*🌻️  HOSTING -*
 *Vertual Private Server by  Tharindu Liyanage 🇸🇬*
 *𝘖𝘱𝘦𝘯 𝘚𝘰𝘶𝘳𝘤𝘦 𝘗𝘳𝘰𝘫𝘦𝘤𝘵*
 *𝘈𝘭𝘭 𝘙𝘪𝘨𝘩𝘵𝘴 𝘙𝘦𝘴𝘦𝘳𝘷𝘦𝘥 ©️*
              *𝖭𝖮𝖨𝖹Ξ* ' })
    }));
    MyPnky.addCommand({ pattern: 'attp ?(.*)', fromMe: false, desc: Lang.ATTP_DESC }, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('https://api.xteam.xyz/attp?file&text=' + uri, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })
    }));
}
}
