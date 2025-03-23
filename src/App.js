import { useEffect, useState, useRef } from 'react';

import Header from './components/Header';
import IntroScreen from './components/IntroScreen';
import Lottery from './components/Lottery';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';

import BGM from './assets/media/BGM.mp3';
import './App.css';


function scrollToTop() {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8); // 调整除数可改变滚动速度
  }
}
function App() {
  const [tabIndex, setTabIndex] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    scrollToTop();
  }, [tabIndex])

  // 处理标签切换逻辑
  useEffect(() => {
    if (tabIndex >= 1 && tabIndex <= 4) {
      // 启动循环播放
      if (audioRef.current) {
        audioRef.current.loop = true;
        audioRef.current.play().catch(error => {
          console.error('自动播放失败:', error);
        });
      }
    } else if (tabIndex === 0) {
      // 重置音频
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current.loop = false;
      }
    }
  }, [tabIndex]);

  return (
    <div className="App">

      {/* 隐藏的音频元素 */}
      <audio
        ref={audioRef}
        src={BGM}
        style={{ display: 'none' }}
      />

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
      {
        tabIndex === 2 ? <Page2 /> : null
      }
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
