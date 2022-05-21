import populateImageList from "./image-list.js";
import ImageViewer from "./image-viewer.js";

function addAllEventListeners(image_viewer) {
  let ImageList = Array.from(document.getElementsByClassName("image-holder"));
  for (let i = 0; i < ImageList.length; i++) {
    let item = ImageList[i];
    item.addEventListener("click", function () {
      image_viewer.setImage(i);
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
      image_viewer.prevImage();
    }
    if (e.key === "ArrowDown") {
      image_viewer.nextImage();
    }
  });
}

var image_viewer = null;
var image_json = [];
fetch("/src/data/content.json")
  .then(async (res) => {
    var image_json = await res.json();
    let ImageList = populateImageList(image_json);

    image_viewer = new ImageViewer(image_json, ImageList, "display_image");
    image_viewer.updateState(0);

    ImageList.forEach((item) => {
      document.getElementById("image-list").appendChild(item);
    });

    addAllEventListeners(image_viewer);
  })
  .catch((e) => console.log(e));
