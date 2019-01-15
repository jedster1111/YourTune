import React, { Component } from "react";
import { connect } from "react-redux";
import { RootState } from "../../reducers/rootReducer";
import { ChannelData } from "../../types";
import ChannelsList from "./ChannelsList";

interface StateProps {
  channels: ChannelData[];
}

type ChannelsListProps = StateProps;

function mapStateToProps(state: RootState): StateProps {
  return {
    channels: state.channelsState.channels
  };
}

class ChannelsListContainer extends Component<ChannelsListProps> {
  render() {
    console.log(this.props.channels);
    return <ChannelsList channels={this.props.channels} />;
  }
}

const ConnectedChannelslist = connect(mapStateToProps)(ChannelsListContainer);

export default ConnectedChannelslist;
