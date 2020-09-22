import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import SimpleBody from '../components/MainBody/SimpleBody';
import PatternBody from '../components/MainBody/PatternBody';
import Form from '../components/Form/Form';
import Footer from '../components/Footer/Footer';

function contact(props) {
  const [hasError, setHasError] = useState(false);
  const [res, setRes] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const sendReqHandler = (formData) => {
    setRes();
    setHasError(false);
    setIsLoading(true);
    fetch('https://samanblog.herokuapp.com/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.status === 200) {
          setRes('Thnaks');
          setIsLoading(false);
        } else {
          setRes('Sending Fail, Please try again');
          setHasError(true);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        setRes('Sending Fail, Please try again');
        setHasError(true);
        setIsLoading(false);
        console.log(err);
      });
  };

  let resBox = null;
  if (hasError) {
    resBox = (
      <div className="mx-auto max-w-lg mt-8 text-lg font-semibold bg-red-400 w-full text-white rounded-lg px-6 py-3 block shadow-xl text-center ">
        {res}
      </div>
    );
  }

  if (!hasError && res) {
    resBox = (
      <div className="mx-auto max-w-lg mt-8 text-lg font-semibold bg-green-400 w-full text-white rounded-lg px-6 py-3 block shadow-xl text-center">
        {res}
      </div>
    );
  }

  return (
    <React.Fragment>
      <Layout>
        <SimpleBody>
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            Contact Me
          </h2>
          {resBox}
          <Form
            sendReq={(formData) => sendReqHandler(formData)}
            loading={isLoading}
          />
        </SimpleBody>
        <Footer />
      </Layout>
    </React.Fragment>
  );
}

export default contact;
