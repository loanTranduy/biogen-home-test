import Episode2 from '../assets/images/video-preview/episode-2.webp';
import Episode3 from '../assets/images/video-preview/episode-3.webp';
import Episode4 from '../assets/images/video-preview/episode-4.webp';
import Episode2Jpg from '../assets/images/video-preview/episode-2.jpg';
import Episode3Jpg from '../assets/images/video-preview/episode-3.jpg';
import Episode4Jpg from '../assets/images/video-preview/episode-4.jpg';

import { TVideoPreviewList } from '../components/video-preview/VideoPreview.types';

export const mockedVideoPreviews: TVideoPreviewList = [
    {
      title: 'MS und Familienplanung Immuntherapien bei MS',
      completedTime: 162,
      totalTime: 1200,
      tag: 'episode 1',
      image: Episode4,
      imageJpg: Episode4Jpg,
      imageAlt: 'Biology course',
      link: "/"
    },
    {
      title: 'MS und Familienplanung MS-Aktivität in der Schwangerschaft und danach with extra text to check ellipsis',
      completedTime: 90,
      totalTime: 100,
      tag: 'episode 2',
      image: Episode3,
      imageJpg: Episode2Jpg,
      imageAlt: 'Biology course',
      link: "/"
    },
    {
      title: 'Unter der Lupe – Können wir für Alzheimer von der MS lernen?',
      completedTime: 46,
      totalTime: 330,
      tag: 'episode 3',
      image: Episode2,
      imageJpg: Episode3Jpg,
      imageAlt: 'Biology course',
      link: "/"
    },
    {
      title: 'Wechselwirkungen in der MS Therapie - Klinik und Pharmakologie',
      completedTime: 203,
      totalTime: 980,
      tag: 'episode 4',
      image: Episode4,
      imageJpg: Episode4Jpg,
      imageAlt: 'Biology course',
      link: "/"
    },
    {
      title: 'Impfen bei MS zu Coronazeiten',
      completedTime: 74,
      totalTime: 180,
      tag: 'episode 5',
      image: Episode4,
      imageJpg: Episode4Jpg,
      imageAlt: 'Biology course',
      link: "/"
    },
    {
      title: 'MS bei Kindern und im Alter',
      completedTime: 0,
      totalTime: 2000,
      tag: 'episode 6',
      image: Episode4,
      imageJpg: Episode4Jpg,
      imageAlt: 'Biology course',
      link: "/"
    },
  ];