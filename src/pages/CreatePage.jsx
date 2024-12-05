import { useState } from 'react';
import NavBar from '../layouts/NavBar';
import MainContainer from '../layouts/MainContainer';
import Footer from '../layouts/Footer';
import postApi from '../apis/post'; // Assuming you have this API setup

export default function CreatePage() {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const res = await postApi.createData(formData);
      console.log('Saved successfully:', res);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <div className='w-screen h-screen'>
      <div className='mx-10 mt-10 border-x-2 border-t-2 border-gray-500 rounded-md'>
        <NavBar formData={formData} onInputChange={handleInputChange} />
        <MainContainer />
      </div>
      <Footer onSave={handleSave} />
    </div>
  );
}
