import { rgb } from 'pdf-lib';
import { drawCenteredText } from '../../../utils/pdf/drawText';

export const MOTTO_TEMPLATE_CONFIG = {
    title: "Motto for Saving Money!",
    subtitle: "Trace the money mottos.",
    leftMargin: 72, // 1 inch margin
    rightMargin: 612 - 72,
    initialY: 792 - 220, // Lower initial Y to create a large gap after subtitle
    lineHeight: 80, // Slightly taller for tracing clarity
    textBaselineOffset: 18,
    fontSize: 48, // Larger font size for the main solid word
    tracingFontSize: 42, // Distinct sizing for phrase tracing
    headerColor: rgb(0, 0, 0),
    subtitleColor: rgb(0.4, 0.4, 0.4),
};

/**
 * Draws the centered motto template header.
 */
export function drawMottoHeader(page, titleFont, subtitleFont, pageWidth = 612) {
    const { title, subtitle, headerColor, subtitleColor } = MOTTO_TEMPLATE_CONFIG;

    // Draw Title (Centered, Bold, Friendly Scaling)
    drawCenteredText(
        page,
        title,
        720, // ~1 inch from top
        titleFont,
        38,
        headerColor,
        pageWidth
    );

    // Draw Subtitle (Centered, Lighter)
    drawCenteredText(
        page,
        subtitle,
        685,
        subtitleFont,
        18,
        subtitleColor,
        pageWidth
    );
}
