<template>
  <q-layout class="flex" view="lHh Lpr lFf">
    <q-header elevated>
      <div class="text-center text-4xl pt-5 pb-2 bg-green">Let's collect data!</div>
    </q-header>
    <q-page-container class="flex-1 justify-between">
      <div>
        <div class="px-2 text-center text-3xl pt-10 pb-0">
          Thank you for registering your waste!
        </div>
        <div v-if="amount" class="px-5 text-center text-lg pt-1 pb-0">
          This recycle bin already saved {{ amount }} kg of CO2!
        </div>
        <div v-else class="px-5 text-center text-lg pt-1 pb-0">
          Together we can make Aruba a cleaner place
        </div>
        <div class="px-8">
          <iframe
            src="https://giphy.com/embed/iGMmoO25hxxUFRKfu4"
            width="full"
            height="full"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div class="border rounded-2xl m-5 py-3 px-2 shadow-md fixed bottom-10">
        <div class="text-center text-xl pt-0 pb-0">
          Would you be so kind to give some feedback on the app?
        </div>
        <div class="text-center text-lg pt-1 pb-0 text-bold">
          <a href="https://forms.gle/YhFdzeCWb13hBQAV6">Click here</a>
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
