import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BookTicket } from './Components/BookTicket';
import { ViewMovies } from './Components/ViewMovies';
import { CancelTicket } from './Components/CancelTicket';
import { RateMovie } from './Components/RateMovie';

function App() {
  return (
    <div>
<BrowserRouter>

<Routes>


  <Route path='/' element={<ViewMovies/>}/>
<Route path='/book' element={<BookTicket/>}/>
<Route path='/cancel' element={<CancelTicket/>}/>
<Route path='/rate' element={<RateMovie/>}/>
</Routes>
</BrowserRouter>


    </div>
  );
}

export default App;
