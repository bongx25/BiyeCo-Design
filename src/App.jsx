import React from 'react';
import { RegistrationProvider } from './modules/registration/store/registrationStore';
import { RegistrationFlow } from './routes/AppRoutes';

export default function App() {
  return (
    <RegistrationProvider>
      <RegistrationFlow />
    </RegistrationProvider>
  );
}
