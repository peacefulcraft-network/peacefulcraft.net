import m from 'mithril';

import '@/css/pages/AboutUs.css';

export default {
  view: () => {
    return m('#about_us_page', [
      m('h5', 'Our Mission'),
      m('p', `
        While I, Parsonswy, am articulating the mission statement of our community, I believe these goals are relatively self-evident and shared by all of our users.
        PeacefulCraft, the staff team, and our wider user base seek to establish an inclusive community where as many individuals as possible can feel at home. 
        We've seen nearly a decade of drama, sorrow, fun, and excitement. Relationships that I never dreamed of facilitating when I began the server have blossomed before me.
        In our time, we've impacted the lives of an estimated 32,000 people. To some that is nothing more than a few minutes deciding our community is not for them, 
        for others it has borne the fruit of immeasurable friendship and the proclamations of life-long faithfulness. The standing of our community today is a result of the contributions 
        of every single one of those 32,000+ users - both those who are still with us and those who are not. We can't wait to discover who you are and what impact you will have on our community. 
      `),

      m('h5', 'Guiding Principles'),
      m('p', `
        PeacefulCraft may be rooted in impulsive and passion-oriented pursuits, but these pursuits have always been driven by the interests of the community. While a map may live in the digital 
        ether forever, the friends and experiences made on that map are what people cherish. Placing priority on the experience and needs of users has been key to the longevity of the community. 
        Two principles core to understanding these needs are transparency and a tight-coupling between users and leadership. These two maxims go hand-in-hand and are incorporated into all decisions
        that come out of our staff team.
      `),

      m('h5', 'History'),
      m('p', `
        PeacefulCraft first came online in October of 2012 as a small, single eight slot server offering a standard survival experience. We had a small, but dedicated staff team with minimal administration 
        experience and little organized direction over where we wanted to take the server. In spite of our impulsive origins, the server soon began to amass a growing base of consistent players. Eight slots 
        were not enough and with the closing of our first server host, Avante Hosting, and so we migrated to a much roomier 18 slot server. With added slots, RAM, a responsibility to our newfound community, 
        and passion; we worked to grow our small server with new game modes, minigames, and quality-of-life improvements. This included our now signature peaceful gamemode.
      `),
      m('p', `
        After six months our ambition once again began to outgrow our technical capacity. At this point, PeacefulCraft moved from our home at McPro Hosting to our first official partnership with the now defunct Void Hosting. 
        Without this partnership, PeacefulCraft would not be anywhere near what it is today. For it was here that we were afforded the technical expertise and resources necessary to begin dreaming of moving from a single Minecraft server 
        to a network of servers. In the summer of 2013 this dream was realized when PeacefulCraft was reborn as PeacefulCraft Network with the launch of our Minigames server. Soon after minigames, we would launch a creative-plots server, 
        a custom TDM gamemode known as Trench, and a custom PvP factions server.
      `),
      m('p', `
        2014 brought a lot of change for the network. Ever shifting irl commitments, schedules, and priorities saw much of the original PeacefulCraft community drop-off. Though it was in pursuit of bigger and better things, these newly-vacant 
        creative and administrative positions marked a drop-off of the staff team's ability to meet the needs of the community. Through 2015 and 2016, network growth stagnated and soon turned to regression. October of 2016 saw a drastic 
        restructuring of the staff team with then three year owner Parsonswy stepping down. 
      `),
      m('p', `
        CNIAngel would lead the server from October of 2016 to December of 2018, with SoloProtecter taking intern leadership for several weeks in January of 2019. In true Internet cultural fashion, a quick succession of dramatic online and offline 
        events saw an unexpected revolution in leadership with much of the original staff team returning to the server by January of 2019. With a re-invigorated core of administrators, the network soon returned to an era of growth and quickly re-launched 
        the then lost creative-plots, minigames, and Trench game modes. 
      `),
    ]);
  },
};