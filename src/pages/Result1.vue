<template>
    <div  class='all_bg' id="html2canvas" ref="html2canvas">
        <div  class='now_content' >
            <div  class='avatar_area' >
                <image  class='avatar_bg'   :src="this.avatar" ></image>
            </div>
            <div   class='nickname_area' >
                @ {{this.nickname}}
            </div>
            <div  class='bottom_btnarea' >
            <img src="https://duiduipeng.oss-cn-beijing.aliyuncs.com/save_btn.png"   class='btn_bg'  @click="saveImage('html2canvas', '结果海报')">
            <img src="https://duiduipeng.oss-cn-beijing.aliyuncs.com/share_btn.png"   class='btn_bg'  >
            </div>
        </div>
    </div>    
</template>

<script>
    // 引入html2canvas
    import html2canvas from 'html2canvas';

    export default {
        data(){
            return{
               
            }
        },
        created(){
        this.nickname =   localStorage.getItem('wbnickname');
          this.avatar =   localStorage.getItem('wbavatar');
        },
        mounted(){
            
        },
        methods: {
            // 图片格式转换方法
            dataURLToBlob(dataurl) {
                let arr = dataurl.split(',');
                let mime = arr[0].match(/:(.*?);/)[1];
                let bstr = atob(arr[1]);
                let n = bstr.length;
                let u8arr = new Uint8Array(n);
                while (n--) {
                    u8arr[n] = bstr.charCodeAt(n);
                }
                return new Blob([u8arr], { type: mime });
            },
            // 点击方法 （按钮点击触发的方法）
            // 第一个参数为需要保存的div的id名  
            // 第二个参数为保存图片的名称 */
            saveImage(divText, imgText) {
                let canvasID = this.$refs[divText];
                console.log(canvasID)
                let that = this;
                let a = document.createElement('a');
                console.log(a)
                html2canvas(canvasID).then(canvas => {
                    console.log(canvas)
                    let dom = document.body.appendChild(canvas);
                    console.log(dom)
                    dom.style.display = 'none';
                    a.style.display = 'none';
                    document.body.removeChild(dom);
                    let blob = that.dataURLToBlob(dom.toDataURL('image/png'));
                    console.log(blob)
                    a.setAttribute('href', URL.createObjectURL(blob));
                    //这块是保存图片操作  可以设置保存的图片的信息
                    a.setAttribute('download', imgText + '.png');
                    document.body.appendChild(a);
                    a.click();
                    URL.revokeObjectURL(blob);
                    document.body.removeChild(a);
                });
            },
        },
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
    background:url('../assets/images/result1.png') no-repeat center;
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
.avatar_bg{
      width:66px;
    height:66px;
}
.nickname_area{
    width: 260px;
    display: flex;
    justify-content: center;
    overflow-x:hidden ;
    margin-top:5px;
    font-weight: bold;
}
.bottom_btnarea{
    margin-top:390px;
    width:265px;
    height:45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.btn_bg{
    display: block;
    height:40px;
    width:110px;
}
</style>