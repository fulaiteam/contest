<template>
    <div   class='all_bg' >
        <div  class='test_middle' >
            <div  class='test_option' ></div>
            <div  class='test_question question_A' @click="toAfterQuestion(3)"></div>
            <div  class='test_question question_B' @click="toAfterQuestion(2)"></div>
            <div  class='test_question question_C' @click="toAfterQuestion(1)"></div>
            <div  class='test_inbetweening' ></div>
            <div  class="test_icon_one animate__animated animate__fadeInRight" style="animation-delay:1s;"></div>
            <div  class='test_icon_two animate__animated animate__fadeInRight' style="animation-delay:2s;"></div>
            <div  class='test_icon_three animate__animated animate__fadeIn' style="animation-delay:3s;"></div>
            <div  class='test_icon_four animate__animated animate__fadeInDown' style="animation-delay:4s;"></div>
            <div  class='test_icon_five animate__animated animate__bounce' style="animation-delay:5s;"></div>
            <div  class='test_icon_six animate__animated animate__bounce' style="animation-delay:6s;"></div>
            <div  class='test_icon_seven animate__animated animate__bounce' style="animation-delay:7s;"></div>
            <div  class='test_font animate__animated animate__fadeInDown' style="animation-delay:8s;"></div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            toAfterQuestion(e) {
                this.$router.push({
                    name: 'Test2',
                    params: {'value': e}
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
    width:247px;
    height:41px;
    background:url('../assets/images/question1.png') no-repeat center;
    background-size: cover;
    margin: 126px 12px 0 31px;
}
.test_question {
    width:225px;
    height:61px;
}
.question_A {
    background:url('../assets/images/question1A.png') no-repeat center;
    background-size: cover;
    margin: 14px 40px 0 50px;
}
.question_B {
    background:url('../assets/images/question1B.png') no-repeat center;
    background-size: cover;
    margin: 23px 40px 24px 50px;
}
.question_C {
    background:url('../assets/images/question1C.png') no-repeat center;
    background-size: cover;
    margin: 0 40px 0 50px;
}
.test_inbetweening {
    width:241px;
    height:83px;
    background:url('../assets/images/inbetweening1.png') no-repeat center;
    background-size: cover;
    margin: 4px -1px 0 42px;
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