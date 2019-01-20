import React, { Component, createRef } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

interface ResponsivePlayerProps {
  channelName: string;
}

const ResponsivePlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
  /* width: 100%; */
`;

const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;

class ResponsivePlayer extends Component<ResponsivePlayerProps> {
  private playerRef: React.RefObject<ReactPlayer>;

  constructor(props: ResponsivePlayerProps) {
    super(props);
    this.playerRef = createRef();
  }

  seekLive = () => {
    const player = this.playerRef.current;

    if (player) {
      const currentDuration = player.getDuration();
      console.log(currentDuration);
      player.seekTo(currentDuration - 1);
    }
  };

  render() {
    return (
      <>
        <button onClick={this.seekLive}>To Live</button>
        <ResponsivePlayerWrapper>
          <StyledReactPlayer
            ref={this.playerRef}
            url={`http://yourtune.jedthompson.co.uk/live/${
              this.props.channelName
            }.m3u8`}
            width="100%"
            height="100%"
            playing={true}
            autoPlay
            // muted
            controls
            config={{
              file: {
                hlsOptions: {
                  liveBackBufferLength: 0,
                  liveSyncDurationCount: 3,
                  liveMaxLatencyDurationCount: 6
                  // debug: true
                  // initialLiveManifestSize
                  // startPosition: -1
                }
              }
            }}
          />
        </ResponsivePlayerWrapper>
      </>
    );
  }
}

export default ResponsivePlayer;
