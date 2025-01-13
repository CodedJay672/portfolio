import styled from "styled-components";

export const Nav = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem 160px;
  background-color: rgb(255 255 255 / 60%);
  backdrop-filter: blur(50px);
  align-items- center;
  position: sticky;
  top: 0;
  z-index: 1000;


  @media screen and (max-width: 1040px) {
   padding: 1rem 80px;
  }
`;

export const Logo = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
`;

export const LogoTitle = styled.span`
  font-size: 1rem;
  margin-left: 6px;
  font-weight: 700;
  display: flex;
  flex: 1;
  align-items: start;
  font-wrap: wrap;
`;

export const MobileNavMenu = styled.section`
  display: none;
  height: 100vh;
  position: relative;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    background-color: #0f172a;
    height: 100vh;
    width: 100%;
    transition: 0.3s ease-in-out;
    z-index: 1000;
  }

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    background-color: #0f172a;
    height: 100vh;
    width: 100%;
    transition: 0.3s ease-in-out;
    z-index: 1000;
  }
`;

export const NavMenu = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 900px) {
    display: none;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #0f172a;
  font-size: 0.7rem;
  padding: 1em 2em;

  &:hover {
    color: ${({ theme }) => theme.colors.subtle};
    border-bottom: 1px solid green;
  }

  transition: 0.8s ease-in-out;

  @media screen and (max-width: 900px) {
    color: white;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 480px) {
    color: white;
    font-size: 1.5rem;
  }
`;

export const HamburgerMenu = styled.div`
  width: 30px;
  height: 30px;
  display: none;
  cursor: pointer;

  @media screen and (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CloseIcon = styled.div`
  width: 30px;
  height: 30px;
  display: none;
  cursor: pointer;

  @media screen and (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 30px;
    right: 30px;
  }

  @media screen and (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 30px;
    right: 30px;
  }
`;

export const CloseMenu = styled.section`
  display: none;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Resume = styled.a`
  width: 95px;
  height: 42px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 17px;
  font-size: 16px;
  line-height: 24px;

  &:hover {
    background-color: #0f172a;
    color: white;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
