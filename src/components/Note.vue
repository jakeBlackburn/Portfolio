<template>
<div class="note-container">note</div>
<div class="note-text">{{this.note_text}}</div>
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
        note_id: Number,
    },
    methods: {
        change_note(id) {
            this.note_text = `note ${id}`
        }
    }


}
</script>