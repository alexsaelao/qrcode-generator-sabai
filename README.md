# qrcode-generator-sabai

[![npm version](https://badge.fury.io/js/qrcode-generator-sabai.svg)](https://badge.fury.io/js/qrcode-generator-sabai)
[![npm](https://img.shields.io/npm/dt/qrcode-generator-sabai)](https://www.npmjs.com/package/qrcode-generator-sabai)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

⚠️ **Important:** This package is designed for **server-side (Node.js) applications only** and will not work in a browser environment.

---

## Sample QR code 

<div style="display: flex; justify-content: center; align-items: center; gap: 20px;">
<img src="data:image/png;base64,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" alt="Image 1" style="width: 250px; height: auto;"> 


<img src="data:image/png;base64,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" alt="Image 2" style="width: 250px; height: auto;"> 
</div>

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
const { QR } = require('qrcode-generator-sabai');

async function generateQRCode() {
    await QR.generate('https://github.com/iamlex01/qrcode-generator-sabai', {
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
const { QR } = require('qrcode-generator-sabai');

async function generateQRCode() {
    await QR.generate('https://example.com', {
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
const { QR } = require('qrcode-generator-sabai');

async function generateQRCode() {
    const svgString = await QR.generate('https://example.com', {
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
const { QR } = require('qrcode-generator-sabai');

async function generateQRCode() {
    await QR.generate('https://example.com', {
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
const { QR } = require('qrcode-generator-sabai');

async function generateQRCode() {
    const base64 = await QR.generate('https://example.com', {
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
const { QR } = require('qrcode-generator-sabai');

async function generateQRCode() {
    await QR.generate('https://example.com', {
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
const { QR } = require('qrcode-generator-sabai');

async function generateQRCode() {
    await QR.generate('https://example.com', {
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
