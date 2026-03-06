/**
 * Logic layer for the Decoder activity.
 * Pure functions only.
 */

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

/**
 * Maps a number (1-26) to a letter based on current rotation.
 * If offset is 0, 1 -> A, 2 -> B...
 * If offset is 1, 1 -> B, 2 -> C...
 */
export const mapNumberToLetter = (num, offset = 0) => {
    if (num < 1 || num > 26) return null;
    const index = (num - 1 + offset) % 26;
    return ALPHABET[index < 0 ? index + 26 : index];
};

/**
 * Decodes a whole message based on the offset.
 * Assumes encodedMessage uses space-separated numbers and '/' for spaces.
 * Example: "19 1 13 13 25" -> "SAMMY"
 */
export const decodeMessage = (encodedMessage, offset = 0) => {
    return encodedMessage
        .split(" ")
        .map(part => {
            if (part === "/") return " ";
            const num = parseInt(part, 10);
            if (isNaN(num)) return part;
            return mapNumberToLetter(num, offset);
        })
        .join("");
};

/**
 * Validates the user's input against the solution.
 */
export const validateSolution = (userInput, solution) => {
    return userInput.trim().toUpperCase() === solution.trim().toUpperCase();
};

/**
 * Returns a map of correctness for each character in the user input.
 */
export const getCorrectnessMap = (userInput, solution) => {
    const input = userInput.toUpperCase();
    const sol = solution.toUpperCase();
    return input.split("").map((char, i) => char === sol[i]);
};

/**
 * Encodes a text message into numbers based on the offset.
 * Example: "SAMMY" with offset 0 -> "19 1 13 13 25"
 * Example: "SAMMY" with offset 1 -> "18 26 12 12 24" (because 18+1=19=S)
 */
export const encodeMessage = (text, offset = 0) => {
    return text.toUpperCase().split("").map(char => {
        if (char === " ") return "/";
        const index = ALPHABET.indexOf(char);
        if (index === -1) return char;
        // reversed: num = (index - offset + 26) % 26 + 1
        let num = (index - offset) % 26;
        if (num < 0) num += 26;
        return num + 1;
    }).join(" ");
};

/**
 * Converts a degree to an offset index (0-25).
 */
export const getOffsetFromDegrees = (degrees) => {
    const normalizedDegrees = ((degrees % 360) + 360) % 360;
    const step = 360 / 26;
    return Math.round(normalizedDegrees / step) % 26;
};
