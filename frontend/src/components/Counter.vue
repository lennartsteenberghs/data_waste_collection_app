<template>
  <q-card class="flex-1 max-w-sm p-0 rounded-lg shadow-none bg-white">
    <q-card-section class="flex items-center justify-between px-0" horizontal>
      <q-card-section class="p-0">
        <q-btn
          class="p-0 text-xs"
          icon="-"
          color="primary"
          round
          size="sm"
          @click="decrement"
        />
      </q-card-section>

      <q-card-section class="flex-1 text-center text-xs p-1">{{ count }}</q-card-section>

      <q-card-section class="p-0">
        <q-btn
          class="p-0 text-xs"
          icon="+"
          color="primary"
          round
          size="sm"
          @click="increment"
        />
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

<style scoped></style>
