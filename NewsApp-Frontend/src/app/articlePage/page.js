"use client";
import React from 'react';



const ArticlePage = () => {
  // Sample article data for demonstration (replace with actual data)
  const article = {
    title: 'Presidential and parliamentary elections will be held in 2024 – President Ranil',
    publicationDate: 'October 25, 2023',
    authorName: 'John Doe',
    content: '<p>The water supply for several areas in Colombo will be suspended for a period of 15 hours today (Oct 21), according to the National Water Supply and Drainage Board (NWSDB).<br> <br> Accordingly, the water cut will affect Colombo 11, 12, 13, 14 and 15 areas from 05.00 p.m. this evening until 08.00 a.m. tomorrow (Oct 22).The water supply for several areas in Colombo will be suspended for a period of 15 hours today (Oct 21), according to the National Water Supply and Drainage Board (NWSDB).</p>',
    imageUrl: 'https://images.unsplash.com/photo-1696860740767-f4211c9209f4?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with the actual image URL
  };

  return (

    <div className='flex flex-row p-10'>  
    
        <div className="container mx-auto ml-10 basis-3/4 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4 ">{article.title}</h1>
        <div className="text-sm text-gray-600 mb-4">
            Published on {article.publicationDate} by {article.authorName}
        </div>
        <img
            src={article.imageUrl}
            alt={article.title}
            className="mb-4 rounded-md w-auto h-[300px] "
        // style={{ maxWidth: '100%' }}
        />
        <div
            className="prose mx-10"
            dangerouslySetInnerHTML={{ __html: article.content }}
        />
        </div>
        <div className='basis-1/4'>
            <p>dbdshdssdvgsdvfvsdgfvsdfvsdfvsdfgsvdfvsdfsdvfvsdfgvsdfv</p>
        </div>
    </div>
  );
};

export default ArticlePage;