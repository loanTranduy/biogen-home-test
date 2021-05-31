import { mockedVideoPreviews } from '../../constants/mocked-video-previews';
import Section from '../layout/Section'
import MultiCarousel from '../carousel/MultiCarousel'
import VideoPreviewItem from '../../components/video-preview/VideoPreviewItem';

const VideoPreviewCarousel = () => {
    const seeAll = 'Alle zeigen(' + mockedVideoPreviews.length + ')'
    
    return (
        <Section title="Swiper library" withRightLink={seeAll} to="/">
                <MultiCarousel>
                    {mockedVideoPreviews.map((video, i) => (
                                    <VideoPreviewItem 
                                    key={i}
                                    to={video.link}
                                    title={video.title} 
                                    image={video.image} 
                                    imageAlt={video.imageAlt} 
                                    tag={video.tag} 
                                    completedTime={video.completedTime} 
                                    totalTime={video.totalTime}
                                    />
                            ))}
                </MultiCarousel>
            </Section>
    )
}

export default VideoPreviewCarousel
