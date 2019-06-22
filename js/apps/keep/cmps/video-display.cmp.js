export default {
    template: `
    <div class="video-container">
        <video class="video-display-input" preload="auto" tabindex="-1" controls :src="content"></video>
    </div>
    `,

    props: ['content'],

    created() {
        
    }

}