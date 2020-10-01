import React from 'react';
import styled from 'styled-components/native';
import Row, { Icon } from '../Row';
import Touch from '../Touch';

const Wrapper = styled.View`
  margin-top: 30px;
`;

interface Props {
  menuVisible: boolean;
  setMenuVisible: (state: boolean) => void;
}

const Topbar: React.FC<Props> = ({ menuVisible, setMenuVisible }) => (
  <Wrapper>
    <Row
      left={(
        <Touch onPress={() => setMenuVisible(!menuVisible)}>
          <Icon name="menu"/>
        </Touch>
      )}
    />
  </Wrapper>
);

export default Topbar;
