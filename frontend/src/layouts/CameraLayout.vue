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
      </div>
      <div class="text-center mt-4 text-space-cadet">
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
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import LanguageChooser from "src/components/LanguageChooser.vue";
import dataURItoBlob from "src/composables/dataURItoBlob";
import { fasCamera } from "@quasar/extras/fontawesome-v6";
require("md-gum-polyfill");

export default defineComponent({
  name: "CameraLayout",
  props: ["id", "binId"],
  components: { LanguageChooser },
  setup(props, { refs }) {
    const video = ref(null);
    const canvas = ref(null);
    const photo = ref(null);

    const imageCaptured = ref(false);
    const hasCameraSupport = ref(true);

    onMounted(() => {
      initCamera();
    });
    onBeforeUnmount(() => {
      if (hasCameraSupport.value) {
        disableCamera();
      }
    });

    const initCamera = () => {
      navigator.mediaDevices
        .getUserMedia({
          video: true,
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
        console.log(photo.value);
        disableCamera();
      } else {
        initCamera();
      }
    };

    const disableCamera = () => {
      video.value.srcObject.getVideoTracks().forEach((track) => {
        track.stop();
      });
    };

    const router = useRouter();
    const goToList = () => {
      router.push({
        name: "list",
        replace: false,
        props: true,
        params: { id: props.id, binId: props.binId },
      });
    };

    return {
      goToList,
      captureImage,
      video,
      canvas,
      imageCaptured,
      hasCameraSupport,
      fasCamera,
    };
  },
});
</script>
