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
          resolve(LandingPage);
          onRouteChange();
        });
    }),
    render: (vnode) => {
      return m(DefaultLayout, vnode);
    },
  },

  '/gamemode/survival': {
    onmatch: () => new Promise((resolve) => {
      import(/* webpackChunkName: "ServerPage" */ '@/pages/ServerPage')
        .then(({default: ServerPage}) => {
          resolve({
            view: () => m(ServerPage, { copy: SurvivalCopy })
          });
          onRouteChange();
        });
    }),
    render: (vnode) => {
      return m(DefaultLayout, vnode);
    },
  },

  '/gamemode/peaceful': {
    onmatch: () => new Promise((resolve) => {
      import(/* webpackChunkName: "ServerPage" */ '@/pages/ServerPage')
        .then(({default: ServerPage}) => {
          resolve({
            view: () => m(ServerPage, { copy: PeacefulCopy})
          });
          onRouteChange();
        });
    }),
    render: (vnode) => {
      return m(DefaultLayout, vnode);
    },
  },

  '/gamemode/creative': {
    onmatch: () => new Promise((resolve) => {
      import(/* webpackChunkName: "ServerPage" */ '@/pages/ServerPage')
        .then(({default: ServerPage}) => {
          resolve({
            view: () => m(ServerPage, { copy: CreativeCopy})
          });
          onRouteChange();
        });
    }),
    render: (vnode) => {
      return m(DefaultLayout, vnode);
    },
  },

  '/gamemode/trenchpvp': {
    onmatch: () => new Promise((resolve) => {
      import(/* webpackChunkName: "ServerPage" */ '@/pages/ServerPage')
        .then(({default: ServerPage}) => {
          resolve({
            view: () => m(ServerPage, { copy: TrenchCopy})
          });
          onRouteChange();
        });
    }),
    render: (vnode) => {
      return m(DefaultLayout, vnode);
    },
  },

  '/gamemode/sco': {
    onmatch: () => new Promise((resolve) => {
      import(/* webpackChunkName: "SwordCraftOnlineLandingPage" */ '@/pages/SwordCraftOnlineLandingPage')
        .then(({default: SwordCraftOnlineLandingPage}) => {
          resolve({
            view: () => m(SwordCraftOnlineLandingPage, '')
          });
          onRouteChange();
        });
    }),
  },

  '/gamemode/minigames': {
    onmatch: () => new Promise((resolve) => {
      import(/* webpackChunkName: "ServerPage" */ '@/pages/ServerPage')
        .then(({default: ServerPage}) => {
          resolve({
            view: () => m(ServerPage, { copy: MinigamesCopy})
          });
          onRouteChange();
        });
    }),
    render: (vnode) => {
      return m(DefaultLayout, vnode);
    },
  },

  '/voting-links': {
    onmatch: () => new Promise((resolve) => {
      import(/* webpackChunkName: "VotingLinksPage" */ '@/pages/VotingLinksPage')
        .then(({default: VotingLinksPage}) => {
          resolve({
            view: () => m(VotingLinksPage)
          });
          onRouteChange();
        });
    }),
    render: (vnode) => {
      return m(DefaultLayout, vnode);
    },
  },
});