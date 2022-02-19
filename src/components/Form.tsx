import styled from '@emotion/styled';
import { TilDetailResponse, TilRequest } from 'apis/api';
import { Text } from 'components/Text';
import dayjs from 'dayjs';
import { tilKeys } from 'queryKeys/tilKeys';
import { FC, useEffect, useState } from 'react';
import colors from 'styles/colors';
import theme from 'styles/theme';

import Button from './Button';
import Input from './Input';
import TagButton from './TagButton';
import { Textarea } from './Textarea';

type TilData = Pick<TilDetailResponse, 'learnContent' | 'wellContent' | 'improveContent' | 'questionContent'>;

type ContentKey = keyof TilData;

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

interface Props {
  onSubmit: (tilRequest: TilRequest) => Promise<void>;
  tilDetailResponse?: TilDetailResponse;
}

export const Form: FC<Props> = ({ onSubmit, tilDetailResponse }) => {
  const [title, setTitle] = useState(tilDetailResponse?.title || '');
  const [activeCategory, setActiveCategory] = useState<ContentKey>('learnContent');
  const [content, setContent] = useState({
    learnContent: tilDetailResponse?.learnContent || '',
    wellContent: tilDetailResponse?.wellContent || '',
    improveContent: tilDetailResponse?.improveContent || '',
    questionContent: tilDetailResponse?.questionContent || '',
  });
  const [buttonSize, setButtonSize] = useState<'large' | 'small'>('small');

  const handleResize = () => {
    if (window.document.body.clientWidth <= theme.size.mobile) {
      setButtonSize('small');
    } else {
      setButtonSize('large');
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <form
      className="flex-grow-1 d-flex flex-column"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ title, ...content });
      }}
    >
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
                  type="button"
                  onClick={() => {
                    setActiveCategory(tag.contentKey);
                  }}
                  size={buttonSize}
                  category={tag.category}
                  status={
                    // eslint-disable-next-line no-nested-ternary
                    activeCategory === tag.contentKey
                      ? 'active'
                      : content[tag.contentKey].length > 0
                      ? 'fill'
                      : 'disabled'
                  }
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
      <Button
        disabled={
          title.length === 0 ||
          Object.values(content).reduce((prev, curr) => {
            return prev + curr;
          }, '').length === 0
        }
        type="submit"
        className="mt-3"
        fullWidth
        shape="square"
      >
        완료
      </Button>
    </form>
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
  button {
    width: 100% !important;
  }
`;
