export default {
    
    template: `
    <section class="compose-email">
        <div class="compose-email-header">
            {{subjectToDisplay}}
            <button class="close-compose-btn" @click="closeModal">&times;</button>
        </div>
        <form class="new-mail-form" @submit.prevent="emitNewEmail">
            <div class="from-input-container">
                <div>from:</div>
                <input type="text" v-model="email.from" readonly/>
            </div>
            <div class="to-input-container">
                <div>to: </div>
                <input type="text" v-model="email.to" readonly/>
            </div>
            <input class="email-input-subject" type="text" v-model="email.subject" ref="subjectInput" placeholder="subject"/>
            <textarea class="email-input-body" v-model="email.body" ref="bodyInput"></textarea> 
            <button class="submitBtn" :disabled="invalid">Send</button>
        </form>
    </section>
    
    `,

    props: ['draft', 'reply','note'],

    data() {
        return {
            email: {
                from: 'puki puki <puki@hotmail.co.il>',
                to: 'popo popo <popo@gmail.com>',
                subject: '', 
                body: '', 
            }
        }
    },
    
    created() {
        if (this.draft !== '') {
            this.email.subject = this.draft.subject;
            this.email.body = this.draft.body;
        }
        
        if (this.reply !=='') {
            this.email.subject = 'RE: '+ this.reply.subject;
            this.email.body = this.reply.body + '\n\n***\n\n';
        }

        if (this.note !=='') {
            console.log('entered')
            this.email.subject = 'Sharing a note';
            this.email.body = this.note;
        }

    },

    mounted() {
        (this.reply === '')? this.$refs.subjectInput.focus() : this.$refs.bodyInput.focus();
    }, 

    computed: {
        invalid() {
            return !this.email.subject;
        }, 
        
        subjectToDisplay() {
            return (this.email.subject === '')? 'New Message' : this.email.subject;
        }
    },

    methods: {
        emitNewEmail() {
            this.$emit('emailSent',this.email);
        },

        closeModal() {
            this.$emit('closeCompose',this.email);
        }
    }
}
