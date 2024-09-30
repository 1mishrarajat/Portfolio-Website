'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
    const Router =useRouter()
  return (

    <>
      <div className='dashboard-sec'>
        <div className='container'>
          <div className='row'>
          <h1>Welcome to My Portfolio</h1>
        {/* Your other portfolio content */}
        <div className="btn-box">
          <button onClick={()=>Router.push("./Login")}>Welcome</button>
        </div>
          </div>
        </div>
        
      </div>

      <style jsx>{`
        .btn-box button {
          padding: 8px 20px;
          background: Green;
          border-radius: 6px;
          box-shadow: 1px 1px 20px blue;
          color: #fff;
          font-weight: bold;
          font-family: sans-serif;
          font-size: 18px;
          margin-top: 30px;
        }

        .btn-box {
          text-align: center;
        }
          .btn-box button:hover{
            background: black;
           cursor:pointer;

          }
      `}</style>
    </>
  );
}
