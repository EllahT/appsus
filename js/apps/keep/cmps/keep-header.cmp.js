'use-strict';

import mainNav from '../../../cmps/nav.cmp.js'
import appLogo from '../../../cmps/logo.cmp.js'
import keepSearch from '../cmps/keep-search.cmp.js';
import keepFilter from '../cmps/keep-filter.cmp.js';
import keepSort from '../cmps/keep-sort.cmp.js';

export default {
    template: `
    <header class="keep-header">
        <app-logo></app-logo>
        <h1 class="keep-title">keep</h1>
        <div class="keep-searchAndFilter">
            <keep-search @searchBy="emitSearchBy" @clearSearch="emitClear"></keep-search>
            <keep-filter @filtered="emitFilterBy"></keep-filter>
            <keep-sort @sorted="emitSortBy"></keep-sort>
        </div>
        <main-nav></main-nav>
    </header>
    `,
    methods: {
        emitSearchBy(searchParam) {
            console.log('got emited to search', searchParam)
            // this.$emit('searchBy',searchParams);
        },

        emitFilterBy(filter)  {
            console.log('got emited to filter',filter)
            // this.$emit('filtered',filter);
        },

        emitSortBy(sorter)  {
            console.log('got emited to sort', sorter)
            // this.$emit('sorted',sorter);
        },

        emitClear() {
            console.log('got emited to clear')
            // this.$emit('clearSearch','');
        }
    },

    components: {
        mainNav,
        appLogo,
        keepSearch,
        keepFilter,
        keepSort
    }
}

