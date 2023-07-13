import React, { createContext, useContext, useState } from "react";

const serviceContext = createContext();

export const useServices = () => {
  const services = useContext(serviceContext);
  return services;
};

export const ServiceContext = ({ children }) => {
  const [selectedService, setSelectedService] = useState();
  const [activeButton, setActiveButton] = useState(false);
  const [isProfessional, setIsProfessional] = useState(true);

  const handleProfessionalClick = () => {
    setIsProfessional(true);
  };

  const handleCompanyClick = () => {
    setIsProfessional(false);
  };

  function toggleService(number) {
    if (selectedService === number) {
      setSelectedService(null);
    } else {
      setSelectedService(number);
    }
  }

  return (
    <serviceContext.Provider
      value={{
        selectedService,
        setSelectedService,
        setIsProfessional,
        activeButton,
        setActiveButton,
        toggleService,
        handleCompanyClick,
        handleProfessionalClick,
        isProfessional
      }}
    >
      {children}
    </serviceContext.Provider>
  );
};