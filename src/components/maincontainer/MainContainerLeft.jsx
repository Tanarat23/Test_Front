import MainTable from './MainTable';
import Remark from './Remark';

export default function MainContainerLeft() {
  return (
    <div className='border-r-2 border-gray-500 w-2/3 p-4 bg-gray-200 overflow-hidden'>
      <h1 className='text-2xl font-semibold text-[#005658]'>รายการสินค้า</h1>
      <MainTable />
      <Remark />
    </div>
  );
}
