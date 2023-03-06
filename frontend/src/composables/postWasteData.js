import { ref } from "vue";

const postWasteData = () => {

    const error = ref(null);

    const post = async (list, binId, router) => {
        const body = turnIntoJSON(list)
        const url = "https://data-waste-collection-app-backend.onrender.com/waste/" + binId
        console.log("posting data to: ",url)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: body
        };

        try {
            let response = await fetch(url, requestOptions);
            if (!response.ok) {
                throw Error("post failed");
            }
            // // give permission to go to thankyou page
            // router.push({ name: 'thankyou' })

            console.log("post succesful")
        } catch (err) {
            error.value = err.message;
            console.log(error.value);
        }
    }

    const turnIntoJSON = (list) => {
        const newList = []
        for (let i = 0; i < list.length; i++) {
            console.log(list[i])
            console.log(list[i].recycled)
            const item = { 'plastic_type': list[i].id, 'amount': list[i].count, 'recycled': list[i].recycled }
            newList.push(item)
        }
        const jsonOutput = JSON.stringify(newList)
        return jsonOutput
    }

    return { error, post }
}
export default postWasteData
