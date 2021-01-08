import React from 'react'

const isIncome = Math.round(Math.random());

const InfoCard = () => {
    return (
        <div style={{ textAlign: 'center', padding: '0 10 %' }}>
            Try saying: <br /> 
            Add {isIncome ? 'Income ' : 'Expense '}  
            for {isIncome ? 'Rs 100 ' : 'Rs 50 '} 
            in Category {isIncome ? 'Business ' : 'House '} 
            for {isIncome ? 'Monday ' : 'Thursday '} 
        </div>
    )
}

export default InfoCard
