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
      .setAttribute("src", this.imagelist[idx].previewImage);

    document.getElementById(this.titleID).value = this.imagelist[idx].title;
  }
  updateTitle(newTitle) {
    this.imagelist[this.currIdx].title = newTitle;
    let fullTitle = newTitle;
    let splitIndex = Math.round(fullTitle.length * 0.75);
    let leftTitle = fullTitle.slice(0, splitIndex);
    let rightTitle = fullTitle.slice(splitIndex);
    document.getElementById(
      "image-title-left-" + String(this.currIdx)
    ).innerText = leftTitle;
    document.getElementById(
      "image-title-right-" + String(this.currIdx)
    ).innerText = rightTitle;
  }
}

export default ImageViewer;
