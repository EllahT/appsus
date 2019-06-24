'use-strict'

export default {
    template: `
        <section>
            <form>
                <input v-model="imgUrl" type="text" placeholder="Insert Image Url"/>
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
