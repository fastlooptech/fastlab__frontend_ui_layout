var y=Object.defineProperty;var t=(i,c)=>y(i,"name",{value:c,configurable:!0});import{j as e}from"./jsx-runtime-bcf35250.js";import{B as a}from"./Box-990aff7d.js";import{r as s}from"./index-e6f19ee3.js";import"./iframe-5a1c518c.js";const l=s.forwardRef((i,c)=>{const{children:v,fluid:d,gap:m,divider:f,...u}=i,[p,x]=s.useState(v.filter(r=>!!r));s.useEffect(()=>{x(v.filter(r=>!!r))},[v]);const h={...u,ref:c,height:d&&u.column?"100%":i.height,width:d&&!u.column?"100%":i.width,"data-test-id":i["data-test-id"]};return f?e.jsx(a,{...h,style:{gap:m?m*.5:void 0,justifyContent:d?"space-between":void 0,...u.style,...i.style},children:p.map((r,g)=>e.jsxs(s.Fragment,{children:[r,g<p.length-1&&f]},g))}):e.jsx(a,{...h,style:{gap:m,justifyContent:d?"space-between":void 0,...u.style,...i.style},children:p})});try{l.displayName="Stack",l.__docgenInfo={description:"",displayName:"Stack",props:{height:{defaultValue:null,description:"height property (for parent secondary axis)",name:"height",required:!1,type:{name:"string | number"}},width:{defaultValue:null,description:"width property (for parent secondary axis)",name:"width",required:!1,type:{name:"string | number"}},wrap:{defaultValue:null,description:"wrap content",name:"wrap",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"class to pass to top level element of the component",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"style object to pass to top level element of the component",name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:{value:"[]"},description:`FlexView content
The children to render inside the stack. Stack will not accept only 1 child, it must have at least 2. If you need to place only 1 child please prefer using Box.`,name:"children",required:!1,type:{name:"{Children[]}"}},column:{defaultValue:null,description:"flex-direction: column",name:"column",required:!1,type:{name:"boolean"}},vAlignContent:{defaultValue:null,description:"align content vertically",name:"vAlignContent",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"top"'},{value:'"bottom"'}]}},hAlignContent:{defaultValue:null,description:"align content horizontally",name:"hAlignContent",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},marginLeft:{defaultValue:null,description:'margin-left property ("auto" to align self right)',name:"marginLeft",required:!1,type:{name:"string | number"}},marginTop:{defaultValue:null,description:'margin-top property ("auto" to align self bottom)',name:"marginTop",required:!1,type:{name:"string | number"}},marginRight:{defaultValue:null,description:'margin-right property ("auto" to align self left)',name:"marginRight",required:!1,type:{name:"string | number"}},marginBottom:{defaultValue:null,description:'margin-bottom property ("auto" to align self top)',name:"marginBottom",required:!1,type:{name:"string | number"}},grow:{defaultValue:null,description:"grow property (for parent primary axis)",name:"grow",required:!1,type:{name:"number | boolean"}},shrink:{defaultValue:null,description:"flex-shrink property",name:"shrink",required:!1,type:{name:"number | boolean"}},basis:{defaultValue:null,description:"flex-basis property",name:"basis",required:!1,type:{name:"string | number"}},component:{defaultValue:null,description:"native dom component to render. Defaults to div",name:"component",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"cite"'},{value:'"data"'},{value:'"form"'},{value:'"label"'},{value:'"pattern"'},{value:'"span"'},{value:'"summary"'},{value:'"slot"'},{value:'"style"'},{value:'"title"'},{value:'"input"'},{value:'"time"'},{value:'"link"'},{value:'"menu"'},{value:'"dialog"'},{value:'"text"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"legend"'},{value:'"li"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"strong"'},{value:'"sub"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"stop"'},{value:'"switch"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}},fluid:{defaultValue:{value:"false"},description:`Whether the stack should take the full width or height of its parent.
If a divider is used, it will be placed in the middle of this space.
Whenever fluid is defined gap must be undefined.
@example <Stack fluid>
 <span>First</span>
 <span>Second</span>
</Stack>
@example <Stack fluid divider={<div className="divider"/>}>
 <span>First</span>
 <span>Second</span>
</Stack>`,name:"fluid",required:!1,type:{name:"{boolean}"}},divider:{defaultValue:{value:"undefined"},description:`Whether the stack should use as divider between children.
@example <Stack divider={<div className="divider"/>}>
 <span>First</span>
 <span>Second</span>
</Stack>`,name:"divider",required:!1,type:{name:"{Children}"}},gap:{defaultValue:{value:"0"},description:`Gap between children. If a divider is used, the gap will be divided by 2 and applied to the before and adfter the divider.
Whenever a gap is defined fluid must be undefined.
@example <Stack gap={16}>
 <span>First</span>
 <span>Second</span>
</Stack>
@example <Stack gap={16} divider={<div className="divider"/>}>
 <span>First</span>
 <span>Second</span>
</Stack>`,name:"gap",required:!1,type:{name:"{number}"}}}}}catch{}const S={parameters:{storySource:{source:`import { Meta } from '@storybook/react/types-6-0';
import { Box } from '../Box/Box';
import { Stack } from './Stack';

export default {
  title: 'Foundations/Stack',
  component: Stack,
} as Meta;

const SPACE_UNIT = 8;

const Item = () => <Box width={24} height={24} style={{ background: '#00E3D8' }} />;

export const RowDefinedGap = () => (
  <Box>
    <Stack
      gap={3 * SPACE_UNIT}
      style={{
        background: '#EAEAFB',
      }}
    >
      <Item />
      <Item />
      <Item />
      <Item />
    </Stack>
  </Box>
);

export const ColumnDefinedGap = () => (
  <Box>
    <Stack
      column
      gap={3 * SPACE_UNIT}
      style={{
        background: '#EAEAFB',
      }}
    >
      <Item />
      <Item />
      <Item />
      <Item />
    </Stack>
  </Box>
);

export const RowFluid = () => (
  <div
    style={{
      width: '400px',
      background: '#EAEAFB',
    }}
  >
    <Stack fluid grow>
      <Item />
      <Item />
      <Item />
      <Item />
    </Stack>
  </div>
);

export const ColumnFluid = () => (
  <Box>
    <div
      style={{
        height: '400px',
        background: '#EAEAFB',
      }}
    >
      <Stack column fluid grow>
        <Item />
        <Item />
        <Item />
        <Item />
      </Stack>
    </div>
  </Box>
);

export const ColumnDivider = () => (
  <Box>
    <Stack
      column
      gap={3 * SPACE_UNIT}
      style={{
        background: '#EAEAFB',
      }}
      divider={<Box width={24} height={4} style={{ background: '#BC00FE' }} />}
    >
      <Item />
      <Item />
      <Item />
      <Item />
    </Stack>
  </Box>
);

export const RowDivider = () => (
  <Box>
    <Stack
      gap={3 * SPACE_UNIT}
      style={{
        background: '#EAEAFB',
      }}
      shrink
      divider={<Box width={4} height={24} style={{ background: '#BC00FE' }} />}
    >
      <Item />
      <Item />
      <Item />
      <Item />
    </Stack>
  </Box>
);

export const WithUndefinedElement = () => (
  <Box>
    <Stack
      gap={3 * SPACE_UNIT}
      style={{
        background: '#EAEAFB',
      }}
    >
      <Item />
      <Item />
      {undefined}
      <Item />
    </Stack>
  </Box>
);

export const WithUndefinedElementAndDivider = () => (
  <Box>
    <Stack
      gap={3 * SPACE_UNIT}
      style={{
        background: '#EAEAFB',
      }}
      divider={<Box width={4} height={24} style={{ background: '#BC00FE' }} />}
    >
      <Item />
      <Item />
      {undefined}
      <Item />
    </Stack>
  </Box>
);
`,locationsMap:{"row-defined-gap":{startLoc:{col:29,line:14},endLoc:{col:1,line:28},startBody:{col:29,line:14},endBody:{col:1,line:28}},"column-defined-gap":{startLoc:{col:32,line:30},endLoc:{col:1,line:45},startBody:{col:32,line:30},endBody:{col:1,line:45}},"row-fluid":{startLoc:{col:24,line:47},endLoc:{col:1,line:61},startBody:{col:24,line:47},endBody:{col:1,line:61}},"column-fluid":{startLoc:{col:27,line:63},endLoc:{col:1,line:79},startBody:{col:27,line:63},endBody:{col:1,line:79}},"column-divider":{startLoc:{col:29,line:81},endLoc:{col:1,line:97},startBody:{col:29,line:81},endBody:{col:1,line:97}},"row-divider":{startLoc:{col:26,line:99},endLoc:{col:1,line:115},startBody:{col:26,line:99},endBody:{col:1,line:115}},"with-undefined-element":{startLoc:{col:36,line:117},endLoc:{col:1,line:131},startBody:{col:36,line:117},endBody:{col:1,line:131}},"with-undefined-element-and-divider":{startLoc:{col:46,line:133},endLoc:{col:1,line:148},startBody:{col:46,line:133},endBody:{col:1,line:148}}}}},title:"Foundations/Stack",component:l},o=8,n=t(()=>e.jsx(a,{width:24,height:24,style:{background:"#00E3D8"}}),"Item"),w=t(()=>e.jsx(a,{children:e.jsxs(l,{gap:3*o,style:{background:"#EAEAFB"},children:[e.jsx(n,{}),e.jsx(n,{}),e.jsx(n,{}),e.jsx(n,{})]})}),"RowDefinedGap"),A=t(()=>e.jsx(a,{children:e.jsxs(l,{column:!0,gap:3*o,style:{background:"#EAEAFB"},children:[e.jsx(n,{}),e.jsx(n,{}),e.jsx(n,{}),e.jsx(n,{})]})}),"ColumnDefinedGap"),I=t(()=>e.jsx("div",{style:{width:"400px",background:"#EAEAFB"},children:e.jsxs(l,{fluid:!0,grow:!0,children:[e.jsx(n,{}),e.jsx(n,{}),e.jsx(n,{}),e.jsx(n,{})]})}),"RowFluid"),F=t(()=>e.jsx(a,{children:e.jsx("div",{style:{height:"400px",background:"#EAEAFB"},children:e.jsxs(l,{column:!0,fluid:!0,grow:!0,children:[e.jsx(n,{}),e.jsx(n,{}),e.jsx(n,{}),e.jsx(n,{})]})})}),"ColumnFluid"),C=t(()=>e.jsx(a,{children:e.jsxs(l,{column:!0,gap:3*o,style:{background:"#EAEAFB"},divider:e.jsx(a,{width:24,height:4,style:{background:"#BC00FE"}}),children:[e.jsx(n,{}),e.jsx(n,{}),e.jsx(n,{}),e.jsx(n,{})]})}),"ColumnDivider"),L=t(()=>e.jsx(a,{children:e.jsxs(l,{gap:3*o,style:{background:"#EAEAFB"},shrink:!0,divider:e.jsx(a,{width:4,height:24,style:{background:"#BC00FE"}}),children:[e.jsx(n,{}),e.jsx(n,{}),e.jsx(n,{}),e.jsx(n,{})]})}),"RowDivider"),q=t(()=>e.jsx(a,{children:e.jsxs(l,{gap:3*o,style:{background:"#EAEAFB"},children:[e.jsx(n,{}),e.jsx(n,{}),void 0,e.jsx(n,{})]})}),"WithUndefinedElement"),D=t(()=>e.jsx(a,{children:e.jsxs(l,{gap:3*o,style:{background:"#EAEAFB"},divider:e.jsx(a,{width:4,height:24,style:{background:"#BC00FE"}}),children:[e.jsx(n,{}),e.jsx(n,{}),void 0,e.jsx(n,{})]})}),"WithUndefinedElementAndDivider"),V=["RowDefinedGap","ColumnDefinedGap","RowFluid","ColumnFluid","ColumnDivider","RowDivider","WithUndefinedElement","WithUndefinedElementAndDivider"];export{A as ColumnDefinedGap,C as ColumnDivider,F as ColumnFluid,w as RowDefinedGap,L as RowDivider,I as RowFluid,q as WithUndefinedElement,D as WithUndefinedElementAndDivider,V as __namedExportsOrder,S as default};
//# sourceMappingURL=Stack.stories-06cffb49.js.map
