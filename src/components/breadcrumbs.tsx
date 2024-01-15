import { Link, useLocation } from 'react-router-dom';

const BreadCrumbs = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split('/').filter((x) => x);
  // console.log(pathnames);
  let breadcrumbPath = '';

  return (
    <>
      <span className="flex flex-row gap-2">
        <Link to="/" className="underline text-blue-500 underline-offset-4">
          Home
        </Link>

        {pathnames.map((name, index) => {
          breadcrumbPath += `/${name}`;
          const isLast = index === pathname.length - 1;
          return isLast ? (
            <span
              key={breadcrumbPath}
              className="underline text-blue-500 underline-offset-4"
            >
              / {name}
            </span>
          ) : (
            <span
              key={breadcrumbPath}
              className="underline text-blue-500 underline-offset-4"
            >
              / <Link to={breadcrumbPath}>{name}</Link>
            </span>
          );
        })}
      </span>
    </>
  );
};

export default BreadCrumbs;
