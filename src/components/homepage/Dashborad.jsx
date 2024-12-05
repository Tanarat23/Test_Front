import DashboradTable from './DashboradTable';
import { Link } from 'react-router-dom';

export default function Dashborad() {
  return (
    <div className='bg-white m-10'>
      <h1 className='text-3xl font-semibold text-[#005658] text-center pt-10'>
        Dashboard
      </h1>
      <DashboradTable />
      <Link to='/create' className='flex justify-end'>
        <button className='bg-blue-500 text-white py-3 rounded-md px-10 mx-10'>
          Create
        </button>
      </Link>
    </div>
  );
}
