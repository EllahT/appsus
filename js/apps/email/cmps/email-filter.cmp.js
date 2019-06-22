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
    `
}


//filter read/unread

// • Filter read/unread