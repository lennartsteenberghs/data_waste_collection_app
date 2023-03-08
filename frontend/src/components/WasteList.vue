<template>
  <div class="post-list">
    <div class="list-item" v-for="item in wasteItems" :key="item.id">
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
import { useRouter } from "vue-router";
import SingleWaste from "./SingleWaste.vue";
import postWasteData from "src/composables/postWasteData";
import getCO2Amount from "src/composables/getCO2Amount";

export default {
  props: ["wasteItems", "binId"],
  components: { SingleWaste },
  setup(props) {
    const { postDataError, post } = postWasteData();
    const router = useRouter();

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
    return { uploadData, co2Amount };
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
