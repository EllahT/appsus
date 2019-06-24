'use strict'

export default {
    template: `
        <section class="app-sort">
            <div class="sorters">
                <select v-model="sortBy.by">
                    <option>Created</option>
                    <option>Type</option>
                    <option>Color</option>
                </select>
                <select v-model="sortBy.op">
                    <option>+</option>
                    <option>-</option>
                </select>
            </div>
            <h3><span class="fas fa-sort"></span></h3>
        </section>
    `,

    data() {
        return {
            sortBy: {by: 'Created', op: '-'}
        }
    },

    watch: { 
        'sortBy': {
            handler: function(sorter) {
                this.$emit('sorted', {by: sorter.by.toLowerCase(), op: sorter.op});
           },
           immediate: true,
           deep: true
         },
   },


}