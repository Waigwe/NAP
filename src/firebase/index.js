// components only allowed to access the index.js file as the sole interface to the entire Firebase module
import * as auth from "./auth";
import * as firebase from "./firebase";

export { auth, firebase };
