import axios from 'axios';

const SET_ID = 'SET_ID';
const SET_MATCHES = 'SET_MATCHES';
const SET_STATS = 'SET_STATS';

const setId = id => ({
  type: SET_ID,
  payload: id
});

const setMatches = matches => ({
  type: SET_MATCHES,
  payload: matches
});

const setStats = stats => ({
  type: SET_STATS,
  payload: stats
});

export const fetchStats = id => async dispatch => {
  try {
    const res = await axios.get(`/api/stats/${id}`);
    const stats = res.data;
    console.log('FETCHSTATS', stats);
    dispatch(setStats(stats));
  } catch (err) {
    console.error(err);
  }
};

export const fetchPlayerInfo = name => async dispatch => {
  const res = await axios.get(`/api/player/${name}`);
  const { id, matches } = res.data;
  dispatch(setId(id));
  dispatch(setMatches(matches));
  dispatch(fetchStats(id));
};

const initState = {
  id: '',
  matches: [],
  stats: {}
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_ID:
      return { ...state, id: action.payload };
    case SET_MATCHES:
      return { ...state, matches: action.payload };
    case SET_STATS:
      return { ...state, stats: action.payload };
    default:
      return state;
  }
};
