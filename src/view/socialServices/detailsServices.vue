<template>
  <div class="detailsServicesBox">
    <div class="detailsServices">
      <p class="resultsTitle">﻿{{$store.state.newsTitle}}</p>
      <p class="resultsTime"><span class="el-icon-time"></span>{{$store.state.createTime}}&emsp;&emsp;浏览数
        {{$store.state.searchCount}}</p>
    </div>
    <!--    内容-->
    <div class="servicesConBox">
      <div v-html="getNewsDetails"></div>
      <div v-if="false" class="servicesPic">
        <img src="../../../static/imgs/112.png" alt="">
      </div>

      <!--          分享到-->
      <div class="shareBox">
        <span class="share">分享到</span>
        <span class="imgFx"><img src="../../../static/images/s.png" alt=""></span>
        <span class="imgFx"><img src="../../../static/images/w.png" alt=""></span>
      </div>
      <!--      上一篇，下一篇-->
      <div class="nextBox" v-if="false">
        <p class="next"><span>上一篇：</span><span>2019年“智慧建造与运维国家地方联合工程研究中心”揭牌</span></p>
        <p class="next"><span>下一篇：</span><span>2019年“智慧建造与运维国家地方联合工程研究中心”揭牌</span></p>
      </div>
    </div>
  </div>
</template>

<script>

  // 获取文章详情
  import {getNews} from '@/api/socialServices'

  export default {
    name: 'detailsServices',
    data() {
      return {
        newsId: this.$route.query.newsId,
        newsTypeId: this.$route.query.newsTypeId,
        getNewsDetails: []
      }
    },
    methods: {
      //  获取文章详情
      getNews() {
        // console.log(this.$store.state.createTime);
        getNews({
          createTime: this.$store.state.createTime,
          newsId: this.newsId,
          newsTypeId: this.newsTypeId
        }).then(data => {
          this.getNewsDetails = data.data
          // console.log(data);
        })
      },
    },
    created() {
      this.getNews()
    }
  }
</script>

<style scoped>
  .detailsServicesBox {
  }

  .detailsServicesBox .detailsServices {
    margin-top: 18px;
  }

  .detailsServicesBox .detailsServices .resultsTitle {
    width: 900px;
    font-size: 28px;
    color: #000000;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .detailsServicesBox .detailsServices .resultsTime {
    width: 900px;
    font-size: 14px;
    color: #666666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 12px;
  }

  /*/内容*/
  .detailsServicesBox .servicesConBox {
    margin-top: 56px;
  }

  .detailsServicesBox .servicesConBox .servicesCon {
  }

  .detailsServicesBox .servicesConBox .servicesPic,
  .detailsServicesBox .servicesConBox .servicesPic img {
    width: 600px;
    height: 400px;
    display: block;
    margin: 48px auto;
  }

  /*  分享到*/
  /*  分享到*/
  .detailsServicesBox .shareBox {
    height: 48px;
    margin-top: 48px;

  }

  .detailsServicesBox .shareBox .share {
    display: inline-block;
    line-height: 48px;
    float: left;
  }

  .detailsServicesBox .shareBox .imgFx {
    display: inline-block;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    /*background-color: #004B44;*/
    float: left;
    margin-left: 16px;
  }

  .detailsServicesBox .shareBox .imgFx img {
    display: inline-block;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    float: left;
  }

  /*  上一篇下一篇*/
  .detailsServicesBox .nextBox {
    margin-top: 72px;
    margin-bottom: 138px;
    overflow: hidden;
  }

  .detailsServicesBox .nextBox .next {
    width: 507px;
    height: 42px;
    background: #075A52;
    line-height: 42px;
    padding: 0 40px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    float: right;
    margin-bottom: 12px;

  }
</style>
