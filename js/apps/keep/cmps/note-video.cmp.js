'use-strict'

export default {
    template: `
        <section>
        <form>
            <input v-model="videoUrl" type="text" placeholder="insert url of a video from the web"/>
            <div class="displayDiv">
                <video preload="auto" v-if="videoUrl" tabindex="-1" width="320" height="240" controls :src="videoUrl"></video>
            </div>
        </form>
        </section>
    `,
    
    props: ['content'],
    
    data() {
        return {
            videoUrl: ''
        }
    }, 

    watch: { 
        'videoUrl': {
            handler: function() {
                this.$emit('videoNoteChanged',this.videoUrl);
           },
           immediate: true
         },
        }
}
