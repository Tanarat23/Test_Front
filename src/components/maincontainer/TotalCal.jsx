export default function TotalCal() {
  return (
    <div className='flex flex-col gap-4 px-10 mt-5'>
      <div className='flex items-center gap-2 justify-between w-full'>
        <div>ราคาสุทธิ</div>
        <div className='flex items-center gap-2 w-1/2'>
          <div className='border border-gray-500 px-2 rounded-md text-gray-400 w-full text-right'>
            0.00
          </div>
          <div>THB</div>
        </div>
      </div>
      <div className='flex items-center gap-2 justify-between w-full'>
        <div>ส่วนลดท้ายบิล</div>
        <div className='flex items-center gap-2 w-1/2'>
          <div className='border border-gray-500 px-2 rounded-md text-gray-400 w-full text-right'>
            0.00
          </div>
          <div>THB</div>
        </div>
      </div>
      <div className='flex items-center gap-2 justify-between w-full'>
        <div>ราคาหลังหักส่วนลด</div>
        <div className='flex items-center gap-2 w-1/2'>
          <div className='border border-gray-500 px-2 rounded-md text-gray-400 w-full text-right'>
            0.00
          </div>
          <div>THB</div>
        </div>
      </div>
      <div className='flex items-center gap-2 justify-between w-full'>
        <div>Vat</div>
        <div className='flex items-center gap-2 w-1/2'>
          <div className='border border-gray-500 px-2 rounded-md text-gray-400 w-full text-right'>
            0.00
          </div>
          <div>THB</div>
        </div>
      </div>
      <div className='border border-gray-500 bg-gray-300 text-black flex items-center justify-between rounded-md px-5 py-10'>
        <div className='font-semibold text-2xl'>Grand Total</div>
        <div className='font-semibold text-3xl'>0.00 THB</div>
      </div>
    </div>
  );
}
