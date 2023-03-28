<template>
  <span>{{ displayNumber }}</span>
</template>

<script>
export default {
  props: {
    number: {
      default: 0,
    },
  },
  data() {
    return {
      displayNumber: 0,
      interval: false,
    };
  },
  mounted() {
    this.displayNumber = this.number ? this.number : 0;
  },
  watch: {
    number() {
      clearInterval(this.interval);
      if (this.number == this.displayNumber) {
        return;
      }
      this.interval = window.setInterval(() => {
        if (this.displayNumber != this.number) {
          var change = (this.number - this.displayNumber) / 10;
          change = change >= 0 ? Math.ceil(change) : Math.floor(change);
          this.displayNumber = this.displayNumber + change;
        }
      }, 20);
    },
  },
};
</script>
In this modified code, the Vue.component method has been removed, and the component is
defined using the export default syntax. The template property has been replaced with a
template block in the Vue file,
