import React from "react";

const Button = ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
);

const withSomethingBroken = (Component) => {
  // Forgot to pass props!
  return (props) => <Component />;
};

const withSomethingNormal = (Component) => {
  return (props) => <Component {...props} />;
};

const ButtonWithSomethingBroken = withSomethingBroken(Button);
const ButtonWithSomethingNormal = withSomethingNormal(Button);

const Buttons = () => {
  return (
    <div>
      <h3>Broken button - forgot to pass props in higher-order component</h3>
      <ButtonWithSomethingBroken onClick={() => alert('You clicked a broken button')}>
        Click Me
      </ButtonWithSomethingBroken>

      <h3>Fixed button</h3>
      <ButtonWithSomethingNormal onClick={() => alert('You clicked a fixed button')}>
        Click Me
      </ButtonWithSomethingNormal>
    </div>
  );
}

export default Buttons;
