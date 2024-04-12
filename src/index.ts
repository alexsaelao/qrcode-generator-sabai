import Init from "./lib/init";
import { eclType, PNGFileName } from './tstypes/dataType';
export default class QRCodeSabai {
    private payload: string;
    private size?: number;
    private ecl?: eclType;

    constructor(payload: string, size?: number, ecl?: eclType) {
        this.payload = payload;
        this.size = size;
        this.ecl = ecl;
    }
    public static generateQR(payload: string, size?: number, ecl?: eclType): QRCodeSabai {
        return new QRCodeSabai(payload, size, ecl);
    }
    public toPng(fileName: PNGFileName, filePath: string): Promise<boolean> {
        return Init.png(this.payload, this.size, this.ecl!, fileName, filePath);
    }
    public toPngWithLogo(fileName: PNGFileName, filePath: string, logoPath: string): Promise<boolean> {
        return Init.pngWithLogo(this.payload, this.size, this.ecl!, fileName, filePath, logoPath);
    }
    public toSvg(): Promise<string> {
        return Init.svg(this.payload, this.size, this.ecl!);
    };
    // public toSvgWithLogo(logoPath: string): Promise<string> {
    //     return Init.svgWithLogo(this.payload, this.size, this.ecl!, logoPath);
    // };
    public toBase64(): Promise<string> {
        return Init.base64(this.payload, this.size, this.ecl!);
    };
    public toBase64WithLogo(logoPath: string): Promise<string> {
        return Init.base64WithLogo(this.payload, this.size, this.ecl!, logoPath);
    }
}