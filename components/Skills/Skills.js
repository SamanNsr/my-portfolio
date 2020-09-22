import React from 'react';
import Card from '../Crad/Card';

function Skills() {
  return (
    <React.Fragment>
      <h2 className="text-2xl font-semibold text-white text-center">Skills</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 md:ml-16 justify-center">
        <Card
          image={'./images/language.jpg'}
          title={'Languages'}
          desc={
            <div>
              <span>I am fluent in many languages of the world:</span>
              <br />
              <span>English</span>
              <br />
              <span>Arabic</span>
              <br />
              <span>Persian</span>
            </div>
          }
        />
        <Card
          image={'./images/developer.jpg'}
          title={'Development'}
          desc={
            <div>
              <span>FRONT-END: Reactjs HTML CSS Javascript</span>
              <br />
              <br />
              <span>BACK-END: Nodejs Expressjs RestAPI Graphql</span>
            </div>
          }
        />
        <Card
          image={'./images/manager.jpg'}
          title={'Industrial engineer'}
          desc={
            <div>
              <span>
                Education: K. N. Toosi University of Technology/2018 until now
              </span>
              <br />
              <br />
              <span>Project managment: MS project, Primavera P6</span>
            </div>
          }
        />
        <Card
          image={'./images/designer.jpg'}
          title={'Design'}
          desc={
            <div>
              <span>Adobe Photoshop</span>
              <br />
              <span>Adobe Illustrator</span>
              <br />
              <span>Adobe Premiere Pro</span>
              <br />
              <span>Adobe After Effects</span>
            </div>
          }
        />
        <Card
          image={'./images/blockchain.jpg'}
          title={'Blockchain'}
          desc={
            'The more I seek for new things about blockchain technologies, the more I am eager to dive into it.'
          }
        />
      </div>
    </React.Fragment>
  );
}

export default Skills;
