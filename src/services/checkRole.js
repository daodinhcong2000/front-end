import { getUserInformation } from "./api/customerApi";
import { getLocalData } from "./StorageServices";

const getToken = () => getLocalData("accessToken");
export const roles = (roleValue) => {
  if (getToken() == null) return false;
  getUserInformation()
    .then((respone) => {
      console.log(respone.data.data.roles.includes(roleValue));
      if (respone.data.data.roles.includes(roleValue)) return true;
    })
    .catch((err) => {
      return false;
    });
  return false;
};
