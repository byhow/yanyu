import Py from 'pinyin';
import crypto from 'crypto';
import audiospirite from 'audiosprite';

export class Yan {

    // TODO: add to set different modes
    // default to tone2
    _convert (hans: string, options?: number) {
        const pyStyle = options ? options : Py.STYLE_TONE2;
        return Py(hans, { style: pyStyle });
    }

    _concat_audio_mp3(fileArr: string[]) {
        const fileId = crypto.randomBytes(7).toString('hex');
        const opts = { 
            export: 'mp3',
            output: `${fileId}.mp3`,
            gap: 0,
            ignorerounding: 1,
        };
        audiospirite(fileArr, opts, (err, obj) => {
            if (err) {
                // console.error(err);
                return err.message;
            }
        });
        return opts.output;
    }

    synthesis(hans: string, path: string, options?: number) {
        const pyArr : string[][]  = this._convert(hans, options);
        const dirPath = pyArr.map((elem) => {
            if (elem[0] && elem[0].trim()) {
                return `./${path}/${elem[0]}.mp3`;
            } else {
                return `./${path}/1000.mp3`;
            }
        });
        
        return this._concat_audio_mp3(dirPath);
    }

    recognition() {
        return;
    }

}