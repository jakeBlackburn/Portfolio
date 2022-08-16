<template>

  <Renderer width="550" height="500" ref="renderer" :alpha="true">
    <h3 class="hello"><em>HELLO!</em></h3>
    <Camera :position="{ z: 3 }" />
    <Scene>
      <AmbientLight />
        <Mesh ref="earth">
            <SphereGeometry :widthSegments="40" :heightSegments="20" />
            <BasicMaterial>
                <Texture :src="this.worldTexture" />
            </BasicMaterial>
        </Mesh>
    </Scene>
  </Renderer>
</template>

<script>
import { SphereGeometry, Camera, BasicMaterial, AmbientLight, Renderer, Scene, Mesh, Texture } from 'troisjs';


export default {
  components: { SphereGeometry, Camera, BasicMaterial, AmbientLight, Renderer, Scene, Mesh, Texture },
  data() {
    return {
        worldTexture: require('../assets/world-texture.jpg'),
    }
  },
  mounted() {
    const renderer = this.$refs.renderer;
    const earth = this.$refs.earth.mesh;

    renderer.onBeforeRender(() => {
      earth.rotation.x = 0.3
      earth.rotation.z = 0.3
      earth.rotation.y += 0.003;
    });


  },
  
};
</script>



<style scoped>
.hello {
    font-size: 7rem;
    color: hotpink;
    text-shadow: 4px 5px black;
    font-family: Teko;
    position: absolute;
    left: 150px;
    top: 50px;
}

Renderer {
  position: relative;
}

</style>