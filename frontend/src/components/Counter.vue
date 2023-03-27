<template>
  <q-card class="flex-1 max-w-xs p-0 rounded-lg shadow-none bg-white">
    <q-card-section class="flex items-center justify-between px-0" horizontal>
      <q-card-section class="p-0">
        <q-btn
          v-if="mustBeRecycled"
          class="p-0 text-xs"
          icon="-"
          color="recycle-green"
          round
          size="0.9em"
          @click="decrement"
        />
        <q-btn
          v-else
          class="p-0 text-xs"
          icon="-"
          color="paper-yellow"
          round
          size="0.9em"
          @click="decrement"
        />
      </q-card-section>

      <q-card-section class="flex-1 text-center text-lg p-1">{{ count }}</q-card-section>

      <q-card-section class="p-0">
        <q-btn
          v-if="mustBeRecycled"
          class="p-0 text-xs"
          icon="+"
          color="recycle-green"
          round
          size="0.9em"
          @click="increment"
        />
        <q-btn
          v-else
          class="p-0 text-xs"
          icon="+"
          color="paper-yellow"
          round
          size="0.9em"
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
  props: ["item"],
  setup(props, { emit }) {
    const count = ref(0);
    const mustBeRecycled = ref(props.item.mustBeRecycled);

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
    return { count, decrement, increment, mustBeRecycled };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped></style>
