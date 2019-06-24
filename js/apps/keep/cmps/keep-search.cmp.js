'use strict'

export default {
    template: `
        <section class="app-search">
            <div class="search-container">
                <input @keyup.enter="emitSearch" type="text" v-model="searchParam" placeholder="search inside notes"/>
                <h3><span @mousedown="emitSearch" class="fas fa-search fa-xs"></span></h3>

                <button @click="emitClearSearchs">Clear</button>
            </div>
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
