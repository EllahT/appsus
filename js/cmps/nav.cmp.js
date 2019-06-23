'use-strict';

export default {
    template: `
        <div class="nav-container">
            <span class="fas fa-th-large fa-2x toggle-nav-btn" @click="toggleShowNav"></span>
            <nav class="main-nav" v-if="isShowNav">
                <router-link to="/"><span class="fas fa-home fa-lg"></span></router-link> 
                <router-link to="/about"><span class="fas fa-laptop-code fa-lg"></span></router-link> 
                <router-link to="/email/inbox"><span class="fas fa-paper-plane fa-lg"></span></router-link> 
                <router-link to="/keep"><span class="far fa-sticky-note fa-lg"></span></router-link>
            </nav>
        </div>
    `,

    data() {
        return {
            isShowNav: false
        }
    },

    methods: {
        toggleShowNav() {
            this.isShowNav = !this.isShowNav;
        },

        closeNav() {
            this.isShowNav = false;
        }
    }
}