<template>
  <div class="waste-item bg-aw-blue">
    <q-card class="waste-item-container-outer bg-grey" flat bordered>
      <q-card-section class="waste-item-container" horizontal>
        <q-card-section class="waste-icon-container bg-purple-8">
          <q-icon class="waste-icon" :name="fasBottleWater" />
        </q-card-section>

        <q-card-section class="waste-name-container bg-aw-red">
          <div class="text-h5">{{ item.name }}</div>
        </q-card-section>

        <q-card-section class="counter-container bg-aw-orange">
          <Counter class="counter" @countChange="changeCount" />
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { fasBottleWater } from "@quasar/extras/fontawesome-v6";
import Counter from "./Counter.vue";

export default {
  props: ["item"],
  components: { Counter },
  setup(props) {
    const changeCount = (newCount) => {
      props.item.count = newCount;
    };
    return { fasBottleWater, changeCount };
  },
};
</script>

<style scoped>
.waste-item-container-outer {
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  border: 3px solid green;
  width: 600px;
}
.waste-item-container {
  align-items: center;
  text-align: center;
}
</style>
