# qrcode-generator-sabai

[![npm version](https://badge.fury.io/js/qrcode-generator-sabai.svg)](https://badge.fury.io/js/qrcode-generator-sabai)
[![npm](https://img.shields.io/npm/dt/qrcode-generator-sabai)](https://www.npmjs.com/package/qrcode-generator-sabai)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

⚠️ **Important:** This package is designed for **server-side (Node.js) applications only** and will not work in a browser environment.

---

## Overview

**qrcode-generator-sabai** is a **server-side** Node.js package for generating QR codes in **PNG, SVG, or Base64** formats with customization options such as size, error correction levels, and embedded logos.

## 📌 Server-Side Only  

This package **does NOT work in the browser** because:
- It **uses Node.js file system (`fs`)** to save QR codes as images.
- It **depends on server-side modules** that are not available in browser environments.
- If you need a frontend QR code generator, consider **browser-compatible** libraries like [`qrcode`](https://www.npmjs.com/package/qrcode).

✅ **Use This Package For:**
- **Backend APIs** (e.g., Express.js, NestJS, Fastify)
- **Generating QR codes on the server** and sending them to clients
- **Saving QR code images or Base64 data** in databases or cloud storage

🚫 **Do NOT Use This Package For:**
- **Frontend/Browser apps** (it will fail due to missing Node.js dependencies)

---

## 📌 Quick Start (Server-Side Usage)

```javascript
const QRCode = require('qrcode-generator-sabai');

async function generateQRCode() {
    await QRCode.generate('https://github.com/iamlex01/qrcode-generator-sabai', {
        filePath: './public/images',
        fileName: 'qr-code.png'
    });
    console.log('QR Code saved successfully!');
}

generateQRCode().catch(console.error);
```

---

## 📖 Detailed Usage

### **1️⃣ Generate a PNG QR Code**
```javascript
const QRCode = require('qrcode-generator-sabai');

async function generateQRCode() {
    await QRCode.generate('https://example.com', {
        size: 300,
        errorCorrection: 'Q',
        format: 'png',
        filePath: './public/images',
        fileName: 'qr-code.png'
    });
    console.log('QR Code saved successfully!');
}

generateQRCode().catch(console.error);
```

---

### **2️⃣ Generate an SVG QR Code as a String**
```javascript
const QRCode = require('qrcode-generator-sabai');

async function generateQRCode() {
    const svgString = await QRCode.generate('https://example.com', {
        size: 400,
        errorCorrection: 'H',
        format: 'svg'
    });
    console.log('QR Code SVG:', svgString);
}

generateQRCode().catch(console.error);
```

---

### **3️⃣ Generate an SVG QR Code and Save as a File**
```javascript
const QRCode = require('qrcode-generator-sabai');

async function generateQRCode() {
    await QRCode.generate('https://example.com', {
        size: 400,
        errorCorrection: 'H',
        format: 'svg',
        filePath: './public/images',
        fileName: 'qr-code.svg'
    });
    console.log('QR Code SVG file saved successfully!');
}

generateQRCode().catch(console.error);
```

---

### **4️⃣ Generate a Base64 QR Code**
```javascript
const QRCode = require('qrcode-generator-sabai');

async function generateQRCode() {
    const base64 = await QRCode.generate('https://example.com', {
        size: 500,
        errorCorrection: 'M',
        format: 'base64'
    });
    console.log('QR Code Base64:', base64);
}

generateQRCode().catch(console.error);
```

---

### **5️⃣ Generate a PNG QR Code with a Logo**
```javascript
const QRCode = require('qrcode-generator-sabai');

async function generateQRCode() {
    await QRCode.generate('https://example.com', {
        size: 400,
        logoPath: './logo.png', 
        format: 'png',
        filePath: './public/images',
        fileName: 'qr-code-logo.png'
    });
    console.log('PNG QR Code with logo generated!');
}

generateQRCode().catch(console.error);
```

---

### **6️⃣ Generate an SVG QR Code with a Logo**
```javascript
const QRCode = require('qrcode-generator-sabai');

async function generateQRCode() {
    await QRCode.generate('https://example.com', {
        size: 400,
        logoPath: './logo.svg', 
        format: 'svg',
        filePath: './public/images',
        fileName: 'qr-code-logo.svg'
    });
    console.log('SVG QR Code with logo generated!');
}

generateQRCode().catch(console.error);
```

---

## 🎯 QR Code Options

| Option           | Type       | Default | Description |
|-----------------|-----------|---------|-------------|
| `size`         | `number`  | `200`   | QR code size in pixels (applies to PNG, SVG, and Base64). |
| `errorCorrection` | `'L' \| 'M' \| 'Q' \| 'H'` | `'M'` | Set the error correction level (applies to PNG, SVG, and Base64). |
| `format`       | `'png' \| 'svg' \| 'base64'` | `'png'` | Choose output format. |
| `filePath`     | `string`   | `null`  | Directory path to save the QR code file (only for `png` and `svg`). |
| `fileName`     | `string`   | `null`  | File name for the saved QR code (only for `png` and `svg`). |
| `logoPath`     | `string`   | `null`  | Path to an image file (PNG or SVG) to embed in the QR code (applies to `png` and `svg`). |

---

## 🔄 Error Correction Levels

| Level  | Error Resistance |
|--------|------------------|
| L (Low) | ~7%             |
| M (Medium) | ~15%        |
| Q (Quartile) | ~25%      |
| H (High) | ~30%         |

---

## 📜 License

**qrcode-generator-sabai** is licensed under the [MIT License](https://opensource.org/license/MIT).
