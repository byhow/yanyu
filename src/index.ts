import pinyin from 'pinyin';
import { randomBytes } from 'crypto';
import audiospirite from 'audiosprite';

export default class Yan {
  /**
   * convert through the pinyin library
   * TODO: add to set different modes, default to tone2
   *
   * @param {String} hans
   * @param {Number} options
   * @returns {String[][]}
   */
  private convert(hans: string, options?: number): string[][] {
    const pyStyle = options || pinyin.STYLE_TONE2;
    return pinyin(hans, { style: pyStyle });
  }

  /**
   * concat audio files
   *
   * @param {String[]} fileArr
   * @returns {String}
   */
  private concatAudioMp3(fileArr: string[]): string {
    const opts = {
      export: 'mp3',
      output: `${randomBytes(7).toString('hex')}.mp3`,
      gap: 0,
      ignorerounding: true,
    };

    audiospirite(fileArr, opts, (err, obj) => {
      if (err) return console.error(err);
      console.info(JSON.stringify(obj, null, 2))
    });

    return opts.output;
  }

  /**
   * generate an audio file of the input characters
   * @param {String} hans - the words/sentences
   * @param {String} path - output path
   * @param {Number | null} options - for Py lib
   * @returns {String}
   */
  synthesis(hans: string, path: string = 'pinyin-syllables', options?: number): string {
    const pyArr = this.convert(hans, options);
    // TODO: compress the audio library
    const dirPath = pyArr.map((elem) => {
      if (elem[0]?.trim()) {
        return `./${path}/${elem[0]}.mp3`;
      }
      return `./${path}/1000.mp3`;
    });
    return this.concatAudioMp3(dirPath);
  }

  recognition(): void {
    console.error(`Not implemented`)
  }
}
