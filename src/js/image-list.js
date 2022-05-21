const populateImageList = (json) => {
  const ImageList = json.map((item) => {
    const icon = document.createElement("div");
    icon.className = "image-holder test_item";
    icon.innerHTML = `
    <span>${item.title}</span>
    `;
    return icon;
  });
  return ImageList;
  r;
};

export default populateImageList;
