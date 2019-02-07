import axios from "axios";
import history from "../history";

const SET_ID = "SET_ID";
const SET_MATCHES = "SET_MATCHES";
const SET_STATS = "SET_STATS";
const SET_NAME = "SET_NAME";
const CLEAR_PLAYER = "CLEAR_PLAYER";
const ERROR = "ERROR";
const CLEAR_ERROR = "CLEAR_ERROR";

const setId = id => ({
  type: SET_ID,
  payload: id
});

const setError = err => ({
  type: ERROR,
  payload: err
});

const clearError = () => ({
  type: CLEAR_ERROR
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

export const clearPlayer = () => ({
  type: CLEAR_PLAYER
});

export const fetchStats = id => async dispatch => {
  try {
    const res = await axios.get(`/api/stats/${id}`);
    const stats = res.data;
    dispatch(setStats(stats));
  } catch (err) {
    console.log(err);
  }
};

export const fetchPlayerInfo = name => async dispatch => {
  try {
    dispatch(clearError());
    const res = await axios.get(`/api/player/${name}`);
    const { id, matches } = res.data;
    await dispatch(setName(name));
    await dispatch(setId(id));
    await dispatch(setMatches(matches));
    history.push("/player");
  } catch (err) {
    err.message = `Player ${name} not found`;
    dispatch(setError(err.message));
  }
};

const initState = {
  id: "",
  name: "",
  matches: [],
  stats: {},
  errorMessage: ""
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
    case CLEAR_PLAYER:
      return initState;
    case ERROR:
      return { ...state, errorMessage: action.payload };
    case CLEAR_ERROR:
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

export default reducer;
