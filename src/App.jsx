import { useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './App.scss';

function App() {
  const [active, setActive] = useState(false);
  const inputRef = useRef();

  const handleClick = () => {
    setActive((prev) => !prev);
    inputRef.current.focus();
  };

  return (
    <div className={`search${active ? ' active' : ''}`}>
      <input
        type="text"
        ref={inputRef}
        className="input"
        placeholder="Search..."
      />
      <button className="btn" onClick={handleClick}>
        <FaSearch />
      </button>
    </div>
  );
}

export default App;
