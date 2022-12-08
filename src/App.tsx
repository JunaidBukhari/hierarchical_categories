import Header from './components/header';
import CategoryContainer from './components/categoryContainer';
import { useState } from 'react';
import './App.css';

function App() {
  const [scale, setScale] = useState(100);

  return (
    <div className='App'>
      <Header setScale={setScale} scale={scale} />
      <CategoryContainer scale={scale} />
    </div>
  );
}

export default App;
