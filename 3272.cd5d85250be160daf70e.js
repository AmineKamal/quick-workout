(self.webpackChunkquick_workout=self.webpackChunkquick_workout||[]).push([[3272],{3272:(e,t,r)=>{"use strict";r.r(t),r.d(t,{createSwipeBackGesture:()=>o});var a=r(2377),n=r(9461);r(960);const o=(e,t,r,o,s)=>{const c=e.ownerDocument.defaultView;return(0,n.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:e=>e.startX<=50&&t(),onStart:r,onMove:e=>{o(e.deltaX/c.innerWidth)},onEnd:e=>{const t=c.innerWidth,r=e.deltaX/t,n=e.velocityX,o=n>=0&&(n>.2||e.deltaX>t/2),i=(o?1-r:r)*t;let u=0;if(i>5){const e=i/Math.abs(n);u=Math.min(e,540)}s(o,r<=0?.01:(0,a.j)(0,r,.9999),u)}})}}}]);