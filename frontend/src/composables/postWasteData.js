import { ref } from "vue";

const postWasteData = () => {

    const postDataError = ref(null);

    const post = async (list, binId) => {
        const hasPhoto = 0;
        const body = turnIntoJSON(list)
        const url = process.env.API_POST_URL + binId + '/' + hasPhoto
        console.log("posting data...")

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
            console.log("post succesful")
        } catch (err) {
            postDataError.value = err.message;
            console.log(postDataError.value);
        }
    }

    const turnIntoJSON = (list) => {
        const newList = []
        for (let i = 0; i < list.length; i++) {
            const item = { 'plastic_type': list[i].id, 'amount': list[i].count}
            newList.push(item)
        }
        const jsonOutput = JSON.stringify(newList)
        return jsonOutput
    }

    return { postDataError: postDataError, post }
}
export default postWasteData
