import m from 'mithril';

import LandingPage from '@/pages/LandingPage';

import '@/css/main.css';

m.route(document.body, '/', {
  '/': {
    render: () => m(LandingPage)
  },
});