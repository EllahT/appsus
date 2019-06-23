import eventBus, {SHOW_MSG} from '../services/event-bus.service.js';
var timeout;

export default {
    template: `
        <section class="user-msg" :class="msg.type" v-if="msg">
            <button @click="closeMsg">x</button>
            <h3>{{msg.txt}}</h3>
        </section>
    `,
    data() {
        return {
            msg: null
        }
    },
    created() {
        eventBus.$on(SHOW_MSG, (msg)=>{
            this.msg= msg
            if (timeout) clearTimeout(timeout)
            timeout = setTimeout(()=>this.msg=null, 3000)
        })
    },

    methods: {
        closeMsg() {
            this.msg = null;
        }
    }
}