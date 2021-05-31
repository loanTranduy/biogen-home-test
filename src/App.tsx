import { Header } from './components/dumb/Header'
import Grid from './components/layout/Grid';
import Section from './components/layout/Section';

const App = () => (
    <>
        <Header/>
        <Grid>
            <Section title="title">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis illum obcaecati expedita quibusdam reiciendis omnis ipsam dicta, minima ab ipsa quia quos soluta non tempora, officiis iste velit. Omnis eum ea dolorem nam dolorum, perferendis vero itaque provident mollitia dolor, pariatur ratione voluptas voluptatem quod amet in esse facilis illum.</p>
            </Section>
            <Section title="title" withRightLink="See all" to="/">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis illum obcaecati expedita quibusdam reiciendis omnis ipsam dicta, minima ab ipsa quia quos soluta non tempora, officiis iste velit. Omnis eum ea dolorem nam dolorum, perferendis vero itaque provident mollitia dolor, pariatur ratione voluptas voluptatem quod amet in esse facilis illum.</p>
            </Section>
        </Grid>  
    </>
    )
export default App;