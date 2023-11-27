import axiosSecure from ".";

// Save User in  Database
export const saveUser = async (user) => {
  const currentUser = {
    email: user.email,
    role: "admin",
    status: "Verified",
  };

  const { data } = axiosSecure.put(`/users/${user?.email}`, currentUser);

  return data;
};

// Get token from server
export const getToken = async (email) => {
  const { data } = axiosSecure.post(`/jwt`, email);
  console.log("Token recived from server ------------->", data);

  return data;
};

// Clear token from browser
export const clearCookie = async () => {
  const { data } = axiosSecure.get(`/logout`);
  return data;
};
