<template>
    <div class="notes-dashboard">
        <p>notes nav</p>
        <Note />
    </div>
</template>

<script>
import Note from './Note.vue'

export default {
    name: 'notes-dashboard',
    components: {
        Note
    }
}
</script>