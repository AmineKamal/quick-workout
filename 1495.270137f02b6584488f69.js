(self.webpackChunkquick_workout=self.webpackChunkquick_workout||[]).push([[1495],{1495:(t,n,e)=>{"use strict";e.r(n),e.d(n,{WorkoutPageModule:()=>g});var r=e(7823),i=e(3686),o=e(8583),c=e(665),a=e(7920),s=e(8720);const u=function(t){return{background:t}};let d=(()=>{class t{constructor(t,n){this.aroute=t,this.router=n,this.currentIndex=0,this.currentGradientIndex=0,this.gradients=["linear-gradient(to right, #1e3c72, #2a5298)","linear-gradient(to right, #114357, #f29492)","linear-gradient(to right, #6a3093, #a044ff)","linear-gradient(to right, #457fca, #5691c8)","linear-gradient(to right, #673ab7, #512da8)","linear-gradient(to right, #005c97, #363795)","linear-gradient(to right, #2c3e50, #3498db)","linear-gradient(to right, #525252, #3d72b4)","linear-gradient(to right, #136a8a, #267871)","linear-gradient(to right, #6441a5, #2a0845)","linear-gradient(to right, #360033, #0b8793)"]}ngOnInit(){this.aroute.params.subscribe(t=>{const n=t.id;this.workout=a.v.get("workouts").rawData.find(t=>t.id===n),this.currentIndex=0,this.currentGradientIndex=0,this.shuffleArray(this.gradients)})}next(){this.currentIndex=Math.min(this.currentIndex+1,this.workout.exercices.length-1),this.currentGradientIndex=Math.min(this.currentGradientIndex+1,this.workout.exercices.length-1,this.gradients.length-1)}prev(){this.currentIndex=Math.max(this.currentIndex-1,0),this.currentGradientIndex=Math.max(this.currentGradientIndex-1,0)}shuffleArray(t){for(var n=t.length-1;n>0;n--){var e=Math.floor(Math.random()*(n+1)),r=t[n];t[n]=t[e],t[e]=r}}back(){this.router.navigate(["tabs/workouts"])}}return t.\u0275fac=function(n){return new(n||t)(s.Y36(i.gz),s.Y36(i.F0))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-workout"]],decls:17,vars:12,consts:[[1,"ion-no-border"],[1,"main",3,"ngStyle"],["slot","start","name","arrow-back-outline",3,"click"],[1,"prev-click",3,"click"],[1,"next-click",3,"click"],[1,"main"],[2,"text-align","center"]],template:function(t,n){1&t&&(s.TgZ(0,"ion-header",0),s.TgZ(1,"ion-toolbar",1),s.TgZ(2,"ion-icon",2),s.NdJ("click",function(){return n.back()}),s.qZA(),s.TgZ(3,"ion-title"),s._uU(4),s.qZA(),s.qZA(),s.qZA(),s.TgZ(5,"ion-content"),s.TgZ(6,"div",1),s.TgZ(7,"div",3),s.NdJ("click",function(){return n.prev()}),s.qZA(),s.TgZ(8,"div",4),s.NdJ("click",function(){return n.next()}),s.qZA(),s.TgZ(9,"div",5),s._UZ(10,"span"),s.TgZ(11,"span",6),s._uU(12),s._UZ(13,"br"),s._uU(14),s.qZA(),s.TgZ(15,"span"),s._uU(16),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(1),s.Q6J("ngStyle",s.VKq(8,u,n.gradients[n.currentGradientIndex])),s.xp6(3),s.Oqu(n.workout.name),s.xp6(2),s.Q6J("ngStyle",s.VKq(10,u,n.gradients[n.currentGradientIndex])),s.xp6(6),s.Oqu(n.workout.exercices[n.currentIndex].name),s.xp6(2),s.AsE("",n.workout.exercices[n.currentIndex].sets," sets x ",n.workout.exercices[n.currentIndex].reps," reps"),s.xp6(2),s.AsE("",n.currentIndex+1," / ",n.workout.exercices.length,""))},directives:[r.Gu,r.sr,o.PC,r.gu,r.wd,r.W2],styles:[".main[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;justify-content:space-between;align-items:center;border:none}.main[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{color:#fff;font-family:Style Script,cursive;font-size:50px}.main[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{position:absolute;top:5px;font-weight:400}ion-toolbar[_ngcontent-%COMP%]{--background:#0000}.next-click[_ngcontent-%COMP%]{right:0}.next-click[_ngcontent-%COMP%], .prev-click[_ngcontent-%COMP%]{position:absolute;top:0;height:100%;width:25%}.prev-click[_ngcontent-%COMP%]{left:0}.back-arrow[_ngcontent-%COMP%]{position:absolute;top:5px;left:5px}"]}),t})(),g=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[r.Pc,o.ez,c.u5,i.Bz.forChild([{path:"",component:d}])]]}),t})()}}]);