import AsyncStorage from "@react-native-async-storage/async-storage";
import store from "../../redux/store/store";

export let authHeader = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};
export let header = async () => ({
  "Content-Type": "application/json",
  authorization: `${await GetToken()}`,
});
export let GetToken = async () => {
  const { userToken } = store.getState()?.auth;
  // const token = await AsyncStorage.getItem("usertoken");
  return userToken;
};
