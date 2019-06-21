import emailService from '../services/email-service.js';

export default {
    
    template: `
    <section class="email-details">
        <h2>{{email.subject}}</h2>
        <div class="email-details-subtitle">
            <h3>{{email.from}}<span class="email-details-date">{{dateToShow}}</span></h3>
            <div class="tools">
                <span class="fas fa-reply reply-image" @click="replyEmail"></span>
                <span class="fa fa-star star" :class="{'active-star': email.isStarred}" @click.stop="toggleStarEmail(email.id)"></span>
            </div>
        </div>
        <p>{{email.body}}</p>
    </section>
    `,

    data() {
        return {
            email: {
                id: '', 
                from: '', 
                to: '',
                subject: '', 
                body: '', 
                isRead: null, 
                sentAt: {}, 
                isStarred: null, 
                replys: []
            },

            replyMode: false
        }
    },

    created() {
        const emailId = this.$route.params.theEmailId;
        emailService.getEmailById(emailId)
            .then(email => this.email = email)
    },

    computed: {
        dateToShow() {
            return this.email.sentAt.strDate + ', ' + this.email.sentAt.hours + ':' + this.email.sentAt.minutes;
        }
    },

    methods: {
        toggleStarEmail(emailId) {
            emailService.toggleStarEmail(emailId);
        }, 

        replyEmail() {
            this.replyMode = true;
        }

    }
}

// • Reply – allows editing, adding “Re:” to subject