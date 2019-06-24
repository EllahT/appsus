import audioService from '../services/audio-service.js';

let mediaRecorder;
let audio;

export default {
    template: `
    <section>
        <button class="round-btn" @click.prevent="startRec"><i class="fas fa-microphone"></i></button>
        <button class="round-btn" @click.prevent="stopRec"><i class="fas fa-stop"></i></button>
        <button class="round-btn" @click.prevent="playRec"><i class="fas fa-volume-up"></i></button>
    </section>
    
    `,

    data() {
        return {
            dataAudio: null,
            isRec: false,
            
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


