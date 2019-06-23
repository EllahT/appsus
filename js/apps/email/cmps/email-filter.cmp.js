'use strict'

export default {
    template: `
        <section class="email-filter">
            <h3>Filter <span class="fas fa-envelope"></span></h3>
            <select v-model="filterBy">
                <option>All</option>
                <option>Read</option>
                <option>Unread</option>
            </select>
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