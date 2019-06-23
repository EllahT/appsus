'use-strict';

// import noteText from './note-txt.cmp.js'
// import noteTodos from './note-todos.cmp.js'
import eventBus, { SHOW_MSG } from '../../../services/event-bus.service.js';
import keepService from '../services/keep-service.js';


export default {
    template: `
    <section>
        <h1>Hiiiii</h1>
            <form v-if="note.type === 'todo'" @submit.prevent="emitContent" >
                <input type="text" v-model="newTodo.text" />
                <button @click="addTodo">+</button>
            </form>
        <!-- <note-text :content="note.content" @contentChanged="changeContent" v-if="note.type === 'txt'"></note-text>
        <note-todos :content="note.content" @newTodosChanged="changeContent" v-else="note.type === 'todo'"></note-todos> -->
    </section>
    `,
    data() {
        return {
            todos: [],
            newTodo: { text: '', isDone: false, id: '' }
        }
    },
    props: ['note'],
    methods: {
        changeContent(content) {
            this.note.content = content;
        },
        addTodo() {
            keepService.addTodo(newTodo, this.note.id)
            this.newTodo = { text: '', isDone: false, id: '' };
            eventBus.$emit(SHOW_MSG, {txt: 'your todo has been added!', type: 'success'});
        },
    },
    components: {
        // noteText,
        // noteTodos
    }

}