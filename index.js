const { default: makeWASocket, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys');
const fs = require('fs');
const path = require('path');

const sessionName = process.argv[2] || 'xchup_default';
const sessionFolder = `./sessions/${sessionName}`;
fs.mkdirSync(sessionFolder, { recursive: true });

const { state, saveState } = useSingleFileAuthState(`${sessionFolder}/auth_info.json`);

async function startBot() {
    const { version } = await fetchLatestBaileysVersion();
    const sock = makeWASocket({
        version,
        auth: state,
        printQRInTerminal: true
    });

    sock.ev.on('creds.update', saveState);

    const LOGO_PATH = path.join(__dirname, "assets", "xchup-logo.png");
    const ADMIN_NUMBER = "919876543210@s.whatsapp.net"; // Change to your number

    sock.ev.on("connection.update", async ({ connection }) => {
        if (connection === "open") {
            console.log("✅ Connected to WhatsApp");

            await sock.sendMessage(ADMIN_NUMBER, {
                image: fs.readFileSync(LOGO_PATH),
                caption: "ʏᴏᴜ ᴀʀᴇ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ᴄᴏɴɴᴇᴄᴛᴇᴅ ᴡɪᴛʜ 𝘅𝗰𝗵𝘂𝗽 𝘃𝟬.𝟭",
                buttons: [
                    {
                        buttonId: "⛩️tools",
                        buttonText: { displayText: "⛩️tools" },
                        type: 1
                    }
                ],
                footer: "powered by xchup"
            });
        }
    });

    sock.ev.on("messages.upsert", async ({ messages }) => {
        const msg = messages[0];
        const text = msg.message?.conversation || msg.message?.extendedTextMessage?.text || msg.message?.buttonsResponseMessage?.selectedButtonId;
        const sender = msg.key.remoteJid;

        if (["⛩️tools", "⛩️menu", "⛩️help", "xchup_tools"].includes(text)) {
            await sock.sendMessage(sender, {
                text: `
*🛠️ xchup v0.1 Commands:*

🖼️ Reply to an image: *make this profile*
🎟️ Send a sticker → *bot replies with photo*
🎞️ Send video + type ⛩️sticker → *choose format*
🌀 Send a video sticker → *bot replies with .mp4*

Type ⛩️tools anytime to view this again.
                `.trim()
            });
        }
    });
}

startBot();