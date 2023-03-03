<template>
  <div class="post-list">
    <div v-for="item in wasteItems" :key="item.id">
      <SingleWaste :item="item" />
    </div>
  </div>
  <div class="submit">
    <!-- <router-link :to="{ name: 'thankyou' }"> -->
      <button class="bg-aw-orange btn" @click="uploadData">Upload Data</button>
    <!-- </router-link> -->
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import SingleWaste from "./SingleWaste.vue";
import postWasteData from "src/composables/postWasteData";

export default {
  props: ["wasteItems", "binId"],
  components: { SingleWaste },
  setup(props) {
    const { error, post } = postWasteData();
    const router = useRouter()

    const uploadData = () => {
      let finalWasteItems = props.wasteItems.filter((item) => item.count > 0);
      post(finalWasteItems, props.binId, router);
      console.log(finalWasteItems);
    };
    return { uploadData };
  },
};
</script>

<style scoped>
button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
.submit {
  text-align: center;
}
.btn:hover {
  cursor: pointer;
}
</style>
