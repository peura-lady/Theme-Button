import React from 'react';
import ThemeContext from './ThemeContext';

function HeaderButton() {
  const colorTeam = React.useContext(ThemeContext);
  return (
    <div>
      <button value={colorTeam}>Press me</button>
    </div>
  );
}

export default HeaderButton;
