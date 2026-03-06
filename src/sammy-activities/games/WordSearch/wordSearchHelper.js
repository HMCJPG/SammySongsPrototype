
/**
 * wordSearchLogic.js
 * 
 * This helper contains the logic for generating the word search grid.
 * It places words horizontally or vertically and fills the rest with random letters.
 */

export const DIRECTIONS = {
  HORIZONTAL: 'HORIZONTAL',
  VERTICAL: 'VERTICAL',
};

/**
 * Generates a word search grid.
 * @param {string[]} words - Array of words to place.
 * @param {number} size - Grid size (NxN).
 * @returns {object} { grid, wordPathMap }
 */
export const generateGrid = (words, size = 10) => {
  // Initialize empty grid
  const grid = Array(size).fill(null).map(() => Array(size).fill(''));
  const placedWords = [];

  // Sort words by length (longest first) for better placement success
  const sortedWords = [...words].map(w => w.toUpperCase()).sort((a, b) => b.length - a.length);

  sortedWords.forEach(word => {
    let placed = false;
    let attempts = 0;
    const maxAttempts = 100;

    while (!placed && attempts < maxAttempts) {
      const direction = Math.random() > 0.5 ? DIRECTIONS.HORIZONTAL : DIRECTIONS.VERTICAL;
      const row = Math.floor(Math.random() * size);
      const col = Math.floor(Math.random() * size);

      if (canPlaceWord(grid, word, row, col, direction, size)) {
        placeWord(grid, word, row, col, direction);
        placedWords.push({
          word,
          start: { row, col },
          direction,
          path: getWordPath(word, row, col, direction)
        });
        placed = true;
      }
      attempts++;
    }
  });

  // Fill empty spaces with random letters
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (grid[r][c] === '') {
        grid[r][c] = characters.charAt(Math.floor(Math.random() * characters.length));
      }
    }
  }

  return { grid, placedWords };
};

const canPlaceWord = (grid, word, row, col, direction, size) => {
  if (direction === DIRECTIONS.HORIZONTAL) {
    if (col + word.length > size) return false;
    for (let i = 0; i < word.length; i++) {
      if (grid[row][col + i] !== '' && grid[row][col + i] !== word[i]) {
        return false;
      }
    }
  } else {
    if (row + word.length > size) return false;
    for (let i = 0; i < word.length; i++) {
      if (grid[row + i][col] !== '' && grid[row + i][col] !== word[i]) {
        return false;
      }
    }
  }
  return true;
};

const placeWord = (grid, word, row, col, direction) => {
  for (let i = 0; i < word.length; i++) {
    if (direction === DIRECTIONS.HORIZONTAL) {
      grid[row][col + i] = word[i];
    } else {
      grid[row + i][col] = word[i];
    }
  }
};

const getWordPath = (word, row, col, direction) => {
  const path = [];
  for (let i = 0; i < word.length; i++) {
    if (direction === DIRECTIONS.HORIZONTAL) {
      path.push(`${row}-${col + i}`);
    } else {
      path.push(`${row + i}-${col}`);
    }
  }
  return path;
};
