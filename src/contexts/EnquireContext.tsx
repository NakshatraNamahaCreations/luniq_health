import React, { createContext, useContext, useState } from 'react';

type ReactNode = React.ReactNode;

interface EnquireContextType {
  isModalOpen: boolean;
  selectedService: string;
  openModal: (service?: string) => void;
  closeModal: () => void;
}

const EnquireContext = createContext<EnquireContextType | undefined>(undefined);

export const EnquireProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openModal = (service?: string) => {
    setSelectedService(service || '');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService('');
  };

  return (
    <EnquireContext.Provider value={{ isModalOpen, selectedService, openModal, closeModal }}>
      {children}
    </EnquireContext.Provider>
  );
};

export const useEnquire = () => {
  const context = useContext(EnquireContext);
  if (context === undefined) {
    throw new Error('useEnquire must be used within an EnquireProvider');
  }
  return context;
};









