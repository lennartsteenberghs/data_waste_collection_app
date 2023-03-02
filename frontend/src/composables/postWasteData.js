import { ref } from "vue";

const postWasteData = () => {

    const error = ref(null);
    // const postSuccessful = ref(false)

    const post = async (list, binId, router) => {
        const body = turnIntoJSON(list)
        const url = "https://jsonplaceholder.typicode.com/posts"
        const url2 = "http://localhost:5000/waste/" + binId
        console.log("posting data to: ",url2)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: body
        };

        try {
            let response = await fetch(url2, requestOptions);
            if (!response.ok) {
                throw Error("post failed");
            }
            // give permission to go to thankyou page
            router.push({ name: 'thankyou' })


            // postSuccessful.value = true
            console.log("post succesful")
            console.log(body)
        } catch (err) {
            error.value = err.message;
            console.log(error.value);
        }
    }

    const turnIntoJSON = (list) => {
        const newList = []
        for (let i = 0; i < list.length; i++) {
            console.log(list[i].id)
            const item = { 'plastic_type': list[i].id, 'amount': list[i].count }
            newList.push(item)
        }
        const jsonOutput = JSON.stringify(newList)
        return jsonOutput
    }

    return { error, post }
}
export default postWasteData
