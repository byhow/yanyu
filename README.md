<h1>
  Yanyu.js
</h1>

<p>
  <a href="https://zh.m.wiktionary.org/zh/%E8%A8%80">
    <img alt="Yan" src="public/yan.png" width="200" />
  </a>
</p>

## Overview

Yanyu is a high speed Chinese Text-to-Speech JavaScript library for Node.js. It aims to generate audio files based on Chinese characters. It will support other languages and even recognition in the future. 


## Installation

### NPM
Run the following command:
```bash
npm install --save-dev yanyu
```


## QuickStart
Call the ```systhesis()``` function to convert Chinese string to mp3 files. The file names are generated with random hash functions.
```js
import yan from 'yanyu';
const yan = new Yan();
yan.synthesis("你好", "pinyin-syllables"); // generates mp3 file that can read out loud
```


Requirements: 
* Node v13+
* Python 3+ for scripts
  * run python scripts to convert audio with `pipenv`. 
    * `pip3 install pipenv`
    * `pipenv install`
    * `pipenv shell`


## Test
```bash
npm test
```

## Code of Conduct
[**Code of Conduct**](./CODE-OF-CONDUCT.md).

## License

Licensed under the [MIT License](./LICENSE).
