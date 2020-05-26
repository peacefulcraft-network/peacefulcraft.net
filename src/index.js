import m from 'mithril';

import DefaultLayout from '@/layouts/DefaultLayout';

import '@/css/main.css';

import CreativeCopy from '@/copy/gamemodes/Creative';
import SurvivalCopy from '@/copy/gamemodes/Survival';
import PeacefulCopy from './copy/gamemodes/Peaceful';
import TrenchCopy from './copy/gamemodes/Trench';
import MinigamesCopy from '@/copy/gamemodes/Minigames';

m.route.prefix = '#!';

function onRouteChange() {
  window.scrollTo(0, 0);
}

m.route(document.body, '/', {
  '/': {
    onmatch: () => new Promise((resolve) => {
      import(/* webpackChunkName: "LandingPage" */ '@/pages/LandingPage')
        .then(({ default: LandingPage}) => {
          resolve({view: () => m(DefaultLayout, m(LandingPage)) });
          onRouteChange();
        });
    }),
  },

  '/gamemode/survival': {
    onmatch: () => new Promise((resolve) => {
      import(/* webpackChunkName: "ServerPage" */ '@/pages/ServerPage')
        .then(({default: ServerPage}) => {
          resolve({view: () => m(DefaultLayout, m(ServerPage, { copy: SurvivalCopy})) });
          onRouteChange();
        });
    }),
  },

  '/gamemode/peaceful': {
    onmatch: () => new Promise((resolve) => {
      import(/* webpackChunkName: "ServerPage" */ '@/pages/ServerPage')
        .then(({default: ServerPage}) => {
          resolve({view: () => m(DefaultLayout, m(ServerPage, { copy: PeacefulCopy})) });
          onRouteChange();
        });
    }),
  },

  '/gamemode/creative': {
    onmatch: () => new Promise((resolve) => {
      import(/* webpackChunkName: "ServerPage" */ '@/pages/ServerPage')
        .then(({default: ServerPage}) => {
          resolve({view: () => m(DefaultLayout, m(ServerPage, { copy: CreativeCopy})) });
          onRouteChange();
        });
    }),
  },

  '/gamemode/trenchpvp': {
    onmatch: () => new Promise((resolve) => {
      import(/* webpackChunkName: "ServerPage" */ '@/pages/ServerPage')
        .then(({default: ServerPage}) => {
          resolve({view: () => m(DefaultLayout, m(ServerPage, { copy: TrenchCopy})) });
          onRouteChange();
        });
    }),
  },

  '/gamemode/sco': {
    onmatch: () => new Promise((resolve) => {
      import(/* webpackChunkName: "SwordCraftOnlineLandingPage" */ '@/pages/SwordCraftOnlineLandingPage')
        .then(({default: SwordCraftOnlineLandingPage}) => {
          resolve({view: () => m(SwordCraftOnlineLandingPage, '') });
          onRouteChange();
        });
    }),
  },

  '/gamemode/minigames': {
    onmatch: () => new Promise((resolve) => {
      import(/* webpackChunkName: "ServerPage" */ '@/pages/ServerPage')
        .then(({default: ServerPage}) => {
          resolve({view: () => m(DefaultLayout, m(ServerPage, { copy: MinigamesCopy})) });
          onRouteChange();
        });
    }),
  },

  '/voting-links': {
    onmatch: () => new Promise((resolve) => {
      import(/* webpackChunkName: "VotingLinksPage" */ '@/pages/VotingLinksPage')
        .then(({default: VotingLinksPage}) => {
          resolve({view: () => m(DefaultLayout, m(VotingLinksPage)) });
          onRouteChange();
        });
    }),
  },
});