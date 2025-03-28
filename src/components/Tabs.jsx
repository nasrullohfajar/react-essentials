function Tabs({ buttons, children, ButtonContainer= "menu" }) {
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>

      {children}
    </>
  );
}

export default Tabs;
