import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './pages/homepage';
import EmpathyResearch from './pages/empathyResearch';
import Idea from './pages/idea';
import Prototype from './pages/prototype';
import Testing from './pages/testing';
import Reflection from './pages/reflection';

function AppRouter() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/empathy-research" element={<EmpathyResearch/>}/>
                <Route path="/idea" element={<Idea/>}/>
                <Route path="/prototype" element={<Prototype/>}/>
                <Route path="/testing" element={<Testing/>}/>
                <Route path="/reflection" element={<Reflection/>}/>
            </Routes>
        </Router>
    )
}

export default AppRouter;