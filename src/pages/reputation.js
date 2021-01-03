import React from 'react';
import { useRouter } from 'next/router';

const routes = [
  {
    label: 'Good',
    href: '/reputation/good/',
  },
  {
    label: 'Bad',
    href: '/reputation/bad',
  },
  {
    label: 'Action Sports',
    href: '/reputation/action-sports',
  },
];

const Index = () => {
  // const history = useHistory();
  const router = useRouter();

  const handleClick = (value) => {
    router.push(value?.href || '/');
  };

  return (
    <>
      <h1 className="title">Which Reputation?</h1>
      <div className="field has-addons">
        <div className="control">
          <div className="select is-medium is-expanded is-link">
            <select
              name="context"
              onChange={(e) =>
                handleClick(
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
      </div>
    </>
  );
};

export default Index;
