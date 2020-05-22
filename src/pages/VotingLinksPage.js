
import m from 'mithril';

import '@/css/pages/BannerPage.css';

import BlueLink from '@/components/BlueLinkElement';
import VotingBanner from '@/assets/images/LandingPage/Voting.png';

export default {
  view: () => {
    return m('#banner_page', [
      m('.banner_page_banner', {
        style: {
          backgroundColor: '#21AA4B',
        }
      }, m('img', { src: VotingBanner})),

      m('.banner_page_pillars', {
        style: {
          backgroundColor: '#21AA4B',
        },
      }),

      m('.banner_page_content', [
        m('h1.banner_page_title', 'Voting Links'),
        m('div.banner_page_links', [
          m('span.voting_links_page_link',
            m(BlueLink, { href: 'https://minecraft-mp.com/server/46936/vote/', newTab: true}, 'Minecarft-Multiplayer')
          ),
          m('span.voting_links_page_link',
            m(BlueLink, { href: 'https://www.planetminecraft.com/server/peacefulcraft-1758869/vote/', newTab: true}, 'Planet Minecraft'),
          ),
          m('span.voting_links_page_link',
            m(BlueLink, { href: 'https://minecraft-server-list.com/server/436394/', newTab: true}, 'Minecraft Server List'),
          ),
          m('span.voting_links_page_link',
            m(BlueLink, { href: 'https://minecraft-server.net/vote/peacefulcraft/', newTab: true}, 'Minecraft Server Net'),
          ),
          m('span.voting_links_page_link',
            m(BlueLink, { href: 'https://minecraftservers.org/vote/21662', newTab: true}, 'Minecraft Servers Org'),
          ),
          m('span.voting_links_page_link',
            m(BlueLink, { href: 'https://topg.org/Minecraft/in-514261', newTab: true}, 'TopG'),
          ),
          m('span.voting_links_page_link',
            m(BlueLink, { href: 'https://minecraftlist.org/server/12658', newTab: true}, 'Minecraft List'),
          ),
          m('span.voting_links_page_link',
            m(BlueLink, { href: 'https://minecraftservers100.com/vote/6511', newTab: true}, 'Minecraft Servers 100'),
          ),
          m('span.voting_links_page_link',
            m(BlueLink, { href: 'https://minecraftservers.biz/servers/3909/', newTab: true}, 'Minecraft Servers Biz'),
          ),
        ]),
        m('p.banner_page_blurb', `All our players come from either word of mouth or server listing websites.
          Our standing on those listing website is heavily dependent on player votes. The more votes we
          get per month, the more higher our server listing in search results and the more likely someone
          is to join the server. We humbly ask that if you enjoy playing on the server, help others find us
          by voting for us on the websites listed below. Once site, all the sites, daily, monthly, or one off:
          every vote helps. Most websites also utalize a plugin called Votifier that helps us connect votes
          to Minecraft accounts so we can give small bonuses on the server for voting. If you give your Minecraft
          username when you vote, the next time you logon your outstanding voting rewards will be given. If you don't
          want the rewards or would just prefer to remain anonymous, simply enter 'anonymous' as your username when prompted.
        `),
        m('h1.banner_page_title', 'Thank you for your support!'),
      ])
    ]);
  },
};
