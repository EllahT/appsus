'use-strict';

import mainNav from '../../../cmps/nav.cmp.js'
import appLogo from '../../../cmps/logo.cmp.js'
import keepSearch from '../cmps/keep-search.cmp.js';
import keepFilter from '../cmps/keep-filter.cmp.js';
import keepSort from '../cmps/keep-sort.cmp.js';
import userMsg from '../../../cmps/user-msg.cmp.js';

export default {
    template: `
    <header class="keep-header">
        <app-logo></app-logo>
        <div class="keep-searchAndFilter">
            <keep-search @searchBy="emitSearchBy" @clearSearch="emitClear"></keep-search>
            <keep-filter @filtered="emitFilterBy"></keep-filter>
            <keep-sort @sorted="emitSortBy"></keep-sort>
        </div>
        <main-nav></main-nav>
        <user-msg></user-msg>
    </header>
    `,
    methods: {
        emitSearchBy(searchParam) {
            this.$emit('searchBy',searchParam);
        },

        emitFilterBy(filter)  {
            this.$emit('filtered',filter);
        },

        emitSortBy(sorter)  {
            this.$emit('sorted',sorter);
        },

        emitClear() {
            this.$emit('clearSearch','');
        }
    },

    components: {
        mainNav,
        appLogo,
        keepSearch,
        keepFilter,
        keepSort,
        userMsg
    }
}

