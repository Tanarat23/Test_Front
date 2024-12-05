export default function Remark({ onInputChange }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onInputChange({ target: { name, value } });
  };
  return (
    <div className='px-10 mt-40'>
      <input
        type='text'
        placeholder='Remark'
        className='border border-gray-500 px-2 py-10 rounded-md text-black w-full'
        onChange={handleInputChange}
      />
    </div>
  );
}
