import React from 'react';
import Router from 'next/router';

import Layout from '../components/Layout/Layout';
import SimpleBody from '../components/MainBody/SimpleBody';
import PatternBody from '../components/MainBody/PatternBody';
import CharacterIcon from '../svg/character.svg';
import ItemsBar from '../components/ItemsBar/ItemsBar';
import Skills from '../components/Skills/Skills';
import Footer from '../components/Footer/Footer';
import AnimatedTyping from '../components/AnimatedTyping/AnimatedTyping';
import Button from '../components/UI/Button/Button';

function index() {
  return (
    <React.Fragment>
      <Layout>
        <SimpleBody fullScreen>
          <div className="max-w-2xl px-6 text-center mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800">
              Hey!{' '}
              <span className="bg-indigo-600 text-white rounded px-1">
                it's Saman
              </span>{' '}
              . I'm glad to meet you.
            </h2>
            <AnimatedTyping />

            <div className="flex items-end justify-center mt-16 mb-12 fill-current">
              <div className="h-56 w-56 fill-current">
                <CharacterIcon />
              </div>
            </div>
            <Button Success click={() => Router.push('/contact')}>
              Contact Me
            </Button>
          </div>
        </SimpleBody>
        <PatternBody>
          <div className="max-w-5xl px-6 mx-auto text-center">
            <h2 className="text-2xl font-semibold text-white">About Me</h2>
            <p className=" text-gray-400 mt-4">
              As a person who loves to learn things by himself, I always try to
              fulfill myself with knowledge about things that I love. as a guy
              who will never give up until done the job completely.I have
              Ability to adapt quickly to new situations and tasks and Ability
              to assimilate new knowledge and technologies.
            </p>
          </div>
        </PatternBody>
        <SimpleBody>
          <ItemsBar />
        </SimpleBody>
        <PatternBody>
          <Skills />
        </PatternBody>
        <Footer />
      </Layout>
    </React.Fragment>
  );
}

export default index;
