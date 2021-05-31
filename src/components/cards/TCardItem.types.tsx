// Define the types for a video preview item
export type TCardItemProps = { 
    title: string, 
    score?: number,
    tag?: string ,
    follow?: number,
    image: {
        alt: string,
        src: string,
        srcset: string
    },
    
}

// Define the types for a video preview item collection
export type TCardItem = TCardItemProps[]

// Define the props passed to the video preview component
export type TVideoPreviewProps = {
  cards: TCardItemProps[]
}