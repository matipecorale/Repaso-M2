import { Routes, Route } from 'react-router-dom';
import Contador from './components/01-Contador';
import { Input } from './components/02-Input';
import Lista from './components/03-Lista'
import { Registro } from './components/04-Registro';
function App() {
  return (
    <>
      <Routes>
        <Route path='/input' element={<Input />} />
        <Route path='/contador' element={<Contador />} />
        <Route path='/lista' element={<Lista />} />
        <Route path='/registro' element={<Registro />} />
      </Routes>
    </>
  );
}

export default App;
