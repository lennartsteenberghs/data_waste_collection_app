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
            :src="getImgUrl(itemContent[0].img)"
            @error="getAltImgUrl()"
            @click="openDialog"
          />
        </q-card-section>
        <q-card-section
          v-else
          class="flex items-center justify-center w-14 rounded-full p-0.5 bg-paper-yellow overflow-hidden"
        >
          <img
            class="rounded-full mx-auto bg-white w-14 h-14 object-contain"
            :src="getImgUrl(itemContent[0].img)"
            @error="getAltImgUrl()"
            @click="openDialog"
          />
        </q-card-section>

        <q-card-section
          class="flex-1 text-left text-black text-md sm:text-xl md:text-2xl font-bold px-1"
          >{{ itemName }}
          <br />
          <div class="text-subtitle-gray text-xs sm:text-md md:text-lg">
            {{ itemSubName }}
          </div>
        </q-card-section>

        <q-card-section class="p-0 w-4/12">
          <q-card-section class="p-0">
            <Counter
              v-if="
                (binType !== '3' && item.mustBeRecycled) ||
                (binType !== '2' && !item.mustBeRecycled)
              "
              :item="item"
              class=""
              @countChange="changeCount"
            />
            <div
              v-else-if="item.mustBeRecycled"
              class="text-red-500 text-xs font-bold text-center"
            >
              {{ $t("hasToBeRecyclingBin") }}
            </div>
            <div v-else class="text-red-500 text-xs font-bold text-center">
              {{ $t("hasToBeNonRecyclingBin") }}
            </div>
          </q-card-section>
        </q-card-section>
      </q-card-section>
      <q-dialog v-model="dialogVisible"
        ><q-carousel
          transition-prev="slide-right"
          transition-next="slide-left"
          swipeable
          animated
          v-model="carouselSlide"
          control-color="primary"
          navigation-icon="radio_button_unchecked"
          navigation
          padding
          arrows
          class="bg-white h-3/5 w-11/12"
        >
          <q-carousel-slide
            v-for="contents in itemContent"
            :name="contents.id"
            class="column no-wrap flex-center"
          >
            <img
              class="rounded-none mx-auto bg-white w-fit h-fit object-contain"
              :src="getImgUrl(contents.img)"
              @error="getAltImgUrl()"
            />
            <div class="q-mt-md text-center">
              {{ getContentText(contents) }}
            </div>
          </q-carousel-slide>
        </q-carousel></q-dialog
      >
    </q-card>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import Counter from "./Counter.vue";
import { useI18n } from "vue-i18n";

export default {
  props: ["item", "binType"],
  components: { Counter },
  setup(props) {
    const changeCount = (newCount) => {
      props.item.count = newCount;
    };

    const getImgUrl = (imageName) => {
      let imgUrl = require("../assets/app-icon.png");
      try {
        imgUrl = require("../assets/item" + props.item.id + "/" + imageName);
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

    const dialogVisible = ref(false);
    const openDialog = () => {
      dialogVisible.value = true;
    };

    const itemName = computed(() => {
      switch (locale.value) {
        case "en":
          return props.item.name_en;
        case "aw":
          return props.item.name_aw;
        case "es":
          return props.item.name_es;
        default:
          return props.item.name_nl;
      }
    });
    const itemSubName = computed(() => {
      switch (locale.value) {
        case "en":
          return props.item.subname_en;
        case "aw":
          return props.item.subname_aw;
        case "es":
          return props.item.subname_es;
        default:
          return props.item.subname_nl;
      }
    });
    const wasteItemsContent = require("../../data/wasteitemscontent.json");
    const itemContent = computed(() => {
      return wasteItemsContent.filter((i) => i.itemId === props.item.id);
    });
    const carouselSlide = ref(itemContent.value[0].id);

    const getContentText = (content) => {
      switch (locale.value) {
        case "en":
          return content.text_en;
        case "aw":
          return content.text_aw;
        case "es":
          return content.text_es;
        default:
          return content.text_nl;
      }
    };

    return {
      changeCount,
      getImgUrl,
      getAltImgUrl,
      locale,
      itemName,
      itemSubName,
      dialogVisible,
      openDialog,
      carouselSlide,
      itemContent,
      getContentText,
    };
  },
};
</script>

<style scoped></style>
