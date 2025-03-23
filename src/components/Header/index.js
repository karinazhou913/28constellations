import classNames from 'classnames';
import './index.css';
const tabs = [
  { title: '首页' },
  { title: '星宿起源' },
  { title: '二十八星宿' },
  { title: '生活信仰' },
  { title: '文遗作品' }
];

export default function Header({
  tabIndex,
  onChange
}) {
  return (
    <div className="header-wrapper">
      <div className="header-container">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={classNames("header-item", {
              "active": tabIndex === index
            })}
            onClick={() => onChange(index)}
          >
            {
              tabIndex === index ? <div className={classNames("header-item-active")}></div> : null
            }
            <span>
              {tab.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};