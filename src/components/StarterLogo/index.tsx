export const StarterLogo = (): JSX.Element => {
  return (
    <>
      <img
        src={require('../../assets/images/rocket.gif')}
        alt="loading..."
        width="500"
        data-testid="starter-logo"
      />
    </>
  );
};
