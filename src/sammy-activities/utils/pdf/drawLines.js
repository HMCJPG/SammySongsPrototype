import { rgb } from 'pdf-lib';

/**
 * Draws a solid line.
 * @param {PDFPage} page 
 * @param {number} xStart 
 * @param {number} xEnd 
 * @param {number} y 
 * @param {object} options 
 */
export function drawSolidLine(page, xStart, xEnd, y, options = {}) {
    const { color = rgb(0.85, 0.85, 0.85), thickness = 0.5 } = options;
    page.drawLine({
        start: { x: xStart, y },
        end: { x: xEnd, y },
        thickness,
        color,
    });
}

/**
 * Draws a dashed line.
 * @param {PDFPage} page 
 * @param {number} xStart 
 * @param {number} xEnd 
 * @param {number} y 
 * @param {object} options 
 */
export function drawDashedLine(page, xStart, xEnd, y, options = {}) {
    const { color = rgb(0.85, 0.85, 0.85), thickness = 0.5, dashArray = [3, 3] } = options;
    page.drawLine({
        start: { x: xStart, y },
        end: { x: xEnd, y },
        thickness,
        color,
        dashArray,
    });
}

/**
 * Draws a three-line handwriting block.
 * @param {PDFPage} page 
 * @param {number} xStart 
 * @param {number} xEnd 
 * @param {number} baselineY 
 * @param {number} height 
 */
export function drawHandwritingBlock(page, xStart, xEnd, baselineY, height = 70) {
    const midY = baselineY + height / 2;
    const topY = baselineY + height;

    // Use softer gray and thinner lines for the "clean worksheet" look
    const guidelineColor = rgb(0.8, 0.8, 0.8);
    const lineWeight = 0.6;

    // Baseline (solid)
    drawSolidLine(page, xStart, xEnd, baselineY, { thickness: lineWeight, color: guidelineColor });
    // Middle (dashed)
    drawDashedLine(page, xStart, xEnd, midY, { thickness: lineWeight, color: guidelineColor, dashArray: [4, 4] });
    // Top (solid)
    drawSolidLine(page, xStart, xEnd, topY, { thickness: lineWeight, color: guidelineColor });
}
