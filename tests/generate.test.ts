import QRCodeSabai from '../src';

describe('QRCodeSabai Tests', () => {

  // ✅ Test PNG (Default format)
  test('Generate PNG QR code (Default Format)', async () => {
    const result = await QRCodeSabai.generate('Hello World!', {
      filePath: './public',
      fileName: 'qr-code-default',
    });
    expect(result).toBe(true);
  });

  // ✅ Test PNG without logo
  test('Generate PNG QR code', async () => {
    const result = await QRCodeSabai.generate('Hello World!', {
      format: 'png',
      filePath: './public',
      fileName: 'qr-code',
    });
    expect(result).toBe(true);
  });

  // ✅ Test PNG with logo
  test('Generate PNG QR code with Logo', async () => {
    const result = await QRCodeSabai.generate('Hello World!', {
      format: 'png',
      filePath: './public',
      fileName: 'qr-code-logo',
      logoPath: './public/images/logo.png',
    });
    expect(result).toBe(true);
  });

  // ✅ Test SVG without logo
  test('Generate SVG QR code', async () => {
    const result = await QRCodeSabai.generate('Hello World!', { format: 'svg' });
    expect(typeof result).toBe('string');
  });

  // ✅ Test SVG with logo
  test('Generate SVG QR code with Logo', async () => {
    const result = await QRCodeSabai.generate('Hello World!', { 
      format: 'svg',
      logoPath: './public/images/logo.svg' 
    });
    expect(typeof result).toBe('string');
  });

  // ✅ Test SVG file without logo
  test('Generate SVG QR code and save as file', async () => {
    const result = await QRCodeSabai.generate('Hello World!', {
      format: 'svg',
      filePath: './public',
      fileName: 'qr-code',
    });
    expect(result).toBe(true);
  });

  // ✅ Test SVG file with logo
  test('Generate SVG QR code with Logo and save as file', async () => {
    const result = await QRCodeSabai.generate('Hello World!', {
      format: 'svg',
      filePath: './public',
      fileName: 'qr-code-logo',
      logoPath: './public/images/logo.svg',
    });
    expect(result).toBe(true);
  });

  // ✅ Test Base64 without logo
  test('Generate Base64 QR code', async () => {
    const result = await QRCodeSabai.generate('Hello World!', { format: 'base64' });
    expect(typeof result).toBe('string');
  });

  // ✅ Test Base64 with logo
  test('Generate Base64 QR code with Logo', async () => {
    const result = await QRCodeSabai.generate('Hello World!', {
      format: 'base64',
      logoPath: './public/images/logo.png',
    });
    expect(typeof result).toBe('string');
  });

});
