import React from 'react';
import Template from '../components/template';

const Index = () => (
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
                <select name="context">
                  <option>I don&apos;t</option>
                  <option>We&apos;re dear friends</option>
                  <option>
                    I am an esteemed member of the admissions office at Columbia GSAPP{' '}
                  </option>
                  <option>We will come to know each other as distribution partners</option>
                  <option>As his reputation precedes him</option>
                  <option>romantic</option>
                </select>
              </div>
            </div>
            <div className="control">
              <button type="button" className="button is-link is-medium">Go</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Template>
);

export default Index;
