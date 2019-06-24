'use-strict'

import youtubeService from '../../../services/youtueb.service.js';

export default {
    template: `
        <section>
            <form>
                Search for videos
                <input @keyup.enter.prevent="updateVideoList" v-model="videoSearchParam" type="text" placeholder="search for videos"/>
                <button class="fas fa-search" @click="updateVideoList"></button>
            </form>
        
            
            <div v-if="videoList" class="videos-container">
                <h1>Videos</h1>

                <ul class="videos-list">
                    <li v-for="video in videoList" @click="pickVideo(video.id.videoId)">
                    {{video.snippet.title}}
                    </li>
                </ul>
            </div>

            <div v-if="videoId" class="displayDiv">
                <iframe class="watch" width=80% height=80% :src="urlToSrc"></iframe>    
            </div>

        </section>

    `,
    
    props: ['content'],
    
    data() {
        return {
            videoId: '',
            videoList: [],
            videoSearchParam: ''

        }
    }, 

    computed: {
        urlToSrc() {
          return `https://www.youtube.com/embed/${this.videoId}`;  
        } 
    },

    methods: {
        updateVideoList() {
            youtubeService.getVideos(this.videoSearchParam)
            .then((res) => {
                this.videoList = res;
            })
        },

        pickVideo(videoId) {
            this.videoId = videoId;
        },
    }, 

    watch: {
        'urlToSrc': function() {
            this.$emit('videoNoteChanged',this.urlToSrc);
        },   
    }
}