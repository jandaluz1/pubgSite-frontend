import axios from 'axios';

const SET_ID = 'SET_ID';
const SET_MATCHES = 'SET_MATCHES';
const SET_STATS = 'SET_STATS';
const SET_NAME = 'SET_NAME';

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

const setName = name => ({
  type: SET_NAME,
  payload: name
});

export const fetchStats = id => async dispatch => {
  try {
    const res = await axios.get(`/api/stats/${id}`);
    const stats = res.data;
    dispatch(setStats(stats));
  } catch (err) {
    console.error(err);
  }
};

export const fetchPlayerInfo = name => async dispatch => {
  try {
    const res = await axios.get(`/api/player/${name}`);
    const { id, matches } = res.data;
    await dispatch(setId(id));
    await dispatch(setName(name));
    await dispatch(setMatches(matches));
  } catch (err) {
    throw err;
  }
};

const initState = {
  id: '',
  name: '',
  matches: [],
  stats: {}
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_ID:
      return { ...state, id: action.payload };
    case SET_NAME:
      return { ...state, name: action.payload };
    case SET_MATCHES:
      return { ...state, matches: action.payload };
    case SET_STATS:
      return { ...state, stats: action.payload };
    default:
      return state;
  }
};

export default reducer;
