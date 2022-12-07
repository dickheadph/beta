import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './Components/Form';
import Index from './Pages/Index';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/form' element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
