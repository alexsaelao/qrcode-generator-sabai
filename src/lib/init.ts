import Util from './util';
import { eclType } from '../types/dataType';
export default class Init {

    public static async png(payload: string, size: number = 400, ecl: eclType, fileName: string, filePath: string): Promise<boolean> {
        try {
            const result = await Util.generatePngQR(payload, size, ecl, fileName, filePath);
            return result;

        } catch (error: any) {
            throw new Error(error);
        }
    }
    public static async pngWithLogo(payload: string, size: number = 400, ecl: eclType, fileName: string, filePath: string, logoPath: string): Promise<boolean> {
        try {
        
            // const base64Data = await Util.generateBase64QrWithLogo(payload, size, ecl, logoPath);
            // const result = await Util.base64ToImage(base64Data, fileName, filePath);
            const result = await Util.generatePngQRWithLogo(payload, size, ecl, fileName, filePath, logoPath);
            return result;

        } catch (error: any) {
            throw new Error(error);
        }
    }

    public static async base64(payload: string, size: number = 400, ecl: eclType): Promise<string> {
        try {
            const result = await Util.generateBase64QR(payload, size, ecl);
            return result;

        } catch (error: any) {
            throw new Error(error);
        }
    }
    public static async base64WithLogo(payload: string, size: number = 400, ecl: eclType, logoPath: string): Promise<string> {
        try {

            const result = await Util.generateBase64QrWithLogo(payload, size, ecl, logoPath);
                return result;

        } catch (error: any) {
            throw new Error(error);
        }
    }
    public static async svg(payload: string, size: number = 400, ecl: eclType, fileName: string, filePath: string): Promise<string | boolean> {
        try {
            const result = await Util.generateSvgQR(payload, size, ecl, fileName, filePath);
            return result;

        } catch (error: any) {
            throw new Error(error);
        }
    }
    public static async svgWithLogo(payload: string, size: number = 400, ecl: eclType, fileName: string, filePath: string, logoPath: string): Promise<string | boolean> {
        try {
            const result = await Util.generateSvgQRWithLogo(payload, size, ecl, fileName, filePath, logoPath);
            return result;

        } catch (error: any) {
            throw new Error(error);
        }
    }

    public static async svgFile(payload: string, size: number = 400, ecl: eclType, fileName: string, filePath: string): Promise<boolean> {
        try {

            const result = await Util.generateSvgQRFile(payload, size, ecl, fileName, filePath);
            return result;

        } catch (error: any) {
            throw new Error(error);
        }
    }
    public static async svgWithLogoFile(payload: string, size: number = 400, ecl: eclType, fileName: string, filePath: string, logoPath: string): Promise<boolean> {
        try {

            // const base64Data = await Util.generateBase64QrWithLogo(payload, size, ecl, logoPath);
            // const result = await Util.base64ToSvg(base64Data, fileName, filePath);

            const result = await Util.generateSvgQRWithLogoFile(payload, size, ecl, fileName, filePath, logoPath);
            return result;

        } catch (error: any) {
            throw new Error(error);
        }
    }

}