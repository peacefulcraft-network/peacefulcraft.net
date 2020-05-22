import Quarry from '@/assets/images/Trench/Quarry.png';
import Serenity from '@/assets/images/Trench/Serenity.png';
import Canyons from '@/assets/images/Trench/Canyons.png';

export default {
  slideshow: {
    'Trench Arena "Quarry"': Quarry,
    'Trench Arena "Serenity"': Serenity,
    'Trench Arena "Canyons"': Canyons,
  },
  
  infoBlurb: `TrenchPvP is a custom PvP gamemode developed in house by the PeacefulCraft Network. Trench is a KitPvP
    inspired TMD gamemode that has heavy influnces from Vavle's TeamFortress 2. Right now that means player's are
    split into two teams and have ten minutes go get as many kills for their team as they can. All the kits have custom
    weapons and or abilities; anything from invisibilty, kill combo buffs, double jump, to grenade launchers. All
    classes are designed to have unique play-styles and excel situationally. The dev team has plans to expand Trench
    to include more objective-oriented gamemodes like capture the flag and area control.`,

  connectInstructions: {
    'Hub': [
      {
        instruction: 'Connect to our network hub server with the following ip.',
        code: 'peacefulcraft.net',
      },
      {
        instruction: 'Use the following command to join the Trench Server.',
        code: '/server trench',
      },
      {
        instruction: 'Look around the class-room to get an idea the different class abilities. When ready, use this command to join TrenchPvP.',
        code: '/trjoin',
      },
    ],
    'Direct Connect': [
      {
        instruction: 'Direct connect to PvE with the follow ip.',
        code: 'trench.peacefulcraft.net',
      },
      {
        instruction: 'Look around the class-room to get an idea the different class abilities. When ready, use this command to join TrenchPvP.',
        code: '/trjoin',
      },
      {
        instruction: 'Players can still switch between servers when using the direct connect domains. The following command will take you to our hub server.',
        code: '/server lobby',
      },
    ],
  },

  resourceLinks: [
    { title: 'Trench Player Statistics', href: 'https://player.peacefulcraft.net/#!/home' },
    { title: 'TrenchPvP GitHub', href: 'https://github.com/peacefulcraft-network/TrenchPvP' }
  ],
};