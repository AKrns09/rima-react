import client from './client';

// get
export const getList = () => {
  return client.get('/items');
};

// detail
export const getDetail = (id) => {
  return client.get(`/items/${id}`);
};

// create
export const createItem = (params) => {
  return client.post('/items', params);
};

// update
export const updateItem = (id, params) => {
  return client.put(`/items/${id}`, params);
};

// delete
export const deleteItem = (id) => {
  return client.delete(`/items/${id}`);
};