<template>
    <div class="notes-dashboard">
        <div class="notes-nav">
            <h3 class="note" v-for="title in notes" :key="title" @click="this.getNote(title.toLowerCase())">{{title.replace(/-/g, " ")}}</h3>
        </div>
        <Note :note="note" />
    </div>
</template>

<script>
import Note from './Note.vue'
import axios from 'axios'

export default {
    name: 'notes-dashboard',
    components: {
        Note
    },
    data() {
        
        return {
            note: {},
            notes: ['Web-Development','Javascript', 'HTML', 'CSS']
        }
    },
    methods: {
        async getNote(title) {
            try {
                const res = await axios.get(`http://localhost:3000/api/v1/notes/${title}`)
                this.note = res.data.note
            } catch (err) {
                console.log(err)
            }
        }
    },
    created() {
        this.getNote('javascript')
    }
}
</script>

<style scoped>
.notes-dashboard {
    background-color: white;
    display: flex;
}

.notes-nav {
    resize: horizontal;
    border: 2px solid black;
    overflow: scroll;
    height: 600px;
    width: 25%;
    max-width: 60%;
    background-color: rgb(30, 25, 40);
}

</style>