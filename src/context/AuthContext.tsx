import React, { createContext, useEffect, useState, ReactNode } from 'react';

interface User {
  email: string;
  password: string;
  name: string;
  address: string;
}

interface AuthContextType {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>(() => {
    try {
      const savedUser = localStorage.getItem('user');
      return savedUser ? JSON.parse(savedUser) : { email: '', password: '', name: '', address: ''  };
    } catch (error) {
      console.error('Error parsing user data from localStorage:', error);
      return { email: '', password: '', name: '', address: '' };
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      console.error('Error saving user data to localStorage:', error);
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
