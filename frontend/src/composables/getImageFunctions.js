const getImageFunctions = () => {

  const getImgUrl = (imageName) => {
    let imgUrl = require("../assets/app-icon.png");
    try {
      imgUrl = require("../assets/itemimages/" + imageName);
    } catch (e) {
      console.log("image could not be found for item with id =", props.item.id);
      imgUrl = require("../assets/app-icon.png");
    }
    return imgUrl;
  };

  const getAltImgUrl = () => {
    return require("../assets/app-icon.png");
  };

  return { getImgUrl, getAltImgUrl }

}

export default getImageFunctions
