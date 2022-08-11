<template>
<div class="note-container">
    <h2 class="title">{{this.note.title.replace(/-/g, " ")}}</h2>
    <div class="version">{{this.note.version}}</div>
    <section class="overview">{{this.note.overview}}</section>
    <div class="text" v-for="paragraph in note.text" :key="paragraph.id">
        <h4 class="text-title">{{paragraph.title}}</h4>
        <p class="text">{{paragraph.text}}</p>
    </div>
</div>
</template>

<script>

export default {
    name: 'note',
    data() {
        return {
            title: 'about notes'
        }
    },
    props: {
        note: Object,
    },
    methods: {
        change_note(id) {
            this.note_text = `note ${id}`
        }
    },
    mounted() {
        this.title = this.note.title
    }


}
</script>


<style scoped>

.note-container {
    display: flex;
    flex-direction: column;
    color: slateblue;
    background-color:aliceblue;
    padding: 5%;
}

.title {
    font-family: Teko;
    text-align: center;
    font-size: 3rem;
    margin: 20px 0 0 0;
}

.overview {
    color: hotpink;
    text-align: center;
}


</style>