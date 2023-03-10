import { ref } from "vue";
const getCO2Amount = () => {

  // const messages = ref([]);
  const co2Amount = ref(0);
  const getCO2AmountError = ref(null);


  const loadCO2Amount1 = () => {
    co2Amount.value = 423;
  }

  const loadCO2Amount = async (binId) => {
    const url = "https://data-waste-collection-app-backend.onrender.com/co2safed/" + binId
    try {
      let data = await fetch(url);
      if (!data.ok) {
        throw Error("no data available");
      }
      co2Amount.value = await data.json();
      co2Amount.value = co2Amount.value.CO2_safed

    } catch (err) {
      co2Amount.value = 0;
      getCO2AmountError.value = err.message;
      console.log(getCO2AmountError.value);
    }
  }

  return { co2Amount, getCO2AmountError, loadCO2Amount }

}

export default getCO2Amount
