import Northridge from '@/assets/images/Peaceful/Northridge.png';
import Mall from '@/assets/images/Peaceful/MallExterior.png';
import MallEntrance from '@/assets/images/Peaceful/MallEntrance.png';
import MallAnex from '@/assets/images/Peaceful/MallAnex1.png';

export default {
  slideshow: {
    'Town of Northridge': Northridge,
    'The Mall - Player operated shops': Mall,
    'The Mall - Main Entrance': MallEntrance,
    'The Mall - First Anex': MallAnex,
  },
  
  infoBlurb: `True to its name, the PeacefulCraft Network has a peaceful survival world. The
    peaceful world has all the same amenities as the normal survival world; unlimited homes,
    teleporting, keep inventory, etc, just without the mobs. Players can move between the normal
    survival world and the peaceful world by warping or teleporting. PeacefulCraft's peaceful world is
    a great place for new players to get started in Minecraft, or for seasoned players to relax and enjoy
    the more creative aspects of the game.`,

  connectInstructions: {
    'Hub': [
      {
        instruction: 'Connect to our network hub server with the following ip:',
        code: 'peacefulcraft.net',
      },
      {
        instruction: 'Use the following command to join the PvE Server:',
        code: '/server pve',
      },
      {
        instruction: 'Use the following command to warp to the peaceful world:',
        code: '/warp peaceful',
      },
      {
        instruction: 'We recommend using the RTP command to get out of spawn and begin your adventure:',
        code: '/rtp'
      },
    ],
    'Direct Connect': [
      {
        instruction: 'Direct connect to PvE with the follow ip:',
        code: 'pve.peacefulcraft.net',
      },
      {
        instruction: 'Use the following command to warp to the peaceful world:',
        code: '/warp peaceful',
      },
      {
        instruction: 'We recommend using the RTP command to get out of spawn and begin your adventure:',
        code: '/rtp'
      },
    ],
  },

  resourceLinks: [
    { title: 'PvE Forums', href: 'https://www.peacefulcraft.net/flarum/t/pve' },
    { title: 'Night Vision and RTP Plugin', href: 'https://github.com/peacefulcraft-network/PCNEssentials' },
  ],
};
