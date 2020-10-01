import React from 'react';
import styled from 'styled-components/native';
import { Overline } from '../../typography';

interface Props {
  tags: {
    title: string;
  }[];
}

const Wrapper = styled.View`
  flex-direction: row;
  `;

const TagWrapper = styled.View`
  padding: 5px;
  border-radius: 5px;
  background: #f39c12;
  margin-right: 5px;
`;

const Tag: React.FC<Props> = ({ tags }) => (
  <Wrapper>
    {tags.map((tag) => (
      <TagWrapper key={tag.title}>
        <Overline>{tag.title}</Overline>
      </TagWrapper>
    ))}
  </Wrapper>
);

export {
  Props,
};

export default Tag;
