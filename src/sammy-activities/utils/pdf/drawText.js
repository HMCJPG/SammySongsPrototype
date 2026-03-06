import { rgb } from 'pdf-lib';

/**
 * Draws text at a specific baseline using a provided font.
 */
export function drawBaselineText(page, text, x, baselineY, font, fontSize, offset = 0) {
    page.drawText(text, {
        x,
        y: baselineY + offset,
        font,
        size: fontSize,
        color: rgb(0, 0, 0),
    });
}

/**
 * Draws text centered horizontally on the page.
 */
export function drawCenteredText(page, text, y, font, fontSize, color = rgb(0, 0, 0), pageWidth = 612) {
    const textWidth = font.widthOfTextAtSize(text, fontSize);
    const x = (pageWidth - textWidth) / 2;
    page.drawText(text, {
        x,
        y,
        font,
        size: fontSize,
        color,
    });
}

/**
 * Draws text centered between two x-coordinates, aligned to a baseline.
 */
export function drawCenteredBaselineText(page, text, xStart, xEnd, baselineY, font, fontSize, offset = 0) {
    const textWidth = font.widthOfTextAtSize(text, fontSize);
    const availableWidth = xEnd - xStart;
    const x = xStart + (availableWidth - textWidth) / 2;
    page.drawText(text, {
        x,
        y: baselineY + offset,
        font,
        size: fontSize,
        color: rgb(0, 0, 0),
    });
}
