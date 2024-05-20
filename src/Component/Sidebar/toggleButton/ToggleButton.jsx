function ToggleButton({ setOpen, open }) {
  const buttonClicked = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  return (
    <button className="sidebar__button" onClick={buttonClicked}>
      button
    </button>
  );
}

export default ToggleButton;
