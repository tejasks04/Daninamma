/**
 * ಸ್ಥಳ ಪುರಾಣ — told as prose, the way an elder would tell it.
 *
 * Block types:
 *   p        a paragraph
 *   lead     the opening paragraph (larger, gets a drop cap in English)
 *   quote    the mother's own words
 *   ornament a small glyph divider between movements of the story
 *   close    the closing line
 */
const story = [
  {
    type: 'lead',
    kn: 'ಹಿಂದಿನಿಂದ ಮಾರಿಯಕ್ಕ ಎಂಬ ದೇವತೆ ಇದ್ದು, ನಂತರ ಮಾನಂಗಿಯಿಂದ ಧನಿನಮ್ಮ ಎಂಬ ದೇವತೆ ಸೇಂದಿಗಾಡಿಯ ಮೇಲೆ ಬಂದಿದ್ದಳಂತೆ. ಬಂದಾಗ ಧನಿನಮ್ಮ ಎಂಬ ದೇವತೆಗೂ, ಮಾರಿಯಕ್ಕ ಎಂಬ ದೇವತೆಗೂ ಜಗಳವಾಗಿ ಅರಿಶಿನ, ಕುಂಕುಮಗಳು ಚೆಲ್ಲಾಡುತ್ತಿತ್ತಂತೆ. ಈಗಲೂ ಊರಿನ ಹಿಂಭಾಗದಲ್ಲಿ ಪಾಳು ಜಮೀನನ್ನು “ಧನಿನಮಂದೆ ಹಳ್ಳ” ಎಂದು ಹೆಸರಿದೆ; ಇವರು ಅಲ್ಲಿ ಜಗಳ ಮಾಡಿದರು. ಈ ಜಗಳದಲ್ಲಿ ಮಾರಿಯಕ್ಕ ದೇವತೆಯು ಸೋತು ಶಿವಗಂಗೆಗೆ ಹೊರಟು ಹೋದಳಂತೆ.',
    en: 'From long before, a deity called Mariyakka was here; later a deity named Dhaninamma came from Manangi, borne in on a sendi — a toddy — cart. When she arrived, Dhaninamma and Mariyakka fell into a quarrel, and turmeric and kumkuma scattered across the ground. Even now the share of land behind the village bears the name “Dhaninamande Halla” — that is where they quarrelled. In that quarrel the deity Mariyakka was overcome, and she left for Shivagange.',
  },
  {
    type: 'p',
    kn: 'ಮರುದಿನ ಬೆಳಗ್ಗೆ ಜನ ನೋಡಿದಾಗ ಊರಿನ ದನ ಕರುಗಳಿಗೆ ಕಾಯಿಲೆ ಬಂದಿತ್ತು. ಗಾಬರಿಗೊಂಡ ಊರಿನವರು ಪಕ್ಕದ ಹಳ್ಳಿಗೆ ಹೋಗಿ ಶಾಸ್ತ್ರ ಕೇಳಿದರಂತೆ. ಆಗ ಶಾಸ್ತ್ರದಲ್ಲಿ, “ನಾನು ಮಾನಂಗಿಯಿಂದ ಬಂದಿರುವ ದೇವತೆ; ನನ್ನನ್ನು ಪೂಜಿಸಿದರೆ ನಾನು ನಿಮಗೆ ಒಳ್ಳೆಯದನ್ನು ಮಾಡುತ್ತೇನೆ” ಎಂದು ನುಡಿದರು. ಆದರೆ ಜನ ಅದನ್ನು ನಂಬಲಿಲ್ಲ. ಆಗ ತಾಯಿ ಒಂದು ಪುಟ್ಟ ಮಗುವಿನ ಮೈಮೇಲೆ ಬಂದು ಹೇಳಿದಳಂತೆ —',
    en: 'The next morning the village found its cattle taken ill. Alarmed, they went to the neighbouring village to consult the oracle, and through it she spoke: “I am the deity who came from Manangi; worship me and I will do good for you.” The people did not believe it. So the mother came upon a small child, and through the child she said —',
  },
  {
    type: 'quote',
    kn: 'ಎರಡು ಇಪ್ಪೆಮರದ ಮಧ್ಯ ಒಂದು ಕಣಗಲ ಗಿಡ ಇದೆ. ಅದರ ಕೆಳಗೆ ಮೂರು ಹುತ್ತದ ಕೋವೆ ಇದೆ. ಅದನ್ನು ಕಿತ್ತು ನೋಡಿ.',
    en: 'Between two ippe trees stands a kanagalu shrub. Beneath it is a three-headed anthill mound. Lift it, and look.',
  },
  {
    type: 'p',
    kn: 'ಕೋವೆಯನ್ನು ಕಿತ್ತು ನೋಡಿದಾಗ ಅದರ ಕೆಳಗೆ ಅರಿಶಿನ, ಕುಂಕುಮ, ಬಳೆ, ಕರಿಮಣಿ, ಬಿಚ್ಚೋಲೆ, ಒಂದು ತಾಳಿ ಮತ್ತು ಒಂದು ವಿಭೂತಿ ಗಟ್ಟಿ ಇತ್ತು. “ಅಲ್ಲಿ ನನ್ನ ಪೂಜೆ; ನಿಮ್ಮ ಗ್ರಾಮಕ್ಕೆ ನಾನು ಸದಾ ಕಾಯ್ದು ಕೊಂಡಿರುತ್ತೇನೆ” ಎಂದಳಂತೆ. ಅದೇ ಜಾಗದಲ್ಲಿಯೇ ಊರಿನವರು ದೇವಸ್ಥಾನವನ್ನು ಕಟ್ಟಿದರು. ಅದರ ಅಕ್ಕಪಕ್ಕದಲ್ಲಿ ದೊಡ್ಡಮ್ಮ, ಚಿಕ್ಕಮ್ಮ ಮತ್ತು ಮುಳಕಟ್ಟಮ್ಮ ದೇವಾಲಯಗಳಿವೆ; ಈ ದೇವತೆಗಳು ಅಕ್ಕ ತಂಗಿಯರು ಎಂಬ ನಂಬಿಕೆ ಇಂದಿಗೂ ಇದೆ.',
    en: 'When they lifted the mound they found turmeric, kumkuma, bangles, karimani beads, a bicchole, a thali and a piece of vibhuti beneath it. “My worship is there,” she said, “and I will always keep watch over your village.” On that very spot the villagers raised her temple, and beside it stand the shrines of Doddamma, Chikkamma and Mulakattamma — deities held, to this day, to be her sisters.',
  },
  { type: 'ornament', glyph: 'mould' },
  {
    type: 'p',
    kn: 'ಮೆರವಣಿಗೆಗೆ ದೇವರನ್ನು ಅಟ್ಟು ಹಾಕಿಸಲು ಹೋದಾಗ ಒಂದು ವಿಚಿತ್ರ ನಡೆಯಿತು. ಮಾರಿ ರೂಪವನ್ನು ಹಾಕಿಸಿದರೂ ಆ ರೂಪ ಬರಲಿಲ್ಲ; ಬಂದದ್ದು ಲಕ್ಷ್ಮೀ ರೂಪವೇ. ಸುಮಾರು ಹತ್ತೊಂಬತ್ತು ಸಾರಿ ಹಾಕಿಸಿದರೂ ಒಂದು ಸಾರಿಯೂ ಮಾರಿ ರೂಪ ಬರಲಿಲ್ಲ. ಇಪ್ಪತ್ತನೆಯ ಅಟ್ಟಿಗೆ ಹಾಕಿಸಿದಾಗ ಮಹಾಲಕ್ಷ್ಮೀ ರೂಪ ಬಂದಿತು. ಆ ದೇವರನ್ನೇ ಇಂದಿಗೂ ಮೆರವಣಿಗೆ ದೇವರನ್ನಾಗಿ ಮಾಡುತ್ತಾರೆ; ಪ್ರತಿ ವರ್ಷ ದಸರಾ ದಿನ ಉತ್ಸವವನ್ನೂ ನಡೆಸುತ್ತಾರೆ.',
    en: 'Something strange happened when they went to cast the deity for the procession. They set out to cast the form of Mari, but that form would not come — what appeared each time was the form of Lakshmi. Nineteen times they tried, and not once did Mari appear. On the twentieth casting, the form of Mahalakshmi came. That is the deity carried in procession to this day, and the utsava is held for her every year on Dasara.',
  },
  { type: 'ornament', glyph: 'pot' },
  {
    type: 'p',
    kn: 'ದೇವಾಲಯದ ಎಡ ಭಾಗದಲ್ಲಿ ಸ್ವಲ್ಪ ದೂರದಲ್ಲಿ ಒಂದು ಕಲ್ಯಾಣಿ ಇದೆ. ಅಲ್ಲಿ ನೀರೆತ್ತುತ್ತಿದ್ದ ಗ್ರಾಮದವರೊಬ್ಬರಿಗೆ ನೀರಿನಲ್ಲಿ ಎರಡು ಜೋಡಿ ಕಳಸಗಳು ಕಂಡವು; ಅವರು ಅದನ್ನು ಲೆಕ್ಕಿಸದೆ ಬಿಟ್ಟರು. ಮರುದಿನ ಬಾನಿಯನ್ನು ಎಷ್ಟು ಎಳೆದರೂ ಅದು ಮೇಲಕ್ಕೆ ಬರಲಿಲ್ಲ. “ಇದು ದೇವರಾಗಿದ್ದರೆ ಮೇಲಕ್ಕೆ ಬರಲಿ; ನಾನು ಪೂಜಿಸಿಕೊಳ್ಳುತ್ತೇನೆ” ಎಂದು ಮನದಲ್ಲಿ ಅಂದುಕೊಂಡು ಎತ್ತಿದಾಗ ಒಂದು ಜೋಡಿ ಕಳಸ ಮೇಲೆ ಬಂದಿತು. ಊರಿನವರೆಲ್ಲಾ ಸೇರಿ ಅದು ಅವರ ಮನೆಯಲ್ಲೇ ಇದ್ದು ಪೂಜೆಗೊಳ್ಳಲಿ ಎಂದು ತೀರ್ಮಾನಿಸಿದರು. ಇಂದಿನವರೆಗೂ ಜಾತ್ರೆಯ ಸಮಯದಲ್ಲಿ ಆ ಕಳಸವನ್ನು ತರುತ್ತಾರೆ — ಅದನ್ನು ಋತುಮತಿಯಾಗದ ಹುಡುಗಿ ಹೊತ್ತು ತರಬೇಕು ಎಂಬ ವಾಡಿಕೆ ಇದೆ.',
    en: 'A little to the left of the temple lies a kalyani. A villager drawing water there saw two pairs of kalasha in the water, and thought nothing of it. The next day, however hard he pulled, the bucket would not rise. “If this is divine, let it come up, and I will worship it,” he said in his heart — and as he pulled, a pair of kalasha came up with the water. The village decided together that it should stay in his house and be worshipped there. It is brought out at jatre time even now, and the custom is that it must be carried by a girl who has not yet come of age.',
  },
  { type: 'ornament', glyph: 'lamp' },
  {
    type: 'p',
    kn: 'ಅರ್ಚಕರ ಮನೆತನ ಬಂದ ಕಥೆಯೂ ಸತ್ಯವಾದ ಘಟನೆಯೊಂದೇ. ಪಕ್ಕದ ಹೊಸಹಳ್ಳಿಯಲ್ಲಿ ಒಬ್ಬರಿಗೆ ಪ್ಲೇಗ್ ಬಂದು, ಅವರನ್ನು ತ್ಯಾಮಗೊಂಡ್ಲು ಹಾದಿಯಲ್ಲಿ ಬಿಟ್ಟು ಬಂದಿದ್ದರಂತೆ. ಆ ದಾರಿಯಲ್ಲಿ ಹೋಗುತ್ತಿದ್ದ ಕೆಂಪೋಹಳ್ಳಿಯವರಿಗೆ ಎಲ್ಲೋ ನರಳುವ ಧ್ವನಿ ಕೇಳಿಸಿತು; ಹಳ್ಳದಲ್ಲಿ ಬಿದ್ದಿದ್ದ ಅವರನ್ನು ನೋಡಿ ಭಯವಾಗಿ ಹಾಗೆಯೇ ಬಂದುಬಿಟ್ಟರಂತೆ. ಆ ರಾತ್ರಿ ದೇವರು ಒಂದು ಮಗುವಿನ ಮೈಮೇಲೆ ಬಂದು, “ನೀವು ಆತನನ್ನು ಎತ್ತಿಕೊಂಡು ಬರದೆ ಬಿಟ್ಟು ಬಂದಿದ್ದೀರಾ” ಎಂದು ಕೇಳಿತಂತೆ. ಆಗ ಊರಿನವರು ಹೋಗಿ ಆತನನ್ನು ಎತ್ತಿಕೊಂಡು ಬಂದು ದೇವಸ್ಥಾನದಲ್ಲಿ ಮಲಗಿಸಿದರು. ಧನಿನಮ್ಮನ ಕೃಪೆಯಿಂದ ಆತ ಗುಣಮುಖನಾಗಿ, ಅಂದಿನಿಂದ ದೇವರ ಪೂಜೆ ಮಾಡಿಕೊಂಡಿದ್ದನು. ಆತನ ವಂಶದವರೇ ಈ ಪೂಜೆಯನ್ನು ನಡೆಸಬೇಕೆಂದು ತಾಯಿ ಭಾಷೆ ತೆಗೆದುಕೊಂಡಳಂತೆ — ಈಗಲೂ ಸಹ ಅದೇ ಮನೆತನದವರು ಪೂಜೆ ನಡೆಸುತ್ತಿದ್ದಾರೆ.',
    en: 'The story of how the archaka family came to serve is a true one. In neighbouring Hosahalli a man took the plague, and he was carried out and left on the road to Thyamagondlu. Villagers from Kempohalli, passing that way, heard someone moaning; they saw him lying in the ditch, took fright, and came away as they were. That night the mother came upon a child and asked, “You left him there and came back?” So they went, lifted him, and laid him down in the temple. By Dhaninamma’s grace he recovered, and from that day he performed her worship. The mother took a promise that his lineage should conduct the pooja — and to this day that same family performs it.',
  },
  {
    type: 'close',
    kn: 'ಅಂದಿನಿಂದ ಇಂದಿನವರೆಗೂ ತಾಯಿ ಧನಿನಮ್ಮನ ಕೃಪೆ ಈ ಊರಿನ ಮೇಲಿದೆ.',
    en: 'From that day to this, her grace has rested on this village.',
  },
]

export default story
