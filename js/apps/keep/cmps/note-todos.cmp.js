'use-strict';

import utilService from '../../../services/util.service.js';
import todoItem from './todo-item.cmp.js';

export default {
    template: `
        <section>
            <form action="#">
                <p>Add a todo</p>
                <form @submit.prevent="addTodo" >
                    <input type="text" v-model="newTodo.text" />
                    <input type="submit" @submit="emitContent(this.todos)" value="+"/>
                </form>
                <ul>
                    <todo-item @deletingTodo="deleteTodo" :class="toggleChecked" v-for="currTodo in todos" :todo="currTodo" :key="currTodo.id"></todo-item>
                </ul>
            </form>
        </section>
    `, // class binding to cross text
    data() {
        return {
            todos: [],
            newTodo: { text: '', isDone: false, id: '' }
        }
    },
    props: ['content'],
    methods: {
        addTodo() {
            this.newTodo.id = utilService.makeId();
            this.todos.push(this.newTodo);
            this.newTodo = { text: '', isDone: false, id: '' };
        },
        deleteTodo(todoId) {
            const todoIdx = this.todos.findIndex((todo) => { todo.id === todoId })
            this.todos.splice(todoIdx, 1);
        },
        toggleChecked(todoId) {
            const todoIdx = this.todos.findIndex((todo) => { todo.id === todoId })

        },
        emitContent(todos) {
            this.$emit('contentChanged', this.todos);
            console.log('emiting');
            
        }
        // eventBus.$emit('add-todo', 'Todo Was Added!');

    },
    created() {

    },
    components: {
        todoItem
    }

}