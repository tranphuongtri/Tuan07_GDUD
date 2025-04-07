import React from 'react';

const Main = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-3 grid-rows-[auto,1fr,auto] gap-5 bg-blue-500 p-5">
      <div className="menu md:row-span-2 bg-white p-4 rounded-md ">
        <button>Logo</button>
        <a href="#" className="block text-blue-500 hover:underline mb-2">Link</a>
        <a href="#" className="block text-blue-500 hover:underline mb-2">Link</a>
        <a href="#" className="block text-blue-500 hover:underline mb-2">Link</a>
      </div>
      <div className="header md:col-span-3 text-center bg-white p-4 rounded-md">
        <div className='flex justify-between items-center '><h2>DashBoard</h2>
          <div className='flex items-center'>
            <input type="text" name="" id="" className='border border-gray-300 px-2 py-1 rounded' />
            <button className='mx-3'>Icon 1</button>
            <button className='mx-3'>Icon 2</button>
            <button className='mx-3'>Avatar</button></div></div>
      </div>

      <div className="content md:col-span-3 bg-white p-4 rounded-md h-108">
        <h3>Overview</h3>
        <p>Text 1</p>
        <h3>Detailed Report</h3>
        <p>Text 2 </p>
      </div>
      {/* <div className="content bg-white p-4 rounded-md">
        <h3>Detailed Report</h3>
        <p></p>
      </div> */}
      <div className="footer md:col-span-4 text-center bg-white p-4 rounded-md">
        <h4>Footer</h4>
      </div>
    </div>
  );
};

export default Main;
