import PoppinsMediumWoff2 from '../assets/fonts/poppins/poppins-medium-webfont.woff2'
import PoppinsMediumWoff from '../assets/fonts/poppins/poppins-medium-webfont.woff'
import PoppinsSemiBoldWoff2 from '../assets/fonts/poppins/poppins-semibold-webfont.woff2'
import PoppinsSemiBoldWoff from '../assets/fonts/poppins/poppins-semibold-webfont.woff'

import { createGlobalStyle } from 'styled-components';

export const InjectFont = createGlobalStyle`
    @font-face {
        font-family: 'poppinsmedium';
        src: url('${PoppinsMediumWoff2}') format('woff2'),
             url('${PoppinsMediumWoff}') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'poppinssemibold';
        src: url('${PoppinsSemiBoldWoff2}') format('woff2'),
             url('${PoppinsSemiBoldWoff}') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
`

export const fontFamilies = {
    primary: "'poppinsmedium', Helvetica, sans-serif",
    secondary: "'poppinssemibold', Helvetica, sans-serif"
};