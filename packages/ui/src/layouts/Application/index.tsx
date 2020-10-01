import React, { ReactNode } from 'react';
import styled from 'styled-components/native';
import Row from '../../components/Row';
import Icon from '../../components/Row/Icon';
import ShadeBackground from '../../components/ShadeBackground';
import { Theme } from '../../theme';

interface Props {
  title?: string;
  onMenu?: () => void;
  onBack?: () => void;
  onFavorite?: () => void;
  onMaximize?: () => void;
  onMore?: () => void;
  onClose?: () => void;
  children: ReactNode;
}

const Wrapper = styled.View<{ theme: Theme }>`
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.backgroundShade1};
  padding: ${({ theme }) => theme.paddings.sm}px;
  height: 100%;
`;

const Content = styled.View`
  flex: 1;
`;

const Application: React.FC<Props> = ({ children, title, onMenu, onBack, onFavorite, onMaximize, onMore, onClose }) => (
  <Wrapper>
    <Row
      left={(
        <>
          {!!onMenu && <Icon onPress={onMenu} name="menu" />}
          {!!onBack && <Icon onPress={onBack} name="chevron-left" />}
        </>
      )}
      right={(
        <>
          {!!onMaximize && <Icon onPress={onMaximize} name="maximize" />}
          {!!onFavorite && <Icon onPress={onFavorite} name="star" />}
          {!!onMore && <Icon onPress={onMore} name="more-vertical" />}
          {!!onClose && <Icon onPress={onClose} name="x" />}
        </>
      )}
      title={title}
    />
    <ShadeBackground>
      <Content>{children}</Content>
    </ShadeBackground>
  </Wrapper>
);

export {
  Props,
};

export default Application;
