import React, {Fragment} from 'react';
import '../css/AdminPage.css';
import Navbar from '../Navbar/Navbar';

const AdminPage = () => {
	return (
    <Fragment>
      <Navbar/>
      <div id="adminPage">
        <label> Numéro de l'annonce:
          <input type="text" name="Numéro de l'annonce" />
        </label>
      </div>
    </Fragment>
  );
}

export default AdminPage;
