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
                    <input type="submit" value="+"/>
                </form>
                <ul>
                    <todo-item @deletingTodo="deleteTodo" v-for="currTodo in todos" :todo="currTodo" :key="currTodo.id"></todo-item>
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
            this.emitContent();
        },
        deleteTodo(todoId) {
            const todoIdx = this.todos.findIndex((todo) => { todo.id === todoId })
            this.todos.splice(todoIdx, 1);
            this.emitContent();
        },
        emitContent() {
            this.$emit('newTodosChanged', this.todos);
            console.log('emiting', this.todos);
            
        }
        // eventBus.$emit('add-todo', 'Todo Was Added!');

    },
    created() {

    },
    components: {
        todoItem
    }

}