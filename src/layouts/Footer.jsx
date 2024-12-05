import { Link } from 'react-router-dom';

export default function Footer({ onSave }) {
  return (
    <div className='border-t-2 border-gray-500 flex justify-end p-4 gap-4'>
      <Link to='/'>
        <button className='border border-gray-500 px-4 py-2 rounded-md'>
          Cancel
        </button>
      </Link>
      <button
        onClick={onSave}
        className='border border-gray-500 px-4 py-2 rounded-md'
      >
        Save
      </button>
    </div>
  );
}
