'use-strict';

export default {
    template: `
    <div>
        <li>{{note.content}}</li>
    </div>
    `,
    created() {
        console.log('note item is alive');
        
    },
    props: ['note'],
}