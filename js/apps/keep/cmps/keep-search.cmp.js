'use strict'

export default {
    template: `
        <section class="app-search">
            <input @keyup.enter="emitSearch" type="text" v-model="searchParam" placeholder="Search inside notes"/>
            <span @mousedown="emitSearch" class="fas fa-search fa-xs"></span>
        </section>
    `,
    data() {
        return {
            searchParam: ''
        }
    },

    methods: {
        emitSearch() {
            this.$emit('searchBy',this.searchParam);
            this.searchParam = '';
        },

        emitClearSearchs() {
            this.$emit('clearSearch',this.searchParam);
        }
    }
}
