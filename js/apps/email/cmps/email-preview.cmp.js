'use strict'

export default {
    template: `
        <div class="email-preview">
            <div class="email-from" :class="{'unread-item-txt' : !email.isRead}">{{fromToDisplay}}</div>
            <div class="email-subject" :class="{'unread-item-txt' : !email.isRead}">{{email.subject}}</div>
            <div class="email-body">{{email.body}}</div>
            
            <div class="email-date">{{dateForDisplay}}</div>
            <div class="email-delete">
                <span class="far fa-trash-alt" @click.stop="emitDeleteEmail"></span>
            </div>
        </div>
    `,
    props: ['email'],

    data() {
        return {
            isOpen: false,
        }
    },

    methods: {
        emitDeleteEmail() {
            this.$emit('deleteEmail', this.email.id);
        }
    },

    computed: {
        dateForDisplay() {
            const timeStamp = new Date();
            const currYear = timeStamp.getFullYear();
            const currMonth = timeStamp.getMonth()+1;
            const currDay = timeStamp.getDate();
            const sent = this.email.sentAt;
            
            const padTwo = num => num.toString().padStart(2, '0');

            return (sent.year !== currYear) ?
                (padTwo(sent.day) + '.' + padTwo(sent.month) + '.' + sent.year) :
                (sent.day === currDay && sent.month === currMonth) ?
                    (padTwo(sent.hours) + ':' + padTwo(sent.minutes)) :
                    (padTwo(sent.day) + '.' + padTwo(sent.month));
        },

        fromToDisplay() {
            const nameEnd = this.email.from.indexOf('<');
            return (nameEnd === -1) ?
                this.email.from :
                this.email.from.slice(0, nameEnd);
        }
    }
}