import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Banner from './components/layout/Banner';
import Dashboard from './pages/dashbord/Dashboard';
import Members from './pages/members/Members';
import Associations from './pages/associations/Associations'
import Treasury from './pages/treasury/Treasury'
import Communique from './pages/communique/Communique'
import Suggestion from './pages/suggestion/Suggestion';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<AppLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path='/associations' element={<Associations />} />
                        <Route path='/members' element={<Members />} />
                        <Route path='/treasury' element={<Treasury />} />
                        <Route path='/communication' element={<Communique />} />
                        <Route path='/suggestion' element={<Suggestion />} />
                    </Route>
                </Routes>
             </BrowserRouter>
             <Banner show={show} setShow={setShow}>
                <Button as="a" variant="dark" onClick={handleShow}  >
                    Ajouter une association
                </Button>
                <h1 className='title'><i className='bx bxs-group bx-sm bx-border-circle'></i></h1>
                <h1 className='title'>20000 MEMBRES</h1>
			</Banner>
        </div>
    );
}
 
export default App;