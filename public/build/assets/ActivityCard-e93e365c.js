import{W as N,j as t,a,d as n,F as s}from"./app-232ef556.js";import{A as u}from"./Avatar-9e5941e6.js";import{C as h}from"./Card-7336c8e7.js";import{I as m}from"./InputLabel-af9d5361.js";function _({modal:p=0,session:e,grid:o="grid-cols-2",more:f}){const l=N().props.auth.user,i=e.feedbacks,c=(r,d)=>r.filter(v=>v.userId===d);return t("div",{className:`mt-4 grid ${o} gap-x-4`,children:[e.user.username!==l.username&&c(i,l.id).length===0&&!e.is_active&&a(h,{className:"mb-2 self-start",children:t("div",{children:[t("div",{className:"flexible gap-3",children:[a(u,{name:e.user.fullname,img:e.user.picture,className:"w-12 rounded-full"}),t("div",{children:[a(n,{href:`/profile/${e.user.username}`,children:a("h1",{className:"font-semibold hover:text-primary duration-100",children:e.user.username})}),a(m,{value:`Ended the session in ${e.updatedAt}`,className:"-ml-1 text-sm opacity-60"})]})]}),a("p",{className:"mt-2 text-yellow-400",children:"Please leave a feedback"})]})}),e&&(e.is_active||p&&!e.is_active)&&e.enrollments.length>0?a(s,{children:e.enrollments.map(r=>a(h,{className:"mb-2 self-start",children:t("div",{children:[t("div",{className:"flexible gap-3",children:[a(u,{name:r.fullname,img:r.picture,className:"w-12 rounded-full"}),t("div",{children:[a(n,{href:`/profile/${r.username}`,children:a("h1",{className:"font-semibold hover:text-primary duration-100",children:r.id===l.id?"You":r.username})}),a(m,{value:`Joined the session in ${r.date}`,className:"-ml-1 text-sm opacity-60"})]})]}),(e.user.id===l.id||r.id===l.id)&&t("p",{className:"mt-2",children:[a("span",{className:"ml-0 text-sm opacity-60 mr-4",children:"NOTE"})," ",r.note?r.note:"No note provided"]}),!e.is_active&&f&&a("p",{className:"mt-2 text-sm uppercase text-primary font-bold",children:i.filter(d=>d.user_id==r.id).length===0?"Didn't rate yet":"rated"})]})},r.id))}):a(s,{children:!(e.user.username!==l.username&&c(i,l.id).length===0&&!e.is_active)&&a(m,{value:"No activity",className:"ml-0 text-sm opacity-60"})})]})}export{_ as default};