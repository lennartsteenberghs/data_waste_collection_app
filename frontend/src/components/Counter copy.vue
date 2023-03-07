<template>
  <q-card class="counter-card-outer bg-grey-1" flat>
    <q-card-section class="counter-card" horizontal>
      <q-card-section class="btn-wrapper">
          <q-btn
          class="counter-button bg-aw-blue"
          round
          flat
          icon='-'
          @click="decrement"
        />
      </q-card-section>

      <q-card-section class="">
        <div class="counter-number">{{ count }}</div>
      </q-card-section>

      <q-card-section class="btn-wrapper">
        <q-btn
          class="counter-button bg-aw-blue"
          round
          flat
          icon='+'
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

<style scoped>
.counter-card {
  align-items: center;
  text-align: center;
}
.btn-wrapper {
  align-items: center;
  padding: 0px;
}
.counter-button {
  border-radius: 50px;
  margin: auto;
  text-align: center;
}
.counter-button:hover {
  cursor: pointer;
}
.counter-number {
  margin: auto;
  font-size: larger;
}
</style>
