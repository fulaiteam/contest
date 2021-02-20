<template>
    <div   class='all_bg' >
        <div  class='cover_middle' >
            <div  class='cover_btn'   @click='startTest'    >

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
            this.getCode()
        },
        methods:{
            getCode () { // 非静默授权，第一次有弹框
                this.code = ''
                var local = window.location.href // 获取页面url
                var appid = 'wxd380519f6d1d8516' 
                this.code = this.getUrlCode().code // 截取code;
                var vm = this;
                if (this.code == null || this.code === '') { // 如果没有code，则去请求
                    window.location.href = `https://api.weibo.com/oauth2/authorize?client_id=1795438477&response_type=code&redirect_uri=https://jgltest.hemajia.net/dist/`
                } else {
                    // 你自己的业务逻辑
                    localStorage.setItem('nowCode1',vm.code)
                }
            },
            getUrlCode() {
                var nnn = window.location.href;
                var index6 =  nnn.lastIndexOf("#")
                var url =  nnn.indexOf("#") ? nnn.substring(0,index6)  : nnn;
                this.winUrl = url
                var theRequest = new Object()
                if (url.indexOf("?") != -1) {
                    var str = url.substr(1)
                    var strs = str.split("&")
                    var newarr = [];
                    for(let j=0;j < strs.length; j ++){
                        if(strs[j].indexOf("?") != -1){
                           var index =  strs[j].lastIndexOf("?")
                            newarr.push(strs[j].substring(index + 1, strs[j].length))
                        }else{
                            newarr.push(strs[j])
                        }
                    }
                    for(var i = 0; i < newarr.length; i ++) {
                        theRequest[newarr[i].split("=")[0]]=(newarr[i].split("=")[1])
                    }
                }
                console.log(theRequest)
                return theRequest

            },
        startTest() {
            this.$axios.get('/wbo/user/oauth', 
            {
                    headers: {
                       "Content-Type": "application/x-www-form-urlencoded"
                    },
                    params: {
                        code:this.code
                    },
                }
            )
            .then(res => {
                console.log(res,111111)
                if(res.data.flag){
                    localStorage.setItem('wbnickname',res.data.data.screenName);
                    localStorage.setItem('wbuid',res.data.data.uid);
                    localStorage.setItem('wbavatar',res.data.data.url);
                }
            })





            
        }

        }
    }
</script>

<style  scoped>
.all_bg{
    width:100%;
    height:100vh;
    background:url('../assets/images/cover_bg.png') no-repeat center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}
.cover_middle{
    width:320px;
    height:555px;
    background:url('../assets/images/cover_content.png') no-repeat center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
}
.cover_btn{
    width:182px;
    height:88px;
    background:url('../assets/images/cover_btn.png') no-repeat center;
    background-size: cover;
    margin-bottom:50px;
}
</style>