// Font sizes
export const fontSize = (pxSize : number) => `font-size: ${pxSize / 16}rem`;
/* usage: 
    const Title = styled.h1`
        ${fontSize(16)};
    `
 _____________________________________________________________*/

// Line heights 
export const lineHeight = (pxSize : number) => `line-height: ${pxSize / 16}rem`;
/* usage: 
    const Title = styled.h1`
        ${lineHeight(16)};
    `
 _____________________________________________________________*/

// Ratios 
export const Ratios = {
    video: '50%', // 2:1
    square: '100%', // 1:1
};
/* usage: See "MaskRatio.tsx"
 _____________________________________________________________*/

// FlexBox
export const flexBox = (
    direction?: "row" | "column", 
    justify?:  "space-between" | "flex-end" | "flex-start" | "center" | "space-around",
    align?: "space-between" | "flex-end" | "flex-start" | "center" | "space-around",
    ) => `
    display: flex;
    flex-direction: ${direction ? direction : "row"};
    justify-content: ${justify};
    align-items: ${align};
`
/* usage: 
    const Box = styled.div`
        ${flexBox( "row" , "space-between", "flex-start")};
    `
 _____________________________________________________________*/





