'use-strict';

import keepService from '../services/keep-service.js';

export default {
    template: `
    <section>
        <h1>Hiiiii</h1>
            <form v-if="note.type === 'todo'" >
                <input type="text" v-model="newTodo.text" />
                <button @click.prevent="addTodo">+</button>
            </form>
    </section>
    `,
    data() {
        return {
            initialTodos: this.note.content,
            newTodo: { text: '', isDone: false, id: '' }
        }
    },
    props: ['note'],
    methods: {
        changeContent(content) {
            this.note.content = content;
        },
        addTodo() {
            this.changeContent(this.initialTodos);
            keepService.addTodo(this.newTodo, this.note.id);
            this.newTodo = { text: '', isDone: false, id: '' };
        },
    },
    components: {
        // noteText,
        // noteTodos
    }

}