import {setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount} from "../../actions/filters";
import moment from "moment";


test("start date test", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:"SET_START_DATE",
        startDate: moment(0)
    });
});

test("end date test", () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:"SET_END_DATE",
        endDate: moment(0)
    });
});


test("set text value test", () => {
    const action = setTextFilter("text test");
    expect(action).toEqual({
        type:"SET_TEXT_FILTER",
        text: "text test"
    });
});

test("set text with default value test", () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type:"SET_TEXT_FILTER",
        text: ""
    });
});

test("sortByAmount test", () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type:"SORTֹֹֹ_BY_AMOUNT"
    });
});

test("sortByDate test", () => {
    const action = sortByDate();
    expect(action).toEqual({
        type:"SORTֹֹֹ_BY_DATE"
    });
});




