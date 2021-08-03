//  SET_TEXT_FILTER
export const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
});

//  SORTֹֹֹ_BY_DATE
export const sortByDate = () => ({
    type:"SORTֹֹֹ_BY_DATE"
});

//  SORTֹֹֹ_BY_AMOUNT
export const sortByAmount = () => ({
    type:"SORTֹֹֹ_BY_AMOUNT"
});

//  SET_START_DATE
export const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate
});

//  SET_END_DATE
export const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate
});