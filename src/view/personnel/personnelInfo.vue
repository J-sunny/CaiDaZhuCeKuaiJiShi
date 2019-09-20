<template>
  <div class="detailsInfo">
    <!--     研究人员详情-->
    <div class="contentTitle">
      <p class="detailsInfoTitle">{{$store.state.organization_user_name}}教授</p>
      <p class="times" v-if="false">
        <span class="el-icon-time"></span>&nbsp;
        <span>发布时间：2019-05-30</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <span>发布者：系统管理员</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <span>浏览次数&nbsp;23445</span>
      </p>
    </div>
    <div v-if="false">
      <!--    头像部分-->
      <div class="presonInfo">
        <div class="personPic">
          <img src="../../../static/imgs/PersonnelAvatar1.png" alt="">
        </div>
        <div class="personnelProfile">
          <p>姓名：张敦力</p>
          <p>职称：教授三级</p>
          <p>行政职务：院长</p>
          <p>电子邮箱： dunlit@163.com</p>
          <p>社会兼职：中国会计学会财务管理专业委员会、中国会计学会财务成本分会副秘书长、湖北省内部审计师协会副会长、湖
            北省会计学会常务理事、湖北省金融会计学会常务理事，多家公司独立董事</p>
          <p>研究领域：风险财务、产权会计、反倾销会计 </p>
          <p>讲授课程：财务模型、管理会计（ACCA）、财务管理（双语）、高级财务管理、现代财务基本理论、财务成本专题等</p>
          <p>个人感言：德成智出，业广惟勤，教学相长，共同进步！</p>
        </div>
      </div>
      <!--    教育经历-->
      <div class="educationalExperience">
        <p class="experienceTitle">教育经历</p>
        <p v-for="item in 4" :key="item">1990年9月－1994年7月 安徽财经大学（原安徽财贸学院） 经济学（会计学） 学士</p>
      </div>
      <!--    教育经历-->
      <div class="educationalExperience">
        <p class="experienceTitle">工作经历</p>
        <p v-for="item in 4" :key="item">1990年9月－1994年7月 安徽财经大学（原安徽财贸学院） 经济学（会计学） 学士</p>
      </div>
      <!--    教育经历-->
      <div class="educationalExperience">
        <p class="experienceTitle">学习进修</p>
        <p v-for="item in 4" :key="item">1990年9月－1994年7月 安徽财经大学（原安徽财贸学院） 经济学（会计学） 学士</p>
      </div>
      <!--    研究成果-->
      <div class="researchFindings">
        <p class="experienceTitle">研究成果</p>
        <table class="researchTables" border="1" cellspacing="0" cellpadding="0">
          <tr class="tabsHead">
            <td>序号</td>
            <td>成果类别</td>
            <td>成果名称</td>
            <td>时间</td>
            <td>发表刊物或出版社</td>
          </tr>
          <tr v-for="(item,index) in 25" :key="index">
            <td>{{index}}</td>
            <td>论文</td>
            <td>﻿管理者权力与企业投资回报</td>
            <td>﻿2013年10月</td>
            <td>﻿宏观经济研究</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="userInfo" v-html="userInfo"></div>
  </div>

</template>

<script>
  // 人员详情
  import {getUserInfoHtml} from "@/api/personnel";

  export default {
    name: 'PersonnelInfo',
    data() {
      return {
        userInfo:''
      }
    },
    methods: {
      //获取人员详情
      getUserInfoHtml() {
        console.log(this.$store.state.htmlUrl);
        console.log(this.$store.state.organization_user_name);
        getUserInfoHtml({htmlUrl: this.$store.state.htmlUrl}).then(data => {
          console.log(data);
          this.userInfo=data.data
        })
      },
    },
    created() {
      this.getUserInfoHtml()
    }
  }
</script>

<style scoped>
  /*  头像部分*/
  .detailsInfo .presonInfo {
    overflow: hidden;
    position: relative;
    margin-top: 48px;
  }

  .detailsInfo .presonInfo .personPic {
    float: left;
    width: 128px;
    height: 192px;
    position: absolute;
    top: 0;
    left: 0;
  }

  .detailsInfo .presonInfo .personPic img {
    display: block;
    width: 128px;
    height: 192px;
  }

  .detailsInfo .presonInfo .personnelProfile {
    padding-left: 152px;
  }

  .detailsInfo .presonInfo .personnelProfile p {
    font-size: 14px;
    line-height: 26px;
    color: #000000;
    opacity: 1;
  }

  /*  教育经历*/
  .detailsInfo .educationalExperience {
    font-size: 14px;
    line-height: 26px;
    color: #000000;
    margin-top: 32px;
  }

  .detailsInfo .experienceTitle {
    font-size: 14px;
    line-height: 26px;
    color: #000000;
    margin-top: 32px;
    font-weight: bold;
  }

  .detailsInfo .educationalExperience p {
  }

  /*  研究成果*/
  .detailsInfo .researchFindings {
    margin-bottom: 178px;
  }

  .detailsInfo .researchFindings .researchTables {
    border-collapse: collapse;
  }

  .detailsInfo .researchFindings .researchTables td {
    border: 1px solid #E9E9E9;
    height: 42px;
    line-height: 42px;
    font-size: 14px;
    color: #000000;
    text-align: center;
  }

  .detailsInfo .researchFindings .researchTables .tabsHead td {
    background-color: #E9E9E9;
  }

  .detailsInfo .researchFindings .researchTables td:nth-child(1) {
    width: 58px;
  }

  .detailsInfo .researchFindings .researchTables td:nth-child(2) {
    width: 78px;
  }

  .detailsInfo .researchFindings .researchTables td:nth-child(3) {
    width: 348px;
  }

  .detailsInfo .researchFindings .researchTables td:nth-child(4) {
    width: 108px;
  }

  .detailsInfo .researchFindings .researchTables td:nth-child(5) {
    width: 310px;
  }



  .userInfo{
    margin-top: 50px;
    margin-bottom: 50px;
  }
</style>
