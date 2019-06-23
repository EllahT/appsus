export default {
    template: `
    <div class="video-container">
        <iframe class="watch" width=80% height=80% :src="content"></iframe>    
    </div>
    `,

    props: ['content'],

    created() {
        
    }

}