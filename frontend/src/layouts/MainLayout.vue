<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
    <div class="text-h1 text-center">Waste Data Collection</div>
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
  props: ['id'],
  components: { WasteList },
  setup(props) {
    const wasteItems = ref(wasteItemData);
    const binId = ref(props.id)

    return {
      wasteItems,
      binId
    };
  },
});
</script>

<style>

/* Custom colors */

.text-aw-red {
  color: #C8102E !important;
}
.bg-aw-red {
  background: #C8102E !important;
}
.text-aw-blue {
  color: #418FDE !important;
}
.bg-aw-blue {
  background: #418FDE !important;
}
.text-aw-yellow {
  color: #FBE122 !important;
}
.bg-aw-yellow {
  background: #FBE122 !important;
}
.text-aw-orange {
  color: #e69100 !important;
}
.bg-aw-orange {
  background: #e69100 !important;
}
</style>
