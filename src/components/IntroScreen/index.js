// 首屏动画
import { useState, useRef, useEffect } from 'react';
import Video from '../../assets/media/screen.mp4';
import DefaultPoster from '../../assets/img/introScreen/default-poster.png';
import classNames from 'classnames';
import './index.css';

// 按钮配置数据
const NAVIGATION_BUTTONS = [
  {
    id: '1',
    defaultText: '星图探索',
    hoverText: '开启星际航行地图'
  },
  {
    id: '2',
    defaultText: '文明档案',
    hoverText: '查阅银河文明数据库'
  },
  {
    id: '3',
    defaultText: '时空穿梭',
    hoverText: '启动量子跃迁引擎'
  },
  {
    id: '4',
    defaultText: '时空穿梭',
    hoverText: '启动量子跃迁引擎'
  }
];

export default function IntroScreen({
  onChangeTab
}) {
  // 状态管理
  const [isVideoError, setIsVideoError] = useState(false);
  const [hasVideoEnded, setHasVideoEnded] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);
  const videoRef = useRef(null);
  const [hoveredButton, setHoveredButton] = useState(1);


  // 视频错误处理
  const handleVideoError = (err) => {
    setIsVideoError(true);
    setHasVideoEnded(true);
    if (videoRef.current) {
      videoRef.current.remove();
    }
  };

  // 自动播放处理
  useEffect(() => {
    const attemptAutoPlay = async () => {
      try {
        if (videoRef.current) {
          await videoRef.current.play();
        }
      } catch (err) {
        setIsVideoError(true);
        setHasVideoEnded(true);
      }
    };
    attemptAutoPlay();
  }, []);

  const handleNavigationClick = (index) => {
    onChangeTab(index)
  }

  return (
    <div className="container">
      {/* 视频容器 */}
      {!showNavigation && (
        <div className="video-container">
          {isVideoError ? (
            // 错误时显示默认帧 
            <img
              src={DefaultPoster}
              alt="默认封面"
              className="media-frame"
            />
          ) : (
            // 视频播放器
            <video
              ref={videoRef}
              className="media-frame"
              muted={false}
              autoPlay
              playsInline
              onEnded={() => setHasVideoEnded(true)}
              onError={handleVideoError}
              src={Video}
            >
              您的浏览器不支持视频播放
            </video>
          )}

          {/* 开始按钮 */}
          {hasVideoEnded && (
            <div className="button-wrapper">
              <div
                className="start-button"
                onClick={() => setShowNavigation(true)}
              >
              </div>
            </div>
          )}
        </div>
      )}

      {/* 序章导航页面 */}
      {showNavigation && (
        <div className="navigation-page">
          <div className={classNames("navigation-content", {
            [`active${hoveredButton}`]: true
          })}>

            <div className='navigation-buttons'>

              {NAVIGATION_BUTTONS.map((btn, index) => (
                <div
                  key={btn.id}
                  className={classNames("nav-button", {
                    'active': index + 1 === +hoveredButton,
                    [`active${hoveredButton}`]: true,
                    [`btn${index + 1}`]: true,
                  })}
                  onMouseEnter={() => setHoveredButton(btn.id)}
                  onClick={() => handleNavigationClick(index + 1)}
                // onMouseLeave={() => setHoveredButton(null)}
                >
                </div>
              ))}
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
