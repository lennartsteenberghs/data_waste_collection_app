<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="px-5 pt-5 pb-2 bg-space-cadet">
        <q-avatar square>
          <img class="" :src="require('../assets/aruba.png')" />
        </q-avatar>

        <q-toolbar-title class="text-center text-2xl"
          >Let's collect data!</q-toolbar-title
        >
        <q-avatar square>
          <img class="" :src="require('../assets/aruba.png')" />
        </q-avatar>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <div class="text-center text-2xl pt-8 pb-2">What did you throw away?</div>
      <div class="" v-if="wasteItems.length">
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

/* same as yellow-500 in Tailwind CSS */
.text-paper-yellow {
  color: #eab308 !important;
}
.bg-paper-yellow {
  background: #eab308 !important;
}
.text-space-cadet {
  color: #151e3f;
}
.bg-space-cadet {
  background: #151e3f;
}
.text-recycle-green {
  color: #4caf50;
}
.bg-recycle-green {
  background: #4caf50;
}
</style>
