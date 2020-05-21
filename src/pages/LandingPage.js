import m from 'mithril';

import GridImageModal from '@/components/GridImageModal/GridImageModal';

// Style imports
import '@/css/pages/LandingPage.css';

// Asset Imports
import PvE from '@/assets/images/LandingPage/PvESpawn.png';
import Northridge from '@/assets/images/LandingPage/Northridge.png';
import Quarry from '@/assets/images/Trench/Quarry.png';
import Aincrad from '@/assets/images/SCO/Aincrad.png';
import GitHub from '@/assets/images/LandingPage/GitHub_Banner.png';
import DiscordBanner from '@/assets/images/LandingPage/Discord_Banner.png';

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
              desc: 'Vanilla Minecraft surival with a few tweeks and tools to provide build protection, teleporting, unlimted homes, keep inventory on death, and a player-run economy.',
              href: '/gamemode/survival'
            },
            { 
              img: `background-image: url('${ Northridge }')`,
              alt: 'Town of Northridge in the Peaceful World',
              title: 'Peaceful',
              desc: 'Vanilla Minecraft with peaceful difficulty with a few tweeks and tools to provide build protection, teleporting, unlimted homes, keep inventory on death, and a player-run economy.',
              href: '/gamemode/peaceful'
            },
            { 
              img: `background-image: url('${ PvE }')`,
              alt: 'PvE World Spawn During Sunset',
              title: 'Creative Plots',
              desc: 'Creative world divided into claimable plots with environment custimaizations to enhance builds and WorldEdit to streamline building.',
              href: '/gamemode/creative'
            },
            { 
              img: `background-image: url('${ Quarry }')`,
              alt: 'TrenchPvP Arena - Quarry',
              title: 'TrenchPvP',
              desc: 'A TMD, KitPvP inspired minigame. TrenchPvP is an entirley custom experience from our inhouse development team. Our custom classes and abilities are sure to provide endles entertainment and hilarity.',
              href: '/gamemode/trenchpvp'
            },
            { 
              img: `background-image: url('${ Aincrad }')`,
              alt: 'Aincrad Castle from Sword Art Online',
              title: 'SwordCraftOnline RPG',
              desc: 'SwordCraftOnline is a custom RPG MMO experieince developed inhouse. Inspired by the popular graphic novel and now multi-media hit Sword Art Online. Roam the open world fighting custom monsters, dungeon bosses, leveling your character, and aquiring new Sword Skills to vanquish your foes.',
              href: '/gamemode/sco'
            },
            { 
              img: `background-image: url('${ PvE }')`,
              alt: 'PvE World Spawn During Sunset',
              title: 'Minigames',
              desc: 'Our Minigame server features a wide aray of classic Minecraft games; BedWars, King of the Ladder, Mazes, MobArena, Parkour, and Spleef.',
              href: '/gamemode/creative'
            },
          ]}),
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
              img: `background-image: url('${ PvE }')`,
              alt: 'Forum Icon',
              title: 'Forums',
              desc: 'Check out our forums for server announcements, staff applications, ban appeals, ideas and suggestions, reporting incidents, getting help, and interacting with the community.',
              href: 'https://www.peacefulcraft.net',
            },
            { 
              img: `background-image: url('${ PvE }')`,
              alt: 'Gavel Icon',
              title: 'Transgressions',
              desc: 'All our bans, kicks, mutes, and warnings are publically available in real time.',
              href: 'https://adm.peacefulcraft.net/batweb',
            },
            { 
              img: `background-image: url('${ PvE }')`,
              alt: 'Ballot Icon',
              title: 'Voting Links',
              desc: 'Want to support the server? Vote for our server listings on Minecraft server list websites to help others find our community.',
              href: '/server-listings',
            },
            { 
              img: `background-image: url('${ GitHub }')`,
              alt: 'GitHub Logo',
              title: 'Development Projects',
              desc: 'Do know how to program, design websites, 3D model, make textures or logos, or have a desire to learn how to do any of those things? All our websites, resource packs, and custom plugins are posted publically on our GitHub. Feel free to contribute or comb over our code for your own reference.',
              href: 'https://github.com/peacefulcraft-network',
            },
            { 
              img: `background-image: url('${ PvE }')`,
              alt: 'Generic Status Graph',
              title: 'Network Status',
              desc: 'Having connection issues? Or maybe you just checking out pretty graphs. We publish most of our server monitoring statistics publically and in realtime.',
              href: 'https://status.peacefulcraft.net/d/Y7XZ86XZz/peacefulcraft-network-system-overview?orgId=1&refresh=1m&from=now-30m&to=now',
            },
          ]}),
      ]),
      m('div', { style: 'height: 40px;'}),
    ];
  },
};