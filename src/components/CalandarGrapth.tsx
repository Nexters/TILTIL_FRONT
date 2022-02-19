import styled from '@emotion/styled';
import { TilLogResponse } from 'apis/api';
import { CountIcsIcon } from 'assets/svgs';
import React from 'react';
import media from 'utils/media';

interface CalandarGrapthProps {
  logs: TilLogResponse[];
}

type Props = Partial<CalandarGrapthProps>;

const dummy = [
  {
    id: 1,
    count: 1,
  },
  {
    id: 2,
    count: 1,
  },
  {
    id: 3,
    count: 1,
  },
  {
    id: 4,
    count: 1,
  },
  {
    id: 5,
    count: 1,
  },
  {
    id: 6,
    count: 1,
  },
  {
    id: 7,
    count: 1,
  },
  {
    id: 8,
    count: 1,
  },
  {
    id: 9,
    count: 1,
  },
  {
    id: 10,
    count: 1,
  },
  {
    id: 11,
    count: 1,
  },
  {
    id: 12,
    count: 1,
  },
  {
    id: 13,
    count: 1,
  },
  {
    id: 14,
    count: 1,
  },
  {
    id: 15,
    count: 1,
  },
  {
    id: 16,
    count: 1,
  },
  {
    id: 17,
    count: 1,
  },
  {
    id: 18,
    count: 1,
  },
  {
    id: 19,
    count: 1,
  },
  {
    id: 20,
    count: 1,
  },
  {
    id: 21,
    count: 1,
  },
  {
    id: 22,
    count: 1,
  },
  {
    id: 23,
    count: 1,
  },
  {
    id: 24,
    count: 1,
  },
  {
    id: 25,
    count: 1,
  },
  {
    id: 26,
    count: 1,
  },
  {
    id: 27,
    count: 1,
  },
  {
    id: 28,
    count: 1,
  },
  {
    id: 29,
    count: 1,
  },
  {
    id: 30,
    count: 1,
  },
];

const CalandarGrapth = ({ logs }: Props) => {
  const line0 = dummy?.slice(0, 8);
  const line1 = dummy?.slice(8, 15);
  const line2 = dummy?.slice(15, 23);
  const line3 = dummy?.slice(23, 30);

  const lists = [line0, line1, line2, line3];

  return (
    <Wrapper>
      {React.Children.toArray(
        lists.map((list) => (
          // eslint-disable-next-line react/jsx-key
          <Line>
            {list?.map(({ id, count }) => (
              <IconWrapper key={id}>
                <CountIcsIcon count={count ?? 0} />
              </IconWrapper>
            ))}
          </Line>
        ))
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 258px;

  ${media.mobile} {
    /* TODOS */
  }
`;

const Line = styled.div`
  position: relative;
  display: flex;
  :nth-of-type(even) {
    margin-left: 32px;
  }
  :nth-of-type(even) {
    margin-left: 31px;
    top: -28px;
  }
  :nth-of-type(3) {
    top: -56px;
  }
  :nth-of-type(4) {
    top: -84px;
  }
`;

const IconWrapper = styled.div`
  :not(:last-of-type) {
    margin-right: 16px;
  }
`;

export default CalandarGrapth;
