<h1>
  Yanyu.js
</h1>

<p>
  <a href="https://zh.m.wiktionary.org/zh/%E8%A8%80">
    <img alt="Yan" src="public/yan.png" width="200" />
  </a>
</p>

<a href="https://github.com/byhow/yanyu/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/byhow/yanyu"></a>
<img alt="npm" src="https://img.shields.io/npm/dw/yanyu?color=red&label=npm%20download">
<a href="https://github.com/byhow/yanyu/blob/master/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/byhow/yanyu"></a> ![](https://github.com/byhow/yanyu/workflows/npm-test/badge.svg)

## Overview

Yanyu is a high speed Chinese Text-to-Speech JavaScript library for Node.js. It aims to generate audio files based on Chinese characters. Recognition and support for other languages is planned in the future.

## Installation

### NPM

Run the following command:

```bash
npm install yanyu
```

## QuickStart

Call the `systhesis()` function to convert Chinese string to mp3 files.

```js
import yan from 'yanyu';

const yan = new Yan();
yan.synthesis('你好', 'pinyin-syllables');
```

Requirements:

- Node v12+

## Test

```bash
npm test
```

## Code of Conduct

[**Code of Conduct**](./CODE-OF-CONDUCT.md).

## License

Licensed under the [MIT License](./LICENSE).
