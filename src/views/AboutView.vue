<template>
   <div>
        <Header :currPage="'about'" :pages="['projects', 'notes']"/>
        <p>about this website</p>
        <img src="logo.png" alt="hello world animation">
        <img src="logo.png" alt="fire animation">

    </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
    name: 'AboutView',
    components: {
        Header
    }
}
</script>