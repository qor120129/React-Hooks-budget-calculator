import React from 'react'
import ExpenseItem from './ExpenseItem'
import '../css/ExpenseList.css'
import { MdDelete } from 'react-icons/md'


const ExpenseList = ({expenseList, clickDelete, clickDeleteAll, itemEdit}) => {
    return (
      <>
        <ul className='list'>
          {expenseList.map(value => {
            return (
              <ExpenseItem
                key={value.id}
                expense={value}
                clickDelete={clickDelete}
                itemEdit={itemEdit}
              />
            )
          })
          }

        </ul>
        <div className='btn_wrap'>
          <button className='btn' onClick={() => clickDeleteAll()}> 목록 지우기 <MdDelete /></button>
        </div>
      </>
    )
}

export default ExpenseList