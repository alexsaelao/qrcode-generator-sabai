import Qr from '../src';

test('generate QR code to SVG', async() => {
  const result = await Qr.generateQR('Hello World!', 400,'H').toSvg();
  expect(typeof result ).toBe('string');
});
test('generate QR code to Base64', async() => {
  const result = await Qr.generateQR('Hello World!', 400,'H').toBase64();
  expect(typeof result ).toBe('string');
});

test('generate QR code to Base64 with logo', async() => {
  const result = await Qr.generateQR('Hello World!', 400,'H').toBase64WithLogo('./public/images/logo.png');
  expect(typeof result ).toBe('string')
});
test('generate QR code to Image', async() => {
  const result = await Qr.generateQR('Hello World!', 400,'H').toPng('image.png', './public/images');
  expect(result).toBe(true);
});
test('generate QR code to Image with logo', async() => {
  const result = await Qr.generateQR('Hello World!', 400,'H').toPngWithLogo('image.png', './public/images', './public/images/logo.png');
  expect(result).toBe(true);
});