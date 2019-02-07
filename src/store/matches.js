import axios from 'axios';

const SET_MATCH_STATS = 'SET_MATCH_STATS';
const CLEAR = 'CLEAR'

export const setMatchStats = matchStats => ({
  type: SET_MATCH_STATS,
  payload: matchStats
});

export const fetchMatchStats = matches => async dispatch => {
  try {
    const res = await axios.post('/api/match', { matches });
    const matchStats = res.data;
    await dispatch(setMatchStats(matchStats));
  } catch (err) {
    console.error(err);
  }
};

export const clearMatchStats = () => ({
  type: CLEAR
})

const initState = [];
const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_MATCH_STATS:
      return [...state, ...action.payload]
    case CLEAR:
      return initState
    default:
      return state;
  }
};

export default reducer;
