'use strict'

export default {
    template: `
        <section class="keep-search">
            <h3>Search <span class="fas fa-search"></span></h3>
            <div class="searchs">
                <input @keyup.enter="emitSearch" type="text" v-model="searchParam" placeholder="search inside notes"/>
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
