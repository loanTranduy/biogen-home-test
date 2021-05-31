import { Header } from './components/dumb/Header'
import Grid from './components/layout/Grid';
import VideoPreviewCarousel from './components/video-preview/VideoPreviewCarousel';

const App = () => (
    <>
        <Header/>
        <Grid>
            <VideoPreviewCarousel/>
        </Grid>  
    </>
    )
export default App;