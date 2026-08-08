/**
 * ಜಾತ್ರೆಯ ವಿಶೇಷ ಕಾರ್ಯಕ್ರಮಗಳು — the sevas, in the order of days.
 * The day labels are real: the jatre genuinely runs Tuesday → Thursday
 * after the date is announced, so the ordering carries information.
 */
const jatre = [
  {
    id: 'saaru',
    day: { kn: 'ಸಾರು', en: 'The announcement' },
    title: { kn: 'ಸಾರು ಇಡುವುದು', en: 'Setting the date' },
    items: [
      {
        kn: 'ಜಾತ್ರೆ ಮಾಡುವ ಮೊದಲು ಎಲ್ಲರೂ ಕೂಡಿ ಮಾತಾಡಿ ಒಂದು ದಿನ ಗೊತ್ತು ಮಾಡಿ ಸಾರು ಇಡುತ್ತಾರೆ.',
        en: 'Before the jatre the village gathers, agrees on a day and announces it.',
      },
    ],
  },
  {
    id: 'tuesday',
    day: { kn: 'ಮಂಗಳವಾರ', en: 'Tuesday' },
    title: { kn: 'ಕೋಣ, ಕುರ್ಚ ಮತ್ತು ಮೆರವಣಿಗೆ', en: 'The kona, the kurcha and the procession' },
    items: [
      {
        kn: 'ಕೋಣಕ್ಕೆ ಅರಿಶಿನ, ಕುಂಕುಮ ಹಚ್ಚಿ ಎಣ್ಣೆ ಇಟ್ಟು ನೀರು ಸುರಿದು ಪೂಜೆ ಮಾಡಿ ಆರತಿ ಮಾಡುತ್ತಾರೆ.',
        en: 'The kona is anointed with turmeric, kumkuma and oil, bathed with water, and given pooja and aarti.',
      },
      {
        kn: 'ಮೊದಲಿಗೆ ಕುರ್ಚವನ್ನು ಕಟ್ಟಿ (ಮರದ ರಥ / ತೇರು) ಬಾವುಟ ಕಳಸಗಳನ್ನು ಕಟ್ಟಿ ಅಲಂಕರಿಸಿ ಪೂಜೆ ಮಾಡುತ್ತಾರೆ.',
        en: 'The kurcha — the wooden chariot — is assembled first, then hung with flags and kalasha, decorated and worshipped.',
      },
      {
        kn: 'ದೇವರುಗಳು ಮತ್ತು ಕುರ್ಚವನ್ನು ಎತ್ತಿ ಹೊತ್ತು ಊರಿನ ಸುತ್ತಲೂ ಮೆರವಣಿಗೆ ಬರುತ್ತಾರೆ.',
        en: 'The deities and the kurcha are lifted and carried in procession around the village.',
      },
      {
        kn: 'ನಂತರ ಕೋಣವನ್ನು ಮನೆ ಮನೆಗೂ ಪೂಜೆ ಮಾಡಿಸಿ ದೇವಸ್ಥಾನದ ಹತ್ತಿರ ಕಟ್ಟುತ್ತಾರೆ. ಮನೆ ಮನೆಗೂ ಉಪ್ಪಾರಗಳನ್ನು (ಅನ್ನದ ಆರತಿ) ಪೂಜಿಸಿಕೊಂಡು ದೇವರ ಜೊತೆ ಹೊರಡುತ್ತಾರೆ.',
        en: 'The kona is then taken from house to house for pooja and tethered near the temple. At every house the anna aarti is worshipped and carried out with the deities.',
      },
      {
        kn: 'ಇದಕ್ಕೆ ಮೊದಲು ಧನಿನಮ್ಮನ ಜೊತೆ ಪಕ್ಕದ ಊರಿನ ತಂಗಿ ಚೌಡಮ್ಮನನ್ನು ಕರೆಸುತ್ತಾರೆ.',
        en: 'Before all this, Choudamma — the younger sister from the next village — is invited to join Dhaninamma.',
      },
    ],
  },
  {
    id: 'wednesday',
    day: { kn: 'ಬುಧವಾರ', en: 'Wednesday' },
    title: { kn: 'ಅನ್ನದ ರಾಶಿ, ಗಡಿಗೆ ಸೇವೆ ಮತ್ತು ಆರತಿ', en: 'The rice heap, the gadige seva and the aarti' },
    items: [
      {
        kn: 'ಬೆಳಗಿನ ಅರಿಶಿನ ಅನ್ನದ ಆರತಿಯನ್ನು ಮಾಡಿ ಬಟ್ಟೆ ಹಾಸಿ ಉಪ್ಪಾರವನ್ನು ಧನಿನಮ್ಮ ದೇವರ ಮುಂದೆ ಸುರಿದು ಬೇವಿನ ಸೊಪ್ಪು ಇಟ್ಟು ಪೂಜೆ ಮಾಡುತ್ತಾರೆ.',
        en: 'In the morning the turmeric-rice aarti is prepared, a cloth is spread, the rice is poured before Dhaninamma, neem leaves are laid on it and pooja is offered.',
      },
      {
        kn: 'ಅನ್ನದ ರಾಶಿಯ ಮುಂದೆ ಗಡಿಗೆ (ಸೇಂದಿ ತುಂಬಿದ ಗಡಿಗೆಯನ್ನು) ತಂದು ಪೂಜಿಸುತ್ತಾರೆ. ಈ ಸೇವೆಯನ್ನು ಸೇಂದಿ ಮಾಡುವ ಜನಾಂಗದವರು ತಂದು ಕೊಡುತ್ತಾರೆ — ಈ ಸೇವೆ ಶ್ರೇಷ್ಠ ಎಂದು ರೂಢಿಯಲ್ಲಿದೆ. ಇದು ವಂಶಪರಂಪರೆಯಾಗಿ ಬಂದಿದೆ.',
        en: 'Before the heap of rice the gadige — a pot filled with sendi — is brought and worshipped. This seva is brought by the sendi-tapping families and is held to be the highest of the offerings; it has passed down through their lineage.',
      },
      {
        kn: 'ನಂತರ ತಳವಾರರಿಗೆ, ಗೌಡರಿಗೆ, ಮಡಿವಾಳರಿಗೆ, ಅರ್ಚಕರಿಗೆ, ಪಟೇಲರಿಗೆ — ಎಲ್ಲರಿಗೂ ಭಾಗಗಳನ್ನಾಗಿ ಮಾಡಿ ಹಂಚುತ್ತಾರೆ.',
        en: 'The offering is then divided into shares for the thalavaru, the gouda, the madivaala, the archaka and the patel — a portion for every household that serves.',
      },
      {
        kn: 'ನಂತರ ಪಟ್ಟದ ಕೋಣ ಕಡಿಯುತ್ತಾರೆ. ಅದರ ರಕ್ತವನ್ನು ಊರಿನೊಳಗೆ ಬಲಿಯೆಂದು ಹಾಕುತ್ತಾರೆ.',
        en: 'The pattada kona is then offered, and the bali is carried through the village.',
      },
      {
        kn: 'ಬುಧವಾರ ಸಾಯಂಕಾಲ ಹೊಲದಮ್ಮ ದೇವರಿಗೆ ಆರತಿ ಮಾಡುತ್ತಾರೆ. ಗೌಡರ ಜನಾಂಗದಲ್ಲಿ ಅಕ್ಕಿ ಸುರಿದು ಬೆಲ್ಲದ ಅಚ್ಚು ಇಡುವ ಸಂಪ್ರದಾಯ; ದಾಸಪ್ಪ ಜನಾಂಗದಲ್ಲಿ ತಂಬಿಟ್ಟು ಮಾಡುವ ಸಂಪ್ರದಾಯ.',
        en: 'On Wednesday evening the aarti is offered to Holadamma. Among the Gouda families the custom is to pour rice and set jaggery; among the Dasappa families it is tambittu.',
      },
    ],
  },
  {
    id: 'aarti-origin',
    day: { kn: 'ವಾಡಿಕೆ', en: 'Why' },
    title: { kn: 'ಅಕ್ಕಿ ಬೆಲ್ಲದ ಆರತಿ ಏಕೆ', en: 'Why the aarti is rice and jaggery' },
    items: [
      {
        kn: 'ಎಲ್ಲರ ಆರತಿ ತಂಬಿಟ್ಟು ಆರತಿ ಬೆಳಗಿದಾಗ “ನನಗೆ ಸಮಾಧಾನವಿಲ್ಲ” ಎಂದು ದೇವರು ಒಬ್ಬ ಮಗುವಿನ ಮೈಮೇಲೆ ಹೇಳಿತಂತೆ. ಯಾಕೆಂದು ಕೇಳಿದಾಗ “ನನಗೆ ಅಕ್ಕಿ ಬೆಲ್ಲದ ಆರತಿಯೇ ಇಷ್ಟ” ಎಂದಳಂತೆ. ಆದ್ದರಿಂದ ಇಂದಿಗೂ ಸಹ ಗೌಡರ ಕುಟುಂಬದವರು ಅಕ್ಕಿ ಹಾಕಿ ಬೆಲ್ಲ ಇಟ್ಟೇ ಪೂಜಿಸುತ್ತಾರೆ.',
        en: 'When every aarti had been offered as tambittu, the mother spoke through a child: “I am not satisfied.” Asked why, she said, “It is the rice-and-jaggery aarti I love.” And so to this day the Gouda families worship with rice poured and jaggery set upon it.',
      },
    ],
  },
  {
    id: 'thursday',
    day: { kn: 'ಗುರುವಾರ', en: 'Thursday' },
    title: { kn: 'ನೆಂಟರಿಷ್ಟರು ಮತ್ತು ಭೋಜನ', en: 'Kin, and the feast' },
    items: [
      {
        kn: 'ಗುರುವಾರ ನೆಂಟರಿಷ್ಟರೆಲ್ಲರೂ ಸೇರುತ್ತಾರೆ. ಆ ದಿನ ಭೋಜನ ಮಾತ್ರ — ಬೇರೆ ಯಾವುದೇ ಕಾರ್ಯಕ್ರಮ ಇರುವುದಿಲ್ಲ.',
        en: 'On Thursday all the kin and relations gather. The day is given to the feast alone — no other programme is held.',
      },
    ],
  },
  {
    id: 'friday',
    day: { kn: 'ಶುಕ್ರವಾರ', en: 'Friday' },
    title: { kn: 'ಬಿಡುವಿನ ದಿನ', en: 'A day left empty' },
    items: [
      {
        kn: 'ಶುಕ್ರವಾರ ಯಾವುದೇ ಕಾರ್ಯಕ್ರಮ ಇರುವುದಿಲ್ಲ.',
        en: 'Nothing is held on Friday.',
      },
    ],
  },
  {
    id: 'saturday',
    day: { kn: 'ಶನಿವಾರ', en: 'Saturday' },
    title: { kn: 'ಹಣ್ಣು ಅಡಿಗೆ ಮತ್ತು ಮಡಿಲಕ್ಕಿ', en: 'Fruit offering and madilakki' },
    items: [
      {
        kn: 'ಶನಿವಾರ ಹಣ್ಣು ಅಡಿಗೆ ಸಲ್ಲಿಸುತ್ತಾರೆ ಮತ್ತು ದೇವರಿಗೆ ಮಡಿಲಕ್ಕಿ ಕಟ್ಟುತ್ತಾರೆ.',
        en: 'On Saturday the fruit offering is made, and the madilakki is tied for the deity.',
      },
      {
        kn: 'ಮನೆಯಿಂದ ಹಣ್ಣು, ಕಾಯಿ, ಹೂ, ಪಾನಕಗಳನ್ನು ತೆಗೆದುಕೊಂಡು ಹೋಗಿ ಹಣ್ಣು ಕಾಯಿ ಪೂಜೆ ಮಾಡುತ್ತಾರೆ.',
        en: 'From every home fruit, coconut, flowers and panaka are carried out for the fruit-and-coconut pooja.',
      },
      {
        kn: 'ನಂತರ ಎಲ್ಲಾ ತರಹದ ಹರಕೆಗಳನ್ನು ಕೇಳಿಕೊಳ್ಳುತ್ತಾರೆ. ಹಲವು ಹರಕೆಗಳು ತೀರುತ್ತವೆ ಎಂಬ ನಂಬಿಕೆ ಇದೆ.',
        en: 'Vows of every kind are then placed before her, and it is believed that many of them are fulfilled.',
      },
      {
        kn: 'ಆರತಿಗಳು ಮತ್ತು ದೇವರುಗಳು ದೇವಾಲಯವನ್ನು ಮೂರು ಸಾರಿ ಪ್ರದಕ್ಷಿಣೆ ಮಾಡುತ್ತಾರೆ. ನಂತರ ಎಲ್ಲರೂ ಸೇರಿ ದೇವಾಲಯದ ಎಡಭಾಗದಲ್ಲಿರುವ ಕಲ್ಯಾಣಿಗೆ ಹೋಗುತ್ತಾರೆ.',
        en: 'The aartis and the deities circle the temple three times. Then everyone walks together to the kalyani on the left of the temple.',
      },
      {
        kn: 'ನಂತರ ಪ್ರಸಾದವನ್ನು ಹಂಚುತ್ತಾರೆ. ಕಳಸವನ್ನು ತಾಳವಾದ್ಯ ತಮಟೆ ಸಮೇತ ಕರೆದುಕೊಂಡು ಹೋಗಿ ಮನೆಗೆ ಬಿಟ್ಟು ಬರುತ್ತಾರೆ.',
        en: 'Prasada is shared out. The kalasha is escorted back with drums and cymbals and left at the house it belongs to.',
      },
      {
        kn: 'ಕಷ್ಟ ಪರಿಹಾರವಾಗಬೇಕೆಂದು ಬಂದವರ ಮೇಲೆ ದೇವರು ಬಂದು ಮೂರು ಸುತ್ತು ಸುತ್ತುತ್ತಾರೆ. ಆ ತಾಯಿ ನೆರವೇರಿಸುವ ನಂಬಿಕೆ ಈಗಲೂ ಇದೆ.',
        en: 'For those who come seeking relief from hardship, the deity comes and circles them three times. The faith that the mother will see it through is alive even now.',
      },
    ],
  }
]

export const sisters = [
  {
    id: 'dhaninamma',
    name: { kn: 'ಧನಿನಮ್ಮ', en: 'Dhaninamma' },
    role: { kn: 'ಈ ಊರಿನ ಮೂಲ ದೇವತೆ', en: 'The village’s own deity' },
    body: {
      kn: 'ಮಾನಂಗಿಯಿಂದ ಸೇಂದಿಗಾಡಿಯ ಮೇಲೆ ಬಂದ ತಾಯಿ. ಜಾತ್ರೆಯ ಕೇಂದ್ರ ಇವಳೇ.',
      en: 'The mother who came from Manangi on the sendi cart. The jatre turns around her.',
    },
  },
  {
    id: 'choudamma',
    name: { kn: 'ಚೌಡಮ್ಮ', en: 'Choudamma' },
    role: { kn: 'ಪಕ್ಕದ ಊರಿನ ತಂಗಿ', en: 'The sister from the next village' },
    body: {
      kn: 'ಜಾತ್ರೆಗೆ ಮೊದಲು ಚೌಡಮ್ಮನನ್ನು ಕರೆಸುತ್ತಾರೆ. ಆ ಊರಿನ ಜಾತ್ರೆಗೆ ಧನಿನಮ್ಮನನ್ನು ಕರೆಸಿಕೊಳ್ಳುತ್ತಾರೆ.',
      en: 'She is invited here before the jatre — and when that village holds its own jatre, Dhaninamma is invited there.',
    },
  },
  {
    id: 'mulakattamma',
    name: { kn: 'ಮುಳಕಟ್ಟಮ್ಮ', en: 'Mulakattamma' },
    role: { kn: 'ದೇವಸ್ಥಾನದ ಪಕ್ಕದ ದೇವತೆ', en: 'The deity beside the temple' },
    body: {
      kn: 'ಮೂರು ದೇವರುಗಳನ್ನೂ ಅಕ್ಕ ತಂಗಿಯರಂತೆ ಒಟ್ಟಿಗೆ ಪೂಜಿಸುತ್ತಾರೆ.',
      en: 'All three are worshipped together, as sisters are.',
    },
  },
]

export default jatre
