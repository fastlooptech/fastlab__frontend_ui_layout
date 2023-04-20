var f=Object.defineProperty;var r=(e,i)=>f(e,"name",{value:i,configurable:!0});import{j as t}from"./jsx-runtime-a132f2a1.js";import{B as c}from"./Box-da55b798.js";import{r as o}from"./index-13df8b94.js";import"./iframe-743fdcce.js";const s=o.forwardRef((e,i)=>{const[u,l]=o.useState("row"),n=o.useRef(null);o.useImperativeHandle(i,()=>n==null?void 0:n.current),o.useEffect(()=>{var a;if((a=n.current)!=null&&a.parentElement)switch(getComputedStyle(n.current.parentElement).flexDirection){case"column":l("column");break;case"row":l("row");break;default:console.warn("Space: parent element has an invalid flex direction"),l("row");break}},[]);function m(){switch(u){case"row":const a=e.size;return{width:a,basis:a};case"column":const d=e.size;return{height:d,basis:d}}}return r(m,"boxProps"),t.jsx(c,{"data-test-id":e["data-test-id"],style:e.style,className:e.className,ref:n,...m(),grow:e.fluid,shrink:e.fluid})});try{s.displayName="Space",s.__docgenInfo={description:"",displayName:"Space",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},className:{defaultValue:{value:'""'},description:`The class name to be applied to the component.
It can be used for CSS customizations.
@optional`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:{value:"{}"},description:`The custom CSS properties to be applied to the component.
This value will be merged with the default styles.
@optional`,name:"style",required:!1,type:{name:"CSSProperties"}},size:{defaultValue:null,description:"The space size.",name:"size",required:!1,type:{name:"number"}},fluid:{defaultValue:null,description:"The space will fill the space.",name:"fluid",required:!1,type:{name:"boolean"}}}}}catch{}const b={parameters:{storySource:{source:`import { Meta } from '@storybook/react/types-6-0';
import { Box } from '../Box/Box';
import { Space } from './Space';

export default {
  title: 'Foundations/Space',
  component: Space,
} as Meta;

const SPACE_UNIT = 8;

export const Horizontal = () => (
  <Box>
    <span>Start</span>
    <Space
      size={2 * SPACE_UNIT}
      style={{
        background: 'lightgray',
        height: '16px',
      }}
    />
    <span>End</span>
  </Box>
);

export const Vertical = () => (
  <Box column>
    <span>Start</span>
    <Space
      size={2 * SPACE_UNIT}
      style={{
        background: 'lightgray',
        width: '16px',
      }}
    />
    <span>End</span>
  </Box>
);
`,locationsMap:{horizontal:{startLoc:{col:26,line:12},endLoc:{col:1,line:24},startBody:{col:26,line:12},endBody:{col:1,line:24}},vertical:{startLoc:{col:24,line:26},endLoc:{col:1,line:38},startBody:{col:24,line:26},endBody:{col:1,line:38}}}}},title:"Foundations/Space",component:s},p=8,w=r(()=>t.jsxs(c,{children:[t.jsx("span",{children:"Start"}),t.jsx(s,{size:2*p,style:{background:"lightgray",height:"16px"}}),t.jsx("span",{children:"End"})]}),"Horizontal"),_=r(()=>t.jsxs(c,{column:!0,children:[t.jsx("span",{children:"Start"}),t.jsx(s,{size:2*p,style:{background:"lightgray",width:"16px"}}),t.jsx("span",{children:"End"})]}),"Vertical"),z=["Horizontal","Vertical"];export{w as Horizontal,_ as Vertical,z as __namedExportsOrder,b as default};
//# sourceMappingURL=Space.stories-45fb59cb.js.map
