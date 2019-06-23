'use-strict';

export default {
    template: `
    <div class="nav-container">
        <span class="fas fa-bars toggle-nav-btn" @click="toggleShowNav"></span>
        <nav class="main-nav" v-if="isShowNav">
            <router-link to="/">Home</router-link> 
            <router-link to="/about">About</router-link> 
            <router-link to="/email/inbox">Go to Email</router-link> 
            <router-link to="/keep">Go to Keep</router-link>
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
        }
    }
}