import axios from "axios";

const url = process.env.REACT_APP_BASE_URL;
const token = process.env.REACT_APP_JWT_TOKEN;
const config = {
  headers: {
    Authorization: "Bearer " + token,
  },
};
export const getPathsAndEntities = async (paths) => {
  try {
    const myUrl = paths ? url + "/browse/" + paths : url + "/browse";
    const { data } = await axios.get(myUrl, config);
    const browse = data?.browse;
    return {
      entities: browse?.entities,
      groups: browse?.groups,
      path: browse?.metadata?.path,
    };
  } catch (e) {
    console.log(e);
    return {};
  }
};

export const getEntity = async (urn) => {
  try {
    const { data } = await axios.get(url + "/dataset?urn=" + urn, config);
    // const fields = data?.fields
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
    return {};
  }
};

export const auth = async (username, password) => {
    try {
      const { data } = await axios.post(url + "/auth", {
        username,
        password,
      });
      // const fields = data?.fields
      console.log(data);
      return {
          tokens:{
            accessToken: data?.token?.access_token,
            refreshToken: data?.token?.refresh_token,
            expiresIn: data?.token?.expires_in,
          },
          user:{
            firstName:data?.first_name,
            lastName:data?.last_name,
            email:data?.email,
          }
        
        
        //   name: data?.name,
      };
    } catch (e) {
      console.log(e);
      return {};
    }
  };
  