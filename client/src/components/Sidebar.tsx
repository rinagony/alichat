import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
   display: flex;
   height: 100%;
`
const SidebarWrapper = styled.div`
    width: 20%;
    padding: 1rem 0;
    height: 84vh;
`
const Content = styled.div`
    width: 80%;
`
const MenuItem = styled.p`
    font-weight: 600;
    cursor: pointer;
    padding-bottom: 0.2rem;
    margin-top: 2rem;
    font-size: 1.3rem;
`

interface SidebarProps {
    children: React.ReactNode;
}

interface menuItemInteraface {
    title: string,
    link: string
}

function Sidebar({ children }: SidebarProps) {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.pathname, 'location')
    const menuItems: menuItemInteraface[] = [
        {
            title: 'My profile',
            link: '/my-profile',
        },
        {
            title: 'My chats',
            link: '/my-chats',
        },
        {
            title: 'My contacts',
            link: '/my-contacts',
        },
        {
            title: 'Find people',
            link: '/find-people',
        },
        {
            title: 'Settings',
            link: '/settings',
        }
    ]

    return (
        <Wrapper>
            <SidebarWrapper>
                {menuItems.map((item, index) =>
                    <MenuItem style={item.link === location.pathname ? { color: 'var(--color-additional-two)' } : { color: 'var(--color-primary' }} key={index} onClick={() => navigate(item.link)}>{item.title}</MenuItem>
                )}
            </SidebarWrapper>
            <Content>
                {children}
            </Content>
        </Wrapper>
    );
}

export default Sidebar;
