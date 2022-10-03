import React from 'react'

export default function Userhome() {
  return (
    <div className='container my-5'>
        <h1>สวัสดี คุณผู้ทดสอบ</h1>
        <p className='fs-2 text-danger'>คุณมีคะแนนสะสม 500 พอยต์</p>
        <div className='row'>
            <div className='col-12'>
                <div className='card mt-3 mb-3'>
                    <div className='card-body'>
                        <h4>ประวัติการสั่งซื้อ</h4>
                    </div>
                </div>

                <div className='card mt-3 mb-3'>
                    <div className='card-body'>
                        <h4>ประวัติการแลกคะแนน</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
