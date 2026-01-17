'use client';

import { useRouter } from 'next/navigation';

const routes = [
  {
    label: 'Good',
    href: '/reputation/good',
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

export default function Reputation() {
  const router = useRouter();

  const handleClick = (value: { label: string; href: string } | undefined) => {
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
              defaultValue=""
              onChange={(e) =>
                handleClick(routes.find(({ label }) => label === e.target.value))
              }
            >
              <option value="" disabled>
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
}
