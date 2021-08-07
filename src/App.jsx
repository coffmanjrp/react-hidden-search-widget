import { FaSearch } from 'react-icons/fa';
import './App.scss';

function App() {
  return (
    <div className="search active">
      <input type="text" className="input" placeholder="Search..." />
      <button className="btn">
        <FaSearch />
      </button>
    </div>
  );
}

export default App;
