import React, { ReactNode } from 'react';
import styled from 'styled-components/native';
import Row from '../Row';
import Icon from '../Row/Icon';

interface Props {
  title?: string;
  children?: ReactNode;
  onSettings?: () => void;
  onMenu?: () => void;
  onClose?: () => void;
}

const Wrapper = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

const Content = styled.View`
`;

const Sidebar: React.FC<Props> = ({ title, children, onSettings, onMenu, onClose }) => (
  <Wrapper>
    <Content>
      <Row
        title={title}
        left={(
          <>
            {!!onMenu && <Icon onPress={onMenu} name="menu" />}
          </>
        )}
        right={(
          <>
            {!!onSettings && <Icon onPress={onSettings} name="settings" />}
            {!!onClose && <Icon onPress={onClose} name="x" />}
          </>
        )}
      />
      {children}
    </Content>
  </Wrapper>
);

export {
  Props,
};

export default Sidebar;
