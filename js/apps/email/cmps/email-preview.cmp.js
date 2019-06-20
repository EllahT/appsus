'use strict'

export default {
    template: `
        <div class="email-preview" @click="emitOpen">
            <span class="email-from" :class="{'read-item-txt' : email.isRead}">{{email.from}}</span>
            <div class="email-txts">
                <span class="email-subject-txt" :class="{'read-item-txt' : email.isRead}">{{email.subject}}</span>
                <span class="email-body-txt">{{email.body}}</span>
            </div>
            <span class="email-date">{{dateForDisplay}}</span>
        </div>
    
    `,
    props: ['email'],

    data() {
        return {
            isOpen: false,
        }
    },

    computed: {
        dateForDisplay() {
            const timeStamp = new Date();
            const currYear = timeStamp.getFullYear();
            const currMonth = timeStamp.getMonth()+1;
            const currDay = timeStamp.getDate();
            const sent = this.email.sentAt;

            return (sent.year !== currYear)? (sent.day + '.' + sent.month + '.' + sent.year) : (sent.day === currDay && sent.month === currMonth)? (sent.hours + ':' + sent.minutes) : (sent.day + '.' + sent.month);
        },
    },

    methods: {
        emitOpen() {
            this.$emit('openEmail',this.email.id);
        }
    }
}