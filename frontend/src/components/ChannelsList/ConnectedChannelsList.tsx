import React, { Component } from "react";
import { connect } from "react-redux";
import { createGetChannelsLoadingAction } from "../../actions/channelsActions";
import { RootState } from "../../reducers/rootReducer";
import { channelsDataSelector } from "../../selectors/baseSelectors";
import { activeChannelSelector } from "../../selectors/combinedSelectors";
import { ChannelData } from "../../types";
import ChannelsList from "./ChannelsList";

interface DispatchProps {
  dispatchGetChannels: typeof createGetChannelsLoadingAction;
}

interface StateProps {
  channels: ChannelData[];
  activeChannel: string | undefined;
}

type ChannelsListProps = StateProps & DispatchProps;

const mapDispatchToProps: DispatchProps = {
  dispatchGetChannels: createGetChannelsLoadingAction
};

function mapStateToProps(state: RootState): StateProps {
  return {
    channels: channelsDataSelector(state),
    activeChannel: activeChannelSelector(state)
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

const ConnectedChannelsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelsListContainer);

export default ConnectedChannelsList;
