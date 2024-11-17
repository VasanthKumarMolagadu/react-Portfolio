import HomePage from './components/LandingPage';
import { BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
    return(
        <div>
            <BrowserRouter future={{
    v7_startTransition: true,
  }}>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;