'use-strict'

export default {
    template: `
        <section>
        <form>
            <h2>insert image url to add to your note</h2>
            <input v-model="imgUrl" type="text" placeholder="insert url of an image from the web"/>
            <img v-if="imgUrl" :src="imgUrl" class="input-img"/>
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
