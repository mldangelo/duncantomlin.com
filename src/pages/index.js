import React, { useState } from 'react';
import { useRouter } from 'next/router';

const routes = [
  {
    label:
      'I am an esteemed member of the admissions committee at Columbia GSAPP',
    href: '/columbia-m-arch-application-materials',
  },
  {
    label: "We're dear friends",
    href: '/posts',
  },
  {
    label: 'We will come to know each other as distribution partners',
    href: '/minetta-mizzenmast-and-west-12th-indies-nyc',
  },
  {
    label: 'As his reputation precedes him',
    href: '/which-reputation',
  },
  {
    label: 'Romantic',
    href: '/maggie',
  },
  {
    label: "I don't",
    href: '/about',
  },
];

const Index = () => {
  // const history = useHistory();
  const router = useRouter();

  const [value, setSelected] = useState({});

  const handleClick = () => {
    router.push(value?.href || '/');
  };

  return (
    <>
      <h1 className="title">In what context do you know Duncan?</h1>
      <div className="field has-addons">
        <div className="control">
          <div className="select is-medium is-expanded is-link">
            <select
              name="context"
              onChange={(e) =>
                setSelected(
                  routes.find(({ label }) => label === e.target.value)
                )
              }
            >
              <option value="" disabled selected>
                Select an option
              </option>
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
            disabled={!value?.href}
            onClick={() => handleClick()}
          >
            Go
          </button>
        </div>
      </div>
    </>
  );
};

export default Index;
