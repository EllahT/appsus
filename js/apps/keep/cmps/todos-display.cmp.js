'use-strict';

import todoItem from './todo-item.cmp.js'
import keepService from '../services/keep-service.js'


export default {
    template: `
    <ul>
        <todo-item @deletingTodo="deleteTodo" 
             v-for="currTodo in note.content"
        :todo="currTodo" :key="currTodo.id"></todo-item>
    </ul>
    `,
    props: ['note'],
    created() {
        
    },
    methods: {
        deleteTodo(todoId) {
            keepService.deleteTodo(todoId, this.note.id)  
        }
    },
    components: {
        todoItem
    }
}