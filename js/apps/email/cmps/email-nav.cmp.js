'use strict'

export default {
    template: `
        <nav class="email-nav">
            <button class="fas fa-pen round-btn" @click="emitOpenCompose"></button>
            <ul class="email-nav-list">
                <li><router-link exact to="/email/inbox"><span :class="{'theresUnread': (counters.unread) > 0}">Inbox<span v-if="counters"> ({{counters.unread}})</span></span></router-link></li>
                <li><router-link exact to="/email/starred">Starred</router-link></li>
                <li><router-link exact to="/email/sent">Sent</router-link></li>
                <li><router-link exact to="/email/drafts">Drafts</router-link></li>
                <li>Total Mails in inbox: {{counters.total}}</li>
            </ul>
        </nav>
    `,

    props: ['counters'],

    methods: {
        emitOpenCompose() {
            this.$emit('openCompose');
        },

        
    }
}
