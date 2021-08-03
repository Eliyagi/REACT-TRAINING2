//  Expenses Reducer
const expensesReducerDedaultState = [];

export default (state = expensesReducerDedaultState , aciton) =>{
    switch(aciton.type){
        case "ADD_EXPENSE":
            return [
                ...state,
                aciton.expense
            ];
        case "REMOVE_EXPENSE":
            return state.filter(({id}) => id !== aciton.id);
        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if(expense.id === aciton.id){
                    return {
                        ...expense,
                        ...aciton.updates
                    };
                }else{
                return expense;
                }
            });
        default:
            return state;
    }
};