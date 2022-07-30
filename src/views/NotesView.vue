<template>
    <div class="notes-container">
        <Header :currPage="'notes'" :pages="['projects', 'about']"/>
        <NotesDashboard />
    </div>
    
</template>

<script>
import Header from '../components/Header.vue'
import NotesDashboard from '../components/NotesDashboard.vue'

export default {
  name: 'NotesView',
  components: {
    Header,
    NotesDashboard
  }
}
</script>