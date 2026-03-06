/**
 * Pure logic helper for Memory Matching Game
 */

/**
 * Shuffles an array using Fisher-Yates algorithm
 * @param {Array} array 
 * @returns {Array} Shuffled copy of the array
 */
export const shuffle = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

/**
 * Generates a deck of cards from a list of pairs
 * @param {Array} pairs Array of {id, word, img}
 * @returns {Array} Shuffled deck of card objects
 */
export const generateDeck = (pairs) => {
    const deck = [];

    pairs.forEach((pair) => {
        // Create two card instances for each pair
        const card1 = {
            instanceId: `${pair.id}-1`,
            pairId: pair.id,
            content: pair,
        };
        const card2 = {
            instanceId: `${pair.id}-2`,
            pairId: pair.id,
            content: pair,
        };
        deck.push(card1, card2);
    });

    return shuffle(deck);
};

/**
 * Checks if two cards match
 * @param {Object} cardA 
 * @param {Object} cardB 
 * @returns {Boolean}
 */
export const checkMatch = (cardA, cardB) => {
    if (!cardA || !cardB) return false;
    return cardA.pairId === cardB.pairId;
};
