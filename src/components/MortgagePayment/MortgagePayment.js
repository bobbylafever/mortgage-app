import React, { useContext } from 'react';
import { MortgageContext } from '../../context/MortgageContext';
import './MortgagePayment.scss';
import HouseImage from './assets/house.png';

function numberWithCommas(number) {
    if(!isNaN(number) && number > 0) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    return 0;
}

export default function MortgagePayment() {
    const { state } = useContext(MortgageContext);

    return (
        <div className="mortgage-payment">
            <div 
                className="preview-container"
                style={{ backgroundImage: 'url(' + HouseImage + ')' }}
            ></div>
            <h2 className="payment-amount">${numberWithCommas(state.monthlyPayment)}/mo</h2>
        </div>
    );
}
  