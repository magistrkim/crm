import AddCompanyButton from './components/AddCompanyButton';
import StatusLabel, { Status } from './components/StatusLabel';

export default function Home() {
  return (
    <main className="py-10 px-10 ">
      <h1 className="text-6xl text-red-950 mb-10"> Home Page</h1>
      <div className='flex justify-start gap-4 cursor-pointer'>
        <StatusLabel status={Status.Active}>Active</StatusLabel>
        <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
        <StatusLabel status={Status.Pending}>Pending</StatusLabel>
        <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
      </div>
      <AddCompanyButton/>
    </main>
  );
}
