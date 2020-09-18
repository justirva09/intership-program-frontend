import { React, PropTypes } from "libraries";


const Section = ({
  className, 
  id, 
  style, 
  onClick, 
  children, 
  ...props
}) => (
  <section 
  id={id}
  className={className}
  style={style}
  onClick={onClick}
  {...props}>
    {children}
  </section>
);

Section.propTypes = {
  className: PropTypes.any,
  id: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.any
}

export default Section;