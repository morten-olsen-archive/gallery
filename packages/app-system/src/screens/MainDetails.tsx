import React, { useContext, useEffect } from 'react';
import { useWidget, useScreen, ScreensProvider, ScreenProvider, ScreensContext } from '@morten-olsen/gallery';
import FavoriteContext from '../widgets/main/FavoritesContext';
import styled from 'styled-components/native';
import { Row, Icon } from '@morten-olsen/gallery-ui';
import BlockTitle from '../BlockTitle';

interface Props {
  params: {
    app: string;
    widget: string;
    props: any;
    title: string;
    icon?: string;
  };
}

const Wrapper = styled.View`
  flex-direction: row;
`;

const Main = styled.View`
  flex: 1;
  max-width: 700px;
`;

const Details = styled.View`
  flex: 1;
`;

const Screen: React.FC = () => {
  const { add } = useContext(FavoriteContext);
  const { screens } = useContext(ScreensContext);
  const id = Object.keys(screens).pop();
  if (!id) {
    return <></>
  }
  const screen = screens[id];
  return (
    <BlockTitle>
      <Row
      right={(
        <Icon
          onPress={() => {
            add({
              title: screen.title,
              navigateOptions: {
                appName: screen.app,
                screenName: screen.screen,
                params: screen.params,
              },
            });
          }}
          name="star"
        />
      )}
      />
      {screen.node}
    </BlockTitle>
  );
};

const MainDetails: React.FC<Props> = ({ params }) => {
  const Widget = useWidget(params.app, params.widget);
  const { setTitle, setMeta } = useScreen();
  useEffect(() => {
    setTitle(params.title);
    setMeta({ icon: params.icon });
  }, [params.title, params.icon]);
  return (
    <ScreensProvider>
      <Wrapper>
        <Main>
          <ScreenProvider id="" meta={{}}>
            <Widget {...params.props} />
          </ScreenProvider>
        </Main>
        <Details>
          <Screen />
        </Details>
      </Wrapper>
    </ScreensProvider>
  )
};

export default MainDetails;
