<template>
  <div class="overviewCentreBox">
    <!--     banner-->
    <div class="bannerBox">
      <img class="bannerPic" src="../../../../static/images/banner2.png" alt="">
    </div>
    <!--    中心概况-->
    <div class="overviewCentre">
      <div class="overviewCentreCon">
        <div class="centreConTitle"><span>中心</span>概况</div>
      </div>
      <!--      内容-->
      <div class="tabsBox">
        <!--        左边-->
        <div class="tabsBoxLeft">
          <!--          <p v-for="item in newsTypeList" :key="item.newsTypeId" @click="change(item.newsTypeId)"-->
          <!--             :class="active==item.newsTypeId?'fontColor':''">-->
          <!--            <span class="spot"><span v-if="active==item.newsTypeId">●</span></span>&nbsp;{{item.newsType}}-->
          <!--          </p>-->
          <p @click="change('director')"
             :class="active=='director'?'fontColor':''">
            <span class="spot"><span v-if="active=='director'">●</span></span>&nbsp;主任致辞
          </p>
          <p @click="change('core')"
             :class="active=='core'?'fontColor':''">
            <span class="spot"><span v-if="active=='core'">●</span></span>&nbsp;中心简介
          </p>
        </div>
        <!--        右边-->
        <div class="tabsBoxRight">
          <!--   主任致辞       -->
          <div class="zhuren" v-if="active=='director'">
            <p class="addressDirector">主任致辞</p>
            <p class="times">
              <span class="el-icon-time"></span>&nbsp;
              <span>2019-05-30</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span>浏览数&nbsp;23445</span>
            </p>
            <div class="zhici">
              <div class="zhiciText">
                为国家培养高素质的会计财务审计人才，一直是我们会计学院的孜孜追求。桃李满天下，代代铸辉煌，师生情深共谱华章；后浪推前浪，涛声震华夏，人才辈出续写辉煌。中南薪火育英才，风雨历程数十载，就让我们会计学院的师生传承中原薪火，砥砺中南精神，博文明理存真意，厚德济世天下知。
                ——院长：张敦力
              </div>
              <div class="personPic"><img src="../../../../static/imgs/1.png" alt=""></div>
            </div>
          </div>
          <!--          中心简介-->
          <div class="jianjie" v-if="active=='core'">
            <p class="addressDirector">中南财经政法大学财务中心成立！</p>
            <p class="times">
              <span class="el-icon-time"></span>&nbsp;
              <span>2019-05-30</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span>浏览数&nbsp;23445</span>
            </p>
            <div class="zhici">
              <div class="zhiciText">
                5月28日上午，2019南京创意设计周在东南大学四牌楼校区开幕。一批全球文化创意设计领域知名学者，全球知名文化创意产业设计师、企业家，南京本地知名设计师文化名人，南京文创头部企业家代表以及高校师生代表共700人参加了开幕式。
              </div>
              <div class="zhiciText">
                中共江苏省委常委、南京市委书记张敬华，东南大学党委书记左惟出席了开幕式，并与中国工程院院士、东南大学城市设计研究中心主任王建国，威尼斯建筑大学前校长、雅伦格文化艺术基金会主席马里诺•福林，中共江苏省委宣传部副部长徐宁共同按下“创意赋能城市光环”，宣布2019南京创意设计周正式启动。中共南京市委常委、宣传部长陈勇，南京市委常委、市委秘书长徐曙海，南京市人民政府副市长胡万进，东南大学党委常委、总会计师丁辉等也出席了开幕式。开幕式上，“东大·南京设计名城”项目正式发布。项目于去年9月正式启动，结合高水平设计学科资源与玄武区设计类产业优势，以现代高端智慧设计产业体系为导向，在近4.5平方公里的范围内集聚优质设计产业资源，打造现代化高品质设计名城。
              </div>
              <div class="zhiciText">
                东南大学校友张宇星，Let’s Talk建筑学院论坛创办人戴春，北京设计周、白塔寺再生计划创意总监毕月，英国计算机艺术学会主席、雷文斯本设计与传播学院研究主管尼克
                兰伯特，台湾设计界文创大师程湘如等齐聚现场，纷纷为南京城市存量空间和“文化创意中心城市”的改造建设提供意见和建议。
              </div>
              <!--              图片-->
              <div class="jianjiePic">
                <img src="../../../../static/imgs/3.png" alt="">
                <img src="../../../../static/imgs/4.png" alt="">
                <img src="../../../../static/imgs/2.png" alt="">
              </div>
              <!--              邮箱-->
              <div class="mailBox">
                <p> 邮箱：gsmcdc@gsm.pku.edu.cn</p>
                <p> 邮编：100871</p>
                <p>咨询电话：010-62747108</p>
              </div>
            </div>
          </div>
          <!--          分享到-->
          <div class="shareBox">
            <span class="share">分享到</span>
            <span class="imgFx"><img src="../../../../static/images/s.png" alt=""></span>
            <span class="imgFx"><img src="../../../../static/images/w.png" alt=""></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import {getNewsType} from '@/api/socialServices'
  //获取文章详情
  import {getNews} from "@/api/socialServices";

  export default {
    name: 'overviewCentre',
    data() {
      return {
        active: 'director',
        activeVal: '',
        newsTypeList: [],
        picId: this.$route.query.picId || this.$store.state.classificationId,
      }
    },
    created() {
      // this.getNewsType()
    },
    methods: {
      //  获取文章类型
      getNewsType() {
        getNewsType({classificationId: this.picId}).then(data => {
          console.log(data)
          this.newsTypeList = data.data
          this.active = data.data[0].classificationId
        })
      },
      //获取文章详情
      getNews() {
        getNews({}).then(data => {

        })
      },
      //
      change(val) {
        this.active = val
      }
    },

  }
</script>

<style scoped>

  /*中心概况*/
  .overviewCentreBox {

  }

  .overviewCentreBox .overviewCentre {
    width: 1200px;
    margin: 0 auto;
  }

  .overviewCentreBox .overviewCentreCon {
    width: 254px;
    height: 76px;
    background: #075A52;
    opacity: 1;
    text-align: center;
    line-height: 76px;
    font-size: 26px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    line-height: 60px;
    color: #FFFFFF;
    opacity: 1;
    transform: translateY(-38px);
  }

  .overviewCentreBox .overviewCentreCon span {
    display: inline-block;
    border-bottom: 2px solid #FFFFFF;
    opacity: 1;
    height: 60px;
  }

  /*  内容*/
  .overviewCentre .tabsBox {
    overflow: hidden;
    margin-top: -38px;
  }

  /*左边*/
  .overviewCentre .tabsBox .tabsBoxLeft {
    float: left;
    width: 254px;
    height: 800px;
    background: #F9F9F9;
    opacity: 1;
  }

  .overviewCentre .tabsBox .tabsBoxLeft p {
    width: 230px;
    height: 56px;
    background: #FFFFFF;
    opacity: 1;
    float: right;
    margin-bottom: 1px;
    line-height: 56px;
    padding-left: 16px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #666666;
    opacity: 1;
    cursor: pointer;
  }

  .overviewCentre .tabsBox .tabsBoxLeft .spot {
    display: inline-block;
    width: 15px;
  }

  .overviewCentre .tabsBox .tabsBoxLeft .fontColor {
    color: #075A52;
  }

  .overviewCentre .tabsBox .tabsBoxRight {
    float: left;
    padding-left: 70px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .overviewCentre .tabsBox .tabsBoxRight .addressDirector {
    font-size: 28px;
    color: #000000;
    opacity: 1;
  }

  .tabsBoxRight .times {
    font-size: 14px;
    color: #666666;
    opacity: 1;
    margin-top: 12px;
  }

  .tabsBoxRight .zhici {
    width: 876px;
  }

  .tabsBoxRight .zhici .zhiciText {
    margin-top: 56px;
    margin-bottom: 56px;
    width: 876px;
    font-size: 14px;
    line-height: 24px;
    color: #000000;
    opacity: 1;
    text-indent: 2em;
  }

  .tabsBoxRight .zhici .personPic,
  .tabsBoxRight .zhici .personPic img {
    width: 400px;
    height: 600px;
    display: block;
    margin: 0px auto 56px;
  }

  /*中心简介*/
  .tabsBoxRight .jianjiePic {
    margin-bottom: 56px;
  }

  .tabsBoxRight .jianjiePic img {
    display: block;
    width: 600px;
    height: 400px;
    margin: 40px auto 0;
  }

  /*邮箱*/
  .tabsBoxRight .mailBox {
    margin-bottom: 42px;
  }

  .tabsBoxRight .mailBox p {
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    line-height: 24px;
    color: rgba(0, 0, 0, 1);
    opacity: 1;
  }

  /*  分享到*/
  .overviewCentre .shareBox {
    height: 48px;
    margin-bottom: 148px;

  }

  .overviewCentre .shareBox .share {
    display: inline-block;
    line-height: 48px;
    float: left;
  }

  .overviewCentre .shareBox .imgFx {
    display: inline-block;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    /*background-color: #004B44;*/
    float: left;
    margin-left: 16px;
  }

  .overviewCentre .shareBox .imgFx img {
    display: inline-block;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    float: left;
  }
</style>
