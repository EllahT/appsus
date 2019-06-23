'use strict'

export default {
    template: `
        <nav class="email-nav">
            <button class="fas fa-pen" @click="emitOpenCompose"></button>
            <ul class="email-nav-list">
                <li><router-link exact to="/email/inbox"><span :class="{'theresUnread': unreadCount > 0}">Inbox<span v-if="unreadCount"> ({{unreadCount}})</span></span></router-link></li>
                <li><router-link exact to="/email/starred">Starred</router-link></li>
                <li><router-link exact to="/email/sent">Sent</router-link></li>
                <li><router-link exact to="/email/drafts">Drafts</router-link></li>
            </ul>
        </nav>
    `,

    props: ['unreadCount'],

    methods: {
        emitOpenCompose() {
            this.$emit('openCompose');
        },

        
    }
}



// • Show unread emails count on top (find the right place)
// *****in mobile the nav is humburgered and there is a compose as an icon at absolute pos right bottom****