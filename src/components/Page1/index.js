import { useEffect } from 'react';
import { motion } from 'framer-motion';
import './index.css';

function Page1() {

  useEffect(() => {
    // window.addEventListener("scroll", function () {
    //   const img = document.querySelector(".page1-section2-animation");
    //   console.log('>>window.scrollY', window.scrollY)
    //   try {
    //     if (window.scrollY >= 2000) {
    //       img.classList.add("animate");
    //     } else {
    //       img.classList.remove("animate");
    //     }
    //   } catch (e) {
    //     console.log(e)
    //   }
    // });
  }, [])

  return (
    <div className="page1">
      <section className="page1-section1">
        <div className="page1-title">
          【星宿起源】
        </div>
        <div className="page1-desc">
          星宿文化作为中国优秀传统文化之一， 发展出天文气象、 节气时令等等应用科学，在古代领导阶级的传教下，也用于宗教信仰和阶级统治等人文秩序多种领域，在历史发展长河中，也留下了许多有关星宿的珍贵文化遗产，是传统文化中“天文”及“人文” 的庞大知识体系中的桥梁，通过恰当地把现代流行元素同传统二十八星宿文化内容相结合，加以数字化手段的探索和创新，能够很好地实现传统二十八星宿文化的弘扬
        </div>

        <motion.div
          className="page1-content"
          layout
          initial={{ opacity: 0, rotate: 0 }}      // 初始状态
          whileInView={{ opacity: 1, rotate: 360 }}   // 进入视口时的目标状态
          transition={{ duration: 5 }}       // 动画过渡参数
        >
        </motion.div>

        <div className="page1-content-desc">
          古人通过观察星宿的布局空间来理解宇宙，制定历法，预测自然现象，构建神话传说以及统治信仰。<br />
          传统二十八星宿的基础属性从天文科学理论延伸而来，一开始是观测、计算月亮的轨迹日程，<br />
          后成为计量星体位置的坐标和框架，并呈现出“三垣四象二十八宿”的方位星象，<br />其中”三垣“指的是划分星空的三个星区：紫微垣、太微垣和天市垣，四象（又称四陆、四兽）<br />则划分了东西南北四个方位的星区，并赋予每个星区象征形象，称为“东苍龙、西白虎、南朱雀、北玄武”
        </div>
      </section>
      <section className="page1-section2">
        <div className="page1-long-title">
          二十八星宿称呼由来
        </div>
        <div className="page1-section2-title2"></div>
        <div className="page1-section2-desc">
          二十八宿：二十八星宿阵列四大星区之中，每象各分七段，每一小段称之为“宿”， <br />
          “宿”字来源于古人将月亮每晚移动到不同星区位置的行迹拟人化认为月亮在此过夜住宿
        </div>
        <motion.div
          className="page1-section2-desc-content"
          layout
          initial={{ opacity: 0, x: 300 }}      // 初始状态
          whileInView={{ opacity: 1, x: 0 }}   // 进入视口时的目标状态
          transition={{ duration: 3 }}       // 动画过渡参数
        >
        </motion.div>
        <motion.div className="page1-section2-animation"
          layout
          initial={{ opacity: 0, y: 500 }}      // 初始状态
          whileInView={{ opacity: 1, y: 0 }}   // 进入视口时的目标状态
          transition={{ duration: 3 }}       // 动画过渡参数
        >
          <div className="page1-section2-animation-title"></div>

          <div className="page1-section2-animation-desc">
            二十八星宿按四方划分为青龙、白虎、朱雀、玄武四象，每象七宿。在七曜（日、月、火、水、木、金、土）的曜属配定中，各宿依据其天文方位与五行属性被赋予特定星曜特质。如东方青龙七宿对应木曜，其中角宿为木曜主星；南方朱雀七宿属火曜，井宿为火曜主星。这种配属通过《七曜历》等文献确立，形成“星宿一曜日一五行”的联动体系，为演禽术提供天文坐标基础。
          </div>

          <div className="page1-section2-animation-desc">
            <span>七曜特质渗透：</span> 神禽兼具星曜能量，如房日兔含太阳之精，心月狐具太阴之灵，构成“星体一神禽一能量”三位一体结构。
          </div>
          <div className="page1-section2-animation-content"></div>
        </motion.div>
      </section>
      <section className="page1-section3">
        <div className="page1-section3-title"></div>
        <div className="page1-section3-title-desc">
          演禽术将二十八种神禽异兽与星宿、曜日对应，构建出拟象化的占卜符号体系：
        </div>

        <div className="page1-section3-progress">
          <div className="page1-section3-progress-desc1">起源：从天文观测到术数融合</div>
          <div className="page1-section3-progress-desc2">总结性发展：从命理到文化符号</div>
          <div className="page1-section3-progress-desc3">先秦纪日法与星宿体系</div>
          <div className="page1-section3-progress-desc4">道教与密宗的融合</div>
          <div className="page1-section3-progress-desc5">明清时期的多样化应用</div>
          <div className="page1-section3-progress-desc6">宋代星禽术的定型</div>
          <div className="page1-section3-progress-desc7">哲学与文化内核</div>
        </div>
        <div className="page1-section3-content"></div>
      </section>
    </div>
  );
}

export default Page1;
