'use strict'

export default {
    template: `
        <section class="app-search">
            <div class="search-container">
                <input @keyup.enter="emitSearch" type="text" v-model="searchTxt" placeholder="search inside emails subject"/>
                <h3><span class="fas fa-search fa-xs"></span></h3>
                <select v-model="searchBy">
                    <option v-for="option in arrSearchParams" :value="option" >{{option}}</option>
                </select>
                <span class="fas fa-remove-format" @click="emitClearSearchs"></span>
            </div>
        </section>
    `,
    data() {
        return {
            searchParams: {Subject: '', Content: ''},
            searchBy: 'Subject',
            searchTxt: ''
        }
    },

    computed: {
        arrSearchParams() {
            return Object.keys(this.searchParams);
        }
    },

    methods: {
        emitSearch() {
            this.searchParams[this.searchBy.toLowerCase()] = this.searchTxt;
            this.$emit('searchBy',this.searchParams);
            this.searchParams = {Subject: '', Content: ''};
        },

        emitClearSearchs() {
            this.$emit('clearSearch',this.searchParams);
        }
    }
}
