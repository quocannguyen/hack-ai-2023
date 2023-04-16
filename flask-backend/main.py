import pyaudio
import wave 
def recordAudio():
    FORMAT = pyaudio.paInt32
    CHUNK = 1024
    RATE = 44100
    CHANNELS = 1

    p = pyaudio.PyAudio()
    stream = p.open(format=FORMAT, channels = CHANNELS, rate=RATE, input=True,frames_per_buffer=CHUNK)

    print("Begin recording now")
    frames = []
    seconds = int(input('How many seconds do you want to hum for: '))
    for i in range(0, int(RATE/CHUNK*seconds)):
        data = stream.read(CHUNK)
        frames.append(data)
    print("End recording")

    stream.stop_stream()
    stream.close()
    p.terminate()

    wf = wave.open("output.wav",'wb')
    wf.setnchannels(CHANNELS)
    wf.setsampwidth(p.get_sample_size(FORMAT))
    wf.setframerate(RATE)
    wf.writeframes(b''.join(frames))
    wf.close()
