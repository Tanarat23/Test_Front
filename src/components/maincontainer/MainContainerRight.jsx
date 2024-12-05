import TotalCal from './TotalCal';
import Note from './Note';

export default function MainContainerRight() {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
  };
  return (
    <div className='w-1/3 p-4'>
      <h1 className='text-2xl font-semibold text-[#005658]'>สรุป</h1>
      <TotalCal />
      <Note />
    </div>
  );
}
