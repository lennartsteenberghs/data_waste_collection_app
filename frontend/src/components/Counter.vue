<template>
  <q-card class="flex max-w-sm p-4 rounded-lg shadow-md bg-white">
    <q-card-section class="flex items-center" horizontal>
      <q-card-section class="mr-2">
        <q-btn class="text-xl" icon="-" color="primary" @click="decrement" />
      </q-card-section>

      <q-card-section class="flex-1 text-center text-2xl font-bold">{{ count }}</q-card-section>

      <q-card-section class="ml-2">
        <q-btn class="text-xl" icon="+" color="primary" @click="increment" />
      </q-card-section>
    </q-card-section>
  </q-card>
</template>


<script>
import { ref } from "vue";

export default {
  name: "hello",
  setup(props, { emit }) {
    const count = ref(0);

    const decrement = () => {
      if (count.value) {
        count.value -= 1;
        emit("countChange", count.value);
      }
    };
    const increment = () => {
      count.value += 1;
      emit("countChange", count.value);
    };
    return { count, decrement, increment };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
</style>
