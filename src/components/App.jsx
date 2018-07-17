import React from 'react';
import TicketList from './TicketList';
import Header from './Header';
import NewTicketControl from './NewTicketControl';
import { Switch, Route, withRouter } from 'react-router-dom';
import Error404 from './Error404';
import Admin from './Admin';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import constants from './../constants';
import * as actions from './../actions';

const { c } = constants;

class App extends React.Component {

  componentWillMount() {
    const { dispatch } = this.props;
    const { watchFirebaseTicketsRef } = actions;
    dispatch(watchFirebaseTicketsRef());
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
    60000);
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTicketElapsedWaitTime() {
    const { dispatch } = this.props;
    Object.keys(this.props.masterTicketList).map(ticketId => {
      const ticket = this.props.masterTicketList[ticketId];
      const newFormattedWaitTime = new Moment (ticket.timeOpen).from(new Moment());
      const action = {
        type: c.UPDATE_TIME,
        id: ticketId,
        formattedWaitTime: newFormattedWaitTime
      };
      dispatch(action);
    });
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=>
            <TicketList
              ticketList={this.props.masterTicketList} />} />
          <Route path='/newticket' render={()=>
            <NewTicketControl />}/>
          <Route path='/admin' render={(props)=>
            <Admin
              currentRouterPath={props.location.pathname}/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  masterTicketList: PropTypes.object,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    masterTicketList: state.masterTicketList
  };
};

export default withRouter(connect(mapStateToProps)(App));
