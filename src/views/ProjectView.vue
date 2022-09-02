<template>

<p>{{this.project}}</p>
</template>


<script>
import axios from 'axios'
export default {
    data() {
        return {
            project: {}
        }
    },
    async created() {
        const {project} = this.$route.params
        console.log(`https://jake-blackburn-portfolio.herokuapp.com/api/v1/projects/${project}`)
        const res = await axios.get(`https://jake-blackburn-portfolio.herokuapp.com/api/v1/projects/${project}`)
        console.log(res)
    }
}
</script>

<style scoped>

</style>