interface User {
    email: string;
    password?: string;
    name?: string;
    avatar?: string;
  }
  
  // Регистрация пользователя
  export const register = async (email: string, password: string): Promise<{ success: boolean; message: string }> => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const exists = users.some((u: User) => u.email === email);
    if (exists) {
      return { success: false, message: 'User already exists' };
    }
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    return { success: true, message: 'Registered successfully' };
  };
  
  // Вход по email и паролю
  export const login = async (email: string, password: string): Promise<{ success: boolean; user?: User; message: string }> => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: User) => u.email === email && u.password === password);
    if (!user) {
      return { success: false, message: 'Invalid email or password' };
    }
    localStorage.setItem("currentUser", JSON.stringify(user));
    return { success: true, user, message: 'Login successful' };
  };
  
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
  export const loginWithGoogle = async (): Promise<User> => {
    const user: User = {
      name: "Nicolas",
      email: "newuser234@gmail.com",
      avatar: "/avatar1.png"
    };
    localStorage.setItem("currentUser", JSON.stringify(user));
    return user;
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
  