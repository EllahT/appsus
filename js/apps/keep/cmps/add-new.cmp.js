'use-strict';

export default {
    template: `
    <section>
        <h1>Where new Notes Happen. Which is soon.</h1>
        <form action="#">
            <input type="text" v-model="note.content" @input="doSomething"/>


        </form>
    </section>
    `,
    data() {
        return {
            note: {
                type: '',
                color: '',
                content: ''
            }
        }
    },
    methods: {
        addNewNote() {

        },
        doSomething() {
            console.log('is this thing on');
            
        }
    },
    computed: {
        // addNote(type, color, content, time)
    }
}