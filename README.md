# estrangela-cal

[![npm version](https://badge.fury.io/js/estrangela-cal.svg)](https://badge.fury.io/js/estrangela-cal)
[![npm module downloads](http://img.shields.io/npm/dt/estrangela-cal.svg)](https://www.npmjs.org/package/estrangela-cal)
[![Build Status](https://travis-ci.org/peshitta/estrangela-cal.svg?branch=master)](https://travis-ci.org/peshitta/estrangela-cal)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/peshitta/estrangela-cal/blob/master/LICENSE)
[![Dependency Status](https://david-dm.org/peshitta/estrangela-cal.svg)](https://david-dm.org/peshitta/estrangela-cal)
[![Coverage Status](https://coveralls.io/repos/github/peshitta/estrangela-cal/badge.svg?branch=master)](https://coveralls.io/github/peshitta/estrangela-cal?branch=master)
[![Gitter](https://badges.gitter.im/peshitta/peshitta.svg "Join the chat at https://gitter.im/peshitta/Lobby")](https://gitter.im/peshitta/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

Convert from [Estrangela](http://www.peshitta.org/initial/standard.html) ASCII
font code to [CAL code](http://cal1.cn.huc.edu/searching/fullbrowser.html)

## Installation

In order to use this library, [Node.js](https://nodejs.org) should be installed. 
Then run:
```
npm install estrangela-cal --save
```

Following bundles are available:
* `estrangela-cal.js` - UMD ES5 version for use in browser, node, etc.
* `estrangela-cal.min.js` - minified version of `estrangela-cal.js`
* `estrangela-cal.esm.js` - ES6 module version, suitable for bundling with other 
libraries and applications

The package could also be downloaded directly from:
[https://registry.npmjs.org/estrangela-cal/-/estrangela-cal-1.0.7.tgz](https://registry.npmjs.org/estrangela-cal/-/estrangela-cal-1.0.7.tgz)

## More information

Note: Eastern Estrangela font has no support for standalone **i** and **u**
vowels, without supporting **y** or **w** respectively. `toCal`
conversion may not have those vowels, even if the word had them originally.
E.g. u in `metul`, words imported from Greek like `Caesarea`, etc.

[Peshitta App](https://peshitta.github.io)

[Estrangela Font Encoding Chart](http://www.peshitta.org/initial/standard.html)

[Estrangela ASCII font](http://www.peshitta.org/initial/software.html)

[CAL](http://cal1.cn.huc.edu/searching/fullbrowser.html)

For CAL to Estrangela conversion see:
[cal-estrangela](https://github.com/peshitta/cal-estrangela)

## License

[MIT](https://github.com/peshitta/estrangela-cal/blob/master/LICENSE)

## Contributing

The final goal for this work is to learn the Word of God as recorded by
[Peshitta](https://en.wikipedia.org/wiki/Peshitta).
You are welcomed to improve this implementation or provide feedback. Please
feel free to [Fork](https://help.github.com/articles/fork-a-repo/), create a
[Pull Request](https://help.github.com/articles/about-pull-requests/) or
submit [Issues](https://github.com/peshitta/estrangela-cal/issues).

To read quick updates about Peshitta app or post questions or feedback, follow
[@peshittap](https://www.twitter.com/peshittap)
at [![@peshittap](http://i.imgur.com/wWzX9uB.png "@peshittap")](https://www.twitter.com/peshittap)or
[![Gitter](https://badges.gitter.im/peshitta/peshitta.svg "Join the chat at https://gitter.im/peshitta/Lobby")](https://gitter.im/peshitta/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

## Development

```
npm install
```
```
npm run build
```

## API Reference

* [estrangelaCal](#module_estrangelaCal)
    * [.mapper](#module_estrangelaCal.mapper) : <code>Mapper</code>
    * [.toCal](#module_estrangelaCal.toCal) ⇒ <code>string</code>

<a name="module_estrangelaCal.mapper"></a>

### estrangelaCal.mapper : <code>Mapper</code>
Aramaic mapper

**Kind**: static constant of [<code>estrangelaCal</code>](#module_estrangelaCal)  
<a name="module_estrangelaCal.toCal"></a>

### estrangelaCal.toCal ⇒ <code>string</code>
Convert from Estrangela ASCII font to CAL coding

**Kind**: static constant of [<code>estrangelaCal</code>](#module_estrangelaCal)  
**Returns**: <code>string</code> - the input word converted to CAL code  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | input word in Estrangela ASCII font |

