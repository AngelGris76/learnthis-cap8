import style from './Button.module.css';

const Button = ({ active, setActive }) => {
  const buttonLabel = active ? 'Desactivar' : 'Activar';

  return (
    <button
      type='button'
      className={style.button}
      onClick={() => {
        setActive(!active);
      }}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
