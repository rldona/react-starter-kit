import './App.scss';

export default function App(): JSX.Element {
  return (
    <div className="app">
      <img
        src={require('../../assets/images/rocket.gif')}
        alt="loading..."
        width="500"
      />
      <h1>React Starter Kit</h1>
    </div>
  );
}
