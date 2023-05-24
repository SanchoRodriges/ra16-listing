import Listing from './components/Listing'
import data from './data/etsy.json'
import './App.css';

console.log(typeof data);
console.log(data);

function App() {
  return (
    <div className='container'>
      <Listing items={data}/>
    </div>
  );
}

export default App;
