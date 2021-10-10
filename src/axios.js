import axios from "axios";

const url = process.env.REACT_APP_BASE_URL;
const token = process.env.REACT_APP_JWT_TOKEN;
const config = {
  headers: {
    // Authorization: "Bearer " + token,
    Authorization: "Bearer " + localStorage.getItem("accessToken"),
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
    // console.log(data?.accessToken);
    return {
      tokens: {
        accessToken: data?.accessToken,
        refreshToken: data?.refreshToken,
        expiresIn: data?.expiresIn,
      },
      user: {
        firstName: data?.firstName,
        lastName: data?.lastName,
        email: data?.email,
        balance: data?.balance,
      },

      //   name: data?.name,
    };
  } catch (e) {
    console.log(e);
    return {};
  }
};

export const getDatasets = async () => {
  try {
    const { data } = await axios.get(url + "/models", config);
    // const fields = data?.fields
    console.log(data);
    return data?.models;
  } catch (e) {
    console.log(e);
    return {};
  }
};
export const getDataset = async (id) => {
  try {
    const { data } = await axios.get(url + "/models/" + id, config);
    // const fields = data?.fields
    console.log(data);
    return data?.model;
  } catch (e) {
    console.log(e);
    return {};
  }
};
