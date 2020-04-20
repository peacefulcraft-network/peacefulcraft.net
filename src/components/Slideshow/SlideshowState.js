export default class {
  constructor(transitionTime) {
    this.transitionTime = transitionTime;
    this.imageIndex = 0;
    this.images = [];
  }

  add(image) {
    this.images.push(image);
    return image;
  }

  cycle() {
    // Animate current image to the left
    const oldCurrent = this.images[this.imageIndex];
    oldCurrent.dom.classList.remove('active');
    oldCurrent.dom.classList.add('leaving');

    /* eslint-disable indent */
      setTimeout(() => {
        // After animations, remove transition properties and send the old image back to start
        oldCurrent.dom.classList.remove('leaving');
        oldCurrent.dom.classList.add('enter');
      }, this.transitionTime);
    /* eslint-enable indent */

    // Incriment current image
    if(++this.imageIndex >= this.images.length) {
      this.imageIndex = 0;
    }

    // Animate the incoming image
    const newCurrent = this.images[this.imageIndex];
    newCurrent.dom.classList.remove('enter');
    newCurrent.dom.classList.add('entering');

    /* eslint-disable indent */
      setTimeout(() => {
        // After animations, remove transition properties and hold the new current in place
        newCurrent.dom.classList.remove('entering');
        newCurrent.dom.classList.add('active');
      }, this.transitionTime);
    /* eslint-enable indent */
  }
}