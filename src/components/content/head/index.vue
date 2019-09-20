<template>
  <div class="Box">
    <!--    Logo-->
    <div class="logo">
      <img class="logoPic" src="../../../../static/images/LOGO.png" alt="">
    </div>
    <div class="tabsBox">
      <ul class="tabSmall">
        <li v-for="item in navList" :key="item.classificationId"
            :class="$store.state.classificationId==item.classificationId?'activeStyle':''">
          <a @click="links(item.classificationId,item.classificationName)">{{item.classificationName}}</a>
        </li>
<!--        <li v-for="item in 5" :key="item.item">-->
<!--          <a>{{item}}</a>-->
<!--        </li>-->
      </ul>
    </div>
    <router-view/>
    <Footer></Footer>
  </div>
</template>
<script>
  import Footer from "@/components/content/footer"
  import {getNavigationBar} from '@/api/index'

  export default {
    name: 'index',
    data() {
      return {
        navList: []
      }
    },
    components: {
      Footer
    },
    methods: {
      links(id,classificationName) {
        this.$store.state.newsTypeId=''
        this.$store.state.classificationId=id
        this.$store.state.classificationName=classificationName
        // console.log(this.$store.state)
        this.$store.addStore()

        console.log(id);
        if (id == '1') {
          window.location = '#/home'
        } else if (id=='2') {
          window.location='#/centre'
        }
        else if (id=='3') {
          window.location='#/personnel'
        }
        else{
          window.location='#/socialServices?picId='+id+'&ids=0&listID='+this.$store.state.listID
        }
      }
    },
    created() {
      getNavigationBar().then(data => {
        console.log(data);
        this.navList = data.data
      })
    }
  }
</script>

<style scoped>
  .Box {
  }

  /*Logo*/
  .Box .logo {
    height: 108px;
    width: 1200px;
    margin: 0 auto;
    /*background-color: red;*/
    position: relative;
  }

  .Box .logo .logoPic {
    display: block;
    width: 359px;
    height: 84px;
    position: absolute;
    top: 50%;
    margin-top: -42px;
  }

  /*  Tab标签页*/
  .Box .tabsBox {
    width: 100%;
    background-color: #F6F7F7;
    height: 48px;
  }

  .Box .tabsBox .tabSmall {
    display: block;
    width: 1200px;
    margin: 0 auto;
    background-color: #F6F7F7;
  }

  .Box .tabsBox .tabSmall li {
    float: left;
    list-style: none;
    /*padding: 0 32px;*/
    width: 128px;
    line-height: 48px;
    text-align: center;
  }

  .Box .tabsBox .tabSmall li a {
    display: inline-block;
    width: 128px;
    text-decoration: none;
    color: #000000;
    font-size: 16px;
    opacity: 1;
    cursor: pointer;
    /*border-right: 1px solid #333333;*/
  }

  .Box .tabsBox .tabSmall .activeStyle {
    background: #075A52;
    opacity: 1;
  }

  .Box .tabsBox .tabSmall .activeStyle a {
    color: #FFFFFF;
  }

  /*  底部*/
  .Box .footer {
    width: 100%;
    height: 275px;
    background-image: url("../../../../static/images/TU.png");
    background-size: 100% 100%;
  }

  .Box .footerBox {
    width: 100%;
    height: 275px;
    background-color: #075A52;
    background-color: #075A52;
    opacity: 0.92;
  }

  .Box .smallFooter {
    width: 1200px;
    margin: 0 auto;
    font-size: 14px;
    color: #FFFFFF;
  }

  .Box .smallFooter .footerLeft {
    float: left;
  }

  .Box .smallFooter .footerLeft .footerLeftBox {
    margin-top: 32px;
  }

  .Box .smallFooter .footerLeft p {

    font-family: Microsoft YaHei;
    font-weight: 400;
    line-height: 32px;

    opacity: 1;
  }

  .Box .smallFooter .footerright {
    width: 400px;
    float: right;
    text-align: center;
    overflow: hidden;
  }

  .Box .smallFooter .footerright .linkTitle {
    margin-top: 52px;
    margin-bottom: 20px;
  }

  .Box .smallFooter .footerright a {
    float: left;
    font-size: 14px;
    color: #FFFFFF;
    width: 100px;
    display: inline-block;
    text-decoration: none;
    line-height: 30px;
  }

  /*  copyright*/
  .Box .copyright {
    width: 100%;
    height: 48px;
    background: #004B44;
    opacity: 1;
    text-align: center;
    line-height: 48px;
    color: #FFFFFF;
    font-size: 13px;
    font-family: Microsoft YaHei;
    font-weight: 400;
  }


</style>

