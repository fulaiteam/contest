<template>
    <div class="index">
        <div  class='all_bg'  v-show="firstFlag">
            <div  class='now_content' >
                <div  class='avatar_area' >
                <img :src="this.aaaaaaa"  class='avatar_bg'   >
                   
                    

                </div>
                <div   class='nickname_area' >
                    @ {{this.nickname}}
                </div>
                <div  class='bottom_btnarea' >
                <img src="https://duiduipeng.oss-cn-beijing.aliyuncs.com/save_btn.png"   class='btn_bg'  @click="saveImage">
                <img src="https://duiduipeng.oss-cn-beijing.aliyuncs.com/share_btn.png"   class='btn_bg'  @click='share'    >
                </div>
            </div>
        </div> 

        <img :src="dataURL" alt="" v-show="!firstFlag" class="image">
    </div>
       
</template>

<script>
    // 引入html2canvas
    import html2canvas from 'html2canvas';

    export default {
        data(){
            return{
                dataURL:'',
                firstFlag:true,
                aaaaaaa:''
            }
        },
        created(){
        this.nickname =   localStorage.getItem('wbnickname');
          this.avatar =   localStorage.getItem('wbavatar');
        },
        mounted(){
           
             this.ToBase64()
        },
        methods: {
            ToBase64(){
                var originImg = localStorage.getItem('wbavatar');
                this.$axios({
                method: 'get',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                url:'/wbo/util/getBase64',
                params: {
                   url:originImg
                },
            }).then((res)=>{
               this.aaaaaaa = 'data:image/jpg;base64,'+res.data
               console.log(this.aaaaaaa)
 

            });

            },
            saveImage() {
             
     html2canvas(document.querySelector('.all_bg'), { useCORS: true,
    backgroundColor:null,
}).then(canvas => {
                    let imgUrl = canvas.toDataURL('image/png');
                    this.dataURL = imgUrl;
                    this.firstFlag = false;
                })
            },
                            share(){
      window.open('http://service.weibo.com/share/share.php?url=https%3A%2F%2Fmjkgj.benq.com.cn%2Fwb.html&appkey=1467585635&language=zh_cn&title=%E5%BF%AB%E6%9D%A5%E6%B5%8B%E6%B5%8B%E4%BD%A0%E7%9A%84%E5%BC%80%E5%B7%A5%E5%80%BC&source=&sourceUrl=&ralateUid=&message=&uids=&pic=https%3A%2F%2Fjgl.oss-cn-beijing.aliyuncs.com%2Fkgj.png&searchPic=true&content=')
    },
    
        },
    }
</script>

<style   scoped>
.all_bg{
    width:100%;
    height:100vh;
    background:url('../assets/images/blueBg.png') no-repeat center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}
.now_content{
    width:350px;
    height:550px;
    background:url('../assets/images/result4.png') no-repeat center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
.avatar_area{
    margin-top:-33px;
    width:66px;
    height:66px;
    background:url('../assets/images/avatar.png') no-repeat center;
    background-size: cover;
}
.avatar_bg{
    background-repeat: no-repeat;
    background-size: contain;
      width:66px;
    height:66px;
     border-radius:50%;
}
.nickname_area{
    width: 260px;
    display: flex;
    justify-content: center;
    overflow-x:hidden ;
    margin-top:5px;
    font-weight: bold;
}
.bottom_btnarea{
    margin-top:435px;
    width:290px;
    height:45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.btn_bg{
    display: block;
    height:40px;
    width:110px;
}
.image {
    width:100%;
    height:100vh;
}
</style>