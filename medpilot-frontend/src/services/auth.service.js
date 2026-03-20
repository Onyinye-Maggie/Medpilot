// src/services/auth.service.js
export const registerUser = async (data) => {
  // Fake registration success
  console.log("Mock register:", data);
  // Just return success
  return { message: "User registered successfully" };
};

export const loginUser = async (data) => {
  // Mock login
  if (data.email && data.password) {
    return {
      token: "mock-token-123",
      user: { name: "Test User", email: data.email },
    };
  } else {
    throw new Error("Invalid credentials");
  }
};