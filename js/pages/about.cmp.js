import appLogo from '../cmps/logo.cmp.js';
import mainNav from '../cmps/nav.cmp.js';

export default {
    template: `
    <section class="about">
        <app-logo></app-logo>
        <h1>About Us</h1>
        <main-nav></main-nav>

        <div class="team-members">
            <div class="team-member">
                <h3>Tammy</h3>
                <img class="team-image" src="../../img/tammy.jpg"/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, numquam odio quia architecto nesciunt, esse quasi dolor amet dolorem, aperiam exercitationem. Consectetur architecto illo repudiandae quas dicta sit corporis quae?</p>
            </div>

            <div class="team-member">
                <h3>Ellah</h3>
                <img class="team-image" src="../../img/ellah.jpg"/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, numquam odio quia architecto nesciunt, esse quasi dolor amet dolorem, aperiam exercitationem. Consectetur architecto illo repudiandae quas dicta sit corporis quae?</p>
            </div>
        </div>

    </section>
    
    `,

    components: {
        appLogo,
        mainNav
    }
}
