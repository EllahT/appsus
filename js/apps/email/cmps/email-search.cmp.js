'use strict'

export default {
    template: `
        <section class="email-search">
            <div class="searchs">
                <input @keyup.enter="emitSearch" type="text" v-model="searchTxt" placeholder="search inside emails subject"/>
                <select v-model="searchBy">
                    <option v-for="option in arrSearchParams" :value="option" >{{option}}</option>
                </select>
                <button @click="emitClearSearchs">Clear</button>
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
