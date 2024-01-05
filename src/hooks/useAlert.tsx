import React, { useState, useEffect } from "react";
import Alert from "../components/Alert";

interface AlertData {
  message: string;
  type: "success" | "error";
}

export const useAlert = () => {
  const [alertData, setAlertData] = useState<AlertData | null>(null);
  const showAlert = (message: string, type: "success" | "error") => {
    setAlertData({ message, type });
  };

  const closeAlert = () => {
    setAlertData(null);
  };

  const AlertComponent: React.FC = () => {
    if (!alertData) {
      return null;
    }

    return (
      <Alert
        isOpen={true}
        onClose={closeAlert}
        message={alertData.message}
        type={alertData.type}
      />
    );
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      closeAlert();
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [alertData]);

  return {
    showAlert,
    AlertComponent,
  };
};
