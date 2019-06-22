'use-strict'

export default {
    template: `
        <section>
        <form>
            <input v-model="imgUrl" type="text" placeholder="insert url of an image from the web"/>
            <div class="displayDiv">
                <img :src="imgUrl" class="input-img"/>
            </div>
            <button @click="emitAddImgNote">save note</button>
        </form>
        </section>
    `,
    
    props: ['content'],
    
    data() {
        return {
            imgUrl: ''
        }
    }, 

    methods: {
        emitAddImgNote() {
            this.$emit('imgNoteAdded',this.imgUrl);
        }
    }
}
