'use-strict';

export default {
    template: `
        <li class="todo-item" :class="{'done': todo.isDone}">
            <input type="checkbox" @change="toggle" />
            <label>{{todo.text}}</label>
            <button @click.prevent="emitDeleteTodo(todo.id)">✖</button>
        </li>
    `,
    props: ['todo'],
    methods: {
        hi() {
            console.log('hi');

        },
        emitDeleteTodo(todoId) {
            this.$emit('deletingTodo', todoId);
        },
        toggle() {
            this.todo.isDone = !this.todo.isDone;
        },

    }
}