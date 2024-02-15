import styled from 'styled-components';
import {NavLink as Link} from "react-router-dom";
import {CgBookmark, CgHome, CgProfile} from "react-icons/cg";
import {GiRoad} from "react-icons/gi";
import {BiPaperclip} from "react-icons/bi";
import {GrCertificate} from "react-icons/gr";


export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    flex-direction: row;
    place-items: center;
    justify-content: center;
    text-decoration: none;
    height: 100%;
    transition: 300ms;
    cursor: pointer;
    &.active {
        color: lightskyblue;
    }
`;

export default function Navigation() {
    return (
        <>
            <div className="absolute right-10 top-0 bottom-0 m-auto w-min h-min">
                <ul className="flex flex-col gap-5 text-4xl">
                    <li>
                        <NavLink to="/">
                            <CgHome/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/About">
                            <CgProfile/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Career">
                            <GiRoad/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Certificates">
                            <GrCertificate/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Products">
                            <BiPaperclip/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="https://github.com/hacimertgokhan?tab=repositories">
                            <CgBookmark/>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
}