// Define the types for a video preview item
export type TVideoPreviewItemProps = { 
    tag?: string, 
    completedTime?: number,
    image: any,
    imageAlt: string,
    title: string,
    totalTime?: number,
    link: string
}

// Define the types for a video preview item collection
export type TVideoPreviewList = TVideoPreviewItemProps[]

// Define the props passed to the video preview component
export type TVideoPreviewProps = {
  videos: TVideoPreviewItemProps[]
}