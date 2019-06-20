
import homepageCmp from './pages/homepage.cmp.js';
import emailApp from './apps/email/pages/email-app.cmp.js';
import keepApp from './apps/keep/pages/keep-app.cmp.js';

export default [
    { path: '/', component: homepageCmp },
    { path: '/email', component: emailApp },
    { path: '/keep', component: keepApp },
]
