const populateImageList = (json) => {
  const ImageList = json.map((item, idx) => {
    const icon = document.createElement("div");
    icon.setAttribute("data-src", item.image_src);
    icon.className = "image-holder";

    let fullTitle = item.title;
    let splitIndex = Math.round(fullTitle.length * 0.75);
    let leftTitle = fullTitle.slice(0, splitIndex);
    let rightTitle = fullTitle.slice(splitIndex);

    icon.innerHTML = `
    <img class="image-icon" src="${item.image_src}"/>
    <div class="image-title-left" id="image-title-left-${idx}">${leftTitle}</div>
    <div class="image-title-right" id="image-title-right-${idx}">${rightTitle}</div>
    `;
    return icon;
  });
  return ImageList;
};

export default populateImageList;
