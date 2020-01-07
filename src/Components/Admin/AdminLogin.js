import React from 'react';
import '../css/AdminLogin.css';

function AdminLogin() {
  return (
    <div id="adminLogin">
      <h1>Administrateur</h1>
      <div className="formulaire">
        <form>
          <label>identifiant:
            <input type="text" name="identifiant" />
          </label>
          <label> Mot de passe:
            <input type="text" name="Mot de passe" />
          </label>
          <input type="submit" value="Envoyer" />
        </form>
      </div>
    </div>
  )
};

export default AdminLogin;