<template>
  <q-layout view="hHh lpR lfr">
    <q-header elevated>
      <q-toolbar class="px-5 pt-5 pb-2 bg-space-cadet">
        <q-avatar square>
          <img class="" :src="require('../assets/aruba.png')" />
        </q-avatar>

        <q-toolbar-title class="text-center text-2xl">
          {{ $t("toolbarTitle") }}</q-toolbar-title
        >
        <LanguageChooser />
      </q-toolbar>
    </q-header>
    <q-page-container
      class="bg-space-cadet text-white h-screen flex-col justify-center content-start"
    >
      <div
        v-if="hasDecided"
        class="bg-white w-56 p-2 flex-col justify-center content-start items-center mx-auto mt-20"
      >
        <div v-if="hasCameraSupport">
          <video
            v-show="!imageCaptured"
            class="full-width bg-space-cadet"
            autoplay
            ref="video"
          />
          <canvas v-show="imageCaptured" ref="canvas" class="full-width" height="240" />
        </div>
        <div v-else class="text-space-cadet text-center">
          Camera access denied. Please enable camera to take photo.
        </div>

        <div v-if="!imageCaptured" class="text-center mt-4 text-space-cadet">
          <q-btn
            v-if="hasCameraSupport"
            @click="captureImage"
            color="white"
            text-color="space-cadet"
            :icon="fasCamera"
            size="lg"
            round
          />
        </div>
        <div v-else class="pt-4 flex place-content-around">
          <q-btn
            @click="captureImage"
            color="white"
            text-color="red"
            :icon="fasXmark"
            size="lg"
            round
          />
          <q-btn
            @click="uploadData"
            color="white"
            text-color="recycle-green"
            :icon="fasCheck"
            size="lg"
            round
          />
        </div>
      </div>
      <div v-else>
        <div class="px-2 text-center text-3xl pt-10 pb-6">
          Do you want to verify your waste by taking a picture of it?
        </div>
        <div class="px-2 text-center text-xl pb-6">
          It helps improving the quality of the project!
        </div>
        <div class="submit pb-4 align-top items-start">
          <q-btn
            class="bg-white text-space-cadet"
            round
            flat
            @click="verifyWaste"
            label="Take a picture"
            style="width: 200px"
          />
        </div>
        <div class="submit pb-4 align-top items-start">
          <q-btn
            class="bg-white text-space-cadet"
            round
            flat
            @click="uploadData"
            label="No thanks"
            style="width: 200px"
          />
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import LanguageChooser from "src/components/LanguageChooser.vue";
import dataURItoBlob from "src/composables/dataURItoBlob";
import postWasteData from "src/composables/postWasteData";
import { fasCamera, fasXmark, fasCheck } from "@quasar/extras/fontawesome-v6";
require("md-gum-polyfill");

export default defineComponent({
  name: "CameraLayout",
  props: ["co2Amount", "binId", "finalWasteItems"],
  components: { LanguageChooser },
  setup(props, { refs }) {
    const hasDecided = ref(false);

    const video = ref(null);
    const canvas = ref(null);
    const photo = ref(null);

    const imageCaptured = ref(false);
    const hasCameraSupport = ref(true);

    const { postDataError, post } = postWasteData();

    onMounted(() => {
      // initCamera();
    });
    onBeforeUnmount(() => {
      if (hasCameraSupport.value) {
        disableCamera();
      }
    });

    const initCamera = () => {
      navigator.mediaDevices
        .getUserMedia({
          video: {
            facingMode: "environment", // choose the back camera
          },
        })
        .then((stream) => {
          video.value.srcObject = stream;
        })
        .catch((error) => {
          hasCameraSupport.value = false;
        });
    };

    const captureImage = () => {
      imageCaptured.value = !imageCaptured.value;
      if (imageCaptured.value) {
        canvas.value.width = video.value.getBoundingClientRect().width;
        canvas.value.height = video.value.getBoundingClientRect().height;
        let context = canvas.value.getContext("2d");
        context.drawImage(video.value, 0, 0, canvas.value.width, canvas.value.height);
        photo.value = dataURItoBlob(canvas.value.toDataURL());
        disableCamera();
      } else {
        photo.value = null;
        initCamera();
      }
    };

    const disableCamera = () => {
      if (video.value) {
        video.value.srcObject.getVideoTracks().forEach((track) => {
          track.stop();
        });
      }
    };

    const verifyWaste = () => {
      hasDecided.value = true;
      initCamera();
    };

    // post data to API and go to thankyou page
    const router = useRouter();
    const uploadData = () => {
      post(props.finalWasteItems, props.binId, photo.value);
      router.push({
        name: "thankyou",
        replace: false,
        props: true,
        params: { amount: props.co2Amount },
      });
    };

    return {
      captureImage,
      video,
      canvas,
      imageCaptured,
      hasCameraSupport,
      fasCamera,
      fasXmark,
      fasCheck,
      hasDecided,
      verifyWaste,
      uploadData,
    };
  },
});
</script>

<style scoped>
button {
  border: 0;
  color: space-cadet;
  border-radius: 20px;
}
.btn:hover {
  cursor: pointer;
}
.submit {
  text-align: center;
}
</style>
