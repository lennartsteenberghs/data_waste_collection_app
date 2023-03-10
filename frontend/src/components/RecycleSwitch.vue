<template>
  <div class="pt-2">
    <q-btn-toggle
      v-if="mustBeRecycled"
      v-model="inRecycleBin"
      class="my-custom-toggle-green"
      no-caps
      rounded
      unelevated
      toggle-color="recycle-green"
      color="white"
      text-color="recycle-green"
      size="xs"
      padding="none"
      :options="[
        { label: 'Normal bin', value: false },
        { label: 'Recycle bin', value: true },
      ]"
      @click="$emit('recycledChange', inRecycleBin)"
    />

    <q-btn-toggle
      v-else
      v-model="inRecycleBin"
      class="my-custom-toggle-yellow"
      no-caps
      rounded
      unelevated
      toggle-color="paper-yellow"
      color="white"
      text-color="paper-yellow"
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
.my-custom-toggle-yellow {
  border: 1px solid #eab308;
}
.my-custom-toggle-green {
  border: 1px solid #4caf50;
}
</style>
