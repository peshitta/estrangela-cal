/** @module estrangela */

import { Writing, Mapper } from 'aramaic-mapper';
import {
  allConsonants,
  ligatures,
  allVowels,
  commonDiacritics,
  shiftedDiacritics,
  isConsonant,
  isEasternDiacritic
} from 'estrangela-code-util';
import { consonants, vowels, diacritics } from 'cal-code-util';

/**
 * @private
 * Estrangela Writing Definition
 * @const
 * @type { Writing }
 */
const estrangelaWriting = new Writing(
  allConsonants,
  allVowels,
  Object.freeze(commonDiacritics.concat(shiftedDiacritics))
);

/**
 * @private
 * Mapped Cal Writing Definition
 * @const
 * @type { Writing }
 */
const calWriting = new Writing(
  Object.freeze(
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
      .concat(['l', 't'])
  ),
  Object.freeze(vowels.slice(0, 4).concat(['E', 'O', 'a', 'o', 'e', 'E'])),
  Object.freeze(diacritics.concat([',', '_', '*']))
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
  if (isEasternDiacritic(c)) {
    return '';
  }
  let m = toFrom[c];
  if (ligatures.indexOf(c) > -1) {
    let sb = '';
    let j = 0;
    let n = word.charAt(i + ++j);
    while (i + j < word.length && !isConsonant(n)) {
      if (!isEasternDiacritic(n)) {
        sb += toFrom[n] || n;
      }
      n = word.charAt(i + ++j);
    }
    m += `${sb})`;
  } else if (m === 'i' && toFrom[word.charAt(i - 1)] === 'w') {
    m = 'u';
  }
  return m || c;
};

/**
 * Aramaic mapper
 * @const
 * @type { Mapper }
 */
export const mapper = new Mapper(estrangelaWriting, calWriting, mapCallback);

/**
 * Convert from Estrangela ASCII font to CAL coding
 * @static
 * @param {string} word input word in Estrangela ASCII font
 * @returns {string} the input word converted to CAL code
 */
export const toCal = word => mapper.map(word);
