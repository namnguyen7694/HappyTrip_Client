import api from '../Api';
import * as types from './actionConstant';

export const getTickets = () => dispatch => {
  return api
    .get("/tickets")
    .then(res => {
      dispatch({
        type: types.GET_TICKETS,
        payload: res.data
      });
      Promise.resolve(res.data);
    })
    .catch(err => Promise.reject(err));
};

export const createTicket = data => dispatch => {
  return api
    .post("/tickets/booking", data)
    .then(res => {
      dispatch({
        type: types.CREATE_TICKET,
        payload: res.data
      });
      Promise.resolve(res.data);
    })
    .catch(err => Promise.reject(err));
};

export const cancelBooking = () => dispatch => {
    dispatch({
      type: types.CANCEL_BOOKING
    })
  }