import moment from "moment";

// Filters Reducer

const filtersReducerDedaultState = {
    text: "",
    sortBy: "date",
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};
export default (state = filtersReducerDedaultState , aciton) =>{
    switch(aciton.type){
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: aciton.text
            };
            case "SORTֹֹֹ_BY_AMOUNT":
                return{...state, sortBy: "amount"};
            case "SORTֹֹֹ_BY_DATE":
                return{...state, sortBy: "date"};
            case "SET_START_DATE":
                return{...state, startDate: aciton.startDate}
            case "SET_END_DATE":
                return{...state, endDate: aciton.endDate}
        default:
            return state;
    }
};