import Women from '../assets/images/cards/card-2.webp';
import DMG from '../assets/images/cards/card-3.webp';
import Neurogenium from '../assets/images/cards/card-1.webp';
import WomenJpg from '../assets/images/cards/card-2.jpg';
import DMGJpg from '../assets/images/cards/card-3.jpg';
import NeurogeniumJpg from '../assets/images/cards/card-1.jpg';

import { TCardItem } from '../components/cards/TCardItem.types';

export const mockedCards: TCardItem = [
  {
    title: 'Neurogenium Aktuell',
    score: 4.5,
    tag: 'webinar',
    follow: 7,
    image: {
      src: Neurogenium,
      alt: "Neurogenium logo",
      srcset: NeurogeniumJpg,
    }
  },
  {
    title: 'Experten-Interviews zur SMA',
    score: 4.7,
    tag: 'interviews',
    follow: 5,
    image: {
      src: Women,
      alt: "Teacher",
      srcset: WomenJpg,
    }
  },
  {
    title: 'Nusinersen – Wirksamkeit bei 5q-SMA ist keine Frage des Alters?',
    score: 4.1,
    tag: 'symposium',
    follow: 9,
    image: {
      src: DMG,
      alt: "DMG 2021 logo",
      srcset: DMGJpg,
    }
  },
  {
    title: 'Lesen und Lesen lassen',
    score: 4.0,
    tag: 'explainer',
    follow: 3,
    image: {
      src: Women,
      alt: "Teacher",
      srcset: WomenJpg,
    }
  },
];