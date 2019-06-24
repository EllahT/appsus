
import mainNav from '../cmps/nav.cmp.js'

export default  {
    template: `
    <section class="home">
        <h1>Welcome to Strudel Appsus</h1>
        <h4>by Tammy and Ellah </h4>
        <main-nav></main-nav>
        <p class="homepage-txt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor dignissimos earum vitae temporibus omnis, sit sint minima blanditiis voluptatem ea accusantium, id cum, nam repudiandae rerum nulla voluptatum excepturi at?</p>
        <span class="fas fa-angle-double-down arrows-nav" v-scroll-to="{
            el: '#line-nav',
            duration: 800,
            easing: 'linear'}">
        </span>
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

