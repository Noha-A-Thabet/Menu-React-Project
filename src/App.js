import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import Data from './data';

function App() {
  const [menuInfo, setMenuInfo] = useState(Data);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuInfo(Data);
      return;
    }
    const newItems = Data.filter((item) => item.category === category)
    setMenuInfo(newItems)
  }


  return <main>
    <section className='menu'>
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
        <Categories filterItems={filterItems} />
        <Menu items={menuInfo} />
      </div>
    </section>
  </main>
}

export default App;
