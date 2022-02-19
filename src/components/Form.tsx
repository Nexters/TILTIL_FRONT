import styled from '@emotion/styled';
import { Text } from 'components/Text';
import dayjs from 'dayjs';
import { useState } from 'react';
import colors from 'styles/colors';

import Button from './Button';
import Input from './Input';
import TagButton, { Tag } from './TagButton';
import { Textarea } from './Textarea';

type ContentKey = 'learnContent' | 'wellContent' | 'improveContent' | 'questionContent';

const tagList: { text: string; category: keyof typeof colors.category; contentKey: ContentKey }[] = [
  {
    text: '잘한 점',
    category: 'learn',
    contentKey: 'learnContent',
  },
  {
    text: '배운 점',
    category: 'good',
    contentKey: 'wellContent',
  },
  {
    text: '개선할 점',
    category: 'improve',
    contentKey: 'improveContent',
  },
  {
    text: '궁금한 점',
    category: 'curious',
    contentKey: 'questionContent',
  },
];

export const Form = () => {
  const [title, setTitle] = useState('');
  const [activeCategory, setActiveCategory] = useState<ContentKey>('learnContent');
  const [content, setContent] = useState({
    learnContent: '',
    wellContent: '',
    improveContent: '',
    questionContent: '',
  });
  return (
    <>
      <div className="mx-3 d-flex flex-grow-1 flex-column">
        <Text className="mt-5" typography="body5" color="subdued">
          {dayjs().format('YYYY.MM.DD')}
        </Text>
        <Input
          className="mt-1"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          maxLength={24}
        />
        <TagList>
          {tagList.map((tag) => {
            return (
              <li key={tag.text}>
                <TagButton
                  onClick={() => {
                    setActiveCategory(tag.contentKey);
                  }}
                  size="large"
                  category={tag.category}
                  status={activeCategory === tag.contentKey ? 'active' : 'disabled'}
                >
                  {tag.text}
                </TagButton>
              </li>
            );
          })}
        </TagList>
        <Textarea
          className="mt-2 flex-grow-1"
          maxLength={1000}
          value={content[activeCategory]}
          onChange={(e) => {
            const newContent = { ...content };
            newContent[activeCategory] = e.target.value;
            setContent(newContent);
          }}
        />
      </div>
      <Button className="mt-3" fullWidth shape="square">
        완료
      </Button>
    </>
  );
};

const TagList = styled.ul`
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
  li {
    flex-grow: 1;
  }
  li + li {
    margin-left: 8px;
  }
`;
