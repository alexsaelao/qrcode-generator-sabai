export type eclType = 'L' | 'M' | 'Q' | 'H';

export type BaseQRCodeOptions = {
    size?: number;  // QR code size in pixels
    errorCorrection?: eclType;  // Error correction level
    logoPath?: string | null;  // Path to a logo image
};

// ✅ Case 1: When format is `png`, `filePath` and `fileName` are REQUIRED
export type PngQRCodeOptions = BaseQRCodeOptions & {
    format?: 'png';
    filePath: string;
    fileName: string;
};

// ✅ Case 2: When format is `svg`, filePath and fileName are OPTIONAL **but must come together**
export type SvgQRCodeOptions = BaseQRCodeOptions & {
    format: 'svg';
} & (
    | { filePath: string; fileName: string } // ✅ Both filePath & fileName required together
    | { filePath?: undefined; fileName?: undefined } // ✅ Neither is provided
);

// ✅ Case 3: When format is `base64`, `filePath` and `fileName` are **NOT ALLOWED**
export type Base64QRCodeOptions = BaseQRCodeOptions & {
    format: 'base64';
    filePath?: never;  // Prevents `filePath` in `base64`
    fileName?: never;  // Prevents `fileName` in `base64`
};

// ✅ Final Type (Union of all cases)
export type QRCodeOptions = PngQRCodeOptions | SvgQRCodeOptions | Base64QRCodeOptions;
