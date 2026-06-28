import {
  ADDNEWTASK,
  SHOWMODAL,
  HIDEMODAL,
  UPDATETASK,
  DELETETASK,
  FILTREDTASK,
} from "./actionsType";

export const addNewTask = (payload) => {
  return {
    type: ADDNEWTASK,
    payload,
  };
};
export const filteredTask = (payload) => {
  return {
    type: FILTREDTASK,
    payload,
  };
};
export const showModal = (payload) => {
  return {
    type: SHOWMODAL,
    payload,
  };
};

export const hideModal = () => {
  return {
    type: HIDEMODAL,
  };
};

export const updateTask = (payload) => {
  return {
    type: UPDATETASK,
    payload,
  };
};
export const deleteTask = (payload) => {
  return {
    type: DELETETASK,
    payload,
  };
};
