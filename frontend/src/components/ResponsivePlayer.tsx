import React, { Component } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

interface ResponsivePlayerProps {
  url: string;
}

const ResponsivePlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
  width: 100%;
`;

const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;

class ResponsivePlayer extends Component<ResponsivePlayerProps> {
  render() {
    return (
      <ResponsivePlayerWrapper>
        <StyledReactPlayer
          url={this.props.url}
          width="100%"
          height="100%"
          playing={true}
          controls={true}
        />
      </ResponsivePlayerWrapper>
    );
  }
}

export default ResponsivePlayer;
