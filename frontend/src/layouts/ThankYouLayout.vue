<template>
  <q-layout class="flex" view="lHh Lpr lFf">
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
    <q-page-container class="flex-1 justify-between p-5">
      <div class="">
        <div v-if="!amount" class="px-2 text-center text-3xl pt-10 pb-6">
          Thank you for registering your waste!
        </div>
        <div v-else class="px-2 text-center text-3xl pt-10 pb-6">
          This recycle bin already saved {{ amount }} kg of CO2!
        </div>
        <div class="">
          <iframe
            src="https://giphy.com/embed/iGMmoO25hxxUFRKfu4"
            width="full"
            height="full"
            frameBorder="0"
            class="giphy-embed mx-auto"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div
        class="border w-5/6 max-w-sm rounded-2xl py-3 px-2 shadow-md mx-auto fixed bottom-5 left-1/2 transform -translate-x-1/2"
      >
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
