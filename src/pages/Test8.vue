<template>
    <div   class='all_bg' >
        <div  class='test_middle' >
            <div  class='test_option animate__animated animate__fadeIn' style="animation-delay:1.4s;" ></div>
            <div  class='test_question question_A animate__animated animate__fadeIn' style="animation-delay:1.6s;" @click="flag && toAfterQuestion(12.5)"></div>
            <div  class='test_question question_B animate__animated animate__fadeIn' style="animation-delay:1.6s;" @click="flag && toAfterQuestion(7)"></div>
            <div  class='test_question question_C animate__animated animate__fadeIn' style="animation-delay:1.6s;" @click="flag && toAfterQuestion(3)"></div>
            <div  class="test_icon_one animate__animated animate__fadeInRight" style="animation-delay:0.2s;"></div>
            <div  class='test_icon_two animate__animated animate__fadeInRight' style="animation-delay:0.4s;"></div>
            <div  class='test_icon_three animate__animated animate__fadeIn' style="animation-delay:0.6s;"></div>
            <div  class='test_icon_four animate__animated animate__fadeInDown' style="animation-delay:0.8s;"></div>
            <div  class='test_icon_five animate__animated animate__bounce' style="animation-delay:1s;"></div>
            <div  class='test_icon_six animate__animated animate__bounce' style="animation-delay:1s;"></div>
            <div  class='test_icon_seven animate__animated animate__bounce' style="animation-delay:1s;"></div>
            <div  class='test_font animate__animated animate__fadeInDown' style="animation-delay:1.2s;"></div>
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
            let val1 = parseFloat(localStorage.getItem('value1'))
            console.log(val1)
        },
         mounted() {
            this.setTime()
        },
        methods: {
            setTime() {
                setTimeout(()=>{ 
                    this.flag = true
                },2000); 
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
    width:228px;
    height:39px;
    background:url('../assets/images/question8.png') no-repeat center;
    background-size: cover;
    margin: 125px 27px 0 31px;
}
.question_A {
    width:228px;
    height:94px;
    background:url('../assets/images/question8A.png') no-repeat center;
    background-size: cover;
    margin: 5px 27px 0 30px;
}
.question_B {
    width:230px;
    height:90px;
    background:url('../assets/images/question8B.png') no-repeat center;
    background-size: cover;
    margin: 14px 27px 26px 30px;
}
.question_C {
    width:228px;
    height:62px;
    background:url('../assets/images/question8C.png') no-repeat center;
    background-size: cover;
    margin: 0 27px 0 30px;
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