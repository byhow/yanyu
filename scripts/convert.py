from os import listdir
from os.path import isfile, join
from pydub import AudioSegment, exceptions
from pydub.utils import which

AudioSegment.converter = which("ffmpeg")
wav_files = [f for f in listdir("./pinyin-syllables") if isfile(join("./pinyin-syllables", f))]

# convert wav to mp3
for i in wav_files:
    try:                                              
        stream = AudioSegment.from_file("./pinyin-syllables/"+i, format="mp3")
        stream = stream.normalize()
        # print("./pinyin-syllables-mp3/"+i.split(".")[0]+".mp3")
        stream.export("./pinyin-syllables-mp3/"+i.split(".")[0]+".mp3")
        
    except exceptions.CouldntDecodeError as e:
        print(i)
        print(e)