import ThemeBtn from "../minorComponents/ThemeBtn";
import tw from "twin.macro";
import styled from "styled-components";

const StyledActionBar = styled.aside`
  & {
    ${tw`fixed bottom-24 right-10 flex flex-col gap-y-5 justify-center items-center z-50 `}
  }
`;

const ActionBar = (props) => {
  return (
    <StyledActionBar>
      <ThemeBtn />
    </StyledActionBar>
  );
};
export default ActionBar;
