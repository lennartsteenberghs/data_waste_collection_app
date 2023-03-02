<template>
  <div class="waste-item">
    <div class="row no-wrap flex-center text-center">
      <div class="col-3">
        <q-icon :name="fasBottleWater" />
      </div>
      <div class="col-6">
        <h6>{{ item.name }}</h6>
      </div>
      <div class="col-3">
        <Counter @countChange="changeCount"/>
      </div>
    </div>
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
    }
    return { fasBottleWater, changeCount };
  },
};
</script>

<style>
.waste-item {
  align-content: space-around;
}
</style>
