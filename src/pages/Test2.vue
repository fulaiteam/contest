<template>
    <div   class='all_bg' >
        <div  class='test_middle' >
            <div  class='test_option' ></div>
            <div  class='test_question question_A' @click="toAfterQuestion(1)"></div>
            <div  class='test_question question_B' @click="toAfterQuestion(2)"></div>
            <div  class='test_question question_C' @click="toAfterQuestion(3)"></div>
            <div  class='test_inbetweening' ></div>
            <div  class='test_icon_one' ></div>
            <div  class='test_icon_two' ></div>
            <div  class='test_icon_three' ></div>
            <div  class='test_icon_four' ></div>
            <div  class='test_icon_five' ></div>
            <div  class='test_icon_six' ></div>
            <div  class='test_icon_seven' ></div>
            <div  class='test_font' ></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                val: ''
            };
        },
        created() {
            this.saveValue()
        },
        methods: {
            saveValue() {
                let value = this.$route.params.value
                this.val = value
            },
            toAfterQuestion(e) {
                this.$router.push({
                    name: 'Test3',
                    params: {'value': e + this.val}
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
    width:245px;
    height:38px;
    background:url('../assets/images/question2.png') no-repeat center;
    background-size: cover;
    margin: 127px 13px 0 29px;
}
.test_question {
    width:230px;
    height:58px;
}
.question_A {
    background:url('../assets/images/question2A.png') no-repeat center;
    background-size: cover;
    margin: 28px 40px 0 50px;
}
.question_B {
    background:url('../assets/images/question2B.png') no-repeat center;
    background-size: cover;
    margin: 27px 40px 27px 50px;
}
.question_C {
    width:222px;
    height:81px;
    background:url('../assets/images/question2C.png') no-repeat center;
    background-size: cover;
    margin: 0 48px 0 51px;
}
.test_inbetweening {
    position: absolute;
    top: 325px;
    left: 190px;
    width:79px;
    height:154px;
    background:url('../assets/images/inbetweening2.png') no-repeat center;
    background-size: cover;
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