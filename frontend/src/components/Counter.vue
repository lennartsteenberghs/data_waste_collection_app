<template>
  <q-card class="counter-card-outer" flat bordered>
    <q-card-section class="counter-card" horizontal>
      <q-card-section class="btn-wrapper">
          <q-btn
          class="counter-button bg-aw-blue"
          color="gray"
          round
          flat
          dense
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
          color="gray"
          round
          flat
          dense
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
button {
  height: 40px;
  width: 40px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12),
    0 1px 5px 0 rgba(0, 0, 0, 0.2);
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
