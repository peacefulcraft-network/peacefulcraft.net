import m from 'mithril';

import '@/css/pages/StaffPage.css';

export default class Staff {
  view() {
    return m('#staff_page', [
      m('h3.section_header', 'Staff Members'),
      m('div.active_staff__flex_wrapper', [
        m('div.active_staff__flex-member', [
          m('h5', 'Administrators'),
          m('ul', [
            m('li', 'BrokenKage'),
            m('li', 'Flaminbrownies'),
            m('li', m('b', 'parsonswy')),
            m('li', 'unicornbrunette'),
          ]),
        ]),

        m('div.active_staff__flex-member', [
          m('h5', 'Moderators'),
          m('ul', [
            m('li', 'Alexkillercat'),
            m('li', 'beignetboo'),
            m('li', 'Jumbie247'),
            m('li', 'Pyro152'),
            m('li', 'Silicalia'),
            m('li', 'Tholmar'),
          ]),
        ]),

        m('div.active_staff__flex-member', [
          m('h5', 'Assistants'),
          m('ul', [
            m('li', 'Illyrial'),
            m('li', 'Tomsenn'),
          ]),   
        ]),

        m('div.active_staff__flex-member', [
          m('h5', 'Project Members'),
          m('ul', [
            m('li', 'EssoABC'),
            m('li', '_LunarM00n_'),
            m('li', 'StefanX14')
          ]),
        ]),
      ]),

      m('div.former_staff__wrapper', [
        m('h5', 'Former Volunteers'),
        m('div.former_staff__entries', [
          m('span.former_staff__entry', '0kay0kay'),
          m('span.former_staff__entry', 'brockroxs99'),
          m('span.former_staff__entry', 'brody14'),
          m('span.former_staff__entry', 'CNIAngel'),
          m('span.former_staff__entry', 'cobra543211'),
          m('span.former_staff__entry', 'Cuddly_C4'),
          m('span.former_staff__entry', 'HugeCliff'),
          m('span.former_staff__entry', 'ISeeYouTrollin'),
          m('span.former_staff__entry', 'jmarioman'),
          m('span.former_staff__entry', 'Melpy'),
          m('span.former_staff__entry', 'MistyrialA4'),
          m('span.former_staff__entry', 'Ohio2017'),
          m('span.former_staff__entry', 'Panclaws'),
          m('span.former_staff__entry', 'Sidious82'),
          m('span.former_staff__entry', 'Sniper_4_Life'),
          m('span.former_staff__entry', 'Toxic_Hit'),
          m('span.former_staff__entry', 'Tune_Link007'),
        ]),
      ]),

      m('hr'),

      m('h3.section_header', 'Expetations, Responsibilities, and Policies'),
      m('p.rules_and_expectations__copy', 'The document below details the policies and expectations which all Network staff members have committed to upholding. These policies deal with enumerating the authority of the different staff positions, limitations of staff authority, information and data confidentiality, and the processes for addressing situations where in which one or more policies in this document are suspected or known to have been broken.'),

      m('h5', 'What to report?'),
      m('p.rules_and_expectations__copy', 'If you are aware of who have personally experienced an interaction with any staff member, please do not hesitate to reach out. Even if you\'re not sure if or what specific verbiage may have been violated, we are happy to help guide you through our policies to better determine if further investigative action is required.'),
      m('p.rules_and_expectations__copy', 'We will do our best to keep the source(s) of any received reports anonymous throughout our investigative process. As such, we ask that you include as much authoritative evidence as you can. Ideally, this includes timestamps of events which occurred on the network, which we can cross-reference in our logs, through screenshots, links, or other digital evidence will also be considered. Out of an abundance of caution, we will work to verify the authenticity of any evidence we receive. This will most likely mean followup questions and when possible reaching out to others who may have been involved in the event. These actions should not be seen as discouraging or distrusting, only due-diligence.'),

      m('h5', 'Who to contact?'),
      m('p.rules_and_expectations__copy', 'Whether it be questions, comments, concerns, or a report; any network staff member can help out. We encourage users to reach out to which ever staff member(s) they fell comfortable conversing with. When possible and upon user request, any information provided in a report may be anonymized before being handed off to an administrator with the authority to address any given report.'),

      m('iframe.rules_and_expectations__embed', {
        frameBorder: 0,
        src: 'https://docs.google.com/document/d/e/2PACX-1vQuji7uu2WQeXPZ6ixhAcfcj2_pkXeMBmHxrIcCQwbABZ0D3BNOUWElZyslQqT3VpijAVORizEBldE_/pub?embedded=true' }),
    ]);
  }
}