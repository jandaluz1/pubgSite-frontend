import axios from 'axios';

const SET_MATCH_STATS = 'SET_MATCH_STATS';

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

const initState = [];
const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_MATCH_STATS:
      return [...state, ...action.payload]
    default:
      return state;
  }
};

export default reducer;
