import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null, 
            errorInfo: null 
        };
      }

    componentDidCatch(error, errorInfo) {
        this.setState({
          error: error,
          errorInfo: errorInfo
        })
        // You can also log error messages to an error reporting service here
      }
  
    render() {
        if (this.state.errorInfo) {
            return (
                <div className='container app-container'>
                    <div className='body'>
                        <h2>Oops! Something went wrong.</h2>
                        <details className='p-4' style={{ whiteSpace: 'pre-wrap' }}>
                            {this.state.error && this.state.error.toString()}
                            <br />
                            {this.state.errorInfo.componentStack}
                        </details>
                        <button className='btn btn-secondary col-2' onClick={() => this.setState({ error: null, errorInfo: null })}>Reset</button>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
};

export default ErrorBoundary;
  