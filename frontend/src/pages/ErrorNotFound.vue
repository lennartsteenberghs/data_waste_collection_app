<template>
  <div class="fullscreen text-center p-4 flex-col items-center">
    <div class="text-3xl pt-5 pb-2">
      Sorry, we couldn't find the page you're looking for
    </div>
    <div class="text-xl">
      Just like we couldn't find our friend Juan who has disappeared underneath all the
      trash
    </div>
    <img class="my-10 h-60 mx-auto" :src="require('../assets/landfill.jpg')" />
    <div class="text-xl pb-10">
      Help us find Juan by recycling your waste and reducing Aruba's landfill!
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErrorNotFound",
});
</script>
