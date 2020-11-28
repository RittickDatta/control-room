import React from 'react';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Agenda from '../Agenda/Agenda';
import Tasks from '../Tasks/Tasks';
import People from '../People/People';
import Meetings from '../Meetings/Meetings';

function Layout() {
  return (
    <React.Fragment>
      <Header />
      <Agenda />
      <Tasks />
      <People />
      <Meetings />
      <Footer />
    </React.Fragment>
  );
}
export default Layout;
