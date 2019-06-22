'use strict'

export default {
    template: `
        <section class="email-sort">
            <select v-model="sortBy.by">
                <option>Sent At</option>
                <option>Subject</option>
            </select>
            <select v-model="sortBy.op">
                <option>+</option>
                <option>-</option>
            </select>
        </section>
    `,

    data() {
        return {
            sortBy: {by: 'Sent At', op: '-'}
        }
    },

    computed: {
        byToEmit() {
            let str = this.sortBy.by;
            str = str.slice(0,1).toLowerCase() + str.slice(1,str.length);
            let spaceIdx = str.indexOf(' ');
            return (spaceIdx !== -1)? str.slice(0,spaceIdx) + str.slice(spaceIdx+1,str.length) : str;
        }
    },

    watch: { 
        'sortBy': {
            handler: function(sorter) {
                this.$emit('sorted', {by: this.byToEmit, op: sorter.op});
           },
           immediate: true,
           deep: true
         },
   },


}