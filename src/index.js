import m from 'mithril';

import DefaultLayout from '@/layouts/DefaultLayout';

import '@/css/main.css';

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

	'/about': {
		onmatch: () => new Promise((resolve) => {
			import(/* webpackChunkName: "AboutUsPage" */ '@/pages/AboutUs')
				.then(({default: AboutUsPage}) => {
					resolve({
						view: () => m(AboutUsPage)
					});
					onRouteChange();
				});
		}),
		render: (vnode) => {
			return m(DefaultLayout, vnode);
		},
	},

	'/staff': {
		onmatch: () => new Promise((resolve) => {
			import(/* webpackChunkName: "StaffPage" */ '@/pages/Staff')
				.then(({default: StaffPage}) => {
					resolve({
						view: () => m(StaffPage)
					});
					onRouteChange();
				});
		}),
		render: (vnode) => {
			return m(DefaultLayout, vnode);
		},
	},

	'/gamemode/survival': {
		onmatch: () => Promise.all([
			import(/* webpackChunkName: "ServerPage" */ '@/pages/ServerPage'),
			import(/* webpackChunkName: "SurvivalPageCopy" */ '@/copy/gamemodes/Survival')
		]).then((values) => {
			return {
				view: () => m(values[0].default, { copy: values[1].default})
			};
		}),
		render: (vnode) => {
			return m(DefaultLayout, vnode);
		},
	},

	'/gamemode/peaceful': {
		onmatch: () => Promise.all([
			import(/* webpackChunkName: "ServerPage" */ '@/pages/ServerPage'),
			import(/* webpackChunkName: "PeacefulPageCopy" */ '@/copy/gamemodes/Peaceful')
		]).then((values) => {
			return {
				view: () => m(values[0].default, { copy: values[1].default})
			};
		}),
		render: (vnode) => {
			return m(DefaultLayout, vnode);
		},
	},

	'/gamemode/creative': {
		onmatch: () => Promise.all([
			import(/* webpackChunkName: "ServerPage" */ '@/pages/ServerPage'),
			import(/* webpackChunkName: "CreativePageCopy" */ '@/copy/gamemodes/Creative')
		]).then((values) => {
			return {
				view: () => m(values[0].default, { copy: values[1].default})
			};
		}),
		render: (vnode) => {
			return m(DefaultLayout, vnode);
		},
	},

	'/gamemode/trenchpvp': {
		onmatch: () => Promise.all([
			import(/* webpackChunkName: "ServerPage" */ '@/pages/ServerPage'),
			import(/* webpackChunkName: "TrenchPageCopy" */ '@/copy/gamemodes/Trench')
		]).then((values) => {
			return {
				view: () => m(values[0].default, { copy: values[1].default})
			};
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
		onmatch: () => Promise.all([
			import(/* webpackChunkName: "ServerPage" */ '@/pages/ServerPage'),
			import(/* webpackChunkName: "MinigamesPageCopy" */ '@/copy/gamemodes/Minigames')
		]).then((values) => {
			return {
				view: () => m(values[0].default, { copy: values[1].default})
			};
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