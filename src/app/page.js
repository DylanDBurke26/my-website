"use client";
import Image from 'next/image'
import {useState} from "react";
import React from 'react';

function Section(props) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className=" m-10 p-10">
      <h2 className="text-[1.5rem] col-span-2">{props.title}
        <button
          className="cursor-pointer text-[#fff] p-5 border-none"
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
    <main className="flex flex-col max-h-screen">
      <Image
        className='rounded-full place-self-center'
        src="/team-photo-noBg.png"
        alt="My Face"
        width={180}
        height={180}
        priority 
      />
      <div className='text-center text-3xl'>Dylan Burke</div>
        
        <Section title="About Me" text={
          <div>
            Hello, I'm Dylan, a passionate computer science graduate from Michigan State University. Throughout my academic journey, I've developed a strong 
            foundation in computer science, cultivating my skills in software development, algorithms, and problem-solving. I thrive on tackling complex challenges 
            and turning them into innovative solutions.Collaboration is at the heart of my work ethic. I've had the privilege of collaborating with diverse teams, 
            which has not only broadened my perspective but also enhanced my ability to communicate and adapt in dynamic environments.
            As an eager learner, I'm committed to staying updated with the latest trends and technologies in the ever-evolving field of computer science. I believe 
            that continuous learning is the key to staying at the forefront of innovation.
          </div>}
        />
        
        <Section title="Course Work" text={
          <div className='w-1/2'>
            <ul className='ml-10'>

              <li>Collaborative Design (Capstone)</li>
              <ul className='pl-5 list-disc list-inside'>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
              </ul>
              
              <li>Advanced Web Development and Database Management</li>
              <ul className='pl-5 list-disc list-inside'>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
              </ul>

              <li>Web Application Architecture and Development</li>
              <ul className='pl-5 list-disc list-inside'>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
              </ul>

              <li>Web Design and Development</li>
              <ul className='pl-5 list-disc list-inside'>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
              </ul>

              <li>Introduction to Machine Learning</li>
              <ul className='pl-5 list-disc list-inside'>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
              </ul>

              <li>Database Systems</li>
              <ul className='pl-5 list-disc list-inside'>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
              </ul>

            </ul>
          </div>}
        />

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
      
      <Section title="Skills" text={
        <div>

        </div>}
      />

    </main>
  )
}