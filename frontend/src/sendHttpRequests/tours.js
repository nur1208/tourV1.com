import axios from "axios";
const HOST = "http://127.0.0.1:5000";
const TOURS_ROUTE = "/api/v1/tours";

export const getAllTours = async () => {
  try {
    const { data } = await axios.get(HOST + TOURS_ROUTE);
    console.log({ data });
    return data.data.doc;
  } catch (error) {
    console.log({ error });
  }
};

export const getTour = async (slug) => {
  try {
    const { data } = await axios.get(
      `${HOST}${TOURS_ROUTE}?slug=${slug}`
    );
    return data.data.doc[0];
  } catch (error) {
    console.log({ error });
  }
};

export const getTourAllReviews = async (id) => {
  try {
    const { data } = await axios.get(
      `${HOST}${TOURS_ROUTE}/${id}/reviews`
    );
    // console.log({ data });

    return data.data.doc;
  } catch (error) {
    console.log({ error });
  }
};
