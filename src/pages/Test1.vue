<template>
    <div   class='all_bg'>
        <div  class='test_middle'>
            <div  class='test_option animate__animated animate__fadeIn' style="animation-delay:0.4s;"></div>
            <div  class='test_question question_A animate__animated animate__fadeIn' style="animation-delay:0.45s;" @click="flag && toAfterQuestion(12.5)"></div>
            <div  class='test_question question_B animate__animated animate__fadeIn' style="animation-delay:0.45s;" @click="flag && toAfterQuestion(7)"></div>
            <div  class='test_question question_C animate__animated animate__fadeIn' style="animation-delay:0.45s;" @click="flag && toAfterQuestion(3)"></div>
            <div  class='test_inbetweening animate__animated animate__bounceIn' style="animation-delay:0.5s;"></div>
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
            }
        },
        mounted() {
            this.setTime()
        },
        methods: {
            toAfterQuestion(e) {
                localStorage.setItem('value1', e)
                this.$router.push({
                    name: 'Test2'
                });
            },
            setTime() {
                setTimeout(()=>{ 
                    this.flag = true
                },500); 
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
    width:278px;
    height:43px;
    background:url('../assets/images/question1.png') no-repeat center;
    background-size: cover;
    margin: 145px 14px 0 35px;
}
.test_question {
    width:260px;
    height:66px;
}
.question_A {
    background:url('../assets/images/question1A.png') no-repeat center;
    background-size: cover;
    margin: 21px 25px 0 41px;
}
.question_B {
    background:url('../assets/images/question1B.png') no-repeat center;
    background-size: cover;
    margin: 27px 25px 28px 41px;
}
.question_C {
    background:url('../assets/images/question1C.png') no-repeat center;
    background-size: cover;
    margin: 0 25px 0px 41px;
}
.test_inbetweening {
    width:270px;
    height:88px;
    background:url('../assets/images/inbetweening1.png') no-repeat center;
    background-size: cover;
    margin: 0px -1px 0 57px;
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