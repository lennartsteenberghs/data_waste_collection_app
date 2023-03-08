<template>
  <div class="pt-2">
    <q-btn-toggle
      v-model="inRecycleBin"
      class="my-custom-toggle"
      no-caps
      rounded
      unelevated
      toggle-color="primary"
      color="white"
      text-color="primary"
      size="xs"
      padding="none"
      :options="[
        { label: 'Normal bin', value: false },
        { label: 'Recycle bin', value: true },
      ]"
      @click="$emit('recycledChange', inRecycleBin)"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import { fasTrashCan, fasRecycle } from "@quasar/extras/fontawesome-v6";

export default {
  name: "hello",
  props: ["item"],
  setup(props, { emit }) {
    const inRecycleBin = ref(props.item.recycled);
    const mustBeRecycled = ref(props.item.mustBeRecycled);

    return { fasTrashCan, inRecycleBin, fasRecycle, mustBeRecycled };
  },
};
</script>

<style scoped>
.my-custom-toggle {
  border: 1px solid #027be3;
}
</style>
