import * as React from "react";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import SignUpScreen from "./src/screens/SignUp";
import Product from "./src/components/Product";
import { ScrollView } from "react-native-gesture-handler";

const App = () => {
  return <SignUpScreen></SignUpScreen>;
  return <Login></Login>;
  return <Home></Home>;
};

export default App;
