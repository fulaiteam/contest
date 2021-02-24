<template>
    <div   class='all_bg' >
        <div  class='test_middle' >
            <div  class='test_option animate__animated animate__fadeIn' style="animation-delay:0.8s;"></div>
            <div  class='test_question question_A animate__animated animate__fadeIn' style="animation-delay:0.9s;" @click="flag && toAfterQuestion(12.5)"></div>
            <div  class='test_question question_B animate__animated animate__fadeIn' style="animation-delay:0.9s;" @click="flag && toAfterQuestion(7)"></div>
            <div  class='test_question question_C animate__animated animate__fadeIn' style="animation-delay:0.9s;" @click="flag && toAfterQuestion(3)"></div>
            <div  class="test_icon_one animate__animated animate__fadeInRight" style="animation-delay:0.1s;"></div>
            <div  class='test_icon_two animate__animated animate__fadeInRight' style="animation-delay:0.2s;"></div>
            <div  class='test_icon_three animate__animated animate__fadeIn' style="animation-delay:0.3s;"></div>
            <div  class='test_icon_four animate__animated animate__fadeInDown' style="animation-delay:0.4s;"></div>
            <div  class='test_icon_five animate__animated animate__bounce' style="animation-delay:0.5s;"></div>
            <div  class='test_icon_six animate__animated animate__bounce' style="animation-delay:0.5s;"></div>
            <div  class='test_icon_seven animate__animated animate__bounce' style="animation-delay:0.5s;"></div>
            <div  class='test_font animate__animated animate__fadeInDown' style="animation-delay:0.6s;"></div>
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
         mounted() {
            this.setTime()
        },
        methods: {
            toAfterQuestion(e) {
                localStorage.setItem('value3', e)
                this.$router.push({
                    name: 'Test4'
                });
            },
            setTime() {
                setTimeout(()=>{ 
                    this.flag = true
                },1000); 
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
    width:282px;
    height:476px;
    border: 2px solid #010101;
    border-radius: 6px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.test_option{
    width:195px;
    height:14px;
    background:url('../assets/images/question3.png') no-repeat center;
    background-size: cover;
    margin: 134px 62px 0 29px;
}
.question_A {
    width:232px;
    height:66px;
    background:url('../assets/images/question3A.png') no-repeat center;
    background-size: cover;
    margin: 25px 45px 0 44px;
}
.question_B {
    width:234px;
    height:67px;
    background:url('../assets/images/question3B.png') no-repeat center;
    background-size: cover;
    margin: 41px 45px 19px 44px;
}
.question_C {
    width:234px;
    height:75px;
    background:url('../assets/images/question3C.png') no-repeat center;
    background-size: cover;
    margin: 0 45px 0 44px;
}

.test_font {
    position: absolute;
    top: 42px;
    width:206px;
    height:61px;
    background:url('../assets/images/test_font.png') no-repeat center;
    background-size: cover;
}
.test_icon_one {
    position: absolute;
    top: -28px;
    left: 179px;
    width:98px;
    height:11px;
    background:url('../assets/images/test_icon1.png') no-repeat center;
    background-size: cover;
}
.test_icon_two {
    position: absolute;
    top: 103px;
    left: 37px;
    width:144px;
    height:6px;
    background:url('../assets/images/test_icon2.png') no-repeat center;
    background-size: cover;
}
.test_icon_three {
    position: absolute;
    top: -10px;
    left: -9px;
    width:23px;
    height:23px;
    background:url('../assets/images/test_icon3.png') no-repeat center;
    background-size: cover;
}
.test_icon_four {
    position: absolute;
    top: 27px;
    left: 6px;
    width:10px;
    height:60px;
    background:url('../assets/images/test_icon4.png') no-repeat center;
    background-size: cover;
}
.test_icon_five {
    position: absolute;
    top: 19px;
    left: 240px;
    width:54px;
    height:33px;
    background:url('../assets/images/test_icon5.png') no-repeat center;
    background-size: cover;
}
.test_icon_six {
    position: absolute;
    top: 108px;
    left: -13px;
    width:32px;
    height:53px;
    background:url('../assets/images/test_icon6.png') no-repeat center;
    background-size: cover;
}
.test_icon_seven {
    position: absolute;
    bottom: -55px;
    left: 215px;
    width:79px;
    height:43px;
    background:url('../assets/images/test_icon7.png') no-repeat center;
    background-size: cover;
}
</style>