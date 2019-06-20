'use strict'

import emailPreview from '../cmps/email-preview.cmp.js';

export default {
    template: `
        <section>
            <ul class="email-list">
                <email-preview v-for="email in emails" :email="email" :key="email.id"></email-preview>
            </ul>
        </section>
    `,

    props: ['emails'],
    
    data() {
        return {
      
        }
    },

    components: {
        emailPreview
    }
}