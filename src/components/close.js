import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import isOpen from '../utils/isOpen';
import useInterval from '../utils/useInterval';

const Close = () => {
  const [currentlyOpen, setOpen] = useState(isOpen());

  useInterval(() => {
    setOpen(isOpen());
  }, 5000);

  return (currentlyOpen ? (<></>) : <Redirect to="/come-back-later" />);
};

export default Close;
