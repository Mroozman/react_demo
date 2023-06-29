import styles from './BoxButton.module.css';
import { useState } from 'react';
import CSS from 'csstype';
import { Link } from 'react-router-dom';

type Props = {
  textForButton: string;
  pictureForButton: string;
  pathForButton: string;
};

const BoxButton = ({
  pictureForButton,
  textForButton,
  pathForButton,
}: Props) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const boxButton: CSS.Properties = {
    display: 'flex',
    width: window.innerWidth > 500 ? '350px' : '250px',
    height: window.innerWidth > 500 ? '200px' : '150px',
    margin: window.innerWidth > 500 ? '10px 40px' : '10px 0px',
    borderRadius: '25px',
    borderStyle: isHover ? 'solid' : 'solid',
    borderColor: isHover ? '#9fd3c7' : 'transparent',
    backgroundColor: '#142d4c',
    backgroundImage: isHover ? `url(${pictureForButton})` : 'none',
    backgroundSize: '350px 200px',
    color: '#ececec',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    textDecoration: 'none',
  };

  return (
    <Link
      to={pathForButton}
      style={boxButton}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-testid="boxButton"
    >
      <span className={styles.boxButtonText}>{textForButton}</span>
    </Link>
  );
};
export default BoxButton;
