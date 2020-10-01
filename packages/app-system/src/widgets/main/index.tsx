import React, { useState } from 'react';
import { useWidget, Widget } from '@morten-olsen/gallery';
import { Screen } from '@morten-olsen/gallery-ui';

const Main = () => {
  const [selected, setSelected] = useState('');
  const [showMenu, setShowMenu] = useState(true);
  const ScreenView = useWidget('System', 'Screen view');
  const Sidebar = useWidget('System', 'Sidebar');
  const Container = useWidget('System', 'Container');
  return (
    <Container onNavigate={(id: string) => {
      setSelected(id);
      setShowMenu(false);
    }}>
      <Screen
        sidebarVisible={showMenu}
        sidebar={<Sidebar setShowMenu={setShowMenu} selected={selected} setSelected={setSelected} />}
      >
        <ScreenView selected={selected} /> 
      </Screen>
    </Container>
  );
};

const main: Widget = {
  name: 'Main',
  component: Main,
};

export default main;
