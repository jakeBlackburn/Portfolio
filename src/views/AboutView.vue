<template>
   <div>
        <Header :currPage="'about'" :pages="['projects', 'notes']"/>
        <p>about this website</p>
        <HelloWorldCanvas />

    </div>
</template>

<script>
import Header from '../components/Header.vue'
import HelloWorldCanvas from '../components/HelloWorldCanvas.vue'
export default {
    name: 'AboutView',
    components: {
        Header,
        HelloWorldCanvas
    }
}
</script>