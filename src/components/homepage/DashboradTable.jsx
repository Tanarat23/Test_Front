import { useState, useEffect } from 'react';
import postApi from '../../apis/post';
import { Link } from 'react-router-dom';

const tableHeaders = [
  'หมายเลขเอกสาร',
  'วันที่ออกเอกสาร',
  'วันที่ครบกำหนด',
  'ชื่อลูกค้า',
  'ที่อยู่ออกใบกำกับ',
  'ที่อยู่จัดส่ง',
  'หมายเลขเอกสารอ้างอิง',
  'Currency',
  'Viewdata',
  'Editdata',
  'Deletedata',
];

const tableData = [
  {
    documentNumber: 'DOC001',
    documentDate: '2024-12-01',
    dueDate: '2024-12-15',
    customerName: 'บริษัท เอ บี ซี จำกัด',
    shippingAddress: '123/4 ถนนสาทร กรุงเทพฯ 10120',
    deliveryAddress: '456/7 ซอยลาดพร้าว 48 กรุงเทพฯ 10230',
    referenceDocumentNumber: 'REF001',
    currency: 'THB',
  },
  {
    documentNumber: 'DOC002',
    documentDate: '2024-12-02',
    dueDate: '2024-12-16',
    customerName: 'ห้างหุ้นส่วน ยิ่งเจริญ',
    shippingAddress: '789 หมู่ 9 ตำบลหนองแขม กรุงเทพฯ 10160',
    deliveryAddress: '65/8 หมู่บ้านเขียวขจี เชียงใหม่ 50000',
    referenceDocumentNumber: 'REF002',
    currency: 'USD',
  },
  {
    documentNumber: 'DOC003',
    documentDate: '2024-12-03',
    dueDate: '2024-12-17',
    customerName: 'คุณสมชาย ใจดี',
    shippingAddress: '99/11 ถนนเพชรเกษม กรุงเทพฯ 10160',
    deliveryAddress: '22/5 บ้านดอยคำ เชียงราย 57000',
    referenceDocumentNumber: 'REF003',
    currency: 'EUR',
  },
  {
    documentNumber: 'DOC004',
    documentDate: '2024-12-04',
    dueDate: '2024-12-18',
    customerName: 'บริษัท ทรัพย์เจริญ จำกัด',
    shippingAddress: '105/2 ตึกเมืองทอง นนทบุรี 11000',
    deliveryAddress: '44 หมู่ 6 ถนนเชียงใหม่-ลำพูน ลำพูน 51000',
    referenceDocumentNumber: 'REF004',
    currency: 'JPY',
  },
  {
    documentNumber: 'DOC005',
    documentDate: '2024-12-05',
    dueDate: '2024-12-19',
    customerName: 'ห้างหุ้นส่วน สามัคคี',
    shippingAddress: '456 อาคารมณียา กรุงเทพฯ 10330',
    deliveryAddress: '789/10 หมู่บ้านพฤกษา 3 ปทุมธานี 12130',
    referenceDocumentNumber: 'REF005',
    currency: 'GBP',
  },
  {
    documentNumber: 'DOC006',
    documentDate: '2024-12-06',
    dueDate: '2024-12-20',
    customerName: 'บริษัท ฟ้าใส จำกัด',
    shippingAddress: '88/99 ถนนราชพฤกษ์ นนทบุรี 11000',
    deliveryAddress: '12/8 หมู่บ้านภูมิใจ สุพรรณบุรี 72000',
    referenceDocumentNumber: 'REF006',
    currency: 'AUD',
  },
  {
    documentNumber: 'DOC007',
    documentDate: '2024-12-07',
    dueDate: '2024-12-21',
    customerName: 'บริษัท วิถีไทย จำกัด',
    shippingAddress: '100/8 ถนนสุขุมวิท กรุงเทพฯ 10110',
    deliveryAddress: '13/9 หมู่ 5 ตำบลบางบัวทอง นนทบุรี 11110',
    referenceDocumentNumber: 'REF007',
    currency: 'SGD',
  },
  {
    documentNumber: 'DOC008',
    documentDate: '2024-12-08',
    dueDate: '2024-12-22',
    customerName: 'คุณสมศรี ชื่นสุข',
    shippingAddress: '77/5 ซอยเอกมัย กรุงเทพฯ 10110',
    deliveryAddress: '40/12 หมู่บ้านเขียวขจี สมุทรปราการ 10280',
    referenceDocumentNumber: 'REF008',
    currency: 'THB',
  },
  {
    documentNumber: 'DOC009',
    documentDate: '2024-12-09',
    dueDate: '2024-12-23',
    customerName: 'บริษัท แสงเจริญ จำกัด',
    shippingAddress: '12/4 ถนนจรัญสนิทวงศ์ กรุงเทพฯ 10700',
    deliveryAddress: '5/3 หมู่บ้านปิ่นเกล้า นครปฐม 73000',
    referenceDocumentNumber: 'REF009',
    currency: 'THB',
  },
  {
    documentNumber: 'DOC010',
    documentDate: '2024-12-10',
    dueDate: '2024-12-24',
    customerName: 'ห้างหุ้นส่วน รวมใจ',
    shippingAddress: '45/6 ถนนลาดกระบัง กรุงเทพฯ 10520',
    deliveryAddress: '78/7 หมู่ 10 ถนนร่มเกล้า กรุงเทพฯ 10520',
    referenceDocumentNumber: 'REF010',
    currency: 'USD',
  },
];

export default function DashboradTable({ onView }) {
  const [detail, setDetail] = useState([]);

  const handleDelete = async (id) => {
    try {
      console.log('id :', id);
      const agree = window.confirm(
        'Are you sure you want to delete this data?'
      );
      if (!agree) {
        return console.log('Cancel');
      }
      console.log('Delete');

      await postApi.deleteData(id);

      setDetail((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = async (id) => {
    try {
      await postApi.editData(id);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await postApi.getData();
        console.log('API Response :', res.data);
        setDetail(res.data.posts);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='px-10 my-10'>
      <div className='grid grid-cols-11 bg-gray-200 p-2 gap-2'>
        {tableHeaders.map((item, index) => (
          <div key={index} className='text-sm font-semibold text-center'>
            {item}
          </div>
        ))}
      </div>

      {detail.map((item, index) => (
        <div
          key={index}
          className='grid grid-cols-11 p-2 gap-2 border-b hover:bg-gray-50 text-center'
        >
          <div className='col-span-1'>{item?.documentNumber}</div>
          <div className='col-span-1'>{item?.issueDate}</div>
          <div className='col-span-1'>{item?.dueDate}</div>
          <div className='col-span-1'>{item?.customerName}</div>
          <div className='col-span-1'>{item?.billingAddress}</div>
          <div className='col-span-1'>{item?.shippingAddress}</div>
          <div className='col-span-1'>{item?.referenceNumber}</div>
          <div className='col-span-1'>{item?.currency}</div>
          <div className='col-span-1'>
            <button
              className='bg-gray-400 py-2 px-4 rounded-md'
              onClick={() => onView(item.id)}
            >
              View
            </button>
          </div>
          <div className='col-span-1'>
            <button
              className='bg-gray-400 py-2 px-4 rounded-md'
              onClick={() => handleEdit(item)}
            >
              Edit
            </button>
          </div>
          <div className='col-span-1 '>
            <button
              className='bg-gray-400 py-2 px-4 rounded-md'
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
