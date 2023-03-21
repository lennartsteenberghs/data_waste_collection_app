<template>
  <div class="">
    <div class="pt-2 pl-5 pb-0 text-left flex items-center">
      <q-icon class="text-recycle-green text-2xl" :name="fasRecycle" />
      <div class="ml-2 bg-recycle-green rounded-lg shadow-md py-1 px-2 text-white">
        {{ $t("recyclingBin") }}
      </div>
    </div>
    <div class="" v-for="item in wasteItemsRecyclable" :key="item.id">
      <SingleWaste :item="item" />
    </div>
    <div class="pt-2 pl-5 pb-0 text-left flex items-center">
      <q-icon class="text-2xl text-paper-yellow text-opacity-85" :name="fasTrash" />
      <div class="ml-2 bg-paper-yellow rounded-lg shadow-md py-1 px-2 text-white">
        {{ $t("nonRecyclingBin") }}
      </div>
    </div>
    <div class="" v-for="item in wasteItemsNonRecyclable" :key="item.id">
      <SingleWaste :item="item" />
    </div>
  </div>
  <div class="submit pb-4 align-top items-start">
    <q-btn
      class="bg-space-cadet"
      round
      flat
      @click="uploadData"
      :label="$t('submitButton')"
      style="width: 200px"
    />
  </div>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
import SingleWaste from "./SingleWaste.vue";
import postWasteData from "src/composables/postWasteData";
import getCO2Amount from "src/composables/getCO2Amount";
import { fasRecycle, fasTrash } from "@quasar/extras/fontawesome-v6";

export default {
  props: ["wasteItems", "binId"],
  components: { SingleWaste },
  setup(props) {
    const { postDataError, post } = postWasteData();
    const router = useRouter();

    const wasteItemsRecyclable = computed(() => {
      return props.wasteItems.filter((item) => item.mustBeRecycled);
    });

    const wasteItemsNonRecyclable = computed(() => {
      return props.wasteItems.filter((item) => !item.mustBeRecycled);
    });

    const { co2Amount, getCO2AmountError, loadCO2Amount } = getCO2Amount();
    loadCO2Amount(props.binId);

    const uploadData = () => {
      let finalWasteItems = props.wasteItems.filter((item) => item.count > 0);
      if (finalWasteItems.length) {
        post(finalWasteItems, props.binId);
        console.log(finalWasteItems);
        router.push({
          name: "thankyou",
          replace: false,
          props: true,
          params: { amount: co2Amount.value },
        });
      } else {
        console.log("No data was entered");
      }
    };
    return {
      uploadData,
      co2Amount,
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
