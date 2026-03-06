import { PDFDocument } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';

/**
 * Initializes a new PDF Document and registers the fontkit instance.
 * @returns {Promise<PDFDocument>}
 */
export async function createPdfDoc() {
    const pdfDoc = await PDFDocument.create();
    pdfDoc.registerFontkit(fontkit);
    return pdfDoc;
}

/**
 * Loads and registers a font from a URL or array buffer.
 * @param {PDFDocument} pdfDoc 
 * @param {string|ArrayBuffer} fontSource 
 * @returns {Promise<PDFFont>}
 */
export async function loadFont(pdfDoc, fontSource) {
    let fontBytes;
    if (typeof fontSource === 'string') {
        try {
            const response = await fetch(fontSource);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status} - Not Found`);
            }
            fontBytes = await response.arrayBuffer();
        } catch (e) {
            throw new Error(`REQUIRED FONT MISSING: Please ensure "${fontSource}" exists in your project. Error: ${e.message}`);
        }
    } else {
        fontBytes = fontSource;
    }
    return await pdfDoc.embedFont(fontBytes);
}
