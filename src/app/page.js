"use client";
import Image from 'next/image'
import {useState} from "react";
import React from 'react';

function Section(props) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className=" m-10 p-10">
      <h2 className="text-[1.5rem] col-span-2 text-center">{props.title}
        <button
          className="cursor-pointer p-5 border-none"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? '\u2228' : '\u2227'}
        </button>
      </h2>
      
      {showDetails && (
        <p className=" mt-10">
          {props.text}
        </p>
      )}
    </div>
  );
}


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-slate-300 text-black items-center">
      <Image
        className='rounded-full place-self-center'
        src="/team-photo-noBg.png"
        alt="My Face"
        width={180}
        height={180}
        priority 
      />
      <div className='text-center text-3xl'>Dylan Burke</div>
        
        <div className='w-full bg-gray-500 text-white'>
          <Section title="About Me" className='text-center w-1/2 ' text={
            <div>
              Hi! I'm Dylan, a passionate computer science graduate from Michigan State University. Throughout my academic journey, I've developed a strong 
              foundation in computer science, cultivating my skills in software development, algorithms, and problem-solving. I thrive on tackling complex challenges 
              and turning them into innovative solutions. Collaboration is at the heart of my work ethic. I've had the privilege of collaborating with diverse teams, 
              which has not only broadened my perspective but also enhanced my ability to communicate and adapt in dynamic environments.
              As an eager learner, I'm committed to staying updated with the latest trends and technologies in the ever-evolving field of computer science. I believe 
              that continuous learning is the key to staying at the forefront of innovation.
            </div>}
          />
        </div>
        
        <div className='w-full'>
          <Section title="Course Work" text={
            <div className=''>
              <ul className='ml-10 space-y-3'>

                <li className='text-3xl'>Collaborative Design (<a href='http://www.capstone.cse.msu.edu/2022-08/projects/magna/' target='_blank' className='underline'>Capstone</a>)</li>
                <ul className='pl-5 list-disc list-inside space-y-1'>
                  <li>Consulted for one of the world's largest manufacturers of automotive parts to capture insights on autonomous robot fleet KPIs</li>
                  <li>Designed and implemented analytics dashboard using Amazon QuickSight which was then hosted on internal webpage</li>
                  <li>Worked directly with client to develop a complete project plan</li>
                </ul>
                
                <li className='text-3xl'>Advanced Web Development and Database Management</li>
                <ul className='pl-5 list-disc list-inside'>
                  <li>Learned basics of server-side database integration into websites</li>
                  <li>Built several basic websites using React framework and styled with Tailwind</li>
                  <li>Designed, built, and deployed single page cryptocurrency price tracking dashboard that is automatically updated every day utilizing two different cryptocurrency APIs (<a href='https://quiet-pony-0aa44c.netlify.app/' className='underline'>See Here</a>)</li>
                </ul>

                <li className='text-3xl'>Web Application Architecture and Development</li>
                <ul className='pl-5 list-disc list-inside'>
                  <li>Combined HTML, CSS, and Javascript to create more complex webpages</li>
                  <li>Added database for local website using Python with Flask, Django, and SQL library</li>
                  <li>Dockerized the apps and hosted them with Google Cloud</li>
                </ul>

                <li className='text-3xl'>Web Design and Development</li>
                <ul className='pl-5 list-disc list-inside'>
                  <li>Learned the basics of HTML structuring and CSS styling</li>
                  <li>Utilized Github to stage and commit changes to several static webpages and host them with Netlify</li>
                  <li>Designed, built, and deployed a basic concept site to track deals for local resturaunts in and around the MSU campus</li>
                </ul>

                <li className='text-3xl'>Introduction to Machine Learning</li>
                <ul className='pl-5 list-disc list-inside'>
                  <li>Learned basic concepts of machine learning algorithms and techniques</li>
                  <li>Built simple models to predict and identify trends in multiple data sources</li>
                  <li>Participated in a group project to predict sales for a Ecuadorian grocery chain utilzing multiple different modeling techniques (LSTM, Linear Regression, SARIMA) </li>
                </ul>

                <li className='text-3xl'>Database Systems</li>
                <ul className='pl-5 list-disc list-inside'>
                  <li>Test</li>
                  <li>Test</li>
                  <li>Test</li>
                </ul>

              </ul>
            </div>}
          />
        </div>
        
        <div className='w-full bg-gray-500 text-white'>
          <Section title="Work Experience" text={
            <div>
              <h1>Web/Business Development & Sales Intern</h1>
              <h2>Future Media Consulting</h2>
              <h3>May 2022 - August 2022</h3>

              <ul className='list-disc list-inside ml-5'>
                <li>
                  Assisted in user requirements gathering sessions with key business stakeholder; resulting in a roadmap for delivery 
                </li>
                <li>
                  Developed, tested and launched new business web application utilizing WordPress
                </li>
                <li>
                  Conducted local search engine optimization improvements 
                </li>
                <li>
                  Assisted in conducting inital customer sales inquires
                </li>
              </ul>
            </div>}
          />
        </div>
      
      <Section title="Skills" text={
        <div className='grid grid-cols-4 grid-rows-2 justify-items-center content-center items-center gap-5'>
          <Image
            className=''
            src="/html5.png"
            alt="html logo"
            width={180}
            height={180}
            priority 
          />
          <Image
            className=''
            src="/css3.png"
            alt="css logo"
            width={180}
            height={180}
            priority 
          />
          <Image
            className=''
            src="/javascript.png"
            alt="javascript logo"
            width={180}
            height={180}
            priority 
          />
          <Image
            className=''
            src="/Python.png"
            alt="python logo"
            width={180}
            height={180}
            priority 
          />
          <Image
            className=''
            src="/ms-office.png"
            alt="microsoft office logo"
            width={180}
            height={180}
            priority 
          />
          <Image
            className=''
            src="/quicksight.png"
            alt="amazon quicksight logo"
            width={180}
            height={180}
            priority 
          />
          <Image
            className=''
            src="/react.png"
            alt="react logo"
            width={180}
            height={180}
            priority 
          />
          <Image
            className=''
            src="/agile.png"
            alt="agile logo"
            width={180}
            height={180}
            priority 
          />
        </div>}
      />

    </main>
  )
}