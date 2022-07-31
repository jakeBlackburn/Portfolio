<template>
    <div class="notes-dashboard">
        <div class="notes-nav">
            <div>
                <h6>topic</h6>
                <p>note</p>
                <p>note</p>
                <p>note</p>
            </div>
            <div>
                <h6>topic</h6>
                <p>note</p>
                <p>note</p>
                <p>note</p>
            </div>
            <div>
                <h6>topic</h6>
                <p>note</p>
                <p>note</p>
                <p>note</p>
            </div>
            <div>
                <h6>topic</h6>
                <p>note</p>
                <p>note</p>
                <p>note</p>
            </div>
        </div>
        <Note :note_id="note_id"/>
    </div>
</template>

<script>
import Note from './Note.vue'

export default {
    name: 'notes-dashboard',
    components: {
        Note
    },
    data() {
        
        return {
            note_id: 1
        }
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