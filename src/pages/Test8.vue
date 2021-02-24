<template>
    <div   class='all_bg' >
        <div  class='test_middle' >
            <div  class='test_option animate__animated animate__fadeIn' style="animation-delay:0.4s;"></div>
            <div  class='test_question question_A animate__animated animate__fadeIn' style="animation-delay:0.45s;" @click="flag && toAfterQuestion(12.5)"></div>
            <div  class='test_question question_B animate__animated animate__fadeIn' style="animation-delay:0.45s;" @click="flag && toAfterQuestion(7)"></div>
            <div  class='test_question question_C animate__animated animate__fadeIn' style="animation-delay:0.45s;" @click="flag && toAfterQuestion(3)"></div>
            <div  class="test_icon_one animate__animated animate__fadeInRight" style="animation-delay:0.05s;"></div>
            <div  class='test_icon_two animate__animated animate__fadeInRight' style="animation-delay:0.1s;"></div>
            <div  class='test_icon_three animate__animated animate__fadeIn' style="animation-delay:0.15s;"></div>
            <div  class='test_icon_four animate__animated animate__fadeInDown' style="animation-delay:0.2s;"></div>
            <div  class='test_icon_five animate__animated animate__bounce' style="animation-delay:0.25s;"></div>
            <div  class='test_icon_six animate__animated animate__bounce' style="animation-delay:0.25s;"></div>
            <div  class='test_icon_seven animate__animated animate__bounce' style="animation-delay:0.25s;"></div>
            <div  class='test_font animate__animated animate__fadeInDown' style="animation-delay:0.3s;"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                flag: false
            };
        },
        created() {
             this.wbuid = localStorage.getItem('wbuid')
            let val1 = parseFloat(localStorage.getItem('value1'))
            console.log(val1)
        },
         mounted() {
            this.setTime()
            // this.ToBase64()
        },
        methods: {
            setTime() {
                setTimeout(()=>{ 
                    this.flag = true
                },500); 
            },
            toAfterQuestion(e) {
                let value = parseFloat(localStorage.getItem('value1')) + parseFloat(localStorage.getItem('value2')) + parseFloat(localStorage.getItem('value3')) + parseFloat(localStorage.getItem('value4')) + parseFloat(localStorage.getItem('value5')) + parseFloat(localStorage.getItem('value6')) + parseFloat(localStorage.getItem('value7')) + e
                this.saveById(value)
                if (value >= 1 && value <= 25) {
                    this.$router.push({
                        name: 'Result1'
                    });
                } else if (value > 25 && value <= 50) {
                    this.$router.push({
                        name: 'Result2'
                    });
                } else if (value > 50 && value <= 75) {
                    this.$router.push({
                        name: 'Result3'
                    });
                } else if (value > 75 && value <= 100) {
                    this.$router.push({
                        name: 'Result4'
                    });
                }
            },
            saveById(sco){
                var jg1 = sco;
                var vm = this;
                this.$axios({
                method: 'post',
                url:'/wbo/user/insert',
                data: {
                    uid:this.wbuid,
                    jg:jg1,
                },
            }).then((res)=>{
                
            });

            },
            ToBase64(){
                var originImg = 'https://airport11.oss-cn-beijing.aliyuncs.com/006WfM8Gly8fj1y7bmdo3j30hs0hsgm1.jpg';
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
                localStorage.setItem('lastAvatar','data:image/jpg;base64,'+res.data);

            });

            }
            
        },
    }
</script>

<style  scoped>
.all_bg{
    width:100%;
    height:100vh;
    background:url('../assets/images/test_bg.png') no-repeat center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}
.test_middle{
    position: relative;
    width:326px;
    height:550px;
    border: 2px solid #010101;
    border-radius: 6px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.test_option{
    width:259px;
    height:44px;
    background:url('../assets/images/question8.png') no-repeat center;
    background-size: cover;
    margin: 145px 32px 0 35px;
}
.question_A {
    width:260px;
    height:108px;
    background:url('../assets/images/question8A.png') no-repeat center;
    background-size: cover;
    margin: 6px 32px 0 35px;
}
.question_B {
    width:260px;
    height:103px;
    background:url('../assets/images/question8B.png') no-repeat center;
    background-size: cover;
    margin: 16px 32px 30px 35px;
}
.question_C {
    width:260px;
    height:71px;
    background:url('../assets/images/question8C.png') no-repeat center;
    background-size: cover;
    margin: 0 32px 0 35px;
}

.test_font {
    position: absolute;
    top: 49px;
    width:238px;
    height:70px;
    background:url('../assets/images/test_font.png') no-repeat center;
    background-size: cover;
}
.test_icon_one {
    position: absolute;
    top: -28px;
    left: 213px;
    width:114px;
    height:13px;
    background:url('../assets/images/test_icon1.png') no-repeat center;
    background-size: cover;
}
.test_icon_two {
    position: absolute;
    top: 118px;
    left: 43px;
    width:155px;
    height:6px;
    background:url('../assets/images/test_icon2.png') no-repeat center;
    background-size: cover;
}
.test_icon_three {
    position: absolute;
    top: -10px;
    left: -9px;
    width:26px;
    height:26px;
    background:url('../assets/images/test_icon3.png') no-repeat center;
    background-size: cover;
}
.test_icon_four {
    position: absolute;
    top: 31px;
    left: 7px;
    width:12px;
    height:69px;
    background:url('../assets/images/test_icon4.png') no-repeat center;
    background-size: cover;
}
.test_icon_five {
    position: absolute;
    top: 22px;
    left: 277px;
    width:62px;
    height:38px;
    background:url('../assets/images/test_icon5.png') no-repeat center;
    background-size: cover;
}
.test_icon_six {
    position: absolute;
    top: 125px;
    left: -13px;
    width:37px;
    height:62px;
    background:url('../assets/images/test_icon6.png') no-repeat center;
    background-size: cover;
}
.test_icon_seven {
    position: absolute;
    bottom: -55px;
    left: 252px;
    width:90px;
    height:49px;
    background:url('../assets/images/test_icon7.png') no-repeat center;
    background-size: cover;
}
</style>