<template>
  <q-layout view="hHh lpR fFf">
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
      <div class="text-center pt-32 pb-6">
        <div class="text-3xl pb-2">Welcome!</div>
        <div>How will you register your waste?</div>
      </div>

      <div class="text-center place-content-center flex items-center mx-auto">
        <div
          class="py-3 px-2 mx-2 w-24 bg-white text-space-cadet shadow-sm shadow-slate-600 rounded-xl"
          @click="goToCamera"
        >
          <q-icon class="text-3xl pb-2" :name="fasCamera" />

          <div>Take a picture</div>
        </div>
        <div class="px-2">or</div>
        <div
          class="py-3 px-2 mx-2 w-24 bg-white text-space-cadet shadow-sm shadow-slate-600 rounded-xl"
          @click="goToList"
        >
          <q-icon class="text-3xl pb-2" :name="fasList" />
          <div>Pick from the list</div>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import LanguageChooser from "src/components/LanguageChooser.vue";
import { fasCamera, fasList } from "@quasar/extras/fontawesome-v6";

export default defineComponent({
  name: "MenuLayout",
  props: ["binId", "binType"],
  components: { LanguageChooser },
  setup(props) {
    const router = useRouter();
    const goToList = () => {
      router.push({
        name: "list",
        replace: false,
        props: true,
        params: { binId: props.binId, binType: props.binType },
      });
    };
    const goToCamera = () => {
      console.log("Going to camera changed");
    };

    return { fasCamera, fasList, goToList, goToCamera };
  },
});
</script>
