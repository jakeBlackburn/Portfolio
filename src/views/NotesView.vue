<template>
    <div class="notes-container">
        <Header :currPage="'notes'" :pages="['projects', 'about']"/>
        <NotesDashboard />
        <Footer />
    </div>
    
</template>

<script>
import Header from '../components/Header.vue'
import NotesDashboard from '../components/NotesDashboard.vue'
import Footer from '../components/Footer.vue'


export default {
  name: 'NotesView',
  components: {
    Header,
    NotesDashboard,
    Footer
  }
}
</script>