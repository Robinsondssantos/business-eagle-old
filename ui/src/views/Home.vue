<template>
  <app-container></app-container>
</template>

<script>
// @ is an alias to /src
import Container from '@/components/Container.vue'

export default {
  name: 'home',
  components: {
    'app-container': Container
  }
}
</script>
