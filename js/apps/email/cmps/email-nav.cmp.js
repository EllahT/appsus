'use strict'

export default {
    template: `
        <nav class="email-nav">
            <button>compose</button>
            <ul class="email-nav-list">
                <li><router-link exact to="/email/inbox">Inbox</router-link></li>
                <li>starred</li>
                <li>sent</li>
                <li>drafts</li>
            </ul>


        </nav>
    `
}






//the side nav - link to compose, inbox, sent, drafts, status, starred

// • Show unread emails count on top (find the right place)
// *****in mobile the nav is humburgered and there is a compose as an icon at absolute pos right bottom****