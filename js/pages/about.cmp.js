import appLogo from '../cmps/logo.cmp.js';
import mainNav from '../cmps/nav.cmp.js';

export default {
    template: `
    <section class="about">
        <app-logo></app-logo>
        <h1 class="About-sub">About Us</h1>
        <main-nav></main-nav>

        <div class="team-members">
            <div class="team-member">
                <h3 class="team-name">Tammy</h3>
                <img class="team-image" src="img/tammy.jpg"/>
                <p class="team-text">Based in Tel Aviv, Tammy is an aspiring Junior Fullstack web developer that loves animals but is allergic to all of them.</p>
            </div>

            <div class="team-member">
                <h3 class="team-name">Ellah</h3>
                <img class="team-image" src="img/ellah.jpg"/>
                <p class="team-text">Ellah is based in Ramat Gan and is a Lawyer on the way to become a Fullstack Developer. Enjoys her walks with Lily, her dog, and is addicted to Netflix.</p>
            </div>
        </div>

    </section>
    
    `,

    components: {
        appLogo,
        mainNav
    }
}
