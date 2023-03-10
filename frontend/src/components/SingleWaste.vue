<template>
  <div class="my-4 w-full flex items-center justify-center">
    <q-card class="mx-4 w-full py-1 px-2 rounded-lg shadow-md bg-white">
      <q-card-section class="p-0 flex items-center justify-between">
        <q-card-section
          v-if="item.mustBeRecycled"
          class="flex items-center justify-center w-14 rounded-full p-0.5 bg-green overflow-hidden"
        >
          <img
            class="rounded-full mx-auto bg-white w-14 h-14 object-contain"
            :src="getImgUrl()"
          />
        </q-card-section>
        <q-card-section
          v-else
          class="flex items-center justify-center w-14 rounded-full p-0.5 bg-yellow-500 overflow-hidden"
        >
          <img
            class="rounded-full mx-auto bg-white w-14 h-14 object-contain"
            :src="getImgUrl()"
          />
        </q-card-section>

        <q-card-section
          class="flex-1 text-md text-left sm:text-xl md:text-2xl font-bold px-1"
          >{{ item.name }}
          <br />
          {{ item.subName }}
        </q-card-section>

        <q-card-section class="p-0 w-20">
          <q-card-section class="p-0">
            <Counter :item="item" class="" @countChange="changeCount" />
          </q-card-section>
          <q-card-section class="p-0" v-show="true">
            <RecycleSwitch :item="item" class="" @recycledChange="changeRecycled" />
          </q-card-section>
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import Counter from "./Counter.vue";
import RecycleSwitch from "./RecycleSwitch.vue";

export default {
  props: ["item"],
  components: { Counter, RecycleSwitch },
  setup(props) {
    const img = ref("../assets/image2.jpg");

    const changeCount = (newCount) => {
      props.item.count = newCount;
    };
    const changeRecycled = (newValue) => {
      props.item.recycled = newValue;
    };

    const getImgUrl = () => {
      return require("../assets/image" + props.item.id + ".png");
    };
    return {
      changeCount,
      changeRecycled,
      getImgUrl,
      img,
    };
  },
};
</script>

<style scoped></style>
