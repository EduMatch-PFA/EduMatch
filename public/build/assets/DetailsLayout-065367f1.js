import{W as d,_ as y,j as a,a as e,d as m}from"./app-232ef556.js";import{A as w}from"./Avatar-9e5941e6.js";import{M as k,A as S}from"./Avatars-50d770d2.js";import{B as I}from"./Badge-18261f74.js";import{C as P}from"./Card-7336c8e7.js";import{I as r}from"./InputLabel-af9d5361.js";import{P as o}from"./PrimaryButton-b548ea0c.js";import{S as $}from"./Stars-58073c1d.js";import{n as C,o as D,p as E}from"./index.esm-c4abe8a5.js";import{h as L}from"./index.esm-6b0d921f.js";import t from"./SmallDetail-b9225576.js";import{a as B,r as A}from"./utils-cc42a835.js";import{b as F}from"./index.esm-6ea15950.js";import{T as _}from"./TextArea-8a89be27.js";import j from"./FeedbacksCard-c9bdb425.js";import"./iconBase-a3ef7c7d.js";const Z=({session:l})=>{const i=d().props.isEnrolled,c=d().props.auth.user,{data:n,setData:h,post:p,processing:u,reset:f}=y({note:""}),N=l.feedbacks,x=(s,v)=>s.filter(g=>g.userId===v),b=s=>{s.preventDefault(),p(`/session-enroll/${l.id}`,{preserveScroll:!0,onSuccess:()=>{},onError:()=>{},onFinish:()=>f()})};return a("div",{className:"p-5 mt-8 mr-5 flex flex-col lg:flex-row gap-5",children:[a("div",{className:"left-content",children:[a("div",{className:"flex items-center gap-5",children:[e(w,{name:l.user.fullname,img:l.user.picture,className:"w-20 h-20 rounded-xl"}),a("div",{className:"flex-1",children:[a("span",{className:"flexible gap-3",children:[e("h3",{className:"opacity-[0.6] text-sm font-bold uppercase",children:l.user.username}),e($,{rating:l.user.rating})]}),e("h1",{className:"text-xl font-semibold py-0.5",children:l.title}),e(m,{href:`/profile/${l.user.username}`,children:e("h1",{className:"font-semibold text-primary text-sm cursor-pointer",children:"View Profile"})})]})]}),a("div",{className:"mt-7",children:[e(r,{value:"Session details",className:"font-semibold text-[1.05rem]"}),a("div",{className:"mt-4 grid lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-5",children:[e(t,{Icon:C,h1:"Discuss with the teacher",h2:"Price"}),e(t,{Icon:F,h1:`${B(l.user.email,20)}`,h2:"Email"}),e(t,{Icon:D,h1:`${l.user.phone_number}`,h2:"Phone Number"}),e(t,{Icon:L,h1:`${l.location}`,h2:"Location"}),e(t,{Icon:E,h1:`${l.scheduled_time}`,h2:"Scheduled Time"}),e(t,{Icon:k,h1:"Limited to "+l.placesLimit+` place${l.placesLimit>1?"s":""}`,h2:"Places"})]})]}),a("div",{className:"mt-7",children:[e(r,{value:"Skills that you'll learn",className:"font-semibold text-[1.05rem]"}),e("div",{className:"my-4 tags",children:JSON.parse(l.tags).skills.map(s=>e(m,{href:`/?search=${s}`,children:e(I,{text:s,className:"px-3",style:{backgroundColor:A()}})},s))})]}),a("div",{className:"mt-7",children:[e(r,{value:"Description",className:"font-semibold text-[1.05rem]"}),e(P,{className:"p-4 my-4 description",children:a("p",{className:"font-medium text-sm leading-relaxed",children:[l.description,"..."]})})]}),a("div",{className:"mt-7",children:[e(r,{value:"Feedbacks",className:"font-semibold text-[1.05rem]"}),e(j,{feedbacks:l.feedbacks,className:"my-4"})]})]}),a("div",{className:"right-content",children:[a("div",{className:"",children:[a("span",{className:"flex flex-col",children:[e(r,{value:"Students who are enrolled in this session",className:"ml-0 font-semibold "}),e("div",{className:"w-20 mt-2 rounded-lg h-[2px] bg-primary"})]}),a("div",{className:"subscribers mt-5 flexible-center gap-2",children:[a("h4",{className:"text-sm font-semibold leading-relaxed ",children:[l.enrollments.length==0&&"No one enrolled"," "]}),e("div",{className:"flex -space-x-2",children:e(S,{users:l.enrollments})})]})]}),c.id===l.user.id?a("div",{className:"mt-8",children:[a("span",{className:"flex flex-col",children:[e(r,{value:"You own this session",className:"ml-0 font-semibold "}),e("div",{className:"w-20 mt-2 rounded-lg h-[2px] bg-primary"})]}),e(m,{href:"/dashboard/sessions",className:"mt-5 flexible-center",children:e(o,{children:"View in dashboard"})})]}):!l.is_active&&!i?e("div",{className:"mt-8",children:a("span",{className:"flex flex-col",children:[e(r,{value:"This session is done, you can't enroll in it",className:"ml-0 font-semibold "}),e("div",{className:"w-20 mt-2 rounded-lg h-[2px] bg-primary"})]})}):i?a("div",{className:"mt-8",children:[a("span",{className:"flex flex-col",children:[e(r,{value:"You're enrolled in this session",className:"ml-0 font-semibold "}),e("div",{className:"w-20 mt-2 rounded-lg h-[2px] bg-primary"})]}),e(m,{href:"/dashboard/sessions",className:"mt-5 flexible-center",children:e(o,{children:l.user.username!==c.username&&x(N,c.id).length===0&&!l.is_active?"Give feedback":"View in dashboard"})})]}):a("div",{className:"mt-8",children:[a("span",{className:"flex flex-col",children:[e(r,{value:"Enroll in this session",className:"ml-0 font-semibold "}),e("div",{className:"w-20 mt-2 rounded-lg h-[2px] bg-primary"})]}),a("div",{className:"mt-4",children:[e(r,{value:"Note",className:"ml-0 font-bold"}),e(r,{value:"Write anything you would like to inform or ask the tutor about, after you enroll.",className:"ml-0 text-sm opacity-60"}),a("form",{onSubmit:b,children:[e(_,{className:"mt-3 text-sm",placeholder:"Write your note here...",name:"note",onChange:s=>h("note",s.target.value),children:n.note}),e("div",{className:"flexible justify-end mt-2",children:e(o,{type:"submit",disabled:u||i,children:i?"Enrolled":"Enroll"})})]})]})]})]})]},l.id)};export{Z as default};
