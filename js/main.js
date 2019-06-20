'use strict'

import theRoutes from './routes.js'
const myRouter = new VueRouter({ routes: theRoutes })

var app = new Vue({
    el: '#app',
    created() {
        console.log('App has been Mounted');
    },
    template: `
        <div>
            <router-view></router-view>
        </div>
    `,

    router: myRouter
    
})