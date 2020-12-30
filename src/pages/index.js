import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Template from '../components/template';
import routes from '../data/routes';

const Index = () => {
  // const history = useHistory();
  const router = useRouter();

  const [value, setSelected] = useState(routes[0]);

  const handleClick = () => {
    router.push(value?.href || '/');
  };

  return (
    <Template>
      <h1 className="title">In what context do you know Duncan?</h1>
      <div className="field has-addons">
        <div className="control">
          <div className="select is-medium is-expanded">
            <select
              name="context"
              onChange={(e) =>
                setSelected(
                  routes.find(({ label }) => label === e.target.value)
                )
              }
            >
              {routes.map(({ label }) => (
                <option key={label}>{label}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="control">
          <button
            type="button"
            className="button is-link is-medium"
            onClick={() => handleClick()}
          >
            Go
          </button>
        </div>
      </div>
    </Template>
  );
};

export default Index;
