import { createPdfDoc, loadFont } from '../../utils/pdf/pdfSetup';
import { drawHandwritingBlock } from '../../utils/pdf/drawLines';
import { drawBaselineText, drawCenteredBaselineText } from '../../utils/pdf/drawText';
import { MOTTO_TEMPLATE_CONFIG, drawMottoHeader } from './templates/mottoTemplate';

/**
 * Word wrapping utility for handwriting lines.
 * Handwriting font is quite wide, so we use a smaller wrap limit.
 */
function wrapText(text, maxChars = 22) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    words.forEach(word => {
        if ((currentLine + word).length <= maxChars) {
            currentLine += (currentLine ? ' ' : '') + word;
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
    });
    if (currentLine) lines.push(currentLine);
    return lines;
}

/**
 * Core logic for generating the worksheet.
 */
export async function generateWorksheet({ word, phrase }) {
    const pdfDoc = await createPdfDoc();
    const pageWidth = 612; // Letter Width
    const pageHeight = 792; // Letter Height
    const page = pdfDoc.addPage([pageWidth, pageHeight]);

    // Define font paths
    const tracingFontPath = '/src/tools/worksheet/fonts/KGPrimaryDots.ttf';
    const headerFontPath = '/src/tools/worksheet/fonts/ArialRoundedBold.ttf'; // Placeholder or fallback

    let tracingFont;
    let headerFont;
    let subtitleFont;

    try {
        // Attempt to load the specific tracing font
        tracingFont = await loadFont(pdfDoc, tracingFontPath);
    } catch (e) {
        console.warn(e.message);
        console.warn("Falling back to standard Helvetica (WILL NOT BE DOTTED)");
        tracingFont = await pdfDoc.embedFont('Helvetica');
    }

    try {
        // Attempt to load header font (Sammy style)
        headerFont = await loadFont(pdfDoc, headerFontPath);
    } catch (e) {
        console.warn("Friendly header font missing, using Helvetica-Bold");
        headerFont = await pdfDoc.embedFont('Helvetica-Bold');
    }

    subtitleFont = await pdfDoc.embedFont('Helvetica');

    // Draw Authentically Styled Header (Centered)
    drawMottoHeader(page, headerFont, subtitleFont, pageWidth);

    const { leftMargin, rightMargin, initialY, lineHeight, textBaselineOffset, fontSize, tracingFontSize } = MOTTO_TEMPLATE_CONFIG;
    let currentY = initialY;

    // 1. Draw the single word line (SOLID BOLD, CENTERED)
    drawHandwritingBlock(page, leftMargin, rightMargin, currentY, lineHeight);
    drawCenteredBaselineText(
        page,
        word,
        leftMargin,
        rightMargin,
        currentY,
        headerFont, // Use the solid bold font for the main word
        fontSize,
        textBaselineOffset
    );

    currentY -= (lineHeight + 80); // Large gap between main word and phrase section

    // 2. Draw the phrase lines (auto-wrapped, dotted tracing font)
    const wrappedLines = wrapText(phrase, 25);
    wrappedLines.forEach(line => {
        drawHandwritingBlock(page, leftMargin, rightMargin, currentY, lineHeight);
        // Phrases usually start on the left with a small indent
        drawBaselineText(
            page,
            line,
            leftMargin + 20,
            currentY,
            tracingFont, // Dotted font for phrases
            tracingFontSize,
            textBaselineOffset
        );
        currentY -= (lineHeight + 40); // Consistent gap between phrase blocks
    });

    return await pdfDoc.save();
}
