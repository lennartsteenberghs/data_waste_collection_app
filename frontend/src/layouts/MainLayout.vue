<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <h1>Waste Data Collection</h1>
      <div v-if="wasteItems.length">
        <WasteList :wasteItems="wasteItems" :binId="binId" />
      </div>
      <div v-else>Loading application...</div>
      <router-view />
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
h1, h3 {
  text-align: center;
}
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
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
.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
