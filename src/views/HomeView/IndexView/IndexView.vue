<template>
  <div class="home-view">
    <div class="home-hero">
      <div class="home-hero-line1">
        <div class="home-hero-left">
          <h1 class="animate__animated animate__fadeInDownBig">{{ author }}</h1>
          <h4 class="animate__animated animate__backInLeft">{{ introduce }}</h4>
          <div class="contact animate__animated animate__backInLeft">
            <span>联系方式：</span>
            <a 
            target="_blank"
            v-for="item in contactList" 
            :key="item.name"
            :href="item.url"  
            class="contact-item" 
            :title="item.name">
              <component :is="item.icon" v-if="item.name !== '微信'"></component>
              <n-popover trigger="hover" v-else>
                <template #trigger>
                  <component :is="item.icon"></component>
                </template>
                <img width="300" src="@/assets/images/home/weixin.png" alt="" srcset="">
              </n-popover>
            </a>
          </div>
        </div>
        <img src="@/assets/images/logo.jpg" alt="" srcset="" class="animate__animated animate__backInDown">
      </div>
      <div class="home-hero-line2 animate__animated animate__fadeInUpBig">
        <n-button type="primary" size="small" round @click="$router.push({
          name:'ExampleView'
        })">查看示例</n-button>
        <n-button style="color: #fff;" round size="small" @click="$router.push({
          name:'ArticleView'
        })">阅读文章</n-button>
      </div>
    </div>  
  </div>
</template>

<script setup>
import { Weixin ,Github} from '@vicons/fa'
import { Email } from '@vicons/carbon'
import { ElIcon } from 'element-plus'
const author = 'GIS LIU'
const introduce = '一个专注于WebGIS的前端小白、有过Cesium、Leaflet开发经验，曾获得过SuperMap杯第21届全国高校GIS大赛命题开发组一等奖'
const contactList = [
  {
    name: 'github',
    icon: ()=>h(ElIcon,{
      size:20
    },()=>h(Github)),
    url: 'https://github.com/FantasticSPM'
  },
  {
    name: '微信',
    icon: ()=>h(ElIcon,{
      size:20
    },()=>h(Weixin)),
    url: 'weixin://'
  },
  {
    name: 'email',
    icon: ()=>h(ElIcon,{
      size:20
    },()=>h(Email)),
    url: 'mailto:755713345@qq.com'
  }
]
</script>

<style lang="scss" scoped>
.home-view {
  height: calc(100vh - $header-height - $footer-height);
  background: url('@/assets/images/home/bg1.jpg') no-repeat center center;
  background-size: 100% 100%;
  color: #fff;
  mix-blend-mode: multiply;
  display: flex;
  width: 100%;
  overflow: hidden;
  line-height: 2;
  .home-hero {
    margin: 0 auto;
    padding: 0 20%;
    padding-top: 100px;
    height: 100%;
    overflow: hidden;
    .home-hero-line1{
      display: flex;
      gap: 10%;
      align-items: center;
      justify-content: space-between;
      .home-hero-left {
        h1{
          font-size: 40px;
        }
        h4{
          margin-top: 50px;
          font-size: 20px;
        }

        .contact{
          margin-top: 100px;
          display: flex;
          gap: 10px;
          .contact-item{
            display: flex;
            align-items: center;
            gap: 5px;
          }
        }
      }
      img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
      }
    }
    .home-hero-line2{
      margin-top: 30px;
      display: flex;
      gap: 20px;
    }
  }
}
</style>