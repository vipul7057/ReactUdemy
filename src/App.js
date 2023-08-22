
import "./App.css";
import ExpenseItem from "./component/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Paper",
      amount: 94.12,
      date: '2020, 7, 14'
    },
    { id: "e2", title: "New TV", amount: 799.49, date: '2021, 2, 12' },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: '2021, 2, 28',
    }
  ];
  return (
    <div className="App">
      <header className="App-header">
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        ></ExpenseItem>
      </header>
    </div>
  );
}

export default App;
