/*
* @Author: Administrator
* @Date:   2017-09-19 22:34:02
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-30 13:49:22
*/
window.onload=function(){

//头部
let main=$('main')[0];
let brb=$('.right-r',main)[0];
let gw=$('.shop',brb)[0];
brb.onmouseover=function(){
    gw.style.display='block';
    gw.style.boxShadow= '0 1px 1px 1px #ccc'; 
}
brb.onmouseout=function(){
    gw.style.display='none'; 
}
let flag=true;
//菜单栏
let su=$('.sus')[0];
let suli=$('li',su);
let susx=document.querySelectorAll('.sus > li >ul')
// let susxh=parseInt(getComputedStyle(susx,null).height);
for(let i=0;i<suli.length;i++){

  suli[i].onmouseover=function(){
        
        susx[i].style.display='block';
}
  suli[i].onmouseout=function(){
        susx[i].style.display='none';
  }    
  }
/////////////////////////////////////////////////////////
let danhz=$('.danpkuan')[0];
let pinbot=$('.danpin-bottom',danhz)[0];
let xiaoleft=$('.xiao1')[0];
let xiaoright=$('.xiao2')[0];
let xar=$('a',xiaoright)[0];
let xar1=$('a',xiaoleft)[0];;
let hzw=parseInt(getComputedStyle(danhz,null).width);
let phzw=parseInt(getComputedStyle(pinbot,null).left);
let flagp=true;
let i=0;
let dant=setInterval(function(){
   if(flagp){
      animate(pinbot,{left:-hzw});
      xar1.style.color='#000';
       xar.style.color='#ccc';
      flagp=false;
      i=1;
   }else{
       animate(pinbot,{left:0});
      xar.style.color='#000';
       xar1.style.color='#ccc';
       flagp=true;
       i=0;
   } 
},6000);

xar.onclick=function(){
  if(i==1){
    
    return
  }
  i++;
  animate(pinbot,{left:-hzw*i});
  xar1.style.color='#000';
  xar.style.color='#ccc';
}
xar1.onclick=function(){
  if(i==0){
    return
  }
  i--;
  xar.style.color='#000';
  xar1.style.color='#ccc';
  animate(pinbot,{left:hzw*i});
}


////////////////////////////////////////////////////////
///轮播图
//图片
let tuli=$('.banner-list')[0];
let bli=$('li',tuli);
//选项卡
let btnd=$('.btn')[0];
let btnli=$('li',btnd);
//按钮
let btnleft=$('.banner-left')[0];
let btnright=$('.banner-right')[0];
//banner
 let bann=$('.banner')[0];
 let imgw=parseInt(getComputedStyle(tuli,null).width);
 let nwo=0;
 let next=0;
 let t;
 let flog=true;

btnleft.onclick=function(){
     if(!flog){
      return;
      
    }
     movel(); 
   
    flog=false;
 }
btnright.onclick=function(){
    if(!flog){
      return;

    }
    move();
    
    flog=false;
}
 t=setInterval(move,3000);
 function move(){
   next++;
   if(next ==bli.length){
    next=0;
   }
   
   bli[next].style.left=`${imgw}px`;
   animate(bli[nwo],{left:-imgw});
   animate(bli[next],{left:0},function(){flog=true});
   btnli[nwo].style.background='rgba(0, 0, 0, 0.3)';
   btnli[next].style.background='#f5f5f5';
   nwo=next;

 }
function movel(){
   next--;
   if(next <0){
    next=bli.length-1;
   }
   
   bli[next].style.left=`${-imgw}px`;
   animate(bli[nwo],{left:imgw});
   animate(bli[next],{left:0},function(){flog=true});
   btnli[nwo].style.background='rgba(0, 0, 0, 0.3)';
   btnli[next].style.background='#f5f5f5';
   nwo=next;

 }

 //选项卡
 for(let i=0;i<btnli.length;i++){
    btnli[i].onclick=function(){
    
    if(nwo==i){return}
    bli[i].style.left=`${imgw}px`;
    btnli[nwo].style.background='rgba(0, 0, 0, 0.3)';
    btnli[i].style.background='#f5f5f5';
    animate(bli[nwo],{left:-imgw});
    animate(bli[i],{left:0});
    nwo=text=i;
    }
 }

 bann.onmouseover=function(){
    clearInterval(t);
  }
  bann.onmouseout=function(){
    t =setInterval(move,3000);
  }
// //图片轮播
// let t=setInterval(fn,3000);
// let num=0;
// function fn(){
// 	num++;
// 	if(num>=bli.length){
// 		num=0;
// 	}
// 	for(let i=0;i<bli.length;i++){
//       animate(bli[i],{opacity:0})
//       btnli[i].style.background='rgba(0, 0, 0, 0.3)'; 
// 	}
// 	  animate(bli[num],{opacity:1})
//     btnli[num].style.background='#f5f5f5';
// }
// function fb(){
// 	num--;
// 	if(num<0){
// 		num=5;
// 	}
// 	for(let i=0;i<bli.length;i++){
//       animate(bli[i],{opacity:0})
//       btnli[i].style.background='rgba(0, 0, 0, 0.3)'; 
// 	}
// 	animate(bli[num],{opacity:1})
//     btnli[num].style.background='#f5f5f5';
// }
  
// //选项卡

//  for(let i=0;i<btnli.length;i++){
//       btnli[i].onclick=function(){
//       	for(let j=0;j<bli.length;j++){
//            animate(bli[j],{opacity:0})
//            btnli[j].style.background='rgba(0, 0, 0, 0.3)';
//       	}
//        animate(bli[i],{opacity:1})
//        btnli[i].style.background='#f5f5f5';
//        num=i;
//  }
// }
// //鼠标移入
  // bann.onmouseover=function(){
  // 	clearInterval(t);
  // }
  // bann.onmouseout=function(){
  // 	t =setInterval(fn,3000);
  // }
// //按钮
// //
//   btnleft.onclick=function(){
//   	fb();

//   }
// btnright.onclick=function(){
//   	 fn();
//   }
//////////////////////////////////////////////////////////////////
//优化
let windsh=innerHeight;
let kuar=document.querySelectorAll('.jiadiankuang');

let kuarr=[];
kuar.forEach(elements=>{
  kuarr.push(elements.offsetTop);
})
console.log(kuarr);
window.onscroll=function(){
  let chaokuai=document.body.scrollTop;
  console.log(chaokuai);
  kuarr.forEach((value,index)=>{
    
    if(chaokuai+windsh>value+300){
      let imgs=kuar[index].getElementsByTagName('img');
      for(let i=0;i<imgs.length;i++){
        imgs[i].src=imgs[i].getAttribute('src1')
      }
    }
  })

}
}