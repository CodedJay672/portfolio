import styled from "styled-components";

export const Nav = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items- center;
  gap: 150px;
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
  font-weight: bold;
  display: flex;
  align-items: center;
  font-wrap: wrap;
  align-text: center;
`;

export const NavMenu = styled.section`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
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
`;
