import{j as s}from"./jsx-runtime-BjgbQsUx.js";import"./index-D2MAbzvX.js";const i=({label:y,...g})=>s.jsxs("div",{className:"flex flex-col space-y-2",children:[s.jsx("label",{className:"text-gray-700 font-medium",children:y}),s.jsx("input",{...g,className:"border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"})]});i.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!0,tsType:{name:"string"},description:""}}};const b={title:"Components/Input",component:i,argTypes:{type:{control:"select",options:["text","password","email","number"]}}},e={args:{label:"Default Input",type:"text",placeholder:"Type here..."}},r={args:{label:"Password Input",type:"password",placeholder:"Enter your password..."}},a={args:{label:"Email Input",type:"email",placeholder:"example@domain.com"}};var o,t,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: "Default Input",
    type: "text",
    placeholder: "Type here..."
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var p,l,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Password Input",
    type: "password",
    placeholder: "Enter your password..."
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,m,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Email Input",
    type: "email",
    placeholder: "example@domain.com"
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const h=["Default","Password","Email"];export{e as Default,a as Email,r as Password,h as __namedExportsOrder,b as default};
