import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Category, Home, Item, NotFound } from '../pages';
import { NavBar } from '../components';
export const PublicRouter = ()=>{
    
    return(
        <Router>
            <NavBar/>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/item/:id' element={<Item/>}/>
                <Route exact path='/Category/:id' element={<Category/>}/>
                <Route exact path='*' element={<NotFound/>}/>
            </Routes>
        </Router>
    )
}