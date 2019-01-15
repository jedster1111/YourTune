import styled from "styled-components";

interface LiveIndicatorProps {
  isLive: boolean;
}

const LiveIndicator = styled.div<LiveIndicatorProps>`
  background-color: ${({ isLive }) => (isLive ? "red" : "white")};
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

export default LiveIndicator;
