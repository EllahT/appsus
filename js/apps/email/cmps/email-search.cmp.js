'use strict'

export default {
    template: `
        <section class="email-search">
            <div class="searchs">
                <div class="search-by-subject">
                    <input @keyup.enter="emitSearch" type="text" v-model="searchTxt" placeholder="search inside emails subject"/>
                    <select v-model="searchBy">
                        <option v-for="option in arrSearchParams" :value="option" >{{option}}</option>
                    </select>
                    <button @click="emitClearSearchs">Clear</button>
                </div>
            </div>
        </section>
    `,
    data() {
        return {
            searchParams: {subject: '', content: ''},
            searchBy: 'subject',
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
            this.searchParams[this.searchBy] = this.searchTxt;
            this.$emit('searchBy',this.searchParams);
            this.searchParams = {subject: '', content: ''};
        },

        emitClearSearchs() {
            this.$emit('clearSearch',this.searchParams);
        }
    }
}
