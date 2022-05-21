const populateImageList = (json) => {
  const ImageList = json.map((item) => {
    const icon = document.createElement("div");
    icon.setAttribute("data-src", item.image_src);
    icon.className = "image-holder";
    icon.innerHTML = `
    <span>${item.title}</span>
    `;
    return icon;
  });
  return ImageList;
};

export default populateImageList;
