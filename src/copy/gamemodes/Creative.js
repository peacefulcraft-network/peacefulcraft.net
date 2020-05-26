import EssoLunaMidieval1 from '@/assets/images/CreativePage/EssoLunaMedievalBuildCompetition1.png';
import EssoLunaMidieval2 from '@/assets/images/CreativePage/EssoLunaMedievalBuildCompetition2.png';
import EssoLunaMidieval3 from '@/assets/images/CreativePage/EssoLunaMedievalBuildCompetition3.png';
import PhotonixieMidieval1 from '@/assets/images/CreativePage/PhotonixeMedievalBuildComptetition1.png';
import PhotonixieMidieval2 from '@/assets/images/CreativePage/PhotonixeMedievalBuildComptetition2.png';
import PhotonixieMidieval3 from '@/assets/images/CreativePage/PhotonixeMedievalBuildComptetition3.png';
import StefanXMidieval1 from '@/assets/images/CreativePage/StefanXMedievalBuildCompetition.png';
import StefanXMidieval2 from '@/assets/images/CreativePage/StefanXMedievalBuildCompetitionCave.png';

export default {
  slideshow: {
    'Medieval Build Competition Winner: EssoABC and Luna_Tuna123 - Village Overlook': EssoLunaMidieval1,
    'Medieval Build Competition Winner: EssoABC and Luna_Tuna123 - Cavern Entrance': EssoLunaMidieval2,
    'Medieval Build Competition Winner: EssoABC and Luna_Tuna123 - Caverns Deep': EssoLunaMidieval3,
    'Medieval Build Competition Runner-up:  Photonixe - Village Overlook': PhotonixieMidieval1,
    'Medieval Build Competition Runner-up: Photonixe - Interior': PhotonixieMidieval2,
    'Medieval Build Competition Runner-up: Photonixe - Dragons Nest': PhotonixieMidieval3,
    'Medieval Build Competition Runner-up: StefanX14 - Village Overlook': StefanXMidieval1,
    'Medieval Build Competition Runner-up: StefanX14 - Mushroom Caverns': StefanXMidieval2,
  },
  
  infoBlurb: `The PeacefulCraft creative plot server is a great place to exercise your building skills, prototype builds for survival, or just mess around
    with friends. All users have access to 63x63 block plots with the ability to merge up to 4 contiguous plots together in any fashion to get more space. Our powerful
    plot management plugin, PlotSquared, provides players with extensive control over their plot with the ability to change key features like weather, time of day,
    biome, physics, and mob behavior. All users have limited access to WorldEdit to augment their building abilities.`,

  connectInstructions: {
    'Hub': [
      {
        instruction: 'Connect to our network hub server with the following ip:',
        code: 'peacefulcraft.net',
      },
      {
        instruction: 'Use the following command to join the PvE Server:',
        code: '/server plot',
      },
    ],
    'Direct Connect': [
      {
        instruction: 'Direct connect to Creative with the follow ip:',
        code: 'creative.peacefulcraft.net',
      },
      {
        instruction: 'Players can still switch between servers when using the direct connect domains. The following command will take you to our hub server:',
        code: '/server creative',
      },
    ],
  },

  resourceLinks: [
    { title: 'Creative Plot Forums', href: 'https://www.peacefulcraft.net/flarum/t/creative' },
    { title: 'Plot claiming and usage tutorial', href: 'https://www.youtube.com/watch?v=gpYujK9tJoo' },
    { title: 'Plot plugin official documentation', href: 'https://github.com/IntellectualSites/PlotSquared/wiki' },
  ],
};
