/**
 * GALLERY
 * ---------------------------------------------------------------
 * To add a real photo:
 *   1. copy the file into  public/images/
 *   2. set  src: '/images/your-file.jpg'   below
 * Leave `src: null` and the tile stays a styled placeholder.
 * ---------------------------------------------------------------
 */

export const categories = [
  { id: 'devi', label: { kn: 'ದೇವಿ', en: 'The deity' } },
  { id: 'temple', label: { kn: 'ದೇವಸ್ಥಾನ', en: 'Temple' } },
  { id: 'jatre', label: { kn: 'ಜಾತ್ರೆ', en: 'Jatre' } },
]

const gallery = [
  {
    id: 'moola',
    cat: 'devi',
    src: 'images/d4.jpeg',
    wide: true,
    caption: { kn: 'ಮೆರವಣಿಗೆ ದೇವರು — ೨೦ನೇ ಅಟ್ಟಿನ ರೂಪ', en: 'The procession deity — cast on the twentieth mould' },
  },
  {
    id: 'utsava-murti',
    cat: 'devi',
    src: 'images/d1.jpeg',
    caption: { kn: 'ಮೆರವಣಿಗೆ ದೇವರು — ೨೦ನೇ ಅಟ್ಟಿನ ರೂಪ', en: 'The procession deity — cast on the twentieth mould' },
  },
  {
    id: 'utsava-murti',
    cat: 'temple',
    src: 'images/temple.jpeg',
    caption: { kn: 'ದೇವಸ್ಥಾನದ ಮುಂಭಾಗ', en: 'The temple front' },
  },
  {
    id: 'sisters-shrine',
    cat: 'temple',
    src: 'images/temple1.jpeg',
    caption: { kn: 'ದೊಡ್ಡಮ್ಮ, ಚಿಕ್ಕಮ್ಮ, ಮುಳಕಟ್ಟಮ್ಮ ಗುಡಿಗಳು', en: 'The shrines of Doddamma, Chikkamma and Mulakattamma' },
  },
  {
    id: 'kalyani',
    cat: 'temple',
    src: 'images/temple2.jpeg',
    tall: true,
    caption: { kn: 'ಎಡಭಾಗದ ಕಲ್ಯಾಣಿ — ಕಳಸ ಸಿಕ್ಕ ಸ್ಥಳ', en: 'The kalyani to the left — where the kalasha was found' },
  },
  {
    id: 'kamaan',
    cat: 'jatre',
    src: 'images/jaatre.jpeg',
    caption: { kn: 'ಜಾತ್ರೆಯ ಸ್ವಾಗತ ಕಮಾನು', en: 'The welcome arch for the jatre' },
  },
  {
    id: 'gadige',
    cat: 'jatre',
    src: 'images/jaatre1.jpeg',
    caption: { kn: 'ಗಡಿಗೆ ಸೇವೆ', en: 'The gadige seva' },
  },
  {
    id: 'anna-raashi',
    cat: 'jatre',
    src: 'images/j4.png',
    wide: true,
    caption: { kn: 'ಅನ್ನದ ರಾಶಿ ಮತ್ತು ಬೇವಿನ ಸೊಪ್ಪು', en: 'The heap of rice, and the neem leaves' },
  },
  {
    id: 'kurcha',
    cat: 'jatre',
    src: 'images/j1.png',
    caption: { kn: 'ಕುರ್ಚ — ಮರದ ರಥ', en: 'The kurcha — the wooden chariot' },
  },
  {
    id: 'devarugalu',
    cat: 'jatre',
    src: 'images/j2.png',
    caption: { kn: 'ಮೆರವಣಿಗೆ ದೇವರುಗಳು', en: 'The deities in procession' },
  },
  {
    id: 'aarti',
    cat: 'jatre',
    src: 'images/j3.png',
    caption: { kn: 'ಅಕ್ಕಿ ಬೆಲ್ಲದ ಆರತಿ', en: 'The rice-and-jaggery aarti' },
  },
]

export default gallery
