class ImageViewer {
  constructor(imagelist, imageholders, viewerID, titleID) {
    this.imagelist = imagelist;
    this.imageholders = imageholders;
    this.viewerID = viewerID;
    this.titleID = titleID;
    this.currIdx = 0;
    this.active = document.createAttribute("active");
  }
  prevImage() {
    let newIdx = this.currIdx;
    newIdx--;
    if (newIdx < 0) {
      newIdx = this.imagelist.length - 1;
    }
    this.setImage(newIdx);
  }
  nextImage() {
    let newIdx = this.currIdx;
    newIdx++;
    if (newIdx >= this.imagelist.length) {
      newIdx = 0;
    }
    this.setImage(newIdx);
  }
  setImage(idx) {
    if (idx >= this.imagelist.length) {
      console.log("invalid image index");
      return;
    }
    let prevIdx = this.currIdx;
    this.currIdx = idx;
    this.updateState(prevIdx);
  }
  updateState(prevIdx) {
    let idx = this.currIdx;
    if (
      prevIdx >= 0 &&
      prevIdx < this.imagelist.length &&
      this.imageholders[prevIdx].hasAttribute("active")
    )
      this.imageholders[prevIdx].removeAttributeNode(this.active);
    this.imageholders[idx].setAttributeNode(this.active);

    document
      .getElementById(this.viewerID)
      .setAttribute("src", this.imagelist[idx].image_src);

    document.getElementById(this.titleID).value = this.imagelist[idx].title;
  }
  updateTitle(newTitle) {
    this.imagelist[this.currIdx].title = newTitle;
    document.getElementById("image-title-" + String(this.currIdx)).innerText =
      newTitle;
  }
}

export default ImageViewer;
