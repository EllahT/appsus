'use-strict';

export default {
    template: `
        <li class="todo-item" :class="{'done': todo.isDone}">
            <input type="checkbox" @change="toggle" v-model="todo.isDone" />
            <label>{{todo.text}}</label>
            <button @click.prevent="emitDeleteTodo(todo.id)">✖</button>
        </li>
    `,
    created() {
        console.log(this.todo.isDone);
        
    },
    props: ['todo'],
    methods: {
        emitDeleteTodo(todoId) {
            this.$emit('deletingTodo', todoId);
        },
        toggle() {
            this.todo.isDone = !this.todo.isDone;
            this.$emit('isDoneChanged', this.todo.id);
        },

    }
}