import Init from "./lib/init";
import { eclType, QRCodeOptions } from './types/dataType';
export default class QRCodeSabai {
    private payload: string;
    private size?: number;
    private ecl?: eclType;

    private static validateLogoPath(logoPath: string | null): string | null {
        if (!logoPath) return null;

        if (!/\.(png|svg)$/i.test(logoPath)) {
            throw new Error(`Invalid logo file type "${logoPath}". Only .png or .svg files are allowed.`);
        }

        return logoPath;
    }

    constructor(payload: string, size?: number, ecl?: eclType) {
        this.payload = payload;
        this.size = size;
        this.ecl = ecl;
    }

    public static generate(payload: any, options: QRCodeOptions): Promise<string | boolean> {
        
        const { format = 'png', size = 400, errorCorrection = 'M', filePath, fileName, logoPath } = options;
        
        const validLogoPath = this.validateLogoPath(logoPath ?? '');

        switch (format) {
            case 'png':
                return logoPath
                    ? Init.pngWithLogo(payload, size, errorCorrection, fileName!, filePath!, validLogoPath!)
                    : Init.png(payload, size, errorCorrection, fileName!, filePath!);
            case 'svg':
                return logoPath
                    ? Init.svgWithLogo(payload, size, errorCorrection, fileName!, filePath!, validLogoPath!)
                    : Init.svg(payload, size, errorCorrection, fileName!, filePath!);
            case 'base64':
                return logoPath
                    ? Init.base64WithLogo(payload, size, errorCorrection, validLogoPath!)
                    : Init.base64(payload, size, errorCorrection);
            default:
                throw new Error('Invalid format. Supported formats: png, svg, base64.');
        }
    }
}