import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Template from '../components/template';

const options = [
  {
    label: 'I am an esteemed member of the admissions committee at Columbia GSAPP',
    href: '/columbia-m-arch-application-materials',
  },
  {
    label: 'We\'re dear friends',
    href: '/posts',
  },
  {
    label: 'We will come to know each other as distribution partners',
    href: '/minetta-mizzenmast-and-west-12th-indies-nyc',
  },
  {
    label: 'As his reputation precedes him',
    href: '/professional-work',
  },
  {
    label: 'Romantic',
    href: '/maggie',
  },
  {
    label: 'I don\'t',
    href: '/about',
  },
];

const Index = () => {
  const history = useHistory();

  const [value, setSelected] = useState({ label: 'home', href: '/' }); // holds url

  const handleClick = () => {
    history.push(value?.href || '/');
  };

  return (
    <Template>
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              In what context do you know Duncan?
            </h1>
            <div className="field has-addons">
              <div className="control">
                <div className="select is-medium is-expanded">
                  <select name="context" onChange={(e) => setSelected(options.find(({ label }) => label === e.target.value))}>
                    {options.map(({ label }) => (<option key={label}>{label}</option>))}
                  </select>
                </div>
              </div>
              <div className="control">
                <button type="button" className="button is-link is-medium" onClick={() => handleClick()}>Go</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Template>
  );
};

export default Index;
