<template>
  <div class="waste-item">
    <q-card class="waste-item-container-outer bg-grey-1" flat bordered>
      <q-card-section class="waste-item-container" horizontal>
        <q-card-section class="waste-icon-container pos-in-middle">
          <q-icon class="waste-icon" :name="fasBottleWater" />
        </q-card-section>

        <q-card-section class="waste-name-container pos-in-middle">
          <div class="text-h5">{{ item.name }}</div>
        </q-card-section>

        <q-card-section class="counter-container pos-in-middle">
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
  border: 2px solid rgb(234, 221, 221);
  width: 600px;
  border-radius: 80px;
}
.waste-item-container {
  align-items: center;
  text-align: center;

}
.pos-in-middle {
  margin-left: auto;
  margin-right: auto;
}
</style>
