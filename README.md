<p align="center">
  <img src="./assets/xchup-logo.png" width="180" alt="xchup logo"/>
</p>

<h1 align="center">xchup v0.1 - WhatsApp Media Transformer 🤖</h1>
<p align="center">A powerful, session-based WhatsApp bot built on Baileys, designed for media manipulation and automation.</p>

---

## ✨ Features

- 🎭 **Multi-Session Support** – Create and manage sessions like `xchup_YourName`
- 🖼️ **Profile Pic from Image** – Reply to an image with `make this profile`
- 🎟️ **Sticker to Image** – Convert stickers to photos automatically
- 🎞️ **Video to Sticker** – Send video + type `⛩️sticker` to choose format
- 🌀 **Video Sticker to MP4** – Reverse sticker animations into video
- 🔘 **On-connect Button (`⛩️tools`)** – Auto-list all tools via button or commands
- 🌍 **WhatsApp MD Compatible** – Uses @whiskeysockets/baileys
- ⚡ **Deployable Anywhere** – VPS, KataBump, Render, etc.

---

## 🌐 Supported Commands

| Command | Action |
|--------|--------|
| `make this profile` | Sets replied image as your profile picture |
| `⛩️sticker` | Converts video into animated sticker (square or fullsize) |
| (Send sticker) | Automatically converts to photo |
| (Send video sticker) | Automatically converts to `.mp4` |
| `⛩️tools`, `⛩️help`, `⛩️menu` | Show all available commands |

---

## 🌍 Supported Languages

You can easily integrate multi-language support using environment variables or language files (manual integration).

---

## 🚀 Deployment Guide

### 🖥️ 1. Deploy on VPS / PC (Ubuntu Recommended)

#### ⚡ Quick Install

```sh
bash <(curl -fsSL http://bit.ly/43JqREw)
```

#### 🧩 Manual Setup

```sh
sudo apt update && sudo apt upgrade -y
sudo apt install git ffmpeg curl -y

curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install nodejs -y
sudo npm install -g yarn
yarn global add pm2

git clone https://github.com/xchup/xchup-v0.1.git
cd xchup-v0.1
yarn install
```

### ⚙️ Start the Bot

```sh
node index.js xchup_YourName
```

Scan the QR code from terminal with WhatsApp → Linked Devices.

---

### 💠 2. Deploy on KataBump

- Go to: [https://katabump.com](https://katabump.com)
- Upload your zipped project
- Set startup command:
```sh
node index.js xchup_YourName
```
- Use the console to scan the QR
- Done 🎉

---

## ⚙️ Configuration (Optional)

Edit `config.env` if you're expanding the bot:

```env
SESSION_ID=xchup_YourName
BOT_LANG=en
PREFIX=.
STICKER_PACKNAME=xchup
OWNER=91XXXXXXXXXX
```

---

## 🧠 Credits & Tech

- **[Baileys](https://github.com/adiwajshing/Baileys)** by @adiwajshing
- Inspired by Levanter, WhatsAsena & open source contributors.
- Logo by Xchup Media

---

## 💬 Need Help?

Telegram: [@xchup](https://t.me/xchup)  
GitHub: [github.com/xchup](https://github.com/xchup)
