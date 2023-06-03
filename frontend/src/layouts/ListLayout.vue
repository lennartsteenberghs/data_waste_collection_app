<template>
  <div class="">
    <div class="pt-2 pl-5 pb-0 text-left flex items-center">
      <q-icon class="text-recycle-green text-2xl" :name="fasRecycle" />
      <div class="ml-2 bg-recycle-green rounded-lg shadow-md py-1 px-2 text-white">
        {{ $t("recyclingBin") }}
      </div>
    </div>
    <div class="" v-for="item in wasteItemsRecyclable" :key="item.id">
      <WasteItemCard :item="item" :binType="binType" />
    </div>
    <div class="pt-2 pl-5 pb-0 text-left flex items-center">
      <q-icon class="text-2xl text-paper-yellow text-opacity-85" :name="fasTrash" />
      <div class="ml-2 bg-paper-yellow rounded-lg shadow-md py-1 px-2 text-white">
        {{ $t("nonRecyclingBin") }}
      </div>
    </div>
    <div class="" v-for="item in wasteItemsNonRecyclable" :key="item.id">
      <WasteItemCard :item="item" :binType="binType" />
    </div>
  </div>
  <div class="submit pb-4 align-top items-start">
    <q-btn
      class="bg-space-cadet"
      round
      flat
      @click="listSubmitted"
      :label="$t('submitButton')"
      style="width: 200px"
    />
  </div>
</template>

<script>
import { computed } from "vue";
import WasteItemCard from "src/components/WasteItemCard.vue";
import { fasRecycle, fasTrash } from "@quasar/extras/fontawesome-v6";

export default {
  props: ["wasteItems", "binId", "binType"],
  components: { WasteItemCard },
  setup(props, { emit }) {
    const wasteItemsRecyclable = computed(() => {
      return props.wasteItems.filter((item) => item.mustBeRecycled);
    });

    const wasteItemsNonRecyclable = computed(() => {
      return props.wasteItems.filter((item) => !item.mustBeRecycled);
    });

    const listSubmitted = () => {
      let finalWasteItems = props.wasteItems.filter((item) => item.count > 0);
      if (finalWasteItems.length) {
        // emit function so screen changes to camera layout
        emit("listSubmitted", finalWasteItems);
      } else {
        console.log("No data was entered");
      }
    };
    return {
      listSubmitted,
      wasteItemsRecyclable,
      wasteItemsNonRecyclable,
      fasRecycle,
      fasTrash,
    };
  },
};
</script>

<style scoped>
button {
  border: 0;
  color: white;
  border-radius: 20px;
}
.btn:hover {
  cursor: pointer;
}
.submit {
  text-align: center;
}
</style>
