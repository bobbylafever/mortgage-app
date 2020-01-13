import React from 'react';
import { MortgageProvider } from './context/MortgageContext';
import MortgageForm from './components/MortgageForm/MortgageForm';
import MortgagePayment from './components/MortgagePayment/MortgagePayment';
import './App.scss';

export default function App() {
  return (
    <MortgageProvider>
      <div className="app">
        <div className="app-column">
          <MortgageForm />
        </div>
        <div className="app-column">
          <MortgagePayment />
        </div>
      </div>
    </MortgageProvider>
  );
}
