import audioService from '../services/audio-service.js';

let mediaRecorder;
let audio;

export default {
    template: `
    <section>
        <button @click.prevent="startRec">Start Recording</button>
        <button @click.prevent="stopRec">Stop Recording</button>
        <button @click.prevent="playRec">Play</button>
    </section>
    
    `,

    data() {
        return {
            dataAudio: null
        }
    },

    methods: {
        startRec() {
            console.log('started')
            navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                mediaRecorder = new MediaRecorder(stream);
                mediaRecorder.start();

                const audioChunks = [];
                mediaRecorder.addEventListener("dataavailable", event => {
                    audioChunks.push(event.data);
                    });

                mediaRecorder.addEventListener("stop", () => {
                    const audioBlob = new Blob(audioChunks);
                    const audioUrl = URL.createObjectURL(audioBlob);
                    audio = new Audio(audioUrl);
                    
                    audioService.blobToDataURL(audioBlob,(data) => {
                        this.dataAudio = data;
                    })
                });

            });
        },

        stopRec() {
            mediaRecorder.stop();
        },

        playRec() {
            audio.play();
        }
    },

    watch: {
        'dataAudio': function() {
            this.$emit('audioNoteChanged',this.dataAudio);
        },   
    }
}


