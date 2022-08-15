import { NavLink, useLocation } from 'react-router-dom';
import s from './AddInfoNav.module.css';

const setActiveLinkClass = ({ isActive }) =>
  isActive ? `${s.siteNav} ${s.activeSiteNav}` : s.siteNav;

const AddInfoNav = () => {
  const location = useLocation();

  return (
    <section className={s.section}>
      <h2 className={s.title}>Add info</h2>
      <ul>
        <li className={s.item}>
          <NavLink
            to="cast"
            state={location.state}
            className={setActiveLinkClass}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to="reviews"
            state={location.state}
            className={setActiveLinkClass}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default AddInfoNav;
