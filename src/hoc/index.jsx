/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

const TextContent = ({ children, onClick }) => (
  <div>
    <span>Hey, look! There's some random text here.</span>
    {children}
  </div>
);

const withSocialMediaButtons = (Component) => {
  return (props) => (
    <div>
      <Component {...props} />
      <div className="mt-2">
        <a href="#" class="fa fa-twitter"></a>
        <a href="#" class="fa fa-google"></a>
        <a href="#" class="fa fa-instagram"></a>
      </div>
    </div>
    
  );
};

const withProgressBar = (Component) => {
  return (props) => (
    <div>
      <Component {...props} />
      <div className="progress mt-3">
        <div className="progress-bar progress-bar-striped progress-bar-animated" 
          role="progressbar" 
          aria-valuenow="75" 
          aria-valuemin="0" 
          aria-valuemax="100" 
          style={{ width: '75%'}} />
      </div>
    </div>
    
  );
};

const ComponentWithSocialMediaButtons = withSocialMediaButtons(TextContent);
const ComponentWithProgressBar = withProgressBar(TextContent);

const Buttons = () => {
  return (
    <div>
      <div className='body'>
        <h3>Use Case #1 - Social Media Buttons</h3>
        <ComponentWithSocialMediaButtons />
      </div>
      <div className='body'>
        <h3>Use Case #2 - Progress Bar</h3>
        <ComponentWithProgressBar />
      </div>    
    </div>
  );
}

export default Buttons;
