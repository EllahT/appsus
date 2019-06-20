'use-strict';

export default {
    template: `
        <section>
            <h2>Hello note type todo</h2>
            <p>{{content}}</p>
        </section>
    `, // class binding to cross text
    props: ['content'],
    created() {

    },

}