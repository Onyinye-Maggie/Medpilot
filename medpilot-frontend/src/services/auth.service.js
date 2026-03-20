export const registerUser = async (data) => {
  // Mock registration: always succeed
  console.log("Mock register:", data);
  return { message: "User registered successfully" };
};

export const loginUser = async (data) => {
  // Mock login: any email/password works
  if (data.email && data.password) {
    return {
      token: "mock-token-123",
      user: { name: data.email.split("@")[0], email: data.email },
    };
  } else {
    throw new Error("Invalid credentials");
  }
};