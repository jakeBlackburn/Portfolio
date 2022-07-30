<template >
    <canvas id="bg" ref="canvas"></canvas>
</template>

<script>
import * as THREE from 'three'

export default {
    name: 'HelloWorldCanvas',
    data() {
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )

        const renderer = new THREE.WebGLRenderer({ 
            canvas: document.querySelector('#bg')
        })
        const light = new THREE.AmbientLight(0xffffff);
        const geometry = new THREE.SphereGeometry(15, 64, 32)
        const material = new THREE.MeshStandardMaterial({
            side: THREE.FrontSide,
            color: 'hsl(0, 100%, 50%)',
            wireframe: false
        })
        const sphere = new THREE.Mesh(geometry, material)

        return {
            scene: scene,
            camera: camera,
            controls: [],
            renderer: renderer,
            light: light,
            sphere: sphere,
            speed: 0.01
        }
    },

    created() {
        this.scene.add(this.camera)
        this.scene.add(this.light)
        this.scene.add(this.sphere)
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(window.devicePixelRatio)
        this.camera.position.z = 5
        this.scene.background = new THREE.Color('hsl(0, 100%, 100%)')
    },
    mounted() {
        this.$refs.canvas.appendChild(this.renderer.domElement)
        this.animate()
    },
    methods: {
        animate() {
            requestAnimationFrame(this.animate)
            this.renderer.render(this.scene, this.camera)
            this.cube.rotation.y += this.speed
            this.controls.update()
        }
    },
    computed: {
        rotate() {
            if (this.speed === '') {
                return 0
            } else {
                return this.speed
            }
        }
    }


}

</script>

<style>
canvas {
    width: 500px;
    height: 500px;
}
</style>