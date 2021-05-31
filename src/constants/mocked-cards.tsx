import Women from '../assets/images/cards/card-2.png'
import DMG from '../assets/images/cards/card-3.png'
import Neurogenium from '../assets/images/cards/card-1.png'

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
    }
  },
  {
    title: 'Experten-Interviews zur SMA',
    score: 4.7,
    tag: 'interviews',
    follow: 5,
    image: {
      src: Women,
      alt: "Teacher"
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
    }
  },
  {
    title: 'Lesen und Lesen lassen',
    score: 4.0,
    tag: 'explainer',
    follow: 3,
    image: {
      src: Women,
      alt: "Teacher"
    }
  },
];