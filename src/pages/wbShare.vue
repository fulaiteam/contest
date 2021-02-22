<template>
  <div class="c_wbShare"    @click='share'  :style="{width: '35px',height: '35px'}"></div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    width: {
      type: Number,
      defalut: 50
    },
    appkey: {
      type: Number,
      require: true
    },
    text: {
      type: String,
      defalut: '分享'
    },
    pic: {
      type: String,
      defalut: ''
    },
  },
  computed:{
    countWidth(){
      if(this.width > 50){
        return 50
      }else{
        return this.width;
      }
    }
  },
  mounted: function() {
    document.querySelector('html').setAttribute("xmlns:wb", "http://open.weibo.com/wb");
    var wb = document.createElement("wb:share-button");
     console.log(wb,2222222222222)
    var st = document.createElement("script");
    wb.setAttribute("appkey", '1467585635');
    wb.setAttribute("addition", "text");
    wb.setAttribute("type", "button");
    wb.setAttribute("default_text", '开工季');
    wb.setAttribute("pic",'https://airport11.oss-cn-beijing.aliyuncs.com/cover_content.png' );
    st.src = "https://tjs.sjs.sinajs.cn/open/api/js/wb.js?appkey=1467585635";
    st.type = "text/javascript";
    st.charset = "utf-8";
    document.querySelector('.c_wbShare').appendChild(wb);
    document.querySelector('head').appendChild(st);

  },
  methods:{
    share(){
      window.open('http://service.weibo.com/share/share.php?url=https%3A%2F%2Fmjkgj.benq.com.cn%2Fwb.html&appkey=1467585635&language=zh_cn&title=%E5%BF%AB%E6%9D%A5%E6%B5%8B%E6%B5%8B%E4%BD%A0%E7%9A%84%E5%BC%80%E5%B7%A5%E5%80%BC&source=&sourceUrl=&ralateUid=&message=&uids=&pic=https%3A%2F%2Fjgl.oss-cn-beijing.aliyuncs.com%2Fkgj.png&searchPic=true&content=')
    }
  }
}
</script>

<style>
.c_wbShare {
   border-radius: 5%;
  overflow: hidden;
  position: relative;
}

iframe {
  transform: scale(6);
  opacity: 0;
}

.c_wbShare::after {
  pointer-events: none;
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background-image: url(../assets/big.png);
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
