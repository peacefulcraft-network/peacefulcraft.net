import m from 'mithril';

import GridImageModal from '@/components/GridImageModal/GridImageModal';

// Style imports
import '@/css/pages/LandingPage.css';

// Asset Imports
import PvE from '@/assets/images/LandingPage/PvESpawn.png';
import Northridge from '@/assets/images/LandingPage/Northridge.png';
import Creative from '@/assets/images/LandingPage/GridTile.png';
import Quarry from '@/assets/images/LandingPage/Quarry.png';
import Aincrad from '@/assets/images/LandingPage/Aincrad.png';
import DiscordBanner from '@/assets/images/LandingPage/Discord_Banner.png';
import ForumsBanner from '@/assets/images/LandingPage/Forums.png';
import TransgressionBanner from '@/assets/images/LandingPage/Transgressions.png';
import VotingBanner from '@/assets/images/LandingPage/Voting.png';
import GitHub from '@/assets/images/LandingPage/GitHub_Banner.png';
import NetworkStatus from '@/assets/images/LandingPage/NetworkStatus.png';
import InstagramBanner from '@/assets/images/LandingPage/Instagram.png';
import TwitterBanner from '@/assets/images/LandingPage/Twitter.png';
import TwtichBanner from '@/assets/images/LandingPage/Twitch.png';

export default {
	view: () => {
		return [
			m('div#landing_page_content', [
				m('div.landing_page_section_title', 'Gamemodes'),
				m(GridImageModal, {
					images: [
						{ 
							img: `background-image: url('${ PvE }')`,
							alt: 'PvE World Spawn During Sunset',
							title: 'Survival',
							desc: 'Vanilla Minecraft with a few tweaks and tools to provide build protection, teleporting, unlimited homes, keep inventory on death, and a player-run economy.',
							href: '/gamemode/survival'
						},
						{ 
							img: `background-image: url('${ Northridge }')`,
							alt: 'Town of Northridge in the Peaceful World',
							title: 'Peaceful',
							desc: 'Vanilla Minecraft with peaceful difficulty with a few tweaks and tools to provide build protection, teleporting, unlimited homes, keep inventory on death, and a player-run economy.',
							href: '/gamemode/peaceful'
						},
						{ 
							img: `background-image: url('${ Creative }')`,
							alt: 'User-built plots on the PCN creative plots server',
							title: 'Creative Plots',
							desc: 'Creative world divided into claimable plots with environment customizations to enhance builds and WorldEdit to streamline building.',
							href: '/gamemode/creative'
						},
						{ 
							img: `background-image: url('${ Quarry }')`,
							alt: 'TrenchPvP Arena - Quarry',
							title: 'TrenchPvP',
							desc: 'A TMD, KitPvP inspired minigame. TrenchPvP is an entirely custom experience from our in-house development team. Our custom classes and abilities are sure to provide endless entertainment and hilarity.',
							href: '/gamemode/trenchpvp'
						},
						{ 
							img: `background-image: url('${ Aincrad }')`,
							alt: 'Aincrad Castle from Sword Art Online',
							title: 'SwordCraftOnline RPG',
							desc: 'SwordCraftOnline is a custom RPG MMO experience developed in-house. Inspired by the popular graphic novel and now multi-media hit Sword Art Online. Roam the open world, fighting custom monsters, dungeon bosses, leveling your character, and acquiring new Sword Skills to vanquish your foes.',
							href: '/gamemode/sco'
						},
					]}),
				m('div', { style: 'height: 40px;'}),

				m('div.landing_page_section_title', 'Media'),
				m(GridImageModal, {
					images: [
						{ 
							img: `background-image: url('${ InstagramBanner }')`,
							alt: 'Instagram camera glyph on red and purble gradient background',
							title: 'Instagram',
							desc: 'Keep up with PeacefulCraft news, events, and other happenings. Follow us on Instagram and never miss an update.',
							href: 'https://www.instagram.com/peacefulcraftnetwork/',
						},
						{ 
							img: `background-image: url('${ TwitterBanner }')`,
							alt: 'Twitter Logo on Blue Background',
							title: 'Twitter',
							desc: 'Keep up with PeacefulCraft news, events, and other happenings. Follow us on Twitter and never miss an update.',
							href: 'https://twitter.com/PeaceCFNT',
						},
						{ 
							img: `background-image: url('${ TwtichBanner }')`,
							alt: 'Twitch logo on purple background',
							title: 'Twitch',
							desc: 'Catch us live on Twitch! We stream community events and casual gaming sessions led by prominent members of the community.',
							href: 'https://www.twitch.tv/peacefulcraftnt',
						},        
					],
				}),
				m('div', { style: 'height: 40px;'}),

				m('div.landing_page_section_title', 'Community Resources'),
				m(GridImageModal, {
					images: [
						{ 
							img: `background-image: url('${ DiscordBanner }')`,
							alt: 'Discord Logo',
							title: 'Discord',
							desc: 'Join the community Discord to receive server updates, suggest server additions, report incidents to staff, and interact with other members of the community in a safe environment.',
							href: 'https://discord.peacefulcraft.net',
						},
						{ 
							img: `background-image: url('${ ForumsBanner }')`,
							alt: 'Forum Icon',
							title: 'Forums',
							desc: 'Check out our forums for server announcements, staff applications, ban appeals, ideas and suggestions, reporting incidents, getting help, and interacting with the community.',
							href: 'https://www.peacefulcraft.net/flarum',
						},
						{ 
							img: `background-image: url('${ TransgressionBanner }')`,
							alt: 'Gavel Icon',
							title: 'Transgressions',
							desc: 'All our bans, kicks, mutes, and warnings are publicly available in real time.',
							href: 'https://adm.peacefulcraft.net/batweb',
						},
						{ 
							img: `background-image: url('${ VotingBanner }')`,
							alt: 'Ballot Icon',
							title: 'Voting Links',
							desc: 'Want to support the server? Vote for our server listings on Minecraft server list websites to help others find our community.',
							href: '/voting-links',
						},
						{ 
							img: `background-image: url('${ GitHub }')`,
							alt: 'GitHub Logo',
							title: 'Development Projects',
							desc: 'Do you know how to program, design websites, 3D model, make textures or logos, or have a desire to learn how to do any of those things? All our websites, resource packs, and custom plugins are posted publicly on our GitHub. Feel free to contribute or comb over our code for your own reference.',
							href: 'https://github.com/peacefulcraft-network',
						},
						{ 
							img: `background-image: url('${ NetworkStatus }')`,
							alt: 'Generic Status Graph',
							title: 'Network Status',
							desc: 'Having connection issues? Or maybe you just like pretty graphs. We publish most of our server monitoring statistics publicly and in realtime.',
							href: 'https://status.peacefulcraft.net/d/Y7XZ86XZz/peacefulcraft-network-system-overview?orgId=1&refresh=1m&from=now-30m&to=now',
						},
					]}),
			]),
			m('div', { style: 'height: 40px;'}),
		];
	},
};
