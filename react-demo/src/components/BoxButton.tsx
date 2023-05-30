import styles from './BoxButton.module.css';
import { useState } from 'react';
import CSS from 'csstype';

type Props = {
  textForButton: string;
  pictureForButton?: string;
};

const BoxButton = ({ pictureForButton, textForButton }: Props) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const boxButton: CSS.Properties = {
    display: 'flex',
    width: '350px',
    height: '200px',
    margin: '10px 40px',
    borderRadius: '25px',
    borderStyle: isHover ? 'solid' : 'none',
    borderColor: '#9fd3c7',
    backgroundColor: '#142d4c',
    backgroundImage: isHover ? `url(${pictureForButton})` : 'none',
    backgroundSize: '350px 200px',
    color: '#ececec',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  };

  return (
    <button
      style={boxButton}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className={styles.boxButtonText}>{textForButton}</span>
    </button>
  );
};
export default BoxButton;
