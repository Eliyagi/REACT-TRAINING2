import { removeExpense, addExpense, editExpense} from "../../actions/expenses";

test("remove test", () => {
    const action = removeExpense({ id: "123abc"});
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    });
});

test("edit test", () => {
    const updates = { description:"new"};
    const action = editExpense( "123abc", {...updates});
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123abc",
        updates: {
            ...updates
        }
    });
});

test("add test with provided values", () => {
    const expenseData = { description:"test", amount:159105, createdAt: 1000, note: "this test note"};
    const action = addExpense( expenseData);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test("add test with defult values", () => {
    const expenseData = { description:"", amount:0, createdAt: 0, note: ""};
    const action = addExpense();
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});
