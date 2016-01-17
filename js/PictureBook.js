function PictureBook() {
    this.picLinks = [];

    this.grabRandomPic = function () {
        return this.picLinks[Math.floor((Math.random() * this.picLinks.length))];
    }
}
