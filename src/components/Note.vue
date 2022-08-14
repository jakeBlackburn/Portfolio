<template>
<div class="note-container">
    <h2 class="title">{{isLoading ? 'Loading...' : this.note.title.replace(/-/g, " ")}}</h2>
    <div class="version">{{isLoading ? '' : this.note.version}}</div>
    <section class="overview">{{isLoading ? '' : this.note.overview}}</section>
    <div class="text" v-for="paragraph in note.text" :key="paragraph.id">
        <h4 class="text-title">{{isLoading ? '' : paragraph.title}}</h4>
        <p class="text" v-for="section in paragraph.text" :key="section">{{isLoading ? '' : section}}</p>
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
        isLoading: Boolean
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
    width: 100%;
    min-height: 500px;
    display: flex;
    position: relative;
    flex-direction: column;
    color: slateblue;
    background-color:aliceblue;
    padding: 0 5% 100px 5%;
}

.title {
    font-family: Teko;
    text-align: center;
    font-size: 3.3rem;
    margin: 20px 0;
    color: slateblue;
    text-shadow: 1px 1px hotpink;
}

.text-title {
    margin-left: 5%;
    color: darkorchid;
    font-size: 1.35rem;
}

.overview {
    color: hotpink;
    text-align: center;
    font-size: 1.2rem;
}

.version {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.5rem;
    color: darkorchid
}

.text {
    font-size: 1.1rem;
}


</style>