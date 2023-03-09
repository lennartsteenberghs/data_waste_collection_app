<template>
  <div class="my-4 w-full flex items-center justify-center">
    <q-card class="mx-4 w-full py-1 px-2 rounded-lg shadow-md bg-white">
      <q-card-section class="p-0 flex items-center justify-between">
        <q-card-section
          class="flex items-center justify-center w-14 rounded-full p-0.5 bg-primary text-white"
        >
          <q-img class="rounded-full mx-auto" src=".\..\assets\can355ml.jpg" />
        </q-card-section>

        <q-card-section
          class="flex-1 text-md text-left sm:text-xl md:text-2xl font-bold px-1"
          >{{ item.name }}
          <br />
          {{ item.subName }}
        </q-card-section>

        <q-card-section class="p-0 w-20">
          <q-card-section class="p-0">
            <Counter class="" @countChange="changeCount" />
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
    const changeCount = (newCount) => {
      props.item.count = newCount;
    };
    const changeRecycled = (newValue) => {
      props.item.recycled = newValue;
    };
    return {
      changeCount,
      changeRecycled,
    };
  },
};
</script>

<style scoped></style>
