<template>
  <div class="hello">
    <div class="row items-center">
      <div class="col">
        <div class="btn-wrapper">
          <button class="round-button" @click="decrement">-</button>
        </div>
      </div>
      <div class="col">
        <h6>{{ count }}</h6>
      </div>
      <div class="col">
        <div class="btn-wrapper">
          <button class="round-button" @click="increment">+</button>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "hello",
  setup(props, { emit }) {
    const count = ref(0);

    const decrement = () => {
      if (count.value) {
        count.value -= 1;
        emit("countChange", count.value);
      }
    };
    const increment = () => {
      count.value += 1;
      emit("countChange", count.value);
    };
    return { count, decrement, increment };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0;
}

a {
  color: #42b983;
}

.btn-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}

.btn {
  width: 25px;
  height: 10px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 15px;
  color: white;
  font-size: 10px;
}

.btn:hover {
  cursor: pointer;
}

.round-button {
  background-color: white;
  color: black;
  border-radius: 50%;
  padding: 10px 20px;
  border: none;
  box-shadow: 0 0 0 2px black inset;
}

.round-button:hover {
  background-color: #f2f2f2;
  cursor: pointer;
}
</style>
