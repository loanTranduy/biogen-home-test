import Episode2 from '../assets/images/video-preview/episode-2.png'
import Episode3 from '../assets/images/video-preview/episode-3.png'
import Episode4 from '../assets/images/video-preview/episode-4.png'

import { TVideoPreviewList } from '../components/video-preview/VideoPreview.types';

export const mockedVideoPreviews: TVideoPreviewList = [
    {
      title: '1/ MS und Familienplanung Immuntherapien bei MS in ...',
      completedTime: 162,
      totalTime: 1200,
      tag: 'first',
      image: Episode4,
      imageAlt: 'alt',
      link: "/"
    },
    {
      title: '2/ MS und Familienplanung MS-Aktivität in der Schwangerschaft und danach planung MS-Aktivität in der Schwangerschaft und danach planung MS-Aktivität in der Schwangerschaft und danach',
      completedTime: 90,
      totalTime: 100,
      tag: 'episode 2',
      image: Episode3,
      imageAlt: 'alt',
      link: "/"
    },
    {
      title: '3/ Unter der Lupe – Können wir für Alzheimer von der MS lernen?',
      completedTime: 46,
      totalTime: 330,
      tag: 'episode 3',
      image: Episode2,
      imageAlt: 'alt',
      link: "/"
    },
    {
      title: '4/ Wechselwirkungen in der MS Therapie - Klinik und Pharmakologie',
      completedTime: 203,
      totalTime: 980,
      tag: 'episode 4',
      image: Episode4,
      imageAlt: 'alt',
      link: "/"
    },
    {
      title: '5/ Impfen bei MS zu Coronazeiten',
      completedTime: 74,
      totalTime: 180,
      tag: 'episode 5',
      image: Episode4,
      imageAlt: 'alt',
      link: "/"
    },
    {
      title: '6/ MS bei Kindern und im Alter',
      completedTime: 0,
      totalTime: 2000,
      tag: 'last',
      image: Episode4,
      imageAlt: 'alt',
      link: "/"
    },
  ];