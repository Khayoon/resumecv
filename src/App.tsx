import React from 'react';
import styles from './App.module.scss';
import Resume from './components/Resume';

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Resume />
    </div>
  );
}

export default App;
