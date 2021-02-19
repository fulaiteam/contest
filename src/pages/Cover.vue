<template>
    <div   class='all_bg' >
        <div  class='cover_middle' >
            <div  class='cover_btn' >
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
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