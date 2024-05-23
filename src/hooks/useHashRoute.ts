import { useNavigate, useLocation, To } from 'react-router-dom';

function removeHash(hashed: string = '') {
  const regex = /\#/;
  const route = hashed?.split('/')[0];
  const matchRegex = regex.test(hashed);
  if (matchRegex) {
    const routes = route.split('#');
    return routes.slice(0, -1).join('#');
  }

  return hashed;
}

/**
 * This function enables you to route to any part of the app especially with hash routing techniques.
 * It uses `useNavigation` and `useLocation` hooks to achieve this.
 *
 * Example:
 * const {hash, changeHash}= useHashRoute()
 *
 * You can simply use this hook without having to worry about anything.
 * So, in your application, simple handle the routing however way you want to.
 * @returns {Hash, changeHash}
 */
export function useHashRoute() {
  const navigate = useNavigate();
  const location = useLocation();
  const hash = location?.hash || '';

  function changeHash(to: To) {
    const currentPath = removeHash(location?.pathname) || '';
    const queryParams = location?.search || '';
    let route = currentPath;
    //   if not already visited
    if (hash !== to) {
      route = route.concat(`#${to}`).concat(queryParams);
      navigate(to);
      return;
    }
  }

  return {
    hash,
    changeHash
  };
}
