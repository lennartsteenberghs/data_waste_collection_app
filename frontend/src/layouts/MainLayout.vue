<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <div class="text-h1 text-center">Let's collect data!</div>
      <div v-if="wasteItems.length">
        <WasteList :wasteItems="wasteItems" :binId="binId" />
      </div>
      <div v-else>Loading application...</div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import WasteList from "../components/WasteList.vue";
import wasteItemData from "../../data/waste_items_data.js";

export default defineComponent({
  name: "MainLayout",
  props: ["id"],
  components: { WasteList },
  setup(props) {
    const wasteItems = ref(wasteItemData);
    const binId = ref(props.id);

    return {
      wasteItems,
      binId,
    };
  },
});
</script>

<style>
/* Custom colors */

.text-aw-red {
  color: #c8102e !important;
}
.bg-aw-red {
  background: #c8102e !important;
}
.text-aw-blue {
  color: #418fde !important;
}
.bg-aw-blue {
  background: #418fde !important;
}
.text-aw-yellow {
  color: #fbe122 !important;
}
.bg-aw-yellow {
  background: #fbe122 !important;
}
.text-aw-orange {
  color: #e69100 !important;
}
.bg-aw-orange {
  background: #e69100 !important;
}
</style>
