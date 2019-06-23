'use-strict';

export default {
    template: `
    <section>
    <button :note="note" v-if="note.type === 'todo'" @click="emitEditClicked">Edit</button>
    <div class="clr-picker">
        <div @click="emitChangeColor(color.code)" v-for="color in colors" :class="color.name" class="clr-circle"></div>
    </div>
    <button :note="note" @click="emitTogglePin">{{pinnedImg(note)}}</button>
    <button @click="emitDeletingNote">Trashcan</button>
    </section>
    `,
    created() {

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
        emitTogglePin() {
            this.$emit('toggledPin', this.note.id);
        },
        pinnedImg(note) {
            return (note.isPinned)? 'Unpin' : 'Pin';
        },
        emitEditClicked() {
            this.$emit('editIsClicked', this.note.id);
        }
    },
    props: ['note'],
    computed: {

    },
}