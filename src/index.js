import m from 'mithril';

import DefaultLayout from '@/layouts/DefaultLayout';

import '@/css/main.css';

import CreativeCopy from '@/copy/gamemodes/Creative';
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
      import(/* webpackChunkName: "ServerPage" */ '@/pages/ServerPage')
        .then(({default: ServerPage}) => {
          resolve({view: () => m(DefaultLayout, m(ServerPage, { copy: SurvivalCopy})) });
        });
    }),
  },

  '/gamemode/creative': {
    onmatch: () => new Promise((resolve) => {
      import(/* webpackChunkName: "ServerPage" */ '@/pages/ServerPage')
        .then(({default: ServerPage}) => {
          resolve({view: () => m(DefaultLayout, m(ServerPage, { copy: CreativeCopy})) });
        });
    }),
  },
});