'use-strict';

export default {
    template: `
    <section class="note-tools">
        <div v-if="isShowClrs" class="clr-picker">
            <div @click="emitChangeColor(color.code)" v-for="color in colors" :class="color.name" class="clr-circle"></div>
        </div>
        <button class="round-btn" @click="toggleClrs"><i class="fas fa-tint"></i></button>
        <button :note="note" v-if="note.type === 'todo'" class="round-btn" @click="emitEditClicked"><i class="fas fa-edit"></i></button>
    <button class="pin-round fas fa-thumbtack" :class="pinnedColor" :note="note" @click="emitTogglePin"></button>
    <button class="round-btn far fa-trash-alt" @click="emitDeletingNote"></button>
    <button v-if="isMailable" class="round-btn fas fa-envelope fa-xs" @click="emitComposeEmail"></button>
    </section>
    `,
    created() {

    },
    data() {
        return {
            isShowClrs: false,
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
    
        emitEditClicked() {
            this.$emit('editIsClicked', this.note.id);
        },
        toggleClrs() {
            this.isShowClrs = !this.isShowClrs
        },
        emitComposeEmail() {
            this.$emit('composeEmail', this.note.content);
        }
    },
    props: ['note'],
    computed: {
        isMailable() {
            return !(this.note.type === 'todo' || this.note.type === 'audio')
        },
        pinnedColor() {    
            return (this.note.isPinned)? 'unpinned' : 'pinned';
        },
    },
}