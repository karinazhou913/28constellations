import { useState } from 'react';

import Header from './components/Header';
import IntroScreen from './components/IntroScreen';
import Lottery from './components/Lottery';
import Page1 from './components/Page1';
// import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import './App.css';

function App() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="App">
      {
        tabIndex === 0 ? null : <Header
          tabIndex={tabIndex}
          onChange={(index) => setTabIndex(index)}
        />
      }
      {tabIndex === 1 ? <Lottery /> : null}
      {
        tabIndex === 0 ? <IntroScreen onChangeTab={(index) => setTabIndex(index)} /> : null
      }
      {
        tabIndex === 1 ? <Page1 /> : null
      }
      {/* {
        tabIndex === 2 ? <Page2 /> : null
      }
       */}
      {
        tabIndex === 3 ? <Page3 /> : null
      }
      {
        tabIndex === 4 ? <Page4 /> : null
      }

    </div>
  );
}

export default App;
