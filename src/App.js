import { useState } from "react";
import "./App.css"
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";

const App = () => {

  const [expenseList, setExpenseList] = useState([])
  const [charge, setCharge] = useState('')
  const [amount, setAmount] = useState('')
  const [total, setTotal] = useState(0)
  const [alert, setAlert] = useState({ show: false })
  const [id, setId] = useState('')
  const [edit, setEdit] = useState(false)
  

  const clickDelete = (id, DeleteAmount) => {
    const newExpenseList = expenseList.filter((value) => value.id !== id
    )
    const newTotal = total - DeleteAmount
    setExpenseList(newExpenseList)
    setTotal(newTotal)
    showAlert({ type: 'error', text: '항목이 삭제되었습니다.' })
  }

  const clickDeleteAll = () => {
    setExpenseList([])
    showAlert({ type: 'error', text: '항목이 삭제되었습니다.' })
  }

  const inputChange = (e) => {
    const { name, value, valueAsNumber } = e.target;
    if (name === 'charge') {
      setCharge(value)
    }
    if (name === 'amount') {
      setAmount(valueAsNumber)
    }
  }

  const clickAdd = (e) => {
    e.preventDefault()

    
    if (amount && charge) {
      if(edit) {
        const newExpenseList = expenseList.map(item => {
          return item.id === id ? {...item, amount, charge} : item
        })
        setExpenseList(newExpenseList)
        setEdit(false)
        
        showAlert({ type: 'success', text: '목록이 수정 되었습니다.' })
      } else{
        const newExpense = { id: crypto.randomUUID(), charge, amount }
        const newExpenseList = [...expenseList, newExpense]
        const newTotal = newExpenseList.reduce((acc, curr) => {
          return acc += curr.amount
        }, 0)
        showAlert({ type: 'success', text: '목록이 추가 되었습니다.' })
        setTotal(newTotal)
        console.log(total)
        setExpenseList(newExpenseList)
      }
      setCharge('')
      setAmount('')
    } else {
      showAlert({ type: 'error', text: '지출항목과 비용을 입력하세요.' })
    }
  }

  const showAlert = ({ type, text }) => {
    setAlert({ show: true, type, text })
    setTimeout(() => {
      setAlert({ show: false })
    }, 5000)
  }

  const itemEdit = (id) => {
    const expense = expenseList.find((item) => item.id === id)
    const {amount, charge} = expense
    setId(id)
    setAmount(amount)
    setCharge(charge)
    setEdit(true)
  }

  return (
    <>
      {alert.show ? <Alert type={alert.type} text={alert.text}></Alert> : null}
      <main className="main_container">
        <h1 className="title">예산 계산기</h1>
        <div className="expense_form">{
          <ExpenseForm
            inputChange={inputChange}
            clickAdd={clickAdd}
            charge={charge}
            amount={amount}
            edit={edit}

          />}
        </div>
        <div className="expense_lsit" >
          {
            <ExpenseList
              expenseList={expenseList}
              clickDelete={clickDelete}
              clickDeleteAll={clickDeleteAll}
              itemEdit={itemEdit}
            />
          }
        </div>
        <div className="total_wrap">
          <div className="total">
            <span>총지출:</span>
            <span>{total}원</span>
          </div>
        </div>
      </main>
    </>

  )
}
export default App;


