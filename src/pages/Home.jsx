import { Button } from 'primereact/button';
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const lendingPageMenuItems = [
    {
      label: 'Duplicate Inventory Reduction',
      to: '/duplicateinventoryreduction',
    },
    {
      label: 'AI Challenger',
      to: '/aichallenger',
    },
    {
      label: 'Vendor Data Enrichment',
      to: '/vendordataenrichment',
    },
  ];

  return (
    <div style={{ display: 'flex', height: window.innerHeight }}>
      <div className="s1"></div>
      <div className="home-right">
        {lendingPageMenuItems.map(menu => (
          <Link
            to={menu.to}
            key={menu.to}
            className="previousbutton my-3 homeButtons"
            style={{ width: '95%' }}
          >
            {menu.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
