(self.webpackChunkquick_workout=self.webpackChunkquick_workout||[]).push([[1495],{1495:(t,e,n)=>{"use strict";n.r(e),n.d(e,{WorkoutPageModule:()=>g});var r=n(7823),i=n(3686),a=n(8583),c=n(665),o=n(7920),s=n(8720);const u=function(t){return{background:t}};let d=(()=>{class t{constructor(t,e){this.aroute=t,this.router=e,this.currentIndex=0,this.currentGradientIndex=0,this.gradients=["linear-gradient(to right, #1e3c72, #2a5298)","linear-gradient(to right, #114357, #f29492)","linear-gradient(to right, #6a3093, #a044ff)","linear-gradient(to right, #457fca, #5691c8)","linear-gradient(to right, #673ab7, #512da8)","linear-gradient(to right, #005c97, #363795)","linear-gradient(to right, #2c3e50, #3498db)","linear-gradient(to right, #525252, #3d72b4)","linear-gradient(to right, #136a8a, #267871)","linear-gradient(to right, #6441a5, #2a0845)","linear-gradient(to right, #360033, #0b8793)"]}ngOnInit(){this.aroute.params.subscribe(t=>{const e=t.id;this.workout=o.v.get("workouts").rawData.find(t=>t.id===e),this.currentIndex=0,this.currentGradientIndex=0,this.shuffleArray(this.gradients)})}next(){this.currentIndex=Math.min(this.currentIndex+1,this.workout.exercices.length-1),this.currentGradientIndex=Math.min(this.currentGradientIndex+1,this.workout.exercices.length-1,this.gradients.length-1)}prev(){this.currentIndex=Math.max(this.currentIndex-1,0),this.currentGradientIndex=Math.max(this.currentGradientIndex-1,0)}shuffleArray(t){for(var e=t.length-1;e>0;e--){var n=Math.floor(Math.random()*(e+1)),r=t[e];t[e]=t[n],t[n]=r}}back(){this.router.navigate(["tabs/workouts"])}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(i.gz),s.Y36(i.F0))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-workout"]],decls:13,vars:7,consts:[[1,"main",3,"ngStyle"],[1,"prev-click",3,"click"],[1,"next-click",3,"click"],[1,"main"],[1,"back-arrow",3,"click"],["name","arrow-back-outline"]],template:function(t,e){1&t&&(s.TgZ(0,"ion-content"),s.TgZ(1,"div",0),s.TgZ(2,"div",1),s.NdJ("click",function(){return e.prev()}),s.qZA(),s.TgZ(3,"div",2),s.NdJ("click",function(){return e.next()}),s.qZA(),s.TgZ(4,"div",3),s.TgZ(5,"span",4),s.NdJ("click",function(){return e.back()}),s._UZ(6,"ion-icon",5),s.qZA(),s.TgZ(7,"span"),s._uU(8),s.qZA(),s.TgZ(9,"span"),s._uU(10),s.qZA(),s.TgZ(11,"span"),s._uU(12),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(1),s.Q6J("ngStyle",s.VKq(5,u,e.gradients[e.currentGradientIndex])),s.xp6(7),s.hij(" ",e.workout.name," "),s.xp6(2),s.Oqu(e.workout.exercices[e.currentIndex].name),s.xp6(2),s.AsE("",e.currentIndex+1," / ",e.workout.exercices.length,""))},directives:[r.W2,a.PC,r.gu],styles:[".main[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;justify-content:space-between;align-items:center;color:#fff;font-family:Style Script,cursive;font-size:xxx-large}.next-click[_ngcontent-%COMP%]{right:0}.next-click[_ngcontent-%COMP%], .prev-click[_ngcontent-%COMP%]{position:absolute;top:0;height:100%;width:25%}.prev-click[_ngcontent-%COMP%]{left:0}.back-arrow[_ngcontent-%COMP%]{position:absolute;top:5px;left:5px}"]}),t})(),g=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[r.Pc,a.ez,c.u5,i.Bz.forChild([{path:"",component:d}])]]}),t})()}}]);