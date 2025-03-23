import { useState } from 'react';
import classNames from 'classnames';
import './index.css'; // 创建单独的样式文件

// 文案数据数组
const TEXTS = [
  {
    title: '毕月乌',
    content: [
      '毕宿坚毅稳重，安详和谐，',
      '比较理想主义，有财气懂得计划。',
      '要注意提高自己的应变能力，作事有始有终，',
      '才不被别人认为眼高手底。'
    ]
  },
  {
    title: '北方·虚日鼠',
    content: [
      '虚宿富贵天生，人缘好，具有坚韧的耐力，',
      '对玄学有兴趣，好奇心重。但由于主观强爱争执，',
      '而令自己的精神受压抑'
    ]
  },
  {
    title: '东方·亢金龙',
    content: [
      '亢宿精明决策，具有说服力，计划欠周详，',
      '容易意气用事，有斗志但运程有反复，',
      '脾气容易冲动。常因高傲和爱慕虚荣而出现损失。'
    ]
  },
  {
    title: '南方·张月鹿',
    content: [
      '张宿懂得讨人喜欢，有计谋，重视安逸的生活，',
      '喜欢研究学问。若是固持好胜，',
      '一生则波折不断，具有成功的条件，',
      '还要把握机会才行。'
    ]
  },

  {
    title: '北方·危月燕',
    content: [
      '危宿脾气容易急躁，性情刚硬，',
      '本性善良而无心机，容易在人际关系上吃亏。',
      '好坏两个极端，比较明显，',
      '因为本身具有实力，要看把握的方向了。'
    ]
  },
  {
    title: '东方·心月狐',
    content: [
      '心宿坚毅勤奋，忌恶扬善，不怕吃苦，',
      '积极具有正义感，属于能者多劳。',
      '不足的地方是疑心过重，',
      '有时会妨碍才能的发挥与事业的发展。'
    ]
  },
  {
    title: '西方·奎木狼',
    content: [
      '奎宿感情丰富，耿直而友善热情，追求真善美，',
      '人生比较幸运。欠缺胆识和耐力，',
      '只要放下固执，幸福就在身边了。'
    ]
  },
  {
    title: '南方·翼火蛇',
    content: [
      '翼宿具有艺术气质，不喜欢竞争，',
      '陶醉在自我的世界，通常在外地发展有收获。',
      '由于主观强，言词尖锐，容易引起是非或者误会。'
    ]
  },
  {
    title: '东方·尾火虎',
    content: [
      '尾宿个性严肃，能干谨慎，喜欢竞争，',
      '要注意修养和内涵，才能够成就财富。',
      '要注意的地方：外冷内热，',
      '容易弄巧成拙，带来相反的效果。'
    ]
  },
  {
    title: '北方·女土蝠',
    content: [
      '女宿乐于助人，适合学习专门的技能，',
      '思考敏捷，为了自己的信念会努力奋斗。',
      '挫败的原因，常因个性刚强，',
      '不懂情调，或者是太坦白了。'
    ]
  },
];

export default function Lottery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentText, setCurrentText] = useState(null);
  const [randomIndex, setRandomIndex] = useState(1);
  const handleIconClick = () => {

    // 随机选择文案
    const randomIndex = Math.floor(Math.random() * TEXTS.length);
    setCurrentText(TEXTS[randomIndex]);
    setRandomIndex(randomIndex + 1);

    setIsModalOpen(true);
  };

  return (
    <>
      {/* 点击图标 */}
      <div
        className={`lottery-icon`}
        onClick={handleIconClick}
      ></div>

      {/* 弹窗遮罩 */}
      {isModalOpen && (
        <div className="modal-mask" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div
              className="close-btn"
              onClick={() => setIsModalOpen(false)}
            ></div>

            <div className={classNames("modal-content-img", {
              [`img${randomIndex}`]: true
            })}></div>
            <div className={classNames("modal-content-name", {
              [`name${randomIndex}`]: true
            })}
            ></div>

            {/* 动态显示文案 */}
            {currentText && (
              <div className="modal-content-text">
                <div className="modal-content-title">{currentText.title}</div>
                <div className="content">
                  {currentText.content.map((text, index) => (
                    <div key={index}>{text}</div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div >
      )
      }
    </>
  );
}