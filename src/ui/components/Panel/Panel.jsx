import React from 'react';
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from 'react-icons/ai';

import './Panel.css';

const Panel = React.forwardRef(
  ({ children, heading, onToggle, isShown, className = '' }, ref) => {
    const Arrow = isShown ? AiOutlineDoubleRight : AiOutlineDoubleLeft;

    const toggleClass = isShown ? 'open' : 'closed';

    return (
      <div ref={ref} className={`panel panel-${toggleClass} ${className}`}>
        <button type="button" className="panel-toggle" onClick={onToggle}>
          <Arrow />
        </button>
        <div>
          <div className="panel-header">
            <h2>{heading}</h2>
          </div>
          <div className="panel-content">{children}</div>
        </div>
      </div>
    );
  }
);

export default Panel;
