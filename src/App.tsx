import { Header } from './components/dumb/Header'
import Grid from './components/layout/Grid';
import VideoPreviewCarousel from './components/video-preview/VideoPreviewCarousel';
import CardCarousel from './components/cards/CardCarousel';

const App = () => (
    <>
        <Header/>
        <Grid>
            <VideoPreviewCarousel/>
            <CardCarousel/>
        </Grid>  
    </>
    )
export default App;