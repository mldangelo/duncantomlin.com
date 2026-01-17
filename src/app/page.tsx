'use client';

import { useRouter } from 'next/navigation';

const routes = [
  {
    label: 'I am an esteemed member of the admissions committee at Columbia GSAPP',
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
    href: '/reputation',
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

export default function Home() {
  const router = useRouter();

  const handleClick = (value: { label: string; href: string } | undefined) => {
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
