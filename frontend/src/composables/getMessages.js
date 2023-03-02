import { ref } from "vue";
import thankYouMessages from "../../data/example_thank_you_messages";

const getMessages = () => {

    // const messages = ref([]);
    const message = ref('');
    const error = ref(null);

    
    const load1 = () => {
        let messages = thankYouMessages
        message.value = messages[0].message;
    }

    const load = async () => {
        const url = "http://localhost:5000/waste/"
        try {
            let data = await fetch(url);
            if (!data.ok) {
                throw Error("no data available");
            }
            message.value = await data.json();
        } catch (err) {
            message.value = thankYouMessages[0].message;
            error.value = err.message;
            console.log(error.value);
        }
    }

    return { message, error, load }

}

export default getMessages