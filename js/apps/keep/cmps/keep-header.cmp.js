'use-strict';

import mainNav from '../../../cmps/nav.cmp.js'
import appLogo from '../../../cmps/logo.cmp.js'

export default {
    template: `
    <header class="keep-header">
        <app-logo></app-logo>
        <h2>Search</h2>
        <h2>Filter</h2>
        <h2>Sort By</h2>
        <main-nav></main-nav>
    </header>
    `,
    components: {
        mainNav,
        appLogo
    }
}