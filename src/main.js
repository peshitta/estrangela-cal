/** @module estrangela */

import { Writing, Mapper } from 'aramaic-mapper';
import {
  baseConsonants,
  finalConnected,
  finalNonConnected,
  ligatures,
  baseVowels,
  shiftedVowels,
  commonDiacritics,
  shiftedDiacritics,
  isConsonant
} from 'estrangela-code-util';
import { consonants, vowels, diacritics } from 'cal-code-util';

/**
 * Estrangela Writing Definition
 */
export const estrangelaWriting = new Writing(
  baseConsonants
    .concat(finalConnected)
    .concat(finalNonConnected)
    .concat(ligatures),
  baseVowels.concat(shiftedVowels),
  commonDiacritics.concat(shiftedDiacritics)
);

/**
 * Mapped Cal Writing Definition
 */
export const calWriting = new Writing(
  consonants
    .concat([
      'b',
      'g',

      'x',
      'T',
      'y',

      'k',
      'l',
      'm',
      'n',

      's',
      '(',
      'p',

      'q',
      '$'
    ])
    .concat(['k', 'n'])
    .concat(['l', 't']),
  vowels.slice(0, 4).concat(['E', 'O', 'a', 'o', 'e', 'E']),
  diacritics.concat([',', '_', '*'])
);

/**
 * @private
 * Maps input character to CAL char
 * @param { string } c Estrangela input character
 * @param { Object.<string, string> } fromTo mapping dictionary
 * @returns { string } CAL mapped char
 */
const mapCallback = (word, i, toFrom) => {
  const c = word.charAt(i);
  let m = toFrom[c];
  if (ligatures.indexOf(c) > -1) {
    let sb = '';
    let j = 0;
    let n = word.charAt(i + ++j);
    while (i + j < word.length && !isConsonant(n)) {
      sb += toFrom[n] || n;
      n = word.charAt(i + ++j);
    }
    m += `${sb})`;
  } else if (m === 'i' && toFrom[word.charAt(i - 1)] === 'w') {
    m = 'u';
  }
  return m || c;
};

/**
 * Convert from Estrangela ASCII font to CAL coding
 * @static
 * @param {string} word input word in Estrangela ASCII font
 * @returns {string} the input word converted to CAL code
 */
export const toCal = word =>
  new Mapper(estrangelaWriting, calWriting, mapCallback).map(word);
