import React, { createContext, useContext, useState } from 'react';

type ReactNode = React.ReactNode;

interface AppointmentContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined);

export const useAppointment = () => {
  const context = useContext(AppointmentContext);
  if (context === undefined) {
    throw new Error('useAppointment must be used within an AppointmentProvider');
  }
  return context;
};

interface AppointmentProviderProps {
  children: ReactNode;
}

export const AppointmentProvider: React.FC<AppointmentProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <AppointmentContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </AppointmentContext.Provider>
  );
};
