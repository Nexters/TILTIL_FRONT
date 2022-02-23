import styled from '@emotion/styled';
import { TilLogResponse } from 'apis/api';
import { CountIcsIcon } from 'assets/svgs';
import React from 'react';
import { PartialPick } from 'types/common';
import media from 'utils/media';

type Params = Props;
function spliceLogDeviceDetect({ logs, isMobile }: Params) {
  const point = isMobile ? 6 : 8;
  let start = 0;
  let end = point;
  const lists = Array(isMobile ? 6 : 4).fill(null);

  lists.forEach((_, i) => {
    lists[i] = logs?.slice(start, end);
    start = end;
    end += i % 2 ? point : point - 1;
  });

  return lists as TilLogResponse[][];
}
interface CalandarGrapthProps {
  logs: TilLogResponse[];
  isMobile: boolean;
  isLoading: boolean;
}

type Props = PartialPick<CalandarGrapthProps, 'isMobile'>;

const CalandarGrapth = ({ logs, isMobile, isLoading }: Props) => {
  const lists = spliceLogDeviceDetect({ logs, isMobile });

  return (
    <Wrapper>
      {React.Children.toArray(
        lists.map((list, index) => (
          <Line key={index}>
            {list?.map(({ count }, idx) => (
              <IconWrapper key={idx}>
                <CountIcsIcon count={isLoading ? -1 : count ?? 0} />
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
    height: 325px;
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
  :nth-of-type(5) {
    top: -102px;
  }
`;

const IconWrapper = styled.div`
  :not(:last-of-type) {
    margin-right: 16px;
  }
`;

export default CalandarGrapth;
