import React from 'react';

const Main = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-4 grid-rows-[auto,1fr,auto] gap-5 bg-blue-500 p-5">
      <div className="header col-span-4 text-center bg-white p-4 rounded-md">
        <h2>DashBoard</h2>
      </div>
      <div className="menu bg-white p-4 rounded-md">
        <a href="#" className="block text-blue-500 hover:underline mb-2">Link</a>
        <a href="#" className="block text-blue-500 hover:underline mb-2">Link</a>
        <a href="#" className="block text-blue-500 hover:underline mb-2">Link</a>
      </div>
      <div className="content bg-white p-4 rounded-md">
        <h3>Overview</h3>
        <p></p>
      </div>
      <div className="content bg-white p-4 rounded-md">
        <h3>Detailed Report</h3>
        <p></p>
      </div>
      <div className="footer col-span-4 text-center bg-white p-4 rounded-md">
        <h4>Footer</h4>
      </div>
    </div>
  );
};

export default Main;
