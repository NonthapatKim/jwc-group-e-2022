import React from 'react'

export default function UserMar() {
  return (
    <div className='container my-5'>
        <h1>สวัสดี ร้านวัฒนาพาณิชย์กาญจนา</h1>
        <div className='row'>
            <div className='col-12'>
                <div className='card mt-3 mb-3'>
                    <div className='card-body'>
                        <h4>ประวัติการขาย</h4>
                    </div>
                </div>

                <div className='card mt-3 mb-3'>
                    <div className='card-body'>
                        <h4>ประวัติการจ่ายคะแนนสะสม</h4>
                    </div>
                </div>

                <div className='card mt-3 mb-3'>
                    <div className='card-body bg-warning'>
                        <h4>เรียกรถรับขยะ</h4>
                    </div>
                </div>

                <div className='card mt-5 mb-5'>
                    <div className='card-body bg-primary text-white'>
                        <h4>สแกน Qr Code</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
