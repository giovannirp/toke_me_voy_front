import { Outlet } from 'react-router-dom'
import { Header } from "../../components/Header";
import { Nav } from '../../components/Nav';

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <Nav />
      <div>
        <Outlet />
      </div>
    </div>
  )
}