import m from 'mithril';

import DefaultLayout from '@/layouts/DefaultLayout';

import '@/css/main.css';

import SurvivalCopy from '@/copy/gamemodes/Survival';

m.route.prefix = '#!';
m.route(document.body, '/', {
  '/': {
    onmatch: () => new Promise((resolve) => {
      import(/* webpackChunkName: "LandingPage" */ '@/pages/LandingPage')
        .then(({ default: LandingPage}) => {
          resolve({view: () => m(DefaultLayout, m(LandingPage)) });
        });
    }),
  },

  '/gamemode/survival': {
    onmatch: () => new Promise((resolve) => {
      import(/* webpackChunkName: "SurvivalServerPage" */ '@/pages/ServerPage')
        .then(({default: SurvivalPage}) => {
          resolve({view: () => m(DefaultLayout, m(SurvivalPage, { copy: SurvivalCopy})) });
        });
    }),
  },
});