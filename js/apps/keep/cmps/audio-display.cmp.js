import audioService from '../services/audio-service.js';

export default {
    template: `
        <button class="round-btn fas fa-volume-up" @click="playSound"></button>    
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

