import React, { useRef, useMemo, ReactNode, useEffect } from 'react';
import styled from 'styled-components/native';
import useDeviceType, { Sizes } from '../../hooks/useDeviceType';
import { Theme } from '../../theme';

interface Props {
  sidebarVisible?: boolean;
  sidebar: ReactNode;
  children: ReactNode;
}

const Wrapper = styled.View<{ theme: Theme }>`
  flex-direction: row;
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const getSidebarWidth = (size: Sizes, visible: boolean): string => {
  if (size === 'phone' && !visible) {
    return '0';
  } else if (size === 'phone') {
    return '90%';
  } else if (size === 'tablet' && !visible) {
    return '50px';
  } else if (size === 'tablet') {
    return '350px';
  } else {
    return '350px';
  }
};

const getFullWidth = (size: Sizes): string => {
  if (size === 'phone') {
    return '100%';
  } else {
    return '350px';
  }
}

const SidebarControl = styled.View<{
  width: string;
  theme: Theme;
}>`
  width: ${({ width }) => width};
  position: absolute;
  height: 100%;
`

const SidebarWrapper = styled.View<{ width: string; theme: Theme }>`
  width: ${({ width }) => width};
  padding: ${({ theme }) => theme.paddings.sm}px;
  height: 100%;
`;

const ContentWrapper = styled.View<{
  visible: boolean;
  sidebarWidth: string;
}>`
  margin-left: ${({ sidebarWidth }) => sidebarWidth};
  flex: 1;
  height: 100%;
`;

const Screen: React.FC<Props> = ({ sidebarVisible = true, sidebar, children }) => {
  const { size } = useDeviceType();
  const sidebarOuterWidth = useMemo(() => getSidebarWidth(size, sidebarVisible), [size, sidebarVisible]);
  const sidebarInnerWidth = useMemo(() => getFullWidth(size), [size]);

  useEffect(() => {
    //sidebarOuterWidth.value = withSpring(getSidebarWidth(size, sidebarVisible), {
      //velocity: .001
    //});
  }, [size, sidebarVisible]);


  return (
    <Wrapper>
      <SidebarControl width={sidebarOuterWidth}>
        <SidebarWrapper width={sidebarInnerWidth}>
          {sidebar}
        </SidebarWrapper>
      </SidebarControl>
      <ContentWrapper sidebarWidth={sidebarOuterWidth} visible={sidebarVisible}>
        {children}
      </ContentWrapper>
    </Wrapper>
  );
};

export {
  Props,
};

export default Screen;
