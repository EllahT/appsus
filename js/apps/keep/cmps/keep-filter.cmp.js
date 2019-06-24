'use strict'

export default {
    template: `
        <section class="app-filter">
            <select v-model="filterBy">
                <option>Show All</option>
                <option>Text</option>
                <option>Todos</option>
                <option>Image</option>
                <option>Video</option>
            </select>
        </section>
    `,

    props: [''],

    data() {
        return {
            filterBy: 'All'
        }
    },

    watch: { 
        'filterBy': {
            handler: function(filter) {
                this.$emit('filtered',filter.toLowerCase());
           },
           immediate: true
         },
   },


}