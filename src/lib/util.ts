import fs from 'fs';
import QRCode from 'qrcode';
import { createCanvas, loadImage } from 'canvas';
import { eclType } from '../tstypes/dataType';
export default class Util {

    public static generatePngQR = async (payload: string, size: number = 400, ecl: eclType = 'H', fileName: string, filePath: string): Promise<boolean> => {
        try {
            size = parseInt(String(size));
            const result = new Promise<string>((resolve, reject) => {
                QRCode.toFile(
                    `${filePath}/${fileName}`,
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
    public static generatePngQRWithLogo = async (payload: string, size: number = 400, ecl: eclType = 'H', fileName: string, filePath: string): Promise<string> => {
        try {
            size = parseInt(String(size));
            const result = new Promise<string>((resolve, reject) => {
                QRCode.toFile(
                    `${filePath}/${fileName}`,
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
            return result;
        } catch (error: any) {
            throw new Error(error);
        }
    }
    public static generateSvgQR = async (payload: string, size: number = 400, ecl: eclType = 'H'): Promise<string> => {
        try {
            size = parseInt(String(size));
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
        } catch (error: any) {
            throw new Error(error);
        }
    }
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
            const logoSize = size / 4;
            const canvasQR = createCanvas(size, size);
            const url = QRCode.toCanvas(canvasQR, [{ data: payload }], {
                width: size,
                errorCorrectionLevel: ecl,
                margin: 0.5,
                color: {
                    dark: '#000000',	// black pixels
                    light: '#ffffff',	// white background
                }
            });
            const ctx = canvasQR.getContext("2d");
            const img = await loadImage(logoPath);
            const center = (size - logoSize) / 2;
            ctx.drawImage(img, center, center, logoSize, logoSize);
            return canvasQR.toDataURL("image/png");

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
    public static base64ToSvg = async (base64Data: string): Promise<any> => {
        try {
            
        } catch (error: any) {
            throw new Error(error);
        }
    }
}