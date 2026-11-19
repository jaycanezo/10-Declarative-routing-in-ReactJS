import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // Simulated authentication state in memory only (no localStorage credentials).
  const [user, setUser] = useState(null);

  function login({ name, email, program }) {
    const trimmedName = name.trim() || "Jay Cañezo";
    const trimmedEmail = email.trim() || "jay.canezo@student.edu";
    const trimmedProgram = program?.trim() || "BSIT-3";

    setUser({
      id: "STU-2026-0142",
      name: trimmedName,
      email: trimmedEmail,
      program: trimmedProgram,
      yearLevel: "3rd Year",
      enrolledCount: 5,
    });
  }

  function logout() {
    setUser(null);
  }

  const value = {
    user,
    isAuthenticated: Boolean(user),
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside an AuthProvider");
  }
  return context;
}

