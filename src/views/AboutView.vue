<template>
   <div class="about-container">
        <Header :currPage="'about'" :pages="['projects']"/>
        <About />
        <Footer />
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import About from '../components/About.vue'
import Footer from '../components/Footer.vue'

export default {
    name: 'AboutView',
    components: {
        Header,
        About,
        Footer
    }
}
</script>

