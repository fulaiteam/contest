<template>
    <div  class='all_bg' >
        <div  class='now_content' >
            <div  class='avatar_area' >

            </div>
            <div   class='nickname_area' >
                @ 米多读豆豆多
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
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
    background:url('../assets/images/result3.png') no-repeat center;
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
.nickname_area{
    width: 260px;
    display: flex;
    justify-content: center;
    overflow-x:hidden ;
    margin-top:5px;
    font-weight: bold;
}
</style>