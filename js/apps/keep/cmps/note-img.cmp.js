'use-strict'

export default {
    template: `
        <section>
        <form>
            <input v-model="imgUrl" type="text" placeholder="insert url of an image from the web"/>
            <div class="displayDiv">
                <img v-if="imgUrl" :src="imgUrl" class="input-img"/>
            </div>
        </form>
        </section>
    `,
    
    props: ['content'],
    
    data() {
        return {
            imgUrl: ''
        }
    }, 

    watch: { 
        'imgUrl': {
            handler: function() {
                this.$emit('imgNoteChanged',this.imgUrl);
           },
           immediate: true
         },
        }
}
