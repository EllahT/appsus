import audioService from '../services/audio-service.js';

export default {
    template: `
        <button @click="playSound">play</button>    
    `,

    data() {
        return {
            audio: null
        }
    },

    props: ['content'],

    created() {
        let newAudioBlob = audioService.dataURLtoBlob(this.content);
        const audioUrl = URL.createObjectURL(newAudioBlob);
        this.audio = new Audio(audioUrl);
    },

    methods: {
        playSound() {
            this.audio.play();
        }
    }

}

