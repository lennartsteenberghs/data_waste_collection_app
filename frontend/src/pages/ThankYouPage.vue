<template>
  <q-layout class="flex" view="lHh Lpr lFf">
    <Header />
    <q-page-container class="flex-1 justify-between p-5">
      <div class="">
        <div v-if="!amount" class="px-2 text-center text-3xl pt-10 pb-6">
          {{ $t("defaultThankYouMessage") }}
        </div>
        <div v-else class="px-2 text-center text-3xl pt-10 pb-6">
          {{ $t("co2MessagePart1") }} {{ amount }} {{ $t("co2MessagePart2") }}
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
      <div class="">
        <div
          class="border w-5/6 max-w-sm rounded-2xl py-3 px-2 shadow-md mx-auto fixed bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div class="text-center text-xl pt-0 pb-0">
            {{ $t("askFeedback") }}
          </div>
          <div class="text-center text-lg pt-1 pb-0 text-bold">
            <a href="https://forms.gle/YhFdzeCWb13hBQAV6">{{ $t("clickHere") }}</a>
          </div>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import Header from "src/components/Header.vue";

export default defineComponent({
  name: "ThankYouPage",
  props: ["amount"],
  components: { Header },
  setup(props) {
    const amount = ref(parseInt(props.amount));
    const feedbackUrl = ref("https://forms.gle/YhFdzeCWb13hBQAV6");

    return { amount, feedbackUrl };
  },
});
</script>

<style scoped></style>
