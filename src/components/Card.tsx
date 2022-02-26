import styled from '@emotion/styled';
import React from 'react';
import colors from 'styles/colors';
import theme from 'styles/theme';

import { Icon, IconName } from './icon/Icon';
import Tag from './Tag';
import { Text } from './Text';

type CategoryName = keyof typeof colors.category;

interface Props {
  className?: string;
  iconName: IconName;
  title: string;
  description?: string;
  categories?: CategoryName[];
}

const Card: React.VFC<Props> = ({ className, title, iconName, description, categories }) => {
  return (
    <Wrapper className={`${className} p-2`}>
      <Icon className="mb-1" name={iconName} />
      <Title typography="body2" className="mt-2">
        {title}
      </Title>
      {categories ? (
        <TagsWrapper>
          {categories.map((name) => (
            <Tag key={name} category={name} status="active" />
          ))}
        </TagsWrapper>
      ) : (
        <Description typography="subTitle3">{description}</Description>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  min-width: 175px;
  height: 149px;
  background-color: ${theme.colors.background.white};
  border-radius: 10px;
  flex-direction: column;
  min-width: fit-content;
`;

const Title = styled(Text)`
  margin-top: 12px;
  color: ${theme.colors.text.normal};
  min-width: 175px;
`;

const Description = styled(Text)`
  margin-top: 12px;
  color: ${theme.colors.text.highlight};
`;

const TagsWrapper = styled.div`
  display: flex;
  margin-top: 12px;
  white-space: nowrap;
  span + span {
    margin-left: 7px;
  }
`;

export default Card;
