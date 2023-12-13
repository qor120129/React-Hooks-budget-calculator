import React from 'react'
import '../css/ExpenseItem.css'
import { MdDelete, MdEdit } from 'react-icons/md'


const ExpenseItem = ({expense, clickDelete, itemEdit})=> {
  return (
    <>
      <li className='list_item'>
        <div className='info'>
          <span className='expense' >{expense.charge}</span>
          <span className='amount' >{expense.amount} 원</span>
        </div>
        <div className='btn_wrap'>
          <button className='btn edit'><MdEdit onClick={()=> itemEdit( expense.id )}/></button>
          <button className='btn delete'><MdDelete onClick={()=> clickDelete( expense.id, expense.amount)}/></button>
        </div>
      </li>
    </>
  )
}

export default ExpenseItem