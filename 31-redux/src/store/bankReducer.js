const DEPOSIT = 'counter/DEPOSIT';
const WITHDRAW = 'counter/WITHDRAW';

export const deposit = (money) => ({ type: DEPOSIT, payload: money });
export const withdraw = (money) => ({ type: WITHDRAW, payload: money });

const initialState = {
  cash: '0',
};

const bankReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEPOSIT:
      return { cash: state.cash + action.payload };

    case WITHDRAW:
      return { cash: state.cash - action.payload };
    default:
      return state;
  }
};

export default bankReducer;
