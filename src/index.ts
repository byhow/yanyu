import Py = require('pinyin');
import crypto from 'crypto';
import audiospirite = require('audiosprite');

export class Yan {
  /**
   * convert through the pinyin library
   * TODO: add to set different modes, default to tone2
   *
   * @param {String} hans
   * @param {Number} options
   * @returns {String[][]}
   */
  private convert(hans: string, options?: number): string[][] {
    const pyStyle = options ? options : Py.STYLE_TONE2;
    return Py(hans, { style: pyStyle });
  }

  /**
   * concat audio with autospirite
   *
   * @param {String[]} fileArr
   * @returns {String}
   */
  private concat_audio_mp3(fileArr: string[]): string {
    const fileId = crypto.randomBytes(7).toString('hex');
    const opts = {
      export: 'mp3',
      output: `${fileId}.mp3`,
      gap: 0,
      ignorerounding: 1,
    };
    // TODO: to not to use audiospirite
    audiospirite(fileArr, opts, (err, _) => {
      if (err) {
        return err.message;
      }
      // TODO: refactor out the default return
      return '';
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
  synthesis(hans: string, path: string, options?: number): string {
    const pyArr: string[][] = this.convert(hans, options);
    // TODO: compress the audio library
    const dirPath = pyArr.map((elem) => {
      if (elem[0] && elem[0].trim()) {
        return `./${path}/${elem[0]}.mp3`;
      } else {
        return `./${path}/1000.mp3`;
      }
    });
    return this.concat_audio_mp3(dirPath);
  }

  recognition(): void {
    return;
  }
}
