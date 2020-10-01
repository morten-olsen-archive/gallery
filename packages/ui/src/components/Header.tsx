import React, { ReactNode } from "react";
import styled from "styled-components/native";
import { Overline } from "../typography";
import Icon from './Row/Icon';
import Cell from './Row/Cell';

interface Props {
  title: string;
  icon?: string;
  children: ReactNode;
}

const Wrapper = styled.View`
`;

const Top = styled(Cell)`
  flex-direction: row;
  padding-left: 40px;
`;

const TextWrapper = styled(Cell)`
  flex: 1
  align-items: flex-start;
`;

const Content = styled.View`
`;

const Header: React.FC<Props> = ({ title, icon, children }) => (
  <Wrapper>
    <Top>
      {icon && <Icon name="user" />}
      <TextWrapper>
        <Overline>{title}</Overline>
      </TextWrapper>
    </Top>
    <Content>{children}</Content>
  </Wrapper>
);

export default Header;
