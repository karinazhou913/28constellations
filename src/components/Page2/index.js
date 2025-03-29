import { useState, useMemo } from 'react';
import classNames from 'classnames';
import { motion } from "framer-motion";
import './index.css';

import SimpleSwiper from './components/Simpleswiper';
import MixSwiper from './components/MixSwiper';
const TAB = [0, 1, 2, 3];

const TAB_CONTENT = [
  // 东方星宿
  [
    { title: '角1', content: '主管将军、兵甲、雨泽和农田耕作‌', width: '181px', height: '97px', left: '54px', top: '211px', ml: '-11px', mt: '28px' },
    { title: '', content: '负责瘟疫、大风、飚石和百药，以及国师和三公的禄秩‌', width: '175px', height: '120px', left: '265px', top: '220px', ml: '-9px', mt: '34px' },
    { title: '', content: '掌管后妃宫府和山林草木，以及雨水淫溢‌', width: '181px', height: '165px', left: '465px', top: '238px', ml: '-6px', mt: '32px' },
    { title: '', content: '主管藏内、宝器金玉，以及惊风和骇雨‌', width: '194px', height: '127px', left: '675px', top: '288px', ml: '-3px', mt: '52px' },
    { title: '', content: '负责帝王明堂、雨泽和工役技艺‌', width: '126px', height: '164px', left: '877px', top: '270px', ml: '7px', mt: '29px' },
    { title: '', content: '掌管祥云瑞雾和女人不和‌', width: '197px', height: '204px', left: '1044px', top: '215px', ml: '53px', mt: '10px' },
    { title: '', content: '负责斜风细雨、奸邪淫佞以及蛮夷狐貂貉、虏狄津梁水', width: '202px', height: '176px', left: '1231px', top: '161px', ml: '80px', mt: '15px' },
  ],
  // 东方星宿
  [
    { title: '角2', content: '负责收敛万物、风雷雨泽以及山川房庙和鬼魅妖怪‌', width: '135px', height: '143px', left: '57px', top: '204px', ml: '-14px', mt: '27px' },
    { title: '', content: '掌管将军权衡境域、杀伐冤仇以及劫夺忿悦‌', width: '188px', height: '164px', left: '230px', top: '209px', ml: '26px', mt: '0' },
    { title: '', content: '主管天地开泰、朱轮宝盖以及边兵守境封疆安宁‌', width: '210px', height: '141px', left: '464px', top: '259px', ml: '5px', mt: '23px' },
    { title: '', content: '负责天地晴朗、去衰除祸、狱典曹吏以及刑罚囚系考决‌', width: '141px', height: '172px', left: '703px', top: '264px', ml: '-21px', mt: '20px' },
    { title: '', content: '掌管仓库、金银珍宝疋帛以及雷公五谷‌', width: '143px', height: '114px', left: '886px', top: '328px', ml: '9px', mt: '11px' },
    { title: '', content: '负责宫观寺院禁苑内庭、供给牺牲以及胶礼斋醮‌', width: '199px', height: '114px', left: '1063px', top: '295px', ml: '45px', mt: '10px' },
    { title: '', content: '主管武库兵甲戈矛、沟渎池庭以及风雨雷电‌', width: '249px', height: '173px', left: '1228px', top: '158px', ml: '93px', mt: '10px' },
  ],
  // 南方星宿
  [
    { title: '角3', content: '主管天色昏暗、池塘坡井、桥梁大水江湖以及鱼龙介族‌', width: '137px', height: '168px', left: '71px', top: '170px', ml: '-28px', mt: '0px' },
    { title: '', content: '负责金玉疋帛、丧祸诅咒以及毒药和司察奸恶‌', width: '140px', height: '142px', left: '270px', top: '221px', ml: '-28px', mt: '0px' },
    { title: '', content: '掌管庖厨食味、天色昏黄、雷雨以及兵戈草贼‌', width: '177px', height: '135px', left: '451px', top: '270px', ml: '18px', mt: '19px' },
    { title: '', content: '负责裁缝、衣装文绣、晴明以及刀剑血光‌', width: '105px', height: '193px', left: '693px', top: '241px', ml: '-11px', mt: '22px' },
    { title: '', content: '主管宗庙、珍宝衣服、赐宴宾容以及父子不睦和兄弟不和‌', width: '153px', height: '142px', left: '871px', top: '288px', ml: '24px', mt: '22px' },
    { title: '', content: '负责乐府五音六律、水府鱼龙以及飞走群毛万类‌', width: '184px', height: '190px', left: '1073px', top: '236px', ml: '35px', mt: '0' },
    { title: '', content: '掌管天地明朗、哭泣离别、官府口舌以及凶恶危难‌', width: '139px', height: '175px', left: '1299px', top: '166px', ml: '22px', mt: '0' },
  ],
  // 东方星宿
  [
    { title: '角4', content: '主管人间进士登科爵禄、微风细雨、斛斗升合秤尺之司', width: '152px', height: '155px', left: '65px', top: '162px', ml: '-22px', mt: '19px' },
    { title: '', content: '主管人间云雾霜雪、牛羊六畜牺牲、足虫百兽、南越百蛮之司', width: '133px', height: '146px', left: '270px', top: '219px', ml: '-14px', mt: '9px' },
    { title: '', content: '主管人间裁缝衣物、嫁娶聘偶、阴凝大风之司', width: '131px', height: '162px', left: '488px', top: '255px', ml: '-19px', mt: '7px' },
    { title: '', content: '主管人间宫室庙堂盖屋、祭礼考妣、五虚六耗、悲泣之司', width: '119px', height: '153px', left: '708px', top: '293px', ml: '-26px', mt: '10px' },
    { title: '', content: '主管人间丘陵坟墓悲泣、旋风沙石、危厄艰险之司', width: '117px', height: '125px', left: '907px', top: '292px', ml: '-12px', mt: '35px' },
    { title: '', content: '主管人间官室金户玉堂、文章图籍、军料府库、阴霾凝滞之司', width: '168px', height: '180px', left: '1097px', top: '231px', ml: '11px', mt: '7px' },
    { title: '', content: '主管人间文章图书秘府、阴寒雨泽霹雳，五谷百果之司', width: '112px', height: '135px', left: '1352px', top: '195px', ml: '-31px', mt: '11px' },
  ]
]

export default function Page2() {
  const [tabIndex, setTabIndex] = useState(0);

  const tabContent = useMemo(() => {
    return TAB_CONTENT[tabIndex];
  }, [tabIndex])

  return (<div className="page2">
    <section className="page2-section1">
      <motion.div
        className="page2-section1-bg1"
        layout
        initial={{ opacity: 0, x: -200 }}      // 初始状态
        whileInView={{ opacity: 1, x: 0 }}   // 进入视口时的目标状态
        transition={{ duration: 1 }}       // 动画过渡参数
      >
      </motion.div>
      <motion.div
        className="page2-section1-bg2"
        layout
        initial={{ opacity: 0, x: 200 }}      // 初始状态
        whileInView={{ opacity: 1, x: 0 }}   // 进入视口时的目标状态
        transition={{ duration: 1 }}       // 动画过渡参数
      >
      </motion.div>
      <motion.div
        className="page2-section1-bg3"
        layout
        initial={{ opacity: 0, x: -200 }}      // 初始状态
        whileInView={{ opacity: 1, x: 0 }}   // 进入视口时的目标状态
        transition={{ duration: 1 }}       // 动画过渡参数
      >
      </motion.div>
      <motion.div
        className="page2-section1-bg4"
        layout
        initial={{ opacity: 0, x: 200 }}      // 初始状态
        whileInView={{ opacity: 1, x: 0 }}   // 进入视口时的目标状态
        transition={{ duration: 1 }}       // 动画过渡参数
      >
      </motion.div>
      <div className="page2-section1-content"></div>
      <div className="page2-section1-title"></div>
    </section>
    <section className="page2-section2">
      <motion.div className="page2-section2-title"
        layout
        initial={{ opacity: 0, x: 300 }}      // 初始状态
        whileInView={{ opacity: 1, x: 0 }}   // 进入视口时的目标状态
        transition={{ duration: 2 }}       // 动画过渡参数
      >
        二十八星宿简介
      </motion.div>
      <div className="page2-section2-tab">
        {
          TAB.map((item, index) => (
            <div className={classNames("page2-section2-tabItem", {
              [`img${index + 1}`]: true,
              'isActive': tabIndex === item
            })} key={item} onClick={() => setTabIndex(item)}></div>
          ))
        }
      </div>
      <div className={classNames("page2-section2-tab-container", {
        [`bg${tabIndex}`]: true
      })}>
        {
          tabContent.map((item, index) => {
            return (
              <div className="page2-section2-tab-content-item"
                style={{ left: item.left, top: item.top }}
              >
                <div className={classNames("page2-section2-tab-content-img", {
                  [`group${tabIndex}-${index}`]: true
                })}
                  style={{ width: item.width, height: item.height }}
                />

                <div className={classNames("page2-section2-tab-content-text")}
                  style={{ marginLeft: item.ml, marginTop: item.mt }}
                >
                  {item.content}
                  <div className={classNames("page2-section2-tab-content-font", {
                    [`group${tabIndex}-${index}`]: true
                  })}></div>
                </div>
              </div>
            )
          })
        }
      </div>
      <motion.div className="page2-section2-title2"
        layout
        initial={{ opacity: 0, x: 300 }}      // 初始状态
        whileInView={{ opacity: 1, x: 0 }}   // 进入视口时的目标状态
        transition={{ duration: 2 }}       // 动画过渡参数
      >
        永乐宫壁画
      </motion.div>
      <div className="page2-section2-desc">
        三清殿壁画中的二十八星宿，分为四组，分列于北壁的紫微、勾陈大帝身边。北壁东部的紫微大帝两侧各为七宿，北壁西部的勾陈大帝东边八宿西边<br />
        六宿。壁画中的二十八星宿的形象均为男性，其身份的识别通过特殊的造型特点来识别。有二十三位头冠上的圆饰内绘有明显的动物标识，另外五位则<br />
        面部造型表现出所对应的动物特性。
      </div>
      <div className="page2-section2-swiper">
        <MixSwiper />
      </div>
    </section>
    <section className="page2-section3">
      <motion.div className="page2-section3-title"
        layout
        initial={{ opacity: 0, x: 300 }}      // 初始状态
        whileInView={{ opacity: 1, x: 0 }}   // 进入视口时的目标状态
        transition={{ duration: 2 }}       // 动画过渡参数
      >
        五星二十八星宿神形图
      </motion.div>
      <div className="page2-section3-swiper">
        <SimpleSwiper />
      </div>
    </section>
  </div>)
}