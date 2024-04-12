# qrcode-generator-sabai

[![npm version](https://badge.fury.io/js/qrcode-generator-sabai.svg)](https://badge.fury.io/js/qrcode-generator-sabai)
[![npm](https://img.shields.io/npm/dt/qrcode-generator-sabai)](https://www.npmjs.com/package/qrcode-generator-sabai)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Overview

qrcode-generator-sabai is a Node.js package designed to simplify QR code generation from various payloads to images. It offers ease of use and extensive customization options.

## Features

- **Generate QR Codes**: Convert text, URLs, or any payload into QR codes effortlessly.
- **Customization**: Tailor QR code attributes such as size, error correction level, and central logo placement to suit your needs.
- **Export Options**: Export QR codes as PNG images, SVG strings, or Base64 encoded formats for versatile usage.

## Installation

To install qrcode-generator-sabai, execute the following command in your terminal:

```bash
npm install qrcode-generator-sabai
```

## Getting Started

Import the package into your Node.js project:

```javascript
const QRCode = require('qrcode-generator-sabai');
```

Here's a basic example of generating a QR code:

PNG Format:
```javascript
const QRCode = require('qr-code-sabai'); // Import the QRCode module

async function generateQRCode() {
    try {
        // Generate the QR code with the specified URL, size, and error correction level,
        // and convert it to PNG format
        const qrCode = await QRCode.generateQR(
            'https://github.com/iamlex01/qrcode-generator-sabai#readme', // URL or payload for the QR code
            400, // Size of the QR code in pixels
            "H" // Error correction level
        ).toPng(
            'qr-code.png', // Filename for the generated QR code image
            './public/images' // Directory path to save the generated QR code image
        );

        console.log('QR Code generated successfully:', qrCode);
    } catch (error) {
        console.error('Error generating QR Code:', error);
    }
}

generateQRCode(); // Call the async function to generate the QR code
```
SVG Format:
```javascript
const QRCode = require('qrcode-generator-sabai'); // Import the QRCode module

async function generateQRCode() {
    try {
        // Generate the QR code with the specified URL, size, and error correction level,
        // and convert it to SVG format
        const qrCode = await QRCode.generateQR(
            'https://github.com/iamlex01/qrcode-generator-sabai#readme', // URL or payload for the QR code
            400, // Size of the QR code in pixels
            "H" // Error correction level
        ).toSvg();

        console.log('QR Code generated successfully:', qrCode);
    } catch (error) {
        console.error('Error generating QR Code:', error);
    }
}

generateQRCode(); // Call the async function to generate the QR code
```
Base64 Format:
```javascript
const QRCode = require('qrcode-generator-sabai'); // Import the QRCode module

async function generateQRCode() {
    try {
        // Generate the QR code with the specified URL, size, and error correction level,
        // and convert it to Base64 format
        const qrCode = await QRCode.generateQR(
            'https://github.com/iamlex01/qrcode-generator-sabai#readme', // URL or payload for the QR code
            400, // Size of the QR code in pixels
            "H" // Error correction level
        ).toBase64();

        console.log('QR Code generated successfully:', qrCode);
    } catch (error) {
        console.error('Error generating QR Code:', error);
    }
}

generateQRCode(); // Call the async function to generate the QR code
```
Here's a basic example of generating a QR code with central logo placement:

QR Code with Central Logo (PNG Format):
```javascript
const QRCode = require('qrcode-generator-sabai'); // Import the QRCode module

async function generateQRCode() {
    try {
        // Generate the QR code with the specified URL, size, and error correction level,
        // and embed a logo into the QR code
        const qrCode = await QRCode.generateQR(
            'https://github.com/iamlex01/qrcode-generator-sabai#readme', // URL or payload for the QR code
            400, // Size of the QR code in pixels
            "H" // Error correction level
        ).toImageWithLogo(
            'qr-code-with-logo.png', // Filename for the generated QR code image with logo
            './public/images', // Directory path to save the generated QR code image
            './path/to/logo.png', // Provide the path to your logo here
        );

        console.log('QR Code with logo generated successfully:', qrCode);
    } catch (error) {
        console.error('Error generating QR Code:', error);
    }
}

generateQRCode(); // Call the async function to generate the QR code
```
QR Code with Central Logo (Base64 Format):
```javascript
const QRCode = require('qrcode-generator-sabai'); // Import the QRCode module

async function generateQRCode() {
    try {
        // Generate the QR code with the specified URL, size, and error correction level,
        // and embed a logo into the QR code
        const qrCode = await QRCode.generateQR(
            'https://github.com/iamlex01/qrcode-generator-sabai#readme', // URL or payload for the QR code
            400, // Size of the QR code in pixels
            "H" // Error correction level
        ).toImageWithLogo(
            './path/to/logo.png', // Provide the path to your logo here
        );

        console.log('QR Code with logo generated successfully:', qrCode);
    } catch (error) {
        console.error('Error generating QR Code:', error);
    }
}

generateQRCode(); // Call the async function to generate the QR code
```
## Error Correction Level

Error correction capability allows QR codes to be scanned successfully even if the symbol is dirty or damaged. Four levels are available to choose from according to the operating environment.

Higher levels offer better error resistance but reduce the symbol's capacity. If the chances that the QR code symbol may be corrupted are low (for example, if it is displayed on a monitor), it is possible to safely use a low error level such as Low or Medium.

Possible levels are as follows:

| Level       | Error Resistance |
|-------------|------------------|
| L (Low)     | ~7%              |
| M (Medium)  | ~15%             |
| Q (Quartile)| ~25%             |
| H (High)    | ~30%             |

The percentage indicates the maximum amount of damaged surface after which the symbol becomes unreadable.

## License
qrcode-generator-sabai is licensed under the [MIT License](https://opensource.org/license/MIT). Feel free to use and modify it according to your needs.