import { useState } from 'react';

const App = () => {
  const [showCountry, setShowCountry] = useState(true);

  const user = {
    name: 'Ahmad',
    age: 30,
    country: 'Egypt',
  };

  const toggleCountryVisibility = () => {
    setShowCountry(!showCountry);
  };

  return (
    <div>
      <div>{user.name}</div>
      <div>{user.age}</div>
      {showCountry && <div>{user.country}</div>}

      <button onClick={toggleCountryVisibility}>
        Toggle Country visibility
      </button>
    </div>
  );
};

export default App;
