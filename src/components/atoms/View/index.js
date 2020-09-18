import { React, PropTypes } from "libraries";


const View = ({className, id, style, onClick, children, ...props}) => (
  <div 
    id={id} 
    className={className} 
    style={style} 
    onClick={onClick} 
    {...props}
  >
    {children}
  </div>
);

View.propTypes = {
  className: PropTypes.any,
  id: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.any
}

export default View;
