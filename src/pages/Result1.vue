<template>
    <div  class='all_bg' >
        <div  class='now_content' >
            <div  class='avatar_area' >
                <image  class='avatar_bg'   :src="this.avatar" ></image>
            </div>
            <div   class='nickname_area' >
                @ {{this.nickname}}
            </div>
            <div  class='bottom_btnarea' >
             <img src="https://duiduipeng.oss-cn-beijing.aliyuncs.com/save_btn.png"   class='btn_bg' >
             <img src="https://duiduipeng.oss-cn-beijing.aliyuncs.com/share_btn.png"   class='btn_bg'  >
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        created(){
        this.nickname =   localStorage.getItem('wbnickname');
          this.avatar =   localStorage.getItem('wbavatar');
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
    width:320px;
    height:502px;
    background:url('../assets/images/result1.png') no-repeat center;
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
      width:66px;
    height:66px;
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
    margin-top:390px;
    width:265px;
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
</style>