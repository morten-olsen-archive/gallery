import React from 'react';
import Row from '../Row';
import Icon from '../Row/Icon';

interface Props {
  title: string;
  app: string;
  screen: string;
  selected?: boolean;
  onClose?: () => void;
  onFavorite?: () => void;
  onPress: () => void;
  icon: string;
}

const MenuItem: React.FC<Props> = ({ title, icon, onPress, app, screen, selected, onClose, onFavorite }) => (
  <Row
    left={<Icon name={icon} />}
    right={(
      <>
        {!!onFavorite && <Icon onPress={onFavorite} name="star" />}
        {!!onClose && <Icon onPress={onClose} name="x" />}
      </>
    )}
    title={title}
    selected={selected}
    description={`${app} - ${screen}`}
    onPress={onPress}
  />
);

export default MenuItem;
