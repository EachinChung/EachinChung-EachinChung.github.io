<template>
  <div><layout /></div>
</template>

<script>
import layout from '@/components/layout'
export default {
  components: {
    layout,
  },
  // layout: 'home',
  head() {
    return {
      title: 'Python',
    }
  },
}
</script>
