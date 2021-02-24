<template>
    <div   class='all_bg' >
        <div  class="cover_middle" :class="{'animate__animated':animate,'animate__fadeInLeft':animate}" >
            <div  class='cover_btn'   @click='startTest'    >

            </div>
             <img src="http://timg.sjs.sinajs.cn/t4/appstyle/widget/images/loginButton/loginButton_24.png"    @click='getCode'  class='weibo_login'  ></img>
                </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                animate: true
            }
        },
        created(){
        //    this.code = localStorage.getItem('nowCode1');
        //    this.wbuid = localStorage.getItem('wbuid')
            if(this.getUrlCode().code){
                this.animate = false
                console.log('succeed')
            } 
        },
        mounted() {
        },
        methods:{
            getCode () { // 非静默授权，第一次有弹框
                this.code = ''
                var local = window.location.href // 获取页面url
                var appid = 'wxd380519f6d1d8516' 
                this.code = this.getUrlCode().code // 截取code;
                var vm = this;
                if (this.code == null || this.code === '') { // 如果没有code，则去请求
                    window.location.href = `https://api.weibo.com/oauth2/authorize?client_id=1467585635&response_type=code&redirect_uri=https://mjkgj.benq.com.cn`
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
            var  originCode = this.getUrlCode().code;
            var vm = this;
            if(!originCode){
                this.$message({
                    message: '请先使用微博授权登录',
                    type: 'warning'
                })
                return
            }
            this.$axios.get('/wbo/user/oauth', 
            {
                    headers: {
                       "Content-Type": "application/x-www-form-urlencoded"
                    },
                    params: {
                        code:originCode
                    },
                }
            )
            .then(res => {
                console.log(res,111111)
                if(res.data.flag){
                    localStorage.setItem('wbnickname',res.data.data.screenName);
                    localStorage.setItem('wbuid',res.data.data.uid);
                    localStorage.setItem('wbavatar',res.data.data.url);
                    vm.$router.push('/test1')
                }else{
                    console.log('授权失败')
                    //vm.$router.push('/test1')
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
    margin-bottom:10px;
}
.weibo_login{
    margin-bottom:40px;
}
</style>