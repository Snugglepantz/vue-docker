<template>
  <h1>{{ message }}</h1>
</template>

<script>
import HelloService from './services/HelloService.js'
export default {
  name: 'app',
  data() {
    return {
      message: ''
    };
  },
  mounted() {
    HelloService.getHello().then(data => {
      this.message = data.data.message
    })
  }
};
</script>