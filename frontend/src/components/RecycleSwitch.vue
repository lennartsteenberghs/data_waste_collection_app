<template>
  <q-card class="flex max-w-sm p-4 rounded-lg shadow-md bg-white">
    <q-card-section class="flex items-center" horizontal>
      <q-card-section class="mr-2">
        <q-icon class="text-2xl" :name="fasTrashCan" />
      </q-card-section>

      <q-card-section class="flex-1 text-center text-2xl font-bold">
        <q-toggle
          v-if="mustBeRecycled"
          v-model="inRecycleBin"
          checked-icon="check"
          color="green"
          unchecked-icon="clear"
          size="lg"
          @click="$emit('recycledChange', inRecycleBin)" />
        <q-toggle
          v-else
          v-model="inRecycleBin"
          checked-icon="clear"
          color="green"
          unchecked-icon="check"
          size="lg"
          @click="$emit('recycledChange', inRecycleBin)"
      /></q-card-section>

      <q-card-section class="ml-2">
        <q-icon class="text-2xl" :name="fasRecycle" />
      </q-card-section>
    </q-card-section>
  </q-card>
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

<style scoped></style>
