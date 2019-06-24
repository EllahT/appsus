'use-strict';

export default {
    template: `
        <section>
            <input @keyup.enter="emitAddNote" type="text" placeholder="Write away..." v-model="text" @change="emitContent"/>
        </section>
    `,
    data() {
        return {
            text: ''
        }
    },
    props: ['content'],
    created() {

    },
    methods: {
        emitContent() {
            this.$emit('contentChanged', this.text);
        },

        emitAddNote() {
            this.$emit('addNewNote', this.text);
            this.text = '';

        }
    }

}