/**
 * HANDWRITING WORKSHEET GENERATOR SERVICE
 * 
 * Usage:
 * import { generateWorksheetPDF } from './tools/worksheet';
 * 
 * await generateWorksheetPDF({
 *   word: "Saver",
 *   phrase: "I save every time I earn or receive money.",
 *   outputPath: "worksheet.pdf",
 * });
 * 
 * This service works in both Node.js and Browser environments.
 * - In Node.js: Saves directly to the filesystem at outputPath.
 * - In Browser: Triggers a PDF download named outputPath.
 */

import { generateWorksheet } from './generator';

export async function generateWorksheetPDF({ word, phrase, outputPath }) {
    console.log(`Generating worksheet for word: "${word}" and phrase: "${phrase}"...`);

    const pdfBytes = await generateWorksheet({ word, phrase });

    // Environment detection
    const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';

    if (!isBrowser) {
        // Node.js environment
        try {
            const fs = await import('fs');
            fs.writeFileSync(outputPath, pdfBytes);
            console.log(`Successfully saved worksheet to: ${outputPath}`);
        } catch (err) {
            console.error("Failed to save PDF to filesystem. If you are in a browser, this is expected.", err);
        }
    } else {
        // Browser environment: Trigger download
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = outputPath.split('/').pop() || 'worksheet.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        console.log(`Triggered download for: ${link.download}`);
    }
}
