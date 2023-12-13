import React from 'react'
import '../css/ExpenseForm.css'
import { MdSend } from 'react-icons/md'


const ExpenseForm = ({ clickAdd, inputChange, charge, amount, edit }) => {
  return (
    <form onSubmit={clickAdd}>
      <div className='form_center'>
        <div className='form_group'>
          <label htmlFor='charge'>지출 항목</label>
          <input
            type='text'
            className='form_control'
            id='charge'
            name='charge'
            onChange={inputChange}
            value={charge}
            autocomplete='off'
            placeholder='예) 렌트비'>
          </input>
        </div>
        <div className='form_group'>
          <label htmlFor='amount'>비용</label>
          <input
            type='number'
            className='form_control'
            id='amount'
            name='amount'
            onChange={inputChange}
            value={amount}
            placeholder='예) 100'>
          </input>
        </div>
      </div>
      <div className='btn_wrap'>
        <button type='submit' className='btn' > {edit ? '수정' : '제출'} <MdSend /></button>
      </div>
    </form>
  )
}

export default ExpenseForm