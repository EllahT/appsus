
export default {
    
    template: `
    <section class="compose-email">
        <div class="compose-email-header">
            {{subjectToDisplay}}
            <button class="close-compose-btn" @click="closeModal">&times;</button>
        </div>
        <form class="new-mail-form" @submit.prevent="emitNewEmail">
            from: <input type="text" v-model="email.from" readonly/>
            to: <input type="text" v-model="email.to" readonly/>
            <input type="text" v-model="email.subject" ref="subjectInput" placeholder="subject"/>
            <textarea v-model="email.body"></textarea> 
            <button class="submitBtn" :disabled="invalid">Send</button>
        </form>
    </section>
    
    `,

    data() {
        return {
            email: {
                from: 'puki puki <puki@hotmail.co.il>',
                to: 'popo popo <popo@gmail.com>',
                subject: '', 
                body: '', 
                replies: []
            }
        }
    },

    mounted() {
        this.$refs.subjectInput.focus();
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


//kind of modal that adds new email

// • New email – ability to create a new email and send it. Support send
// email only to yourself.
