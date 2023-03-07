<template>
  <div class="mx-4 my-8 flex items-center justify-center">
    <q-card class="w-full mx-60 p-4 rounded-lg shadow-md bg-white">
      <q-card-section class="flex items-center">
        <q-card-section
          class="flex items-center justify-center w-28 h-28 rounded-full p-2 bg-primary text-white"
        >
          <img
            class="rounded-full mx-auto"
            src=".\..\assets\can355ml.jpg"
            alt=""
            width="600"
            height="600"
          />
        </q-card-section>

        <q-card-section class="flex-1 text-3xl font-bold ml-4">{{
          item.name
        }}</q-card-section>

        <q-card-section>
          <q-card-section>
            <Counter class="" @countChange="changeCount" />
          </q-card-section>
          <q-card-section v-show="item.count">
            <RecycleSwitch :item="item" class="" @recycledChange="changeRecycled"/>
          </q-card-section>
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import Counter from "./Counter.vue";
import RecycleSwitch from "./RecycleSwitch.vue"

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
      changeRecycled
    };
  },
};
</script>

<style scoped></style>
