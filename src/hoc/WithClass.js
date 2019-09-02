import React from 'react';

const withClass = (WrappedComponent, className) =>{
    debugger;
    return props =>(
        <div className={className}>
            <WrappedComponent/>
        </div>
    );
};
export default withClass;