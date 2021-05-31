import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from "./styles/reset";
import { InjectFont } from './styles/fonts';

const Root = () => (
    <>
      <InjectFont/>
      <GlobalStyle />
      <App />
    </>
  )
   
  ReactDOM.render(<Root />, document.querySelector('#root'))
