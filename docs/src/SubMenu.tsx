import React from "react";

import styled from 'styled-components'
import { Flex, TextContent, InnerCont } from "./containers";
import { Live } from './Live'

const code = `
const ItemCont = styled.div\`
  color: \$\{props => (props.selected ? "rgb(0, 166, 90)" : "#555")\};
  padding: 8px 12px;
  cursor: pointer;
  &:hover {
    color: rgb(0, 166, 90);
  }
\`

const Item = props => {
  const context = React.useContext(NavContext);
  return (
    <ItemCont
      selected={context.selected}
    >
      {props.children}
    </ItemCont>
  )
};

const containerStyle = {
  background: '#FFF',
  border: "1px solid #E5E5E5"
}

render(
  <SideNavCont style={containerStyle}>
    <SideNav>
      <Nav id="1">
        <Item>Link 1</Item>
      </Nav>
      <Nav id="2">
        <Item>Link 2</Item>
        <Nav id="1">
          <span>Sub 1</span>
        </Nav>
        <Nav id="2">
          <span>Sub 1</span>
        </Nav>
      </Nav>
      <Nav id="3">
        <Item>Link 3</Item>
      </Nav>
    </SideNav>
  </SideNavCont>
)
`

const LiveContainer  = styled(Flex)`
  max-width: 800px;
`

export const SubMenu = () => {
  return (
    <>
      <Flex>
        <InnerCont>
          <TextContent style={{ flex: 2 }}>
            <p>
              To render a sub menu, just render a Nav element as a child of a Nav
            </p>
            <p/>
          </TextContent>
        </InnerCont>
      </Flex>
      <LiveContainer>
        <Live code={code}/>
      </LiveContainer>
    </>
  );
};