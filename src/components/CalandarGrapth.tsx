import styled from '@emotion/styled';
import { TilLogResponse } from 'apis/api';
import { CountIcsIcon } from 'assets/svgs';
import React from 'react';
import media from 'utils/media';

interface CalandarGrapthProps {
  logs: TilLogResponse[];
}

type Props = Partial<CalandarGrapthProps>;

const CalandarGrapth = ({ logs }: Props) => {
  const line0 = logs?.slice(0, 8);
  const line1 = logs?.slice(8, 15);
  const line2 = logs?.slice(15, 23);
  const line3 = logs?.slice(23, 30);

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
  overflow: hidden;
  :not(:last-of-type) {
    margin-right: 16px;
  }
`;

export default CalandarGrapth;
