import m from 'mithril';

import '@/css/main.css';

m.route(document.body, '/', {
  '/': {
    onmatch: () => new Promise((resolve) => {
      import(/* webpackChunkName: "LandingPage" */ '@/pages/LandingPage').then(({ default: LandingPage}) => {
        resolve(LandingPage);
      });
    }),
  },
});