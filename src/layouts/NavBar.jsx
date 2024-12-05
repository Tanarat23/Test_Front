import { useState } from 'react';

const detail = [
  'หมายเลขเอกสาร',
  'วันที่ออกเอกสาร',
  'วันที่ครบกำหนด',
  'ชื่อลูกค้า',
  'ที่อยู่ออกใบกำกับ',
  'ที่อยู่จัดส่ง',
  'หมายเลขเอกสารอ้างอิง',
  'Currency',
];

const name = [
  'documentNumber',
  'documentDate',
  'dueDate',
  'customerName',
  'billingAddress',
  'shippingAddress',
  'referenceNumber',
  'currency',
];

export default function NavBar({ formData, onInputChange }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    const updatedValue = name === 'dueDate' ? value + 'T00:00:00.000Z' : value;

    onInputChange({ target: { name, value: updatedValue } });
  };

  return (
    <div className='border-b-2 border-gray-500 p-4'>
      <div className='grid grid-cols-4 gap-8 w-2/3 pr-10'>
        {detail.map((item, index) => (
          <input
            key={item}
            name={name[index]}
            placeholder={item}
            type='text'
            value={formData[name[index]] || ''}
            onChange={handleInputChange}
            className='bg-white border border-gray-500 p-2 rounded-md'
          />
        ))}
      </div>
    </div>
  );
}
