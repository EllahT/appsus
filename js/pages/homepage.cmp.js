
import mainNav from '../cmps/nav.cmp.js'

export default  {
    template: `
    <section class="home">
        <header>
            <h1 class="home-title">Welcome to Strudel Appsus</h1>
            <h4 class="home-subtitle">By Tammy and Ellah </h4>
            <span class="fas fa-2x fa-angle-double-down arrows-nav" v-scroll-to="{
                el: '#line-nav',
                duration: 800,
                easing: 'linear'}">
            </span>
            <main-nav></main-nav>
            <p class="homepage-txt">Convenient apps, but not corporate.</p>
        </header>
        <div id="line-nav-bar">
            <nav id="line-nav">
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link> |
                <router-link to="/email/inbox">Email</router-link> |
                <router-link to="/keep">Keep</router-link>
            </nav>
        </div>
    </section>
    `,
    components: {
        mainNav
    }
}

