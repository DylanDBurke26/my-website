"use client";
import Image from 'next/image'
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom"
import React, { Component } from 'react';

class ArrowToggleButton extends Component {
  constructor() {
    super();
    this.state = {
      direction: '\u2227',
      textVisible: false,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      direction: prevState.direction === '\u2227' ? '\u2228' : '\u2227',
      textVisible: !prevState.textVisible,
    }));
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.direction}
      </button>
    );
  }
}


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-12">
      
      <div className='h-1/4 flex-col justify-center'>
        <Image
            className='rounded-full'
            src="/team-photo-noBg.png"
            alt="My Face"
            width={180}
            height={180}
            priority 
          />
          <div className='text-center text-3xl'>Dylan Burke</div>
      </div>


      <div className="flex flex-col text-left text-3xl space-y-5">

        <div> About Me <ArrowToggleButton elementId='about'/>
          <div id='about' style={{display:'none'}}>
            Test
          </div>
        </div>
        <div> Education <ArrowToggleButton/></div>
        <div> Work Experience <ArrowToggleButton/></div>
        <div> Leadership Experience <ArrowToggleButton/></div>
        <div> Skills <ArrowToggleButton/></div>

      </div>
      
    </main>
  )
}