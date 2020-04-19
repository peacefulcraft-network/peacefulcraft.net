import m from 'mithril';

import DefaultLayout from '@/layouts/DefaultLayout';

import '@/css/main.css';
m.route.prefix = '';
m.route(document.body, '/', {
  '/': {
    onmatch: () => new Promise((resolve) => {
      import(/* webpackChunkName: "LandingPage" */ '@/pages/LandingPage')
        .then(({ default: LandingPage}) => {
          resolve({view: () => m(DefaultLayout, m(LandingPage)) });
        });
    }),
  },
    }),
  },
});