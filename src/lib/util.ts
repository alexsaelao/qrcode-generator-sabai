import fs from 'fs';
import QRCode from 'qrcode';
import { eclType } from '../types/dataType';
import sharp from 'sharp';

export default class Util {

    public static generatePngQR = async (payload: string, size: number = 400, ecl: eclType = 'H', fileName: string, filePath: string): Promise<boolean> => {
        try {
            size = parseInt(String(size));
            const result = new Promise<string>((resolve, reject) => {
                QRCode.toFile(
                    `${filePath}/${fileName}.png`,
                    [{ data: payload }],
                    { width: size, margin: 0.5, type: 'png', errorCorrectionLevel: ecl },
                    (err?: any | null, url?: string) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(url!);
                        }
                    });
            });
            return true;
        } catch (error: any) {
            throw new Error(error);
        }
    }
    public static generatePngQRWithLogo = async (payload: string, size: number = 400, ecl: eclType = 'H', fileName: string, filePath: string, logoPath: string): Promise<boolean> => {
        try {
            size = parseInt(String(size));
            const qrBuffer = await QRCode.toBuffer(
                [{ data: payload }],
                { width: size, margin: 0.5, type: 'png', errorCorrectionLevel: ecl },
            );

            const qrImage = sharp(qrBuffer).resize(size, size);
            const logoImage = sharp(logoPath,)
                .resize(Math.floor(size / 4), Math.floor(size / 4), { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
                .toFormat('png');

            const compositeImage = await qrImage
                .composite([{ input: await logoImage.toBuffer(), gravity: 'center' }])
                .png()
                .toBuffer();

            fs.writeFileSync(`${filePath}/${fileName}.png`, compositeImage);
            return true;

        } catch (error: any) {
            throw new Error(error);
        }
    }
    public static generateSvgQR = async (payload: string, size: number = 400, ecl: eclType = 'H', fileName: string, filePath: string): Promise<string | boolean> => {
        try {
            size = parseInt(String(size));
            if (filePath && fileName) {
                const result = new Promise<string>((resolve, reject) => {
                    QRCode.toFile(
                        `${filePath}/${fileName}.svg`,
                        [{ data: payload }],
                        { width: size, margin: 0.5, type: 'svg', errorCorrectionLevel: ecl },
                        (err?: any | null, url?: string) => {
                            if (err) {
                                reject(err);
                            } else {
                                resolve(url!);
                            }
                        });
                });
                return true;
            } else {
                const result = new Promise<string>((resolve, reject) => {
                    QRCode.toString([{ data: payload }], { type: 'svg', width: size, margin: 0.5, errorCorrectionLevel: ecl }, (err?: any | null, url?: string) => {
                        if (err) {
                            reject(err);
                        } else {
                            if (url) {
                                resolve(url);
                            } else {
                                reject(new Error("QRCode generation failed"));
                            }
                        }
                    });
                });
                return result;
            }
        } catch (error: any) {
            throw new Error(error);
        }
    }
    public static generateSvgQRWithLogo = async (payload: string, size: number = 400, ecl: eclType = 'H', fileName: string, filePath: string, logoPath: string): Promise<string | boolean> => {
        try {

            size = parseInt(String(size));
            const qrBuffer = await QRCode.toBuffer(payload, {
                width: size,
                margin: 0.5,
                errorCorrectionLevel: ecl,
            });

            const qrImage = sharp(qrBuffer).resize(size, size);
            const logoSize = Math.floor(size / 4);
            const logoImage = sharp(logoPath)
                .resize(logoSize, logoSize, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
                .toFormat('png');

            const compositeImage = await qrImage
                .composite([{ input: await logoImage.toBuffer(), gravity: 'center' }])
                .png()
                .toBuffer();

            const base64Data = `data:image/png;base64,${compositeImage.toString('base64')}`;

      
            // Convert base64 image to an SVG-compatible format
            const svgData = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
                <image href="${base64Data}" width="400" height="400"/>
            </svg>`;

            if (filePath && fileName) {
                fs.writeFileSync(`${filePath}/${fileName}.svg`, svgData, 'utf-8');
                return true;
            }

            return svgData;

        } catch (error: any) {
            throw new Error(error);
        }
    };

    public static generateSvgQRFile = async (payload: string, size: number = 400, ecl: eclType = 'H', fileName: string, filePath: string): Promise<boolean> => {
        try {
            size = parseInt(String(size));
            const result = new Promise<string>((resolve, reject) => {
                QRCode.toFile(
                    `${filePath}/${fileName}.svg`,
                    [{ data: payload }],
                    { width: size, margin: 0.5, type: 'svg', errorCorrectionLevel: ecl },
                    (err?: any | null, url?: string) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(url!);
                        }
                    });
            });
            return true;
        } catch (error: any) {
            throw new Error(error);
        }
    }
    public static generateSvgQRWithLogoFile = async (payload: string, size: number = 400, ecl: eclType = 'H', fileName: string, filePath: string, logoPath: string): Promise<boolean> => {
        try {

            size = parseInt(String(size));
            const qrBuffer = await QRCode.toBuffer(payload, {
                width: size,
                margin: 0.5,
                errorCorrectionLevel: ecl,
            });

            const qrImage = sharp(qrBuffer).resize(size, size);
            const logoSize = Math.floor(size / 4);
            const logoImage = sharp(logoPath)
                .resize(logoSize, logoSize, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
                .toFormat('png');

            const compositeImage = await qrImage
                .composite([{ input: await logoImage.toBuffer(), gravity: 'center' }])
                .png()
                .toBuffer();

            const base64Data = `data:image/png;base64,${compositeImage.toString('base64')}`;

            // Convert base64 image to an SVG-compatible format
            const svgData = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
                <image href="${base64Data}" width="400" height="400"/>
            </svg>`;

            // Save the properly formatted SVG file
            fs.writeFileSync(`${filePath}/${fileName}.svg`, svgData, 'utf-8');

            return true;

        } catch (error: any) {
            throw new Error(error);
        }
    };

    public static generateBase64QR = async (payload: string, size: number = 400, ecl: eclType = 'H'): Promise<string> => {
        try {
            size = parseInt(String(size));
            const result = new Promise<string>((resolve, reject) => {
                QRCode.toDataURL([{ data: payload }], { width: size, margin: 0.5, errorCorrectionLevel: ecl }, (err?: any | null, url?: string) => {
                    if (err) {
                        reject(err);
                    } else {
                        if (url) {
                            resolve(url);
                        } else {
                            reject(new Error("QRCode generation failed"));
                        }
                    }
                })
            });
            return result;
        } catch (error: any) {
            throw new Error(error);
        }
    }
    public static generateBase64QrWithLogo = async (payload: string, size: number = 400, ecl: eclType = 'H', logoPath: string): Promise<string> => {
        try {

            size = parseInt(String(size));
            const qrBuffer = await QRCode.toBuffer(payload, {
                width: size,
                margin: 0.5,
                errorCorrectionLevel: ecl,
            });

            const qrImage = sharp(qrBuffer).resize(size, size);
            const logoSize = Math.floor(size / 4);
            const logoImage = sharp(logoPath)
                .resize(logoSize, logoSize, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
                .toFormat('png');

            const compositeImage = await qrImage
                .composite([{ input: await logoImage.toBuffer(), gravity: 'center' }])
                .png()
                .toBuffer();

            return `data:image/png;base64,${compositeImage.toString('base64')}`;

        } catch (error: any) {
            throw new Error(error);
        }
    }
    public static base64ToImage = async (base64Data: string, fileName: string, filePath: string): Promise<boolean> => {
        try {

            const data = base64Data.replace(/^data:image\/\w+;base64,/, "");
            const buf = Buffer.from(data, 'base64');
            fs.writeFileSync(`${filePath}/${fileName}`, buf)

            return true

        } catch (error: any) {
            throw new Error(error);
        }
    }

    public static base64ToSvg = async (base64Data: string, fileName: string, filePath: string): Promise<boolean> => {
        try {

            // Convert base64 image to an SVG-compatible format
            const svgData = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
                <image href="${base64Data}" width="400" height="400"/>
            </svg>`;

            // Save the properly formatted SVG file
            fs.writeFileSync(`${filePath}/${fileName}`, svgData, 'utf-8');
            return true;
        } catch (error: any) {
            throw new Error(error);
        }
    }
}