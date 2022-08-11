<template>
    <div class="notes-dashboard">
        <img class="toggle-arrow" :src="toggled ? require('../assets/right-arrow.png') : require('../assets/left-arrow.png')" @click="toggleNav()">
        <div class="notes-nav" :style="{ display: toggled ? 'none' : 'block', position: toggled ? 'absolute' : 'static' }">
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
            note: {
                title: 'about-notes',

            },
            toggled: false,
            notes: ['Web-Development','Javascript', 'HTML', 'CSS', 'About-Notes']
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
        },
        toggleNav() {
            this.toggled = !this.toggled
        }
    },
    created() {
        this.getNote('about-notes')
    }
}
</script>

<style scoped>
.notes-dashboard {
    background-color: white;
    display: flex;
    position: relative;
}

.notes-nav {
    min-width: 20%;
    background-color: rgb(30, 25, 40);
    border-right: 1px solid black;
}

.toggle-arrow {
    position: absolute;
    left: 0;
    top: 50%;
    width: 25px;
    height: 30px;
    padding: 5px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 0 5px 5px 0
}

.toggle-arrow:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.4);

}

</style>