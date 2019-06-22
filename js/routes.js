
import homepageCmp from './pages/homepage.cmp.js';
import emailApp from './apps/email/pages/email-app.cmp.js';
import emailDetails from './apps/email/cmps/email-details.cmp.js';
import emailList from './apps/email/cmps/email-list.cmp.js';
import keepApp from './apps/keep/pages/keep-app.cmp.js';
import notesListCmp from './apps/keep/cmps/notes-list.cmp.js';
import noteItemCmp from './apps/keep/cmps/note-item.cmp.js'


export default [
    { path: '/', component: homepageCmp },
    { path: '/email', component: emailApp, children: [
        { path: 'inbox', component: emailList, props: {filter: 'inbox'}},
        { path: 'starred', component: emailList, props: {filter: 'starred'}},
        { path: 'drafts', component: emailList, props: {filter: 'drafts'}},
        { path: 'sent', component: emailList, props: {filter: 'sent'}},
        { path: ':theEmailId', component: emailDetails}
    ] },
    { path: '/keep', component: keepApp },
    {
        path: '/list', component: notesListCmp, childre: [
            { path: '/list/:theItemId', component: noteItemCmp }
        ]
    },
]
