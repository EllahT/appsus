
import homepageCmp from './pages/homepage.cmp.js';
import emailApp from './apps/email/pages/email-app.cmp.js';
import emailDetails from './apps/email/cmps/email-details.cmp.js';
import emailList from './apps/email/cmps/email-list.cmp.js';
import keepApp from './apps/keep/pages/keep-app.cmp.js';


export default [
    { path: '/', component: homepageCmp },
    { path: '/email', component: emailApp, children: [
        { path: 'emails/:theEmailId', component: emailDetails},
        { path: 'inbox', component: emailList}
    ] },
    { path: '/keep', component: keepApp },
]
