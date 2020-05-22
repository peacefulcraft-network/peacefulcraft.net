import BedWarsWitch from '@/assets/images/Minigames/BedWarsWitch.png';
import Catacombs from '@/assets/images/Minigames/Catacombs.png';
import FightClub from '@/assets/images/Minigames/FightClub.png';
import KingOfTheLadder from '@/assets/images/Minigames/KingOfTheLadder.png';
import Minigames from '@/assets/images/Minigames/Minigames.png';
import RainbowParkour from '@/assets/images/Minigames/RainbowParkour.png';

export default {
  slideshow: {
    'Minigames Lobby': Minigames,
    'Bedwars Arena "Witch"': BedWarsWitch,
    'Catacombs Maze': Catacombs,
    'Fight Club Ring': FightClub,
    'King of the Ladder': KingOfTheLadder,
    'Rainbow Parkour': RainbowParkour,
  },
  
  infoBlurb: `Our Minigames server is a bit small right now, but we have plans to improve our offerings soon.
              Of what we do have, all mazes, parkour courses, and arenas are custom made. While we won't be competing
              with the likes of Hypixel anytime soon, we try to offer a small spread of popular game modes that can be played
              without coordinating a party off-network.`,

  connectInstructions: {
    'Hub': [
      {
        instruction: 'Connect to our network hub server with the following ip:',
        code: 'peacefulcraft.net',
      },
      {
        instruction: 'Use the following command to join the Minigames Server:',
        code: '/server minigames',
      },
    ],
    'Direct Connect': [
      {
        instruction: 'Direct connect to Creative with the follow ip:',
        code: 'mgm.peacefulcraft.net',
      },
      {
        instruction: 'Players can still switch between servers when using the direct connect domains. The following command will take you to our hub server:',
        code: '/server minigames',
      },
    ],
  },

  resourceLinks: [
    { title: 'Minigames Forums', href: 'https://www.peacefulcraft.net/t/minigames' },
    { title: 'TrenchPvP', href: '/gamemode/trenchpvp' },
    { title: 'SwordCraftOnline', href: '/gamemode/sco' },
  ],
};
