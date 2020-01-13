import React, { useReducer } from 'react';

function mortgageReducer (state, action) {
    function calculateMonthlyPayment(salesPrice, interest, loanTerm) {
        const loanMonths = parseInt(loanTerm) * 12;
        const prepInterest = parseFloat(interest) / 1200;
        return parseFloat(parseFloat(salesPrice) * (prepInterest * Math.pow((1 + prepInterest), loanMonths) / (Math.pow((1 + prepInterest), loanMonths) - 1))).toFixed(2);
    }
  
    const payload = action.payload.replace(/[^\d.-]/g, '');
  
    switch (action.type) {
        case 'updateSalesPrice': {
            return {
                ...state,
                salesPrice: payload,
                monthlyPayment: calculateMonthlyPayment(payload, state.interest, state.loanTerm),
            }
        }
  
        case 'updateInterest': {
            return {
                ...state,
                interest: payload,
                monthlyPayment: calculateMonthlyPayment(state.salesPrice, payload, state.loanTerm),
            }
        }
  
        case 'updateLoanTerm': {
            return {
                ...state,
                loanTerm: payload,
                monthlyPayment: calculateMonthlyPayment(state.salesPrice, state.interest, payload),
            }
        }
  
        default: {
            return state;
        }
    }
}

const mortgageInitialState = {
    salesPrice: 100000,
    interest: 3.5,
    loanTerm: 30,
    monthlyPayment: 449.04,
}

const MortgageContext = React.createContext();


const MortgageProvider = (props) => {
    const [state, dispatch] = useReducer(mortgageReducer, mortgageInitialState);

    return (
        <MortgageContext.Provider value={{ state, dispatch }}>
            {props.children}
        </MortgageContext.Provider>
    )
}

export { MortgageContext, MortgageProvider}