'use-strict';

export default {
    template: `
        <section>
            <input type="text" placeholder="Write away..." v-model="text" @change="emitContent"/>
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
            this.text = '';
        }
    }

}