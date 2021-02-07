import m from 'mithril';

import SearchResultRow from '@/components/PlayerStatistics/SearchResultRow.js';

export default class SearchResults {
	view(vnode) {
		return m('div.player-stistics-search-results', 
			vnode.attrs.searchResults.map((result) =>
				m(m.route.Link, {
					href: `/player-statistics/${result.uuid}`
				},
				m(SearchResultRow, {
					uuid: result.uuid,
					username: result.username,
					favorite_class: '',
					kills: result.player_kills,
					deaths: result.player_deaths,
				})
				))
		);
	}
}