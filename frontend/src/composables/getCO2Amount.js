import { ref } from "vue";
const getCO2Amount = () => {

  // const messages = ref([]);
  const co2Amount = ref(0);
  const getCO2AmountError = ref(null);

  const loadCO2Amount = async (binId) => {
    const url = process.env.API_CO2_AMOUNT + binId
    try {
      let data = await fetch(url);
      if (!data.ok) {
        throw Error("no data available");
      }
      co2Amount.value = await data.json();
      co2Amount.value = co2Amount.value.CO2_safed
      console.log(co2Amount.value)
    } catch (err) {
      co2Amount.value = 0;
      getCO2AmountError.value = err.message;
      console.log(getCO2AmountError.value);
    }
  }

  return { co2Amount, getCO2AmountError, loadCO2Amount }

}

export default getCO2Amount
