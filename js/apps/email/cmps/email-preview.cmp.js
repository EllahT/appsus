'use strict'

export default {
    template: `
        <li class="email-preview" :class="{'read-item-container' : email.isRead}">
            <div class="email-from" :class="{'read-item-txt' : email.isRead}">{{email.from}}</div>
            <div :class="{'read-item-txt' : email.isRead}">{{email.subject}}</div>
            <div>{{previewBody}}</div>
        </li>
    
    `,
    props: ['email'],

    data() {
        return {
            isOpen: false,
        }
    },

    computed: {
        previewBody() {

        }

    }
    
}

// lsubject, body, isRead, sentAt, isStarred, replays: []};
//shows only title + date/ hour + read/unread as a sign

// • Present the listed emails as read/unread
// • Ability to mark as read/unread
// • Click email at list – opens the email for reading
// open email maybe from here?