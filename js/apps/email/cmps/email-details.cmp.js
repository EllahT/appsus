import emailService from '../sevices/email-service.js';

export default {
    
    template: `
    <section class="email-details">
        <div>i'm alive!!</div>
        {{email}}
    </section>
    
    `,

    data() {
        return {
            email: null
        }
    },

    created() {
        console.log('entered email details')
        const emailId = this.$route.params.theEmailId;
        emailService.getEmailById(emailId)
            .then(email => this.email = email)
    },
}




//shows all the email content


// • Reply – allows editing, adding “Re:” to subject