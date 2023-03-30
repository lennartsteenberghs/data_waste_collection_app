<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="px-5 pt-5 pb-2 bg-space-cadet">
        <q-avatar square>
          <img class="" :src="require('../assets/aruba.png')" />
        </q-avatar>

        <q-toolbar-title class="text-center text-2xl">
          {{ $t("toolbarTitle") }}</q-toolbar-title
        >
        <LanguageChooser />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <div v-if="!listFilledIn">
        <div class="text-center text-2xl pt-8 pb-2">
          {{ $t("listTitle") }}
        </div>
        <div
          class="mx-auto mb-2 w-fit text-center text-xs bg-white border-red-500 border rounded-lg shadow-md py-1 px-2 text-black"
        >
          {{ $t("moreInformationPressPicture") }}
        </div>
        <div class="" v-if="wasteItems.length">
          <WasteList
            :wasteItems="wasteItems"
            :binId="binId"
            :binType="binType"
            @listSubmitted="listSubmitted"
          />
        </div>
        <div v-else>{{ $t("loadingText") }}</div>
      </div>
      <div v-else>
        <!-- pass on co2amount, finalWasteItems, binId  -->
        <CameraLayout
          :co2Amount="co2Amount"
          :binId="binId"
          :finalWasteItems="finalWasteItems"
        />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import WasteList from "../components/WasteList.vue";
import CameraLayout from "./CameraLayout.vue";
import LanguageChooser from "src/components/LanguageChooser.vue";
import getCO2Amount from "src/composables/getCO2Amount";

export default defineComponent({
  name: "ListLayout",
  props: ["binId", "binType"],
  components: { WasteList, LanguageChooser, CameraLayout },
  setup(props) {
    const listFilledIn = ref(false);
    const finalWasteItems = ref(null);

    const binType = ref(props.binType); // 1 = both, 2 = only recycling, 3 = only non-recycling

    const wasteItems = require("../../data/wasteitems.json");

    const binId = ref(props.binId);

    // get CO2 saved for specific bin
    const { co2Amount, getCO2AmountError, loadCO2Amount } = getCO2Amount();
    loadCO2Amount(props.binId);

    // retrieve emitted values for finalWasteItems
    const listSubmitted = (finalList) => {
      listFilledIn.value = true;
      finalWasteItems.value = finalList;
      console.log(finalWasteItems.value);
    };

    return {
      wasteItems,
      binId,
      binType,
      listFilledIn,
      listSubmitted,
      finalWasteItems,
      co2Amount,
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
.text-subtitle-gray {
  color: #414141;
}
.bg-subtitle-gray {
  background: #414141;
}
</style>
