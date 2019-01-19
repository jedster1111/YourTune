import React, { Component } from "react";
import { connect } from "react-redux";
import { RootState } from "../../reducers/rootReducer";
import { ChannelData } from "../../types";
import ChannelsList from "./ChannelsList";

interface StateProps {
  channels: ChannelData[];
  location: string;
}

interface OwnProps {
  activeChannel: string | undefined;
}

type ChannelsListProps = StateProps & OwnProps;

function mapStateToProps(state: RootState): StateProps {
  return {
    channels: state.channelsState.channels,
    location: state.router.location.pathname
  };
}

class ChannelsListContainer extends Component<ChannelsListProps> {
  render() {
    return (
      <ChannelsList
        channels={this.props.channels}
        activeChannelName={this.props.activeChannel}
      />
    );
  }
}

const ConnectedChannelslist = connect(mapStateToProps)(ChannelsListContainer);

export default ConnectedChannelslist;
