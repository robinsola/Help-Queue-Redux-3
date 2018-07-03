import React from 'react'
import Ticket from './Ticket'
import PropTypes from 'prop-types'

function TicketList(props){
  var ticketList = {
    width: '50%',
    margin: '0 auto',
    paddingBottom: '25px',
  }
  console.log(props.ticketList);
  return (
    <div style = {ticketList}>
      <hr/>
      {props.ticketList.map((ticket) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          key={ticket.id}/>
      )}
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array
};

export default TicketList
