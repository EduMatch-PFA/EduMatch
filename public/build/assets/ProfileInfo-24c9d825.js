import{W as d,a,j as l,d as c}from"./app-232ef556.js";import{m as s}from"./index.esm-c4abe8a5.js";import n from"./CardLayout-13f46883.js";import{I as i}from"./InputLabel-af9d5361.js";import{B as h}from"./Badge-18261f74.js";import{f as m,r as p}from"./utils-cc42a835.js";import f from"./FormEditProfile-659300e3.js";import"./iconBase-a3ef7c7d.js";import"./Card-7336c8e7.js";import"./SecondaryButton-a7f26ff9.js";import"./transition-39fb0608.js";import"./use-owner-2aae41b7.js";import"./description-325801b0.js";import"./TextInput-47f96366.js";import"./InputError-eed8428b.js";import"./PrimaryButton-b548ea0c.js";function S({user:e,percentage:o}){const{canEdit:r}=d().props;return a(n,{cardName:"Profile Info",cardProps:(!e.birthdate||!e.phone_number)&&{percentage:o,percentageToAdd:50},Icon:s,FormModal:r&&f,children:l("div",{className:"grid grid-cols-4 gap-4",children:[l("div",{children:[a(i,{className:"opacity-[0.5]",value:"Username"}),a("h1",{className:"ml-1 text-lg font-semibold",children:e.username})]}),l("div",{children:[a(i,{className:"opacity-[0.5]",value:"Full Name"}),a("h1",{className:"ml-1 text-lg font-semibold",children:e.name})]}),l("div",{children:[a(i,{className:"opacity-[0.5]",value:"Email"}),a("h1",{className:"ml-1 text-lg font-semibold",children:e.email})]}),l("div",{children:[a(i,{className:"opacity-[0.5]",value:"Status"}),a("h1",{className:"ml-1 text-lg font-semibold",children:e.ROLE})]}),e.phone&&l("div",{children:[a(i,{className:"opacity-[0.5]",value:"Phone"}),a("h1",{className:"ml-1 text-lg font-semibold",children:e.phone})]}),e.address&&l("div",{children:[a(i,{className:"opacity-[0.5]",value:"Address"}),a("h1",{className:"ml-1 text-lg font-semibold",children:e.address})]}),e.phone_number&&l("div",{children:[a(i,{className:"opacity-[0.5]",value:"Phone Number"}),a("h1",{className:"ml-1 text-lg font-semibold",children:e.phone_number})]}),e.birthdate&&l("div",{children:[a(i,{className:"opacity-[0.5]",value:"Birthdate"}),a("h1",{className:"ml-1 text-lg font-semibold",children:m(e.birthdate)})]}),e.skills&&l("div",{children:[a(i,{className:"opacity-[0.5]",value:"Skills"}),e.skills.split(",").map(t=>(t=t.trim(),a(c,{href:`/?search=${t}`,children:a(h,{text:t,className:"px-3 my-1",style:{backgroundColor:p()}},t)},t)))]}),l("div",{children:[a(i,{className:"opacity-[0.5]",value:"Member Since"}),a("h1",{className:"ml-1 text-lg font-semibold",children:m(e.created_at)})]})]})})}export{S as default};