import { ref } from "vue";
import axios from 'axios';

const postWasteData = () => {

  const postDataError = ref(null);

  const post = async (list, binId, photo) => {
    console.log('in post method: ', photo);

    let hasPhoto = 0;
    if(photo){
      hasPhoto = 1;
    }
    // console.log(list);
    // console.log(list[0]);


    const url = process.env.API_POST_URL + binId + '/' + hasPhoto;
    console.log('posting data...');

    const formData = new FormData();
    formData.append("image", photo)
    formData.append("list", JSON.stringify(list))

    // console.log(formData.get('list'));
    // console.log(JSON.parse(formData.get('list'))[0]);
    // console.log(JSON.parse(formData.get('list'))[1]);
    // console.log(JSON.parse(formData.get('list'))[2]);
    // console.log(JSON.parse(formData.get('list'))[3]);


    try {
      let response = await axios.post(url, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
      if (response.status !== 200) {
        throw Error('post failed');
      }
      console.log('post succesful');
    } catch (err) {
      postDataError.value = err.message;
      console.log(postDataError.value);
    }
  };

  const turnIntoJSON = (list) => {
    const newList = []
    for (let i = 0; i < list.length; i++) {
      const item = { 'plastic_type': list[i].id, 'amount': list[i].count }
      newList.push(item)
    }
    const jsonOutput = JSON.stringify(newList)
    return jsonOutput
  }

  return { postDataError: postDataError, post }
}
export default postWasteData
