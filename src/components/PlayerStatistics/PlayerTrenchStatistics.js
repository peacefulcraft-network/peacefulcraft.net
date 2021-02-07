import m from 'mithril';

import AbilityMap from '@/copy/statistics/TrenchClassAbilityMap.json';
import SelectField from '@/components/inputs/SelectField.js';

import '@/css/components/PlayerStatistics/PlayerTrenchStatistics.css';

export default class PlayerTrenchStatistics {
	oninit(vnode) {
		vnode.state.classStatDisplay = 'Scout';
	}

	view(vnode) {
		return m('div.player-stats-profile',
			[
				// Bust of the player
				m('div.profile_header_left',
					m('img.PlayerSearchResultsHead', {
						src: `https://minotar.net/bust/${vnode.attrs.uuid}/240.png`,
					})
				),

				// Big stats on the right
				m('div.profile_header_right',
					[
						m('span.profile_header_stat_wrapper',
							[ 
								m('i.fas fa-bullseye', {style:'color:red;' }),
								m('font', ' ' + vnode.attrs.player_kills),
								m('font.profile_header_stat_label', ' Kills')
							]
						),
						m('span.profile_header_stat_wrapper',
							[ 
								m('i.fas fa-skull', { style:'color:#CCC;' }),
								m('font', ' ' + vnode.attrs.player_deaths),
								m('font.profile_header_stat_label', ' Deaths')
							]
						),
						m('span.profile_header_stat_wrapper',
							[ 
								m('i.fas fa-heart-broken', { style:'color:orange;' }),
								m('font', ' ' + vnode.attrs.player_damage),
								m('font.profile_header_stat_label', ' Damage')
							]
						)
					]
				),

				m('div.class_stats', [
					// Navigation area to choose which class info user wants
					m(SelectField, {
						opts: Object.keys(AbilityMap),
						value: vnode.state.classStatDisplay,
						onchange: (e) => { vnode.state.classStatDisplay = e.target.value; }
					}),

					// Statistics Display Area
					m('div',
						AbilityMap[vnode.state.classStatDisplay].map( (pair) =>{
							let value = (vnode.attrs[pair.key] === undefined)? '-' : vnode.attrs[pair.key];
							return m('div.class-stat-entry', [
								m('i', {class: pair.fai, style:'color: #CCC; width: 24px;'}),
								m('font.class_stat_entry_value', ' ' + value),
								m('font',{}, ' ' + pair.display),
							]);
						})
					)
				])
			]
		);
	}
}