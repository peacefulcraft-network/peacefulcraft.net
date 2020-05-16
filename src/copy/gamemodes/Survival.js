import PvESpawn from '@/assets/images/PvE/PvESpawn.png';
import PekoInc from '@/assets/images/PvE/PekoInc.png';
import Frankens from '@/assets/images/PvE/Frankens.png';
import BoneZone from '@/assets/images/PvE/TheBoneZone.png';

export default {
  slideshow: {
    'World Spawn': PvESpawn,
    'Peko Industries Outpost': PekoInc,
    'Nation of Frank Capital - Frankens': Frankens,
    'Town of Bonezone': BoneZone,
  },
  
  infoBlurb: `Player versus environment survival is the oldest gamemode on the network. PvE is designed to facilitate a relaxed 
  and laidback playstyle. Player's have access to unlimited homes, keep inventory on death, a player-run mall with
  shops and trading, random teleports, night vision, daytime toggle, personal time, custon nicknames, and Towny 
  for protecting their builds. Inventories between PvE and Peaceful are shared so anyone wishing to move between 
  worlds can do so seamlessly. The PvE world was last reset in February of 2019 and the world border is expanded 
  regularly with Minecraft updates. RTP ranges allow players to target specific game versions to teleport into so 
  finding unexplored regions is only one command away.`,

  connectInstructions: {
    'Hub': [
      {
        instruction: 'Connect to our network hub server with the following ip.',
        code: 'peacefulcraft.net',
      },
      {
        instruction: 'Use the following command to join the PvE Server.',
        code: '/server pve',
      },
      {
        instruction: 'We recommend using the RTP command to get out of spawn and begin your adventure.',
        code: '/rtp',
      },
    ],
    'Direct Connect': [
      {
        instruction: 'Direct connect to PvE with the follow ip.',
        code: 'pve.peacefulcraft.net',
      },
      {
        instruction: 'We recommend using the RTP command to get out of spawn and begin your adventure.',
        code: '/rtp',
      },
      {
        instruction: 'Players can still switch between servers when using the direct connect domains. The following command will take you to our hub server.',
        code: '/server lobby',
      },
    ],
  },

  resourceLinks: [
    { title: 'PvE Forums', href: 'https://www.peacefulcraft.net/t/pve' },
    { title: 'Night Vision and RTP Plugin', href: 'https://github.com/peacefulcraft-network/PCNEssentials' },
  ],
};