import React, { useContext } from 'react';
import { MortgageContext } from '../../context/MortgageContext';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import './MortgageForm.scss';

const dollarMask = createNumberMask({
    prefix: '$ ',
    integerLimit: 7,
});

const percMask = createNumberMask({
    prefix: '', 
    suffix: ' %',
    integerLimit: 2,
    allowDecimal: true,
});

export default function MortgageForm() {
    const { state, dispatch } = useContext(MortgageContext);

    return (
        <div className="mortgage-form">
            <h3>Mortgage Calculator</h3>

            <MaskedInput
                className="mortgage-input"
                mask={dollarMask}
                placeholder="$ 100,000"
                value={state.salesPrice}
                onChange={e => dispatch({ type: 'updateSalesPrice', payload: e.currentTarget.value })} 
            />
            <MaskedInput
                className="mortgage-input"
                mask={percMask}
                placeholder="3.5 %"
                value={state.interest}
                onChange={e => dispatch({ type: 'updateInterest', payload: e.currentTarget.value })} 
            />
            <select 
                className="mortgage-input"
                value={state.loanTerm}
                onChange={e => dispatch({ type: 'updateLoanTerm', payload: e.currentTarget.value })} 
            >
                <option value="10">10 Years</option>
                <option value="15">15 Years</option>
                <option value="20">20 Years</option>
                <option value="25">25 Years</option>
                <option value="30">30 Years</option>
            </select>
        </div>
    );
}
  