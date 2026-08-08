/**
 * VIDEOS
 * ---------------------------------------------------------------
 * Two ways to add one:
 *   youtubeId: 'dQw4w9WgXcQ'      → embeds the YouTube player
 *   file: '/videos/jatre.mp4'     → plays a file from public/videos/
 * Leave both empty and the card stays a styled placeholder.
 *
 * `poster` is optional: '/images/jatre-thumb.jpg'
 * ---------------------------------------------------------------
 */
const videos = [
{
    id: 'jatre-main',
    feature: true,
    youtubeId: '',
    file: '/videos/jatre-2024.mp4',
    poster: '/images/jatre-poster.jpeg',
    title: { kn: 'ಜಾತ್ರೆಯ ಮೆರವಣಿಗೆ', en: 'The jatre procession' },
    // note: { kn: 'ಕುರ್ಚ ಮತ್ತು ದೇವರುಗಳು ಊರಿನ ಸುತ್ತ', en: 'The kurcha and the deities, around the village' },
  },
  // {
  //   id: 'aarti',
  //   youtubeId: '',
  //   file: '',
  //   poster: '',
  //   title: { kn: 'ಆರತಿ ಬೆಳಗುವುದು', en: 'Lighting the aarti' },
  //   note: { kn: 'ಅಕ್ಕಿ ಬೆಲ್ಲದ ಆರತಿ', en: 'The rice-and-jaggery aarti' },
  // },
  // {
  //   id: 'utsava',
  //   youtubeId: '',
  //   file: '',
  //   poster: '',
  //   title: { kn: 'ದಸರಾ ಉತ್ಸವ', en: 'The Dasara utsava' },
  //   note: { kn: 'ಪ್ರತಿ ವರ್ಷ ದಸರಾ ದಿನ', en: 'Held on Dasara each year' },
  // },
]

export default videos
