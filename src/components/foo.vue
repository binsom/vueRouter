<template>
  <div>
    <div>{{msg}}</div>

    <router-link to="/fooChild1">Go to FooChild1</router-link>
    <router-link to="/fooChild2">Go to FooChild2</router-link>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'foo',
    data () {
      return {
        msg: 'foo'
      }
    }
  }
</script>
