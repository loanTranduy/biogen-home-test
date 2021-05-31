import React from 'react'
import MaskRatio from '../layout/MaskRatio'
import Tag from '../dumb/Tag';
import ProgressBar from '../dumb/ProgressBar';
import MultilineEllipsis from '../dumb/MultilineEllipsis';
import { Box } from './VideoPreview.style';

interface Props { 
    tag?: string, 
    to: string,
    completedTime?: number,
    image: string,
    imageAlt: string,
    title: string,
    totalTime?: number,
}


const VideoPreviewItem: React.FC<Props> = ({to, image, imageAlt, tag, completedTime, title, totalTime}) => {

    const makeTimeReadable = (t: number) => {
        const timeInSec =  t / 60;
        const min = Math.floor(timeInSec);
        const sec = Math.floor((timeInSec - min) * 100)
        return  min + ':' + sec;
    }

return (
        <Box href={to}>
            <MaskRatio ratio="video">
                <img src={image} alt={imageAlt}/>
                {tag && <Tag small>{tag}</Tag>}
                {completedTime && <Tag backgroundColor="black70">{makeTimeReadable(completedTime)}</Tag>}
                {completedTime !== 0 && <ProgressBar totalTime={totalTime} completedTime={completedTime}/>}
            </MaskRatio>
            {title &&
            <MultilineEllipsis maxLine={2}>
                <p>{title.charAt(0).toUpperCase() + title.slice(1)}</p>
            </MultilineEllipsis>
            }
        </Box>
    )
}

export default VideoPreviewItem