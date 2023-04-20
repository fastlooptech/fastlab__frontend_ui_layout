var w=Object.defineProperty;var i=(n,a)=>w(n,"name",{value:a,configurable:!0});import{j as t}from"./jsx-runtime-a132f2a1.js";import{B as o}from"./Box-da55b798.js";import{r as l}from"./index-13df8b94.js";import"./iframe-743fdcce.js";const y=l.forwardRef((n,a)=>{const c="invalid child type, all children should be <Grid.Item />";l.useEffect(()=>{Array.isArray(n.children)&&(n.children.every(s=>{var u,m;return((m=(u=s==null?void 0:s.type)==null?void 0:u.render)==null?void 0:m.displayName)=="Grid.Item"})||console.warn(c))},[n.children]);const h=l.useMemo(()=>({display:"grid",gridTemplateColumns:`repeat(${n.cols}, 1fr)`,gridTemplateRows:`repeat(${n.rows}, 1fr)`,columnGap:n.colsGap||0,rowGap:n.rowsGap||0,...n.style}),[n.rows,n.rowsGap,n.cols,n.colsGap,n.style]);return t.jsx("div",{ref:a,style:h,"data-test-id":n["data-test-id"],className:n.className,children:l.Children.map(n.children,(d,s)=>t.jsx(l.Fragment,{children:d},s))})}),g=l.forwardRef((n,a)=>{const c=l.useMemo(()=>({gridColumnStart:n.colStart,gridColumnEnd:n.colEnd,gridRowStart:n.rowStart,gridRowEnd:n.rowEnd,justifySelf:n.justifySelf,alignSelf:n.alignSelf,...n.style}),[n.colStart,n.colEnd,n.rowStart,n.rowEnd,n.style]);return t.jsx("div",{ref:a,className:n.className,style:c,"data-test-id":n["data-test-id"],children:l.Children.map(n.children,(h,d)=>t.jsx(l.Fragment,{children:h},d))})});g.displayName="Grid.Item";const e={Container:y,Item:g},G="transparent",x={100:"#F8F7FD",300:"#A7A7C8",500:"#667099",700:"#363F63",800:"#192445"},S={900:"#051039"},I={500:"#00E3D8",600:"#00CFC4"},f={500:"#BC00FE",600:"#9E00E0"},j={success:"#47CF8E",error:"#DB5757",alert:"#FBC742"},r={transparent:G,neutral:x,blue:S,aqua:I,purple:f,feedback:j},p={parameters:{storySource:{source:`import { Meta } from '@storybook/react/types-6-0';
import { Box } from '../Box/Box';
import { Grid } from './Grid';
import palette from '../../../assets/fl-color-palette.json';

export default {
  title: 'Foundations/Grid',
  components: [Grid.Container, Grid.Item],
} as Meta;

export const AutoFill = () => (
  <Grid.Container
    style={{
      background: palette.neutral[100],
    }}
    rows={3}
    cols={2}
    colsGap={8}
    rowsGap={3}
  >
    <Grid.Item
      style={{
        background: palette.neutral[300],
      }}
    >
      <Box width={100} height={100} />
    </Grid.Item>
    <Grid.Item
      style={{
        background: palette.neutral[300],
      }}
    >
      <Box width={100} height={100} />
    </Grid.Item>
    <Grid.Item
      style={{
        background: palette.neutral[300],
      }}
    >
      <Box width={100} height={100} />
    </Grid.Item>
  </Grid.Container>
);

export const WithGaps = () => (
  <Grid.Container
    style={{
      background: palette.neutral[100],
    }}
    cols={2}
    rows={2}
    colsGap={8}
    rowsGap={8}
  >
    <Grid.Item
      style={{
        background: palette.neutral[300],
      }}
    >
      <Box width={100} height={100} />
    </Grid.Item>
    <Grid.Item
      style={{
        background: palette.neutral[300],
      }}
    >
      <Box width={100} height={100} />
    </Grid.Item>
    <Grid.Item
      style={{
        background: palette.neutral[300],
      }}
    >
      <Box width={100} height={100} />
    </Grid.Item>
  </Grid.Container>
);

export const ItemsPositioning = () => (
  <Grid.Container
    style={{
      background: palette.neutral[100],
    }}
    rows={4}
    cols={2}
    rowsGap={8}
    colsGap={8}
  >
    <Grid.Item
      colStart={1}
      colEnd={3}
      rowStart={1}
      rowEnd={3}
      style={{
        background: palette.neutral[300],
      }}
    >
      <Box width={100} height={100} />
    </Grid.Item>
    <Grid.Item
      colStart={2}
      colEnd={2}
      rowStart={2}
      rowEnd={4}
      style={{
        background: palette.neutral[300],
      }}
    >
      <Box width={100} height={100} />
    </Grid.Item>
    <Grid.Item
      colStart={1}
      rowStart={4}
      style={{
        background: palette.neutral[300],
      }}
    >
      <Box width={100} height={100} />
    </Grid.Item>
  </Grid.Container>
);

export const ItemsSelfJustifyAlign = () => (
  <Grid.Container
    style={{
      background: palette.neutral[100],
    }}
    rows={4}
    cols={2}
  >
    <Grid.Item
      colStart={1}
      colEnd={3}
      rowStart={1}
      rowEnd={2}
      justifySelf="start"
      style={{
        background: palette.neutral[300],
      }}
    >
      <Box width={100} height={100} />
    </Grid.Item>
    <Grid.Item
      colStart={2}
      rowStart={3}
      rowEnd={4}
      justifySelf="end"
      style={{
        background: palette.neutral[300],
      }}
    >
      <Box width={100} height={100} />
    </Grid.Item>
    <Grid.Item
      colStart={1}
      rowStart={4}
      justifySelf="center"
      style={{
        background: palette.neutral[300],
      }}
    >
      <Box width={100} height={100} />
    </Grid.Item>
  </Grid.Container>
);

export const SingleChildPositioned = () => (
  <Grid.Container
    style={{
      background: palette.neutral[100],
    }}
    rows={4}
    cols={2}
  >
    <Grid.Item
      colStart={2}
      colEnd={2}
      rowStart={2}
      rowEnd={4}
      style={{
        background: palette.neutral[300],
      }}
    >
      <Box width={100} height={100} />
    </Grid.Item>
  </Grid.Container>
);
`,locationsMap:{"auto-fill":{startLoc:{col:24,line:11},endLoc:{col:1,line:43},startBody:{col:24,line:11},endBody:{col:1,line:43}},"with-gaps":{startLoc:{col:24,line:45},endLoc:{col:1,line:77},startBody:{col:24,line:45},endBody:{col:1,line:77}},"items-positioning":{startLoc:{col:32,line:79},endLoc:{col:1,line:121},startBody:{col:32,line:79},endBody:{col:1,line:121}},"items-self-justify-align":{startLoc:{col:37,line:123},endLoc:{col:1,line:165},startBody:{col:37,line:123},endBody:{col:1,line:165}},"single-child-positioned":{startLoc:{col:37,line:167},endLoc:{col:1,line:187},startBody:{col:37,line:167},endBody:{col:1,line:187}}}}},title:"Foundations/Grid",components:[e.Container,e.Item]},F=i(()=>t.jsxs(e.Container,{style:{background:r.neutral[100]},rows:3,cols:2,colsGap:8,rowsGap:3,children:[t.jsx(e.Item,{style:{background:r.neutral[300]},children:t.jsx(o,{width:100,height:100})}),t.jsx(e.Item,{style:{background:r.neutral[300]},children:t.jsx(o,{width:100,height:100})}),t.jsx(e.Item,{style:{background:r.neutral[300]},children:t.jsx(o,{width:100,height:100})})]}),"AutoFill"),A=i(()=>t.jsxs(e.Container,{style:{background:r.neutral[100]},cols:2,rows:2,colsGap:8,rowsGap:8,children:[t.jsx(e.Item,{style:{background:r.neutral[300]},children:t.jsx(o,{width:100,height:100})}),t.jsx(e.Item,{style:{background:r.neutral[300]},children:t.jsx(o,{width:100,height:100})}),t.jsx(e.Item,{style:{background:r.neutral[300]},children:t.jsx(o,{width:100,height:100})})]}),"WithGaps"),L=i(()=>t.jsxs(e.Container,{style:{background:r.neutral[100]},rows:4,cols:2,rowsGap:8,colsGap:8,children:[t.jsx(e.Item,{colStart:1,colEnd:3,rowStart:1,rowEnd:3,style:{background:r.neutral[300]},children:t.jsx(o,{width:100,height:100})}),t.jsx(e.Item,{colStart:2,colEnd:2,rowStart:2,rowEnd:4,style:{background:r.neutral[300]},children:t.jsx(o,{width:100,height:100})}),t.jsx(e.Item,{colStart:1,rowStart:4,style:{background:r.neutral[300]},children:t.jsx(o,{width:100,height:100})})]}),"ItemsPositioning"),M=i(()=>t.jsxs(e.Container,{style:{background:r.neutral[100]},rows:4,cols:2,children:[t.jsx(e.Item,{colStart:1,colEnd:3,rowStart:1,rowEnd:2,justifySelf:"start",style:{background:r.neutral[300]},children:t.jsx(o,{width:100,height:100})}),t.jsx(e.Item,{colStart:2,rowStart:3,rowEnd:4,justifySelf:"end",style:{background:r.neutral[300]},children:t.jsx(o,{width:100,height:100})}),t.jsx(e.Item,{colStart:1,rowStart:4,justifySelf:"center",style:{background:r.neutral[300]},children:t.jsx(o,{width:100,height:100})})]}),"ItemsSelfJustifyAlign"),N=i(()=>t.jsx(e.Container,{style:{background:r.neutral[100]},rows:4,cols:2,children:t.jsx(e.Item,{colStart:2,colEnd:2,rowStart:2,rowEnd:4,style:{background:r.neutral[300]},children:t.jsx(o,{width:100,height:100})})}),"SingleChildPositioned"),P=["AutoFill","WithGaps","ItemsPositioning","ItemsSelfJustifyAlign","SingleChildPositioned"];export{F as AutoFill,L as ItemsPositioning,M as ItemsSelfJustifyAlign,N as SingleChildPositioned,A as WithGaps,P as __namedExportsOrder,p as default};
//# sourceMappingURL=Grid.stories-3f5c8c9f.js.map
