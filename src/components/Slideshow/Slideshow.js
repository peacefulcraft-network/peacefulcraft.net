import m from 'mithril';

import SlideshowState from '@/components/Slideshow/SlideshowState';

import '@/css/components/Slideshow.css';

export default {
  oninit: (vnode) => {
    vnode.state.slideShowstate = new SlideshowState(1000);

    vnode.cycleSlideshowTask = setInterval(() => {
      vnode.state.slideShowstate.cycle();
    }, vnode.attrs.slideDelay);
  },

  view: (vnode) => {
    let first = 0;
    const images = Object.keys(vnode.attrs.images).map((k) => {
      return vnode.state.slideShowstate.add(
        m('div.slideshow_slide', {
          class: (first++ > 0)? 'enter' : 'active',
        }, [
          m('img.slideshow_slide_image', { src: vnode.attrs.images[k] }),
          m('div.slideshow_slide_title', k),
        ])
      );
    });
    return m('div.slideshow', images);
  },

  onremove: (vnode) => {
    clearInterval(vnode.cycleSlideshowTask);
  },
};