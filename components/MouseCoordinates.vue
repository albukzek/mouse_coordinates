<template>
  <div>
    <p>Mouse Coordinates:</p>
    <p>X: {{ mouseX }}</p>
    <p>Y: {{ mouseY }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useStore } from 'vuex'

interface Coordinates {
  x: number;
  y: number;
}

const store = useStore()

const mouseX = ref(0)
const mouseY = ref(0)

const updateMouseCoordinates = (e: MouseEvent) => {
  mouseX.value = e.clientX
  mouseY.value = e.clientY

  const coordinates: Coordinates = { x: mouseX.value, y: mouseY.value }
  // Dispatch an action to update the coordinates in the store
  store.dispatch('updateMouseCoordinates', coordinates)
}

onMounted(() => {
  // Add event listener to track mouse movements
  window.addEventListener('mousemove', updateMouseCoordinates)
})

onBeforeUnmount(() => {
  // Remove event listener when component is unmounted
  window.removeEventListener('mousemove', updateMouseCoordinates)
})
</script>
