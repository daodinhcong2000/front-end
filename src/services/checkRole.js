import { getUserInformation } from "./api/customerApi";
import { getLocalData } from "./StorageServices";

const getToken = () => getLocalData("accessToken");
export const roles = async (roleValue) => {
  if (!getToken()) return false;
  getUserInformation()
    .then((respone) => {
      return respone.data.data.roles.includes(roleValue);
    })
    .catch((err) => {
      return false;
    });
  return false;
};
