import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCreative, Pagination, Navigation } from 'swiper/modules';
import NavigationLeftPng from '../../../../assets/img/page2/swiper-arrow-left.png';
import NavigationRightPng from '../../../../assets/img/page2/swiper-arrow-right.png';
import './index.css'
import classNames from 'classnames';

const SwiperData = [
  [
    { title: '壁水貐', content: '属水，为貐。为北方第七宿，居室宿之外，形如室宿的围墙，故此而得名“壁”。墙壁，乃家园之屏障，故壁宿多吉。<br/>壁宿之星好利宜，祭祀兴工吉庆多，修造安门逢此日，三朝七日进钱财。' },
    { title: '奎木狼', content: '属木，为狼。为西方第一宿，有天之府库的意思，故奎宿多吉。<br/>奎宿值日好安营，一切修造大吉昌，葬埋婚姻用此日，朝朝日日进田庄。' },
    { title: '胃土雉', content: '属土，为雉。为西方第三宿，如同人体胃之作用一样，胃宿就像天的仓库屯积粮食，故胃宿多吉。' },
    { title: '星日马', content: '为日，为马。为南方第四宿，居朱雀之目，鸟类的眼睛多如星星般明亮，故由此而得名“星”。俗话说“眼里不揉沙子”，故星宿多凶。 ' },
    { title: '觜火猴', content: '属火，为猴。为西方第六宿，居白虎之口，口福之象征，故觜宿多吉。 ' },
    { title: '昴日鸡', content: '为日，为鸡。为西方第四宿，居白虎七宿的中央，在古文中西从卯，西为秋门，一切已收获入内，该是关门闭户的时候了，故昴宿多凶。' },
    { title: '娄金狗', content: '属金，为狗。为西方第二宿，娄，同“屡”，有聚众的含意，也有牧养众畜以供祭祀的意思，故娄宿多吉。<br/>娄宿之星吉庆多，婚姻祭祀主荣华，开门放水用此日，三年之内主官班。' },
  ],
  [
    { title: '角木蛟', content: '属木，为蛟。为东方七宿之首，有两颗星如苍龙的两角。龙角，乃斗杀之首冲，故多凶。<br/>角宿值日不非轻，祭祀婚姻事不成，埋葬若还逢此日，三年之内有灾惊。' },
    { title: '心月狐', content: '为月，为狐。为东方第五宿，为苍龙腰部。心为火，是夏季第一个月应候的星宿，常和房宿连用，用来论述“中央支配四方”。龙腰，肾脏之所在，新陈代谢的源泉，不可等闲视之，故多凶。' },
    { title: '尾火虎', content: '属火，为虎。为东方第六宿，尾宿九颗星形成苍龙之尾。龙尾，是斗杀中最易受到攻击部位，故多凶。' },
    { title: '房日兔', content: '为日，为兔。为东方第四宿，为苍龙腹房，古人也称之为“天驷”，取龙为天马和房宿有四颗星之意。龙腹，五脏之所在，万物在这里被消化，故多凶。' },
    { title: '氐土貉', content: '属土，为貉。氐，为根为本，如木之有根始能往上支天柱、往下扎深根，但当其根露现时即是冬寒草木枯黄之时。' },
    { title: '亢金龙', content: '属金，为龙。是东方第二宿，为苍龙的颈。龙颈，有龙角之护卫，变者带动全身，故多吉。' },
    { title: '箕水豹', content: '属水，为豹。为东方最后一宿，为龙尾摆动所引发之旋风。故箕宿好风，一旦特别明亮就是起风的预兆，因此又代表好调弄是非的人物、主口舌之象，故多凶。' },
  ],
  [
    { title: '虚日鼠', content: '为日，为鼠。为北方第四宿，古人称为“天节”。当半夜时虚宿居于南中正是冬至的节令。冬至一阳初生，为新的一年即将开始，如同子时一阳初生意味着新的一天开始一样，给人以美好的期待和希望，故虚宿多吉。' },
    { title: '牛金牛', content: '属金，为羊。为南方第二宿，犹如一顶戴在朱雀头上的帽子，鸟类在受到惊吓时头顶羽毛成冠状，人们把最害怕而又并不存在的东西称作“鬼”，鬼宿因此而得名，主惊吓，故多凶。' },
    { title: '斗木獬', content: '属木，为獬。为北方之首宿，因其星群组合状如斗而得名，古人又称“天庙”，是属于天子的星。天子之星常人是不可轻易冒犯的，故多凶。' },
    { title: '室火猪', content: '属火，为猪。为北方第六宿，因其星群组合象房屋状而得名“室”（象一所覆盖龟蛇之上的房子），房屋乃居住之所，人之所需，故室宿多吉。' },
    { title: '危月燕', content: '为月，为燕。为北方第五宿，居龟蛇尾部之处，故此而得名“危”（战斗中，断后者常常有危险）。危者，高也，高而有险，故危宿多凶。' },
    { title: '毕月乌', content: '为月，为乌。为西方第五宿，又名“罕车”，相当于边境的军队，又“毕”有“完全”之意，故毕宿多吉' },
    { title: '鬼金羊', content: '属金，为羊。为南方第二宿，犹如一顶戴在朱雀头上的帽子，鸟类在受到惊吓时头顶羽毛成冠状，人们把最害怕而又并不存在的东西称作“鬼”，鬼宿因此而得名，主惊吓，故多凶。' },
  ],
  [
    { title: '翼火蛇', content: '属火，为蛇。为南方第六宿，居朱雀之翅膀之位，故而得名“翼”，鸟有了翅膀才能腾飞，翼宿多吉。' },
    { title: '张月鹿', content: '为月，为鹿。为南方第五宿，居朱雀身体与翅膀连接处，翅膀张开才意味着飞翔，民间常有“开张大吉”等说法，故张宿多吉。' },
    {
      title: '柳土獐', content: '属土，为獐。为南方第三宿，居朱雀之嘴，其状如柳叶（鸟类嘴之形状大多如此），嘴为进食之用，故柳宿多吉。'
    },
    { title: '参水猿', content: '属水，为猿。为西方第七宿，居白虎之前胸，虽居七宿之末但为最要害部位，故参宿多吉。' },
    { title: '女土蝠', content: '属土，为幅（蝠）。为北方第三宿，其星群组合状如箕，亦似“女”字，古时妇女常用簸箕颠簸五谷，去弃糟粕留取精华，故女宿多吉。' },
    { title: '井木犴', content: '属木，为犴，狴犴。为南方第一宿，其组合星群状如网，由此而得名“井”（井字如网状）。井宿就像一张迎头之网，又如一片无底汪洋，故井宿多凶。' },
    { title: '轸水蚓', content: '属水，为蚓。为南方第七宿，居朱雀之尾，鸟儿的尾巴是用来掌握方向的。古代称车箱底部后面的横木为“轸”，其部位与轸宿居朱雀之位相当，故此而得名。轸宿古称“天车”，“轸”有悲痛之意，故轸宿多凶。' },
  ]
]

const MixSwiper = () => {
  const [_, setInit] = useState(false);
  const swiperRef = useRef();

  // 自定义分页器图片
  const pagination = {
    clickable: true,
  };

  return (
    <div className='mixSwiper'>
      <Swiper
        // effect={'creative'}
        // creativeEffect={creativeEffect}
        loop={true}
        pagination={pagination}
        navigation={{
          prevEl: '.custom-prev',
          nextEl: '.custom-next',
        }}
        modules={[EffectCreative, Pagination, Navigation]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setInit(true);
        }}
        className="mixSwiper-mySwiper"
      >
        {SwiperData.map((swiperDataItem, index) => (
          <SwiperSlide key={index} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {
              (swiperDataItem).map((item, groupItemIndex) => {
                return (<div key={groupItemIndex} className={classNames('mix-swiper-data-wrapper', {
                  [`group-item-${groupItemIndex + 1}`]: true,
                  [`group${index + 1}-${groupItemIndex + 1}`]: true
                })}>
                  <div className={classNames('mix-swiper-data-item', {
                    [`group${index + 1}-${groupItemIndex}`]: true
                  })} >
                    <div className='mix-swiper-data-item-title'>
                      {item.title}
                    </div>
                    <div className='mix-swiper-data-item-content' dangerouslySetInnerHTML={{ __html: item.content }}>
                    </div>
                  </div>
                </div>)
              })
            }
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 自定义导航按钮 */}
      <button className="custom-prev" style={{
        position: 'absolute',
        left: '-120px',
        top: '50%',
        zIndex: 10,
        background: 'none',
        border: 'none',
        transform: 'translateY(-50%)'
      }}>
        <img
          src={NavigationLeftPng}
          alt="prev"
          style={{ width: '73px', height: '73px' }}
        />
      </button>

      <button className="custom-next" style={{
        position: 'absolute',
        right: '-120px',
        top: '50%',
        zIndex: 10,
        background: 'none',
        border: 'none',
        transform: 'translateY(-50%)'
      }}>
        <img
          src={NavigationRightPng}
          alt="next"
          style={{ width: '73px', height: '73px' }}
        />
      </button>
    </div>
  );
};

export default MixSwiper;