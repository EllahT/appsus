'use-strict';

export default {
    template: `
    <section>
    <button :note="note" v-if="note.type === 'todo'" class="round-btn" @click="emitEditClicked"><i class="fas fa-edit"></i></button>
    <div class="clr-picker">
        <div @click="emitChangeColor(color.code)" v-for="color in colors" :class="color.name" class="clr-circle"></div>
    </div>
    <button class="round-btn" :note="note" @click="emitTogglePin"><i class="fas fa-thumbtack"></i></button>
    <button class="round-btn far fa-trash-alt" @click="emitDeletingNote"></button>
    </section>
    `,
    created() {

    },
    data() {
        return {
            isShowColors: false,
            colors: [{ code: '#fdfdc4', name: 'yellow' }, { code: '#ccffec', name: 'turquoise' }, { code: '#d8bef3', name: 'purple' }]
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