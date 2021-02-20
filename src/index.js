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
					resolve(AboutUsPage);
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
					resolve(StaffPage);
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
				view: () => { m('', ''); },
				server_page: values[0].default,
				copy: values[1].default
			};
		}),
		render: (fnode) => {
			return m(DefaultLayout, m(fnode.tag.server_page, { copy: fnode.tag.copy }));
		},
	},

	'/gamemode/peaceful': {
		onmatch: () => Promise.all([
			import(/* webpackChunkName: "ServerPage" */ '@/pages/ServerPage'),
			import(/* webpackChunkName: "PeacefulPageCopy" */ '@/copy/gamemodes/Peaceful')
		]).then((values) => {
			return {
				view: () => { m('', ''); },
				server_page: values[0].default,
				copy: values[1].default
			};
		}),
		render: (fnode) => {
			return m(DefaultLayout, m(fnode.tag.server_page, { copy: fnode.tag.copy }));
		},
	},

	'/gamemode/creative': {
		onmatch: () => Promise.all([
			import(/* webpackChunkName: "ServerPage" */ '@/pages/ServerPage'),
			import(/* webpackChunkName: "CreativePageCopy" */ '@/copy/gamemodes/Creative')
		]).then((values) => {
			return {
				view: () => { m('', ''); },
				server_page: values[0].default,
				copy: values[1].default
			};
		}),
		render: (fnode) => {
			return m(DefaultLayout, m(fnode.tag.server_page, { copy: fnode.tag.copy }));
		},
	},

	'/gamemode/trenchpvp': {
		onmatch: () => Promise.all([
			import(/* webpackChunkName: "ServerPage" */ '@/pages/ServerPage'),
			import(/* webpackChunkName: "TrenchPageCopy" */ '@/copy/gamemodes/Trench')
		]).then((values) => {
			return {
				view: () => { m('', ''); },
				server_page: values[0].default,
				copy: values[1].default
			};
		}),
		render: (fnode) => {
			return m(DefaultLayout, m(fnode.tag.server_page, { copy: fnode.tag.copy }));
		},
	},

	'/gamemode/sco': {
		onmatch: () => new Promise((resolve) => {
			import(/* webpackChunkName: "SwordCraftOnlineLandingPage" */ '@/pages/SwordCraftOnlineLandingPage')
				.then(({default: SwordCraftOnlineLandingPage}) => {
					resolve(SwordCraftOnlineLandingPage);
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
				view: () => { m('', ''); },
				server_page: values[0].default,
				copy: values[1].default
			};
		}),
		render: (fnode) => {
			return m(DefaultLayout, m(fnode.tag.server_page, { copy: fnode.tag.copy }));
		},
	},

	'/voting-links': {
		onmatch: () => new Promise((resolve) => {
			import(/* webpackChunkName: "VotingLinksPage" */ '@/pages/VotingLinksPage')
				.then(({default: VotingLinksPage}) => {
					resolve(VotingLinksPage);
					onRouteChange();
				});
		}),
		render: (vnode) => {
			return m(DefaultLayout, vnode);
		},
	},

	'/player-statistics/': {
		onmatch: () => new Promise((resolve) => {
			import(/* webpackChunkName: "PlayerStatisticsPage" */ '@/pages/PlayerStatistics.js')
				.then(({default: PlayerStatistics}) => {
					resolve(PlayerStatistics);
					onRouteChange();
				});
		}),
		render: (vnode) => {
			return m(DefaultLayout, vnode);
		},
	},

	'/player-statistics/:param': {
		onmatch: () => new Promise((resolve) => {
			import(/* webpackChunkName: "PlayerStatisticsPage" */ '@/pages/PlayerStatistics.js')
				.then(({default: PlayerStatistics}) => {
					resolve(PlayerStatistics);
					onRouteChange();
				});
		}),
		render: (vnode) => {
			return m(DefaultLayout, vnode);
		},
	},
});