'use strict'

export default {
    template: `
        <section class="email-filter">
            <select v-model="filterBy">
                <option>Read</option>
                <option>Unread</option>
            </select>
        </section>
    `,

    
    data() {
        return {
            filterBy: ''
        }
    },

    watch: { 
        'filterBy': {
            handler: function(newVal) {
                this.$emit('filtered',newVal.toLowerCase());
                this.filterBy = '';
           },
           immediate: true
         }
   },


}