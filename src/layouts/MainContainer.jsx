import MainContainerLeft from '../components/maincontainer/MainContainerLeft';
import MainContainerRight from '../components/maincontainer/MainContainerRight';

export default function MainContainer() {
  return (
    <div className='flex h-[calc(100vh-100px)]'>
      <MainContainerLeft />
      <MainContainerRight />
    </div>
  );
}
