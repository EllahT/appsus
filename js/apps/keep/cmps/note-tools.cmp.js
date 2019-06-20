'use-strict';

export default {
    template: `
    <section>
    <h6>Tools</h6>

    <div class="clr-picker">
        <div @click="emitChangeColor(color.code)" v-for="color in colors" :class="color.name" class="clr-circle"></div>
    </div>
    </section>
    `,
    created() {

    },
    data() {
        return {
            colors: [{code:'#fafa34', name: 'yellow'},{code:'#63f0e2', name: 'turquoise'},{code:'#965bd1', name: 'purple'}]
        }
    },
    methods: {
        emitChangeColor(color) {
            console.log(color);
            this.$emit('changedColor', color)
        }
    },
    computed: {

    }
}