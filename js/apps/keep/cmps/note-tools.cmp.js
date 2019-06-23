'use-strict';

export default {
    template: `
    <section>
    <div class="clr-picker">
        <div @click="emitChangeColor(color.code)" v-for="color in colors" :class="color.name" class="clr-circle"></div>
    </div>
    <button id="" :note="note" @click="emitTogglePin">Pin</button>
    <button @click="emitDeletingNote">Trashcan</button>
    </section>
    `,
    created() {
        console.log(this.note);

    },
    data() {
        return {
            isShowColors: false,
            colors: [{ code: '#fafa34', name: 'yellow' }, { code: '#63f0e2', name: 'turquoise' }, { code: '#965bd1', name: 'purple' }]
        }
    },
    methods: {
        emitChangeColor(color) {
            this.$emit('changedColor', color)
        },
        emitDeletingNote() {
            this.$emit('deletedNote')
        },
        emitTogglePin(ev) {
            this.$emit('toggledPin');
            this.pinnedImg(this.note);
        },
        pinnedImg(note) {
            if (note.isPinned) return 'Unpin'
            if (!note.isPinned) return 'Pin'
        }
    },
    props: ['note'],
    computed: {

    },
}