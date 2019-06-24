'use strict'

export default {
    template: `
        <section class="app-sort">
            <div class="sorters">
                <select v-model="sortBy.by">
                    <option>Sent At</option>
                    <option>Subject</option>
                </select>
                <select v-model="sortBy.op">
                    <option>+</option>
                    <option>-</option>
                </select>
                <h3><span class="fas fa-sort"></span></h3>
            </div>
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