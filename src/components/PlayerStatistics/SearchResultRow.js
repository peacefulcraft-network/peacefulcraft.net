import m from 'mithril';

import '@/css/components/PlayerStatistics/SearchResultRow.css';

export default class SearchResultRow {
	view(vnode) {
		return m('div.player-search-result-row',
			m('img.head', {
				src: `https://minotar.net/avatar/${vnode.attrs.uuid}/60.png`
			}),
			m('div.stats-wrapper',
				m('div.player-meta ',
					m('span.player-name', vnode.attrs.username),
					m('span.vnode.player-favorite-class', vnode.attrs.favorite_class)
				),
				m('div.vnode.kill-stats',
					m('font.stat-label','Kills: ',
						m('font.stat-value', vnode.attrs.kills)
					),
					m('font.stat-label','Deaths: ',
						m('font.stat-value', vnode.attrs.deaths)
					),
					m('font.stat-label','Ratio: ', 
						m('font.stat-value',
							(vnode.attrs.kills / vnode.attrs.deaths).toFixed(2)
						)
					)
				)
			)
		);
	}
}
