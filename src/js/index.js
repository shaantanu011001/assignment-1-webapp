import populateImageList from "./image-list.js";

var json = [];
fetch("/src/data/content.json")
  .then(async (res) => {
    json = await res.json();
    const ImageList = populateImageList(json);
    ImageList.forEach((item) => {
      document.getElementById("image-list").appendChild(item);
    });
  })
  .catch((e) => console.log(e));
