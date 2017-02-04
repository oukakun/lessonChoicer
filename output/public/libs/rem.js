//获取根元素
var phtml=document.documentElement;
function getSize(){
    //实时获取屏幕的大小
    var rel_phtml=phtml.offsetWidth;
    if(rel_phtml>640){
        phtml.style.fontSize='100px';
    }else if(rel_phtml<320){
        phtml.style.fontSize='50px';
    }else{
        //套公式  动态改变根目录文字的大小   每份的大小是100
        phtml.style.fontSize=rel_phtml/(640/100)+'px';
    }

}
getSize();
window.addEventListener('resize',getSize)
