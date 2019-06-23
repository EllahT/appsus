'use strict'

export default {
    template: `
        <section class="email-filter">
            <h3>Filter By Note Type <span class="fas fa-envelope"></span></h3>
            <select v-model="filterBy">
                <option>All</option>
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