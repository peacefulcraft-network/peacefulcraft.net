import m from 'mithril';
import stream from 'mithril/stream';

import BlueLink from '@/components/BlueLinkElement.js';
import PlayerStatisticsService from '@/services/PlayerStatisticsService.js';
import PlayerTrenchStatistic from '@/components/PlayerStatistics/PlayerTrenchStatistics.js';
import SearchResults from '@/components/PlayerStatistics/SearchResults.js';
import TextField from '@/components/inputs/TextField.js';

import '@/css/pages/PlayerStatistics.css';

export default class PlayerStatistics {
	oninit(vnode) {
		if (m.route.param('param') === undefined || m.route.param('param').length != 32) {
			vnode.state.searchParams = new stream(
				(m.route.param('param') === undefined)? '' : m.route.param('param')
			);
			vnode.state.searchParams.map(() => {
				PlayerStatisticsService.search(vnode.state.searchParams());
			});
		} else {
			PlayerStatisticsService.fetchProfile(m.route.param('param'));
		}
	}
	
	view(vnode) {
		if (m.route.param('param') === undefined || m.route.param('param').length != 32) {
			return m('div#player-statistics-page', [
				m('div.search-bar-wrapper', [
					m(TextField, {
						label: 'Player Name',
						value: vnode.state.searchParams,
					})
				]),
	
				m('div.search-results-wrapper', m(SearchResults, { searchResults: PlayerStatisticsService.searchResults }))
			]);
		} else {
			return m('div#player-statistics-page',
				m('div.player-stats-profile-wrapper', [
					m('div.player-stats-back-btn',
						m(BlueLink, { href: `/player-statistics/${PlayerStatisticsService.searchResultParams}` }, '< Back to Search Results'),
					),
					m(PlayerTrenchStatistic, {
						...PlayerStatisticsService.profileResults
					})
				])
			);
		}
	}
}