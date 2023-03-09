<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <div class="text-center text-4xl pt-10 pb-0">Let's collect data!</div>
      <div v-if="amount" class="text-center text-3xl pt-10 pb-0">
        This recycle bin already saved {{ amount }} kg of CO2!
      </div>
      <div v-else class="text-center text-3xl pt-10 pb-0">
        Thank you for registering your waste!
      </div>
      <div class="border rounded-2xl m-5 py-3 px-2 shadow-md">
        <div class="text-center text-xl pt-0 pb-0">
          Would you be so kind to give some feedback on the app?
        </div>
        <div class="text-center text-md pt-1 pb-0">
          <a href="https://forms.gle/YhFdzeCWb13hBQAV6">{{ feedbackUrl }}</a>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ThankYouLayout",
  props: {
    amount: {
      type: String,
      required: true,
    },
  },
  components: {},
  setup(props) {
    console.log("co2amount in ThankYouLayout: ", props.amount);
    const amount = ref(props.amount);
    const feedbackUrl = ref("https://forms.gle/YhFdzeCWb13hBQAV6");
    //amount.value = 5123;
    console.log("co2amount in ThankYouLayout: ", amount.value);
    return { amount, feedbackUrl };
  },
});
</script>

<style>
h1,
h3 {
  text-align: center;
}
</style>
