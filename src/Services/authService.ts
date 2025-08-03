interface User {
    email: string;
    password?: string;
    name?: string;
    avatar?: string;
  }
  
  // Вход через Facebook
  export const loginWithFacebook = async (): Promise<User> => {
    // TODO: Replace this with real Facebook OAuth login
    const user: User = {
      name: "Nicolas",
      email: "newuser234_facebook.com",
      avatar: "/avatar1.png"
    };
    localStorage.setItem("currentUser", JSON.stringify(user));
    return user;
  };
  
  // Вход через Google
  export const loginWithGoogle = async (email: string): Promise<void> => {
    await fetch("http://localhost:5219/api/Auth/external-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
  };
  
  
  // Получить текущего пользователя
  export const getCurrentUser = (): User | null => {
    const stored = localStorage.getItem("currentUser");
    return stored ? JSON.parse(stored) : null;
  };
  
  // Выход
  export const logout = (): void => {
    localStorage.removeItem("currentUser");
  };
  