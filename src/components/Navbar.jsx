import React from 'react';
import { Link } from 'react-router-dom';
import { SplitButton } from 'primereact/splitbutton';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';

//Constant for AppTopbar  Page
const items = [
  {
    index: 1,
    label: 'Profile',
    icon: 'pi pi-user',
  },

  {
    index: 2,
    label: 'Add User',
    icon: 'pi pi-user-plus',
  },

  {
    index: 3,
    label: 'Edit User',
    icon: 'pi pi-user-edit',
  },
  {
    index: 4,
    label: 'Logout',
    icon: 'pi pi-sign-out',
    command: () => {
      localStorage.clear();
      window.location = '/login';
    },
  },
];

const stickyNavbar = {
  position: 'sticky',
  top: '0',
  zIndex: '999',
};

const start = (
  <div style={{ display: 'flex' }} className="p-mr-5">
    <Link to="/">
      <img
        src={process.env.PUBLIC_URL + '/assets/images/logo-white.svg'}
        height="40"
        alt="SSA logo"
      />
    </Link>
  </div>
);

const end = (
  <>
    <Link to="/">
      <Button
        label="Home"
        icon="pi pi-home"
        className="p-button-text mr-2 mb-2"
      />
    </Link>
    <SplitButton
      label="User"
      icon="pi pi-user"
      className="p-button-text mr-2 mb-2"
      model={items}
    ></SplitButton>
  </>
);

function Navbar() {
  return (
    <div className={stickyNavbar} id="navigation">
      <Menubar start={start} end={end} />
    </div>
  );
}

export default Navbar;
