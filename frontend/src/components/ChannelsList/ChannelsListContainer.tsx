import React, { Component } from "react";
import { connect } from "react-redux";
import { createGetChannelsLoadingAction } from "../../actions/channelsActions";
import { RootState } from "../../reducers/rootReducer";
import { ChannelData } from "../../types";
import ChannelsList from "./ChannelsList";

interface DispatchProps {
  dispatchGetChannels: typeof createGetChannelsLoadingAction;
}

interface StateProps {
  channels: ChannelData[];
  location: string;
}

interface OwnProps {
  activeChannel: string | undefined;
}

type ChannelsListProps = StateProps & OwnProps & DispatchProps;

const mapDispatchToProps: DispatchProps = {
  dispatchGetChannels: createGetChannelsLoadingAction
};

function mapStateToProps(state: RootState): StateProps {
  return {
    channels: state.channelsState.channels,
    location: state.router.location.pathname
  };
}

class ChannelsListContainer extends Component<ChannelsListProps> {
  componentDidMount() {
    this.props.dispatchGetChannels();
  }

  render() {
    return (
      <ChannelsList
        channels={this.props.channels}
        activeChannelName={this.props.activeChannel}
      />
    );
  }
}

const ConnectedChannelslist = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelsListContainer);

export default ConnectedChannelslist;
