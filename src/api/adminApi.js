import axiosInstance from "./axiosInstance";


export const getAllOrders = async () => {
  const res = await axiosInstance.get("/admin/orders");
  return res.data;
};


export const updateOrderStatus = async (orderId, status) => {
  const res = await axiosInstance.patch(`/orders/${orderId}/status`, {
    status,
  });
  return res.data;
};