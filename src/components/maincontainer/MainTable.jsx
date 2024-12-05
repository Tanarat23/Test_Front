import React, { useState } from 'react';

const tableHeaders = [
  '#',
  'รหัสสินค้า',
  'จำนวน',
  'น้ำหนัก',
  'ราคา/หน่วย',
  'หน่วย',
  'ราคาก่อนส่วนลด',
  'ส่วนลด',
  'ราคาสุทธิ',
];

export default function MainTable() {
  const [rows, setRows] = useState([{ id: 1 }]);

  const addRow = () => {
    setRows([...rows, { id: rows.length + 1 }]);
  };

  return (
    <div className='w-full px-10 mt-5'>
      <div className='border border-gray-500'>
        <div className='grid grid-cols-9'>
          {tableHeaders.map((header, index) => (
            <div
              key={index}
              className='bg-[#ededed] text-[#2d2d2d] py-2 font-semibold text-center'
            >
              {header}
            </div>
          ))}
        </div>
        <div className='max-h-[330px] overflow-y-auto border-b text-center'>
          {rows.map((row) => (
            <div key={row.id} className='grid grid-cols-9 bg-white'>
              <div className='flex items-center justify-center'>{row.id}</div>
              <input
                type='text'
                className='border border-gray-400 p-2 m-1 rounded-md'
              />
              <input
                type='text'
                className='border border-gray-400 p-2 m-1 rounded-md'
              />
              <input
                type='text'
                className='border border-gray-400 p-2 m-1 rounded-md'
              />
              <input
                type='text'
                className='border border-gray-400 p-2 m-1 rounded-md'
              />
              <select className='border border-gray-400 p-2 m-1 rounded-md'>
                <option value=''>Select</option>
                <option value='ชิ้น'>ชิ้น</option>
                <option value='กรัม'>กรัม</option>
              </select>
              <input
                type='text'
                className='border border-gray-400 p-2 m-1 rounded-md'
              />
              <input
                type='text'
                className='border border-gray-400 p-2 m-1 rounded-md'
              />
              <input
                type='text'
                className='border border-gray-400 p-2 m-1 rounded-md'
              />
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-end'>
        <button
          onClick={addRow}
          className='border border-gray-400 bg-gray-300 py-2 my-3 rounded-md px-8 mx-5'
        >
          Add
        </button>
      </div>
    </div>
  );
}
