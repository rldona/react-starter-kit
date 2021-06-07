import './App.scss';

import Logo from '../../assets/images/rocket.gif';

export default function App(): JSX.Element {
  return (
    <div className="app">
      <img src={Logo} alt="loading..." width="500" />
      <h1>React Starter Kit</h1>
    </div>
  );
}
