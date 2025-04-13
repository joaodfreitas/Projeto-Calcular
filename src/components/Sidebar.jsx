import React from 'react';
import { DesafioMatematico } from './DesafioMatematico';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div style={{ backgroundColor: '#8b5cf6', minHeight: '100vh', padding: '1rem' }}>
  <DesafioMatematico />
</div>
    </div>
  );
};

export default Sidebar;