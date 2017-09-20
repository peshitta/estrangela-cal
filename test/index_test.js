const test = require('assert');
const sut = require('../build/estrangela-cal');

describe('Estrangela', () => {
  describe('To Cal', () => {
    it('General case usage, with one-to-one mapping', () => {
      const word = sut.toCal('dqsry0-dpylypwS');
      const wordExpected = 'dqsry)-dpylypws';
      const vocalised = sut.toCal('d2qoser;ye0-d3p3y;ly;p2wuS');
      const vocalisedExpected = "d'qesariya)-d,p,yilyip'wOs";
      test.strictEqual(word, wordExpected, 'sut.toCal_generic consonant');
      test.strictEqual(
        vocalised,
        vocalisedExpected,
        'sut.toCal_generic vocalised'
      );
    });
    it('Word with (yi) => (i;) mapping', () => {
      const word = sut.toCal('dylydwth');
      const wordExpected = 'dylydwth';
      const vocalised = sut.toCal('d2y;ly;d3w;t3oh');
      const vocalisedExpected = "d'yilyid,wut,eh";
      test.strictEqual(word, wordExpected, 'sut.toCal_yi consonant');
      test.strictEqual(vocalised, vocalisedExpected, 'sut.toCal_yi vocalised');
    });
    it('Word with short Eastern (E) => (e) mapping', () => {
      const word = sut.toCal('0wld');
      const wordExpected = ')wld';
      const vocalised = sut.toCal('0ewlid');
      const vocalisedExpected = ')awlEd';
      test.strictEqual(word, wordExpected, 'sut.toCal_yi consonant');
      test.strictEqual(vocalised, vocalisedExpected, 'sut.toCal_yi vocalised');
    });
    it('Word with (wu) => (uO) mapping', () => {
      const word = sut.toCal('lb9ldbbykwJ');
      const wordExpected = 'lb(ldbbykwn';
      const vocalised = sut.toCal('leb39old2b3ab3eyk2w;J');
      const vocalisedExpected = "lab,(eld'b,ob,ayk'wun";
      test.strictEqual(word, wordExpected, 'sut.toCal_wu consonant');
      test.strictEqual(vocalised, vocalisedExpected, 'sut.toCal_wu vocalised');
    });
    it('Word with (wO) => (oO) mapping', () => {
      const word = sut.toCal('0bhwhY');
      const wordExpected = ')bhwhy';
      const vocalised = sut.toCal('0eb3ahewh5Y');
      const vocalisedExpected = ')ab,ohawh_y';
      test.strictEqual(word, wordExpected, 'sut.toCal_wO consonant');
      test.strictEqual(vocalised, vocalisedExpected, 'sut.toCal_wO vocalised');
    });
    it('Standalone non-vocalized ligature', () => {
      test.strictEqual(sut.toCal('F'), 't)', 'F ligature');
      test.strictEqual(sut.toCal('f'), 'l)', 'f ligature');
    });
    it('Standalone vocalized ligature', () => {
      test.strictEqual(sut.toCal('Fe'), 'ta)', 'F ligature');
      test.strictEqual(sut.toCal('fa'), 'lo)', 'f ligature');
    });
    it('Standalone diacritic vocalized ligature', () => {
      test.strictEqual(sut.toCal('F2o'), "t'e)", 'F ligature');
      test.strictEqual(sut.toCal('f6e'), 'l*a)', 'f ligature');
    });
    it('Non-standalone non-vocalized ligature', () => {
      test.strictEqual(sut.toCal('0F'), ')t)', 'F ligature');
      test.strictEqual(sut.toCal('df'), 'dl)', 'f ligature');
    });
    it('Non-standalone vocalized ligature', () => {
      test.strictEqual(sut.toCal('legaFo'), 'lagote)', 'F ligature');
      test.strictEqual(sut.toCal('todarefi'), 'tedoralE)', 'f ligature');
    });
    it('Non-standalone diacritic vocalized ligature', () => {
      test.strictEqual(sut.toCal('h#F2o'), "h,t'e)", 'F ligature');
      test.strictEqual(sut.toCal('r^ef3E'), 'r*al,a)', 'f ligature');
    });
    it('Non-standalone eastern diacritic vocalized', () => {
      test.strictEqual(sut.toCal('h#F82o'), "h,t'e)", '1 Eastern diacritic');
      test.strictEqual(
        sut.toCal('`r^e1f3E1'),
        'r*al,a)',
        '`1 Eastern diacritic'
      );
    });
    it('With un-mapped symbols', () => {
      test.strictEqual(sut.toCal('Zh#F2o7'), "Zh,t'e7)", 'start/end un-mapped');
      test.strictEqual(sut.toCal('r^eRf3E'), 'r*aRl,a)', 'inside un-mapped');
    });
    it('Blank word returns blank', () => {
      const word = sut.toCal('');
      const wordExpected = '';
      test.strictEqual(word, wordExpected, 'sut.toCal_blank');
    });
    it('Null word returns null', () => {
      const word = sut.toCal(null);
      const wordExpected = null;
      test.strictEqual(word, wordExpected, 'sut.toCal_null');
    });
    it('Undefined word returns undefined', () => {
      const word = sut.toCal(undefined);
      const wordExpected = undefined;
      test.strictEqual(word, wordExpected, 'sut.toCal_undefined');
    });
    it('0 number as word returns 0', () => {
      const word = sut.toCal(0);
      const wordExpected = 0;
      test.strictEqual(word, wordExpected, 'sut.toCal_zero');
    });
  });
  describe('Mapped writing', () => {
    it('Consonants length', () => {
      test.strictEqual(
        sut.mapper.fromWriting.consonants.length,
        sut.mapper.toWriting.consonants.length,
        'Length differs'
      );
      test.ok(
        sut.mapper.fromWriting.consonants.length > 22,
        'Length greater than 22'
      );
    });
    it('Vowels length', () => {
      test.strictEqual(
        sut.mapper.fromWriting.vowels.length,
        sut.mapper.toWriting.vowels.length,
        'Length differs'
      );
      test.ok(
        sut.mapper.fromWriting.vowels.length === 10,
        'Length equal to 10'
      );
    });
    it('Diacritics length', () => {
      test.strictEqual(
        sut.mapper.fromWriting.diacritics.length,
        sut.mapper.toWriting.diacritics.length,
        'Length differs'
      );
      test.ok(
        sut.mapper.fromWriting.diacritics.length === 7,
        'Length equal to 7'
      );
    });
  });
});
