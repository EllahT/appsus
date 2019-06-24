'use-strict';

export default {
    template: `
        <li class="todo-item" :class="{'done': todo.isDone}">
            <input class="no-outline" type="checkbox" @change="toggle" v-model="todo.isDone" />
            <label>{{todo.text}}</label>
            <button class="round-btn" @click.prevent="emitDeleteTodo(todo.id)">✖</button>
        </li>
    `,
    created() {
        
        
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