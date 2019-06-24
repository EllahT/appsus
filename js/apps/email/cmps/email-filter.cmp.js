'use strict'

export default {
    template: `
        <section class="app-filter">
            <select v-model="filterBy">
                <option>All</option>
                <option>Read</option>
                <option>Unread</option>
            </select>
            <span class="fas fa-filter fa-xs"></span>
        </section>
    `,

    props: ['isOptionFilterOn'],

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

        'isOptionFilterOn': {
            handler: function(isOn) {
                if (!isOn) this.filterBy = 'All';
           },
           immediate: true
         }
   },


}