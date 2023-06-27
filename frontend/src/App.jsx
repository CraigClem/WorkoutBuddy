import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import NavBar from './components/NavBar';

const App = () => {

    return (

        <BrowserRouter>
            <div className=''>
                <NavBar/>
                <div className='p-5 mx-auto max-w-screen-xl'>
                    <Routes>
                        <Route 
                            path="/" 
                            exact element={<Home/>}
                        />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    )
}

export default App
