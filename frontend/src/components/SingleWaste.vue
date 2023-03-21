<template>
  <div class="my-4 w-full flex items-center justify-center">
    <q-card class="mx-4 w-full py-1 px-2 rounded-lg shadow-md bg-white">
      <q-card-section class="p-0 flex items-center justify-between">
        <q-card-section
          v-if="item.mustBeRecycled"
          class="flex items-center justify-center w-14 rounded-full p-0.5 bg-recycle-green overflow-hidden"
        >
          <img
            class="rounded-full mx-auto bg-white w-14 h-14 object-contain"
            :src="getImgUrl()"
            @error="getAltImgUrl()"
          />
        </q-card-section>
        <q-card-section
          v-else
          class="flex items-center justify-center w-14 rounded-full p-0.5 bg-paper-yellow overflow-hidden"
        >
          <img
            class="rounded-full mx-auto bg-white w-14 h-14 object-contain"
            :src="getImgUrl()"
            @error="getAltImgUrl()"
          />
        </q-card-section>

        <q-card-section
          class="flex-1 text-md text-left sm:text-xl md:text-2xl font-bold px-1"
          >{{ itemName }}
          <br />
          {{ item.subName }}
        </q-card-section>

        <q-card-section class="p-0 w-20">
          <q-card-section class="p-0">
            <Counter :item="item" class="" @countChange="changeCount" />
          </q-card-section>
          <q-card-section class="p-0" v-show="true">
            <RecycleSwitch :item="item" class="" @recycledChange="changeRecycled" />
          </q-card-section>
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { computed } from "vue";
import Counter from "./Counter.vue";
import RecycleSwitch from "./RecycleSwitch.vue";
import { useI18n } from "vue-i18n";

export default {
  props: ["item"],
  components: { Counter, RecycleSwitch },
  setup(props) {
    const changeCount = (newCount) => {
      props.item.count = newCount;
    };
    const changeRecycled = (newValue) => {
      props.item.recycled = newValue;
    };

    const getImgUrl = () => {
      let imgUrl = require("../assets/app-icon.png");
      try {
        imgUrl = require("../assets/image" + props.item.id + ".png");
      } catch (e) {
        console.log("image could not be found for item with id =", props.item.id);
        imgUrl = require("../assets/app-icon.png");
      }
      return imgUrl;
    };
    const getAltImgUrl = () => {
      return require("../assets/app-icon.png");
    };

    const { locale } = useI18n({ useScope: "global" });

    const itemName = computed(() => {
      switch (locale.value) {
        case "en":
          return props.item.name.en;
        case "aw":
          return props.item.name.aw;
        case "es":
          return props.item.name.es;
        default:
          return props.item.name.nl;
      }
    });

    return {
      changeCount,
      changeRecycled,
      getImgUrl,
      getAltImgUrl,
      locale,
      itemName,
    };
  },
};
</script>

<style scoped></style>
