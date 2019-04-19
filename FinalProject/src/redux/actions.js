import firebase from "firebase";

// firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAclgqrbkSKHvlcgyiCgPChDwsILkXvot4",
  authDomain: "rockclimbingtracker.firebaseapp.com",
  databaseURL: "https://rockclimbingtracker.firebaseio.com",
  projectId: "rockclimbingtracker",
  storageBucket: "rockclimbingtracker.appspot.com"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseDb = firebaseApp.database();

//Import login function from api

//action types
export const LOG_IN_SENT = "LOG_IN_SENT";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILED = "LOG_IN_FAILED";
export const ADD_BOULDER_ROUTE = "ADD_BOULDER_ROUTE";
export const ADD_BOULDER_ROUTE_ERROR = "ADD_BOULDER_ROUTE_ERROR";

// async action creators
export const logInUser = (username, password) => async dispatch => {
  dispatch({ type: LOG_IN_SENT });
  try {
    const token = await login(username, password);
    dispatch({ type: LOG_IN_SUCCESS, payload: token });
  } catch (err) {
    dispatch({ type: LOG_IN_FAILED, payload: err.message });
  }
};

// export const addBoulderRoute = newBoulderRoute => ({
//   type: ADD_BOULDER_ROUTE,
//   payload: newBoulderRoute
// });

const getTodayDate = () => {
  var today = new Date();
  return (date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate());
};

//For debugging
const userId = "8EOTHDTYRfSnyAo2oGVF8eSBzgt2";

export const addBoulderRoute = (key, boulderHistory) => {
  console.log(boulderHistory);
  return dispatch => {
    firebaseDb
      .ref(userId)
      .child("boulder")
      .child(getTodayDate())
      .child(key)
      .set({
        ...boulderHistory
      })
      .catch(error =>
        dispatch({
          type: "ADD_BOULDER_ROUTE_ERROR",
          message: error.message
        })
      );
  };
};

export const fetchData = () => {
  var leadsRef = firebaseDb.ref(`${userId}/boulder`);
  leadsRef.on("value", snapshot => {
    var items = [];
    // get children as an array

    console.log(snapshot);
    snapshot.forEach(child => {
      console.log(child.key);
      // items.push({
      //   boulderHistory: child.val()
      // });
    });
  });
};

export const fetchBoulderList = () => {
  return dispatch => {
    ref.on("value", snapshot => {
      console.loh(snapshot.val);
      dispatch({
        type: FETCH_FIREBASE_DATA,
        payload: snapshot.val()
      });
    });
  };
};
