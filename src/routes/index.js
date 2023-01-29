import { BrowserRouter, Routes, Route } from 'react-router-dom';


// MY IMPORTS
import Home from '../views/Home';
import Contato from '../views/Contato';
import Produtos from '../views/Produtos';

export default function RoutesApp(){
    return(
        <BrowserRouter >
            <Routes >
                <Route path='/' element={ <Home /> } />
                <Route path='/contato' element={<Contato /> } />
                <Route path='/produtos' element={<Produtos />} />
            </Routes>
        </BrowserRouter>
    )
}