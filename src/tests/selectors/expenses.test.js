import selectExpenses from "../../selectors/expenses";

const expenses = [{
    id: "1",
    description: "gum",
    note: "",
    amount: 195,
    createdAt: 0
}, {
    id: "2",
    description: "rent",
    note: "",
    amount: 109500,
    createdAt: -1000
}, {
    id: "3",
    description: "card",
    note: "",
    amount: 4500,
    createdAt: 1000
}]

test("test filter by text value ",()=>{
    const results = selectExpenses();
});