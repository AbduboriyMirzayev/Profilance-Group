import { getCurrentDate } from "utils";
import * as actionTypes from "../actionTypes";

export const createNews = (payload) => ({
  type: actionTypes.CREATE_NEWS,
  payload: {
    ...payload,
    createdAt: getCurrentDate(),
    id: new Date().getTime(),
    isApproved: false,
  },
});

export const approveNews = (id) => ({
  type: actionTypes.APPROVE_NEWS,
  payload: id,
});

export const deleteNews = (id) => ({
  type: actionTypes.DELETE_NEWS,
  id,
});
