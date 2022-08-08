<template>
<div class="title">{{this.note.title}}</div>
<div class="version">{{this.note.version}}</div>
<div class="overview">{{this.note.overview}}</div>
<div class="text" v-for="paragraph in note.text" :key="paragraph.id">{{paragraph.text}}</div>


</template>

<script>

export default {
    name: 'note',
    data() {
        return {
            note_text: '',
        }
    },
    created() {
        this.note_text = 'note 1'
    },
    props: {
        note: Object,
    },
    methods: {
        change_note(id) {
            this.note_text = `note ${id}`
        }
    }


}
</script>