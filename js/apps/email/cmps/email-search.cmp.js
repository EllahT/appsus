'use strict'

export default {
    template: `
        <section class="email-search">
            <div class="searchs">
                <div class="search-by-subject">
                    <input @keyup.enter="emitSearch" type="text" v-model="searchTxt" placeholder="search inside emails subject"/>
                    <select v-model="searchBy">
                        <option v-for="option in arrSearchPrms" :value="option" >{{option}}</option>
                    </select>
                    <button @click="emitClearSearchs">Clear</button>
                </div>
            </div>
        </section>
    `,
    data() {
        return {
            searchPrms: {subject: '', content: ''},
            searchBy: 'subject',
            searchTxt: null
        }
    },

    computed: {
        arrSearchPrms() {
            return Object.keys(this.searchPrms);
        }
    },

    methods: {
        emitSearch() {
            this.searchPrms[this.searchBy] = this.searchTxt;
            this.$emit('searchBy',this.searchPrms);
            this.searchPrms = {subject: '', content: ''};
        },

        emitClearSearchs() {
            this.$emit('clearSearch',this.searchPrms);
        }
    }
}
