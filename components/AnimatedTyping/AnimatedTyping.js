import React from 'react';
import Typing from 'react-typing-animation';

const AnimatedTypingComponent = () => (
  <Typing>
    <div className="text-xl text-gray-800 mt-4">
      <Typing.Speed ms={100} />
      PV = Block
      <Typing.Backspace count={11} />
      <Typing.Speed ms={50} />
      <span>This is my portfolio;</span>
      <Typing.Delay ms={1000} />
      <br />
      <span> Where you can see </span>
      <Typing.Delay ms={750} />
      <span>an introduction about me</span>
      <Typing.Speed ms={20} />
      <br />
      <span> and leave a message for me.</span>
      <Typing.Delay ms={750} />
      <br />
      <span>I wish you the bests.</span>
    </div>
  </Typing>
);

export default AnimatedTypingComponent;
