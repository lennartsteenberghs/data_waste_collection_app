<template>
  <div class="">
    <div class="pt-2 pl-5 pb-0 text-left">
      <q-icon class="text-green text-2xl" :name="fasRecycle" />
    </div>
    <div class="" v-for="item in wasteItemsRecyclable" :key="item.id">
      <SingleWaste :item="item" />
    </div>
    <div class="pl-5 pb-0 text-left">
      <q-icon class="text-2xl text-yellow-500 text-opacity-85" :name="fasTrash" />
    </div>
    <div class="" v-for="item in wasteItemsNonRecyclable" :key="item.id">
      <SingleWaste :item="item" />
    </div>
  </div>
  <div class="submit pb-4 align-top items-start">
    <router-link :to="{ name: 'thankyou', params: { amount: 69 } }">
      <q-btn
        class="bg-aw-red"
        round
        flat
        @click="uploadData"
        label="Submit"
        style="width: 200px"
      />
    </router-link>
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
      // go to next page with router
      // TODO: add prop of co2Amount
      // router.push({ name: "thankyou", params: { co2Amount: 69 } });
      console.log("co2amount in wasteList: ", co2Amount.value);
      post(finalWasteItems, props.binId);
      console.log(finalWasteItems);
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
