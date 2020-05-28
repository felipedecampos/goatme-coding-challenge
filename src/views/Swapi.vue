<template>
  <div class="sw">
    <Listing msg="May the Force be with you"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Listing from '@/components/Listing.vue'

export default {
  name: 'Swapi',
  components: {
      Listing
  }
}
</script>
