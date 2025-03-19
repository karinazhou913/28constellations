import { useState } from 'react';
import './index.css';
import classNames from 'classnames';

const TAB = ['画作', '雕塑', '绘画']
export default function Page4() {
  const [tabIndex, setTabIndex] = useState(0);


  return (
    <div className="page4">
      <section className="page4-section1">
        <div className="page4-section1-title"></div>
        <div className="page4-section1-desc">
          古往今来， 以二十八星宿为主题的艺术创作浩瀚如星海， 古人通过星宿图或作美好想象
          或作装饰或作纹样符号的艺术文化遗产， 往往映射着作者本人的信仰理念和当时作品所
          处社会情况
        </div>
        <div className="page4-section1-title-text"></div>
        <div className="page4-section1-title2">古今画作、雕塑、绘画</div>

        <div className="page4-section1-tab">
          {
            TAB.map((item, index) => <div
              onClick={() => setTabIndex(index)}
              className={classNames("page4-section1-tab-item", {
                "active": index === tabIndex
              })}>{item}</div>)
          }
        </div>
        <div className={classNames("page4-section1-tab-content", {
          "bg1": tabIndex === 0,
          "bg2": tabIndex === 1,
          "bg3": tabIndex === 2,
        })}></div>


      </section>
      <section className="page4-section2">
        <div className="page4-section2-title1">
          近现代研究与重构
        </div>
        <div className="page4-section2-content">
          <div className="page4-section2-content-title">APP Stellarium 模拟观测星宿位置</div>
          <div className="page4-section2-content-desc">
            <div className="title">学术研究与数据可视化：</div>
            <div className="li">
              <div className="li-title">清华简《五纪》的数据库建设</div>
              <div className="li-desc">
                清华简中记载的战国早期二十八宿名称（如
                <br />“建星”“伐”），已被录入“中国古代天文文献
                <br />数据库”，支持学者对比不同时期星宿体系
                <br />的差异，并生成星区分布的可视化图谱
              </div>
            </div>
            <div className="li">
              <div className="li-title">星占文化的动态模拟</div>
              <div className="li-desc">
                学者基于《开元占经》的占辞，开发了“星宿
                <br /> &nbsp;占验模拟器”，”，用户可选择特定星宿（如
                <br /> &nbsp;&nbsp;“狼星”主战、〝井宿”主水），输入历史事
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;件数据后生成占卜结果的可视化报告
              </div>
            </div>
          </div>
        </div>
      </section >
      <section className="page4-section3">
        <div className="page4-section3-title">当代文化衍生</div>
        <div className="page4-section3-title-desc1">
          01/影视游戏：《黑神话悟空》、《江南百景图》中场景角色的参考与设定
        </div>
        <div className="page4-section3-title-content1">
          <div className="page4-section3-title-content page4-section3-title-content1-img1"></div>
          <div className="page4-section3-title-content page4-section3-title-content1-img2"></div>
        </div>

        <div className="page4-section3-title-desc2">
          02/《落凡尘》中场景角色的参考与设定以及线下周边文创
        </div>
        <div className="page4-section3-title-content2">
          <div className="page4-section3-title-content page4-section3-title-content2-img1"></div>
          <div className="page4-section3-title-content page4-section3-title-content2-img2"></div>
        </div>

        <div className="page4-section3-text">
          星宿文化在艺术作品中涉及范围广泛，在市场上厂受好评的运用星宿元素的文娱作品有很<br />
          多，2024最出圈的当属 <span>《黑悟空神话》</span>，该游戏场棠中对山西玉皇庙 28 星宿彩塑如亢金龙
          <br />的无瑕复刻，再现了星宿人文艺术彩雕作品的瑰丽，此外，游戏<span>《江南白景图》</span>的鸡鸣山
          <br />步天观星地图中，也有四大星象关卡及分支任务，且支线任务中用到水运仪象台、浑仪、
          <br />仰仪、圭表、简仪等多种观星天文仪器。在今年上映的动画电影<span>《落凡尘》</span>中，则更为直接
          <br />将道教与星宿文化作为故事设定的大背景，主角是织女星的一对儿女，片中多次出现并刻画
          <br />女土蝠、参水猿、牛金牛、尾火虎等星宿各异形态性格，星宿文化的运用为市面上的文娱作
          <br />品增添了独特的传统文化风采。
        </div>
      </section>
    </div >
  );
}
