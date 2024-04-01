import{r as o,R as x,a as l,F as ge,j as C,_ as be,n as ke}from"./app-232ef556.js";import ye from"./DashboardLayout-25e1b464.js";import{I as S}from"./InputLabel-af9d5361.js";import{T as I}from"./TextInput-47f96366.js";import{I as _}from"./InputError-eed8428b.js";import{P as Ne}from"./PrimaryButton-b548ea0c.js";import{T as xe}from"./TextArea-8a89be27.js";import{o as N,L as Y,y as q,l as le,D as z,p as we,P as Re,b as Ee,s as Te,u as $e}from"./transition-39fb0608.js";import{I as Q,e as Ce,o as O,a as ee,L as W,N as te,r as re,A as Se}from"./use-owner-2aae41b7.js";import{b as _e,M as ne,c as Oe,p as Fe}from"./description-325801b0.js";import{F as Le}from"./MainLayout-77b06f02.js";import"./SideBar-8c6835a0.js";import"./index.esm-c4abe8a5.js";import"./iconBase-a3ef7c7d.js";import"./Logo-7890610f.js";import"./Avatar-9e5941e6.js";import"./index.esm-6ea15950.js";function ie(e={},r=null,t=[]){for(let[a,s]of Object.entries(e))se(t,oe(r,a),s);return t}function oe(e,r){return e?e+"["+r+"]":r}function se(e,r,t){if(Array.isArray(t))for(let[a,s]of t.entries())se(e,oe(r,a.toString()),s);else t instanceof Date?e.push([r,t.toISOString()]):typeof t=="boolean"?e.push([r,t?"1":"0"]):typeof t=="string"?e.push([r,t]):typeof t=="number"?e.push([r,`${t}`]):t==null?e.push([r,""]):ie(t,r,e)}function Ie(e){var r;let t=(r=e==null?void 0:e.form)!=null?r:e.closest("form");if(t){for(let a of t.elements)if(a.tagName==="INPUT"&&a.type==="submit"||a.tagName==="BUTTON"&&a.type==="submit"||a.nodeName==="INPUT"&&a.type==="image"){a.click();return}}}function Pe(e,r,t){let[a,s]=o.useState(t),i=e!==void 0,c=o.useRef(i),p=o.useRef(!1),u=o.useRef(!1);return i&&!c.current&&!p.current?(p.current=!0,c.current=i,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!i&&c.current&&!u.current&&(u.current=!0,c.current=i,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[i?e:a,N(y=>(i||s(y),r==null?void 0:r(y)))]}let ce=o.createContext(null);function ue(){let e=o.useContext(ce);if(e===null){let r=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(r,ue),r}return e}function de(){let[e,r]=o.useState([]);return[e.length>0?e.join(" "):void 0,o.useMemo(()=>function(t){let a=N(i=>(r(c=>[...c,i]),()=>r(c=>{let p=c.slice(),u=p.indexOf(i);return u!==-1&&p.splice(u,1),p}))),s=o.useMemo(()=>({register:a,slot:t.slot,name:t.name,props:t.props}),[a,t.slot,t.name,t.props]);return x.createElement(ce.Provider,{value:s},t.children)},[r])]}let Ae="label";function De(e,r){let t=Q(),{id:a=`headlessui-label-${t}`,passive:s=!1,...i}=e,c=ue(),p=q(r);le(()=>c.register(a),[a,c.register]);let u={ref:p,...c.props,id:a};return s&&("onClick"in u&&(delete u.htmlFor,delete u.onClick),"onClick"in i&&delete i.onClick),z({ourProps:u,theirProps:i,slot:c.slot||{},defaultTag:Ae,name:c.name||"Label"})}let Ge=Y(De),Me=Object.assign(Ge,{});var je=(e=>(e[e.RegisterOption=0]="RegisterOption",e[e.UnregisterOption=1]="UnregisterOption",e))(je||{});let Ue={0(e,r){let t=[...e.options,{id:r.id,element:r.element,propsRef:r.propsRef}];return{...e,options:Se(t,a=>a.element.current)}},1(e,r){let t=e.options.slice(),a=e.options.findIndex(s=>s.id===r.id);return a===-1?e:(t.splice(a,1),{...e,options:t})}},X=o.createContext(null);X.displayName="RadioGroupDataContext";function pe(e){let r=o.useContext(X);if(r===null){let t=new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,pe),t}return r}let Z=o.createContext(null);Z.displayName="RadioGroupActionsContext";function me(e){let r=o.useContext(Z);if(r===null){let t=new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,me),t}return r}function We(e,r){return $e(r.type,Ue,e,r)}let Be="div";function He(e,r){let t=Q(),{id:a=`headlessui-radiogroup-${t}`,value:s,defaultValue:i,name:c,onChange:p,by:u=(n,h)=>n===h,disabled:y=!1,...d}=e,w=N(typeof u=="string"?(n,h)=>{let f=u;return(n==null?void 0:n[f])===(h==null?void 0:h[f])}:u),[F,P]=o.useReducer(We,{options:[]}),v=F.options,[B,A]=de(),[H,R]=ne(),E=o.useRef(null),K=q(E,r),[b,D]=Pe(s,p,i),G=o.useMemo(()=>v.find(n=>!n.propsRef.current.disabled),[v]),k=o.useMemo(()=>v.some(n=>w(n.propsRef.current.value,b)),[v,b]),g=N(n=>{var h;if(y||w(n,b))return!1;let f=(h=v.find($=>w($.propsRef.current.value,n)))==null?void 0:h.propsRef.current;return f!=null&&f.disabled?!1:(D==null||D(n),!0)});Le({container:E.current,accept(n){return n.getAttribute("role")==="radio"?NodeFilter.FILTER_REJECT:n.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(n){n.setAttribute("role","none")}});let J=N(n=>{let h=E.current;if(!h)return;let f=Ce(h),$=v.filter(m=>m.propsRef.current.disabled===!1).map(m=>m.element.current);switch(n.key){case O.Enter:Ie(n.currentTarget);break;case O.ArrowLeft:case O.ArrowUp:if(n.preventDefault(),n.stopPropagation(),ee($,W.Previous|W.WrapAround)===te.Success){let m=v.find(L=>L.element.current===(f==null?void 0:f.activeElement));m&&g(m.propsRef.current.value)}break;case O.ArrowRight:case O.ArrowDown:if(n.preventDefault(),n.stopPropagation(),ee($,W.Next|W.WrapAround)===te.Success){let m=v.find(L=>L.element.current===(f==null?void 0:f.activeElement));m&&g(m.propsRef.current.value)}break;case O.Space:{n.preventDefault(),n.stopPropagation();let m=v.find(L=>L.element.current===(f==null?void 0:f.activeElement));m&&g(m.propsRef.current.value)}break}}),M=N(n=>(P({type:0,...n}),()=>P({type:1,id:n.id}))),T=o.useMemo(()=>({value:b,firstOption:G,containsCheckedOption:k,disabled:y,compare:w,...F}),[b,G,k,y,w,F]),j=o.useMemo(()=>({registerOption:M,change:g}),[M,g]),fe={ref:K,id:a,role:"radiogroup","aria-labelledby":B,"aria-describedby":H,onKeyDown:J},he=o.useMemo(()=>({value:b}),[b]),U=o.useRef(null),ve=we();return o.useEffect(()=>{U.current&&i!==void 0&&ve.addEventListener(U.current,"reset",()=>{g(i)})},[U,g]),x.createElement(R,{name:"RadioGroup.Description"},x.createElement(A,{name:"RadioGroup.Label"},x.createElement(Z.Provider,{value:j},x.createElement(X.Provider,{value:T},c!=null&&b!=null&&ie({[c]:b}).map(([n,h],f)=>x.createElement(Oe,{features:Fe.Hidden,ref:f===0?$=>{var m;U.current=(m=$==null?void 0:$.closest("form"))!=null?m:null}:void 0,...Re({key:n,as:"input",type:"radio",checked:h!=null,hidden:!0,readOnly:!0,name:n,value:h})})),z({ourProps:fe,theirProps:d,slot:he,defaultTag:Be,name:"RadioGroup"})))))}var Ke=(e=>(e[e.Empty=1]="Empty",e[e.Active=2]="Active",e))(Ke||{});let Je="div";function Ve(e,r){var t;let a=Q(),{id:s=`headlessui-radiogroup-option-${a}`,value:i,disabled:c=!1,...p}=e,u=o.useRef(null),y=q(u,r),[d,w]=de(),[F,P]=ne(),{addFlag:v,removeFlag:B,hasFlag:A}=Ee(1),H=Te({value:i,disabled:c}),R=pe("RadioGroup.Option"),E=me("RadioGroup.Option");le(()=>E.registerOption({id:s,element:u,propsRef:H}),[s,E,u,e]);let K=N(T=>{var j;if(re(T.currentTarget))return T.preventDefault();E.change(i)&&(v(2),(j=u.current)==null||j.focus())}),b=N(T=>{if(re(T.currentTarget))return T.preventDefault();v(2)}),D=N(()=>B(2)),G=((t=R.firstOption)==null?void 0:t.id)===s,k=R.disabled||c,g=R.compare(R.value,i),J={ref:y,id:s,role:"radio","aria-checked":g?"true":"false","aria-labelledby":d,"aria-describedby":F,"aria-disabled":k?!0:void 0,tabIndex:(()=>k?-1:g||!R.containsCheckedOption&&G?0:-1)(),onClick:k?void 0:K,onFocus:k?void 0:b,onBlur:k?void 0:D},M=o.useMemo(()=>({checked:g,disabled:k,active:A(2)}),[g,k,A]);return x.createElement(P,{name:"RadioGroup.Description"},x.createElement(w,{name:"RadioGroup.Label"},z({ourProps:J,theirProps:p,slot:M,defaultTag:Je,name:"RadioGroup.Option"})))}let Ye=Y(He),qe=Y(Ve),V=Object.assign(Ye,{Option:qe,Label:Me,Description:_e});const ae=[{name:"Online"},{name:"In-person"}];function ze({setType:e}){const[r,t]=o.useState(ae[0]);return o.useEffect(()=>{e(r)},[r]),l("div",{className:"mb-5",children:l(V,{value:r,onChange:t,children:l("div",{className:"grid grid-cols-2 gap-3",children:ae.map(a=>l(V.Option,{value:a,className:({active:s,checked:i})=>`${i?"bg-primary text-white":"bg-white border border-apply  shadow text-darker dark:bg-darker dark:text-white"}
                    relative flex cursor-pointer rounded-xl px-4 py-3 focus:outline-none`,children:({active:s,checked:i})=>l(ge,{children:C("div",{className:"flex w-full items-center justify-between",children:[l("div",{className:"text-sm",children:l(V.Label,{as:"p",className:`font-medium ${i?"text-white":"dark:text-white text-dark"}`,children:a.name})}),i&&l("div",{className:"shrink-0 text-white",children:l(Qe,{className:"h-4 w-4"})})]})})},a.name))})})})}function Qe(e){return C("svg",{viewBox:"0 0 24 24",fill:"none",...e,children:[l("circle",{cx:12,cy:12,r:12,fill:"#fff",opacity:"0.3"}),l("path",{d:"M7 13l3 3 7-7",stroke:"#fff",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})]})}function ht(){const[e,r]=o.useState("Online"),{data:t,setData:a,post:s,processing:i,reset:c,errors:p}=be({title:"",scheduled_time:"",description:"",skills_taught:"",location:"Online",places_limit:""});function u(d){r(d.name),d.name==="Online"?a("location","Online"):a("location","")}return C(ye,{children:[l(ke,{title:"Create Session"}),l("div",{children:C("form",{onSubmit:d=>{d.preventDefault(),s(route("session.store"),{preserveScroll:!0,onSuccess:()=>{},onError:()=>{},onFinish:()=>c()})},className:"p-6",children:[l("h2",{className:"text-lg font-medium text-darker dark:text-gray-100",children:"Create New Session"}),l("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"Make sure to enter valid and real information."}),C("div",{className:"flex justify-between mt-6",children:[C("div",{className:"w-1/2 pr-5",children:[l(S,{className:"",htmlFor:"title",value:"Title"}),l(I,{id:"title",type:"text",name:"title",value:t.title,onChange:d=>a("title",d.target.value),className:"mt-1 block w-3/4",placeholder:"Title of the session"}),l(_,{message:p.title,className:"mt-2"}),l(S,{className:"mt-8",htmlFor:"scheduled_time",hint:"When this session will be held?",value:"Scheduled time"}),l(I,{id:"scheduled_time",type:"date",name:"scheduled_time",value:t.scheduled_time,onChange:d=>a("scheduled_time",d.target.value),className:"mt-1 block w-3/4",placeholder:"Scheduled time"}),l(_,{message:p.scheduled_time,className:"mt-2"}),l(S,{className:"mt-8",htmlFor:"location",hint:"Where this session will be held?",value:"Location"}),l(ze,{type:e,setType:u}),e==="In-person"&&l(I,{id:"location",type:"text",name:"location",value:t.location,onChange:d=>a("location",d.target.value),className:"mt-1 block w-3/4",placeholder:"Location"}),l(_,{message:p.location,className:"mt-2"})]}),C("div",{className:"w-1/2 pr-3",children:[l(S,{className:"",htmlFor:"description",value:"Description"}),l(xe,{id:"description",type:"text",name:"description",value:t.description,onChange:d=>a("description",d.target.value),className:"mt-1 block w-3/4",placeholder:"Description",children:t.description}),l(_,{message:p.description,className:"mt-2"}),l(S,{className:"mt-8",htmlFor:"skills_taught",hint:"What skills or knowledge will be taught?",value:"Skills and knowledge"}),l(I,{id:"skills_taught",type:"text",name:"skills_taught",value:t.skills_taught,onChange:d=>a("skills_taught",d.target.value),className:"mt-1 block w-3/4",placeholder:"skill1, skill2, skill3..."}),l(_,{message:p.skills_taught,className:"mt-2"}),l(S,{className:"mt-8",htmlFor:"places_limit",hint:"How many people can join this session?",value:"Places limit"}),l(I,{id:"places_limit",type:"number",min:1,name:"places_limit",value:t.places_limit,onChange:d=>a("places_limit",d.target.value),className:"mt-1 block w-3/4",placeholder:"Places limit"}),l(_,{message:p.places_limit,className:"mt-2"}),l("div",{className:"mt-6 flex justify-end",children:l(Ne,{className:"ml-3",disabled:i,children:"Submit"})})]})]})]})})]})}export{ht as default};
