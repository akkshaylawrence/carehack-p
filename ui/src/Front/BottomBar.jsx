import React from 'react';
import { Link } from 'react-router-dom';

function BottomBar() {
  return (
    <div className="uk-child-width-1-2" data-uk-grid>
      <div>
        <button className="uk-button-link nreg uk-button-primary uk-width-1-1">
          <Link to="/login">Login</Link>
        </button>
      </div>
      <div>
        <button className="uk-button-link nreg uk-button-primary uk-width-1-1">
          <Link to="/register">Register</Link>
        </button>
      </div>
    </div>
  );
}

export default BottomBar;

