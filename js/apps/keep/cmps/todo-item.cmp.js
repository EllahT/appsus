'use-strict';

export default {
    template: `
        <li class="todo-item">
            <input type="checkbox" name="do" />
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
        toggle(todo) {
            todo.isDone = !todo.isDone;
            console.log(todo.isDone);
        },
    }
}