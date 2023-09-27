import React from "react";
import styled from "@emotion/styled";
import {
    HeaderCenter,
    HeaderDesktop,
    HeaderLeft,
    HeaderLink,
    HeaderLinkIndicator, HeaderRight
} from "@components/HeaderComponentStyled.ts";


export default function HeaderComponent(){
    return(
        <>
        <HeaderDesktop>
            <HeaderLeft></HeaderLeft>
            <HeaderCenter>
                <HeaderLink>
                    <a>Home</a>
                    <HeaderLinkIndicator></HeaderLinkIndicator>
                </HeaderLink>
                <HeaderLink>
                    <a>Portfolio</a>
                    <HeaderLinkIndicator></HeaderLinkIndicator>
                </HeaderLink>
                <HeaderLink>
                    <a>Tentang</a>
                    <HeaderLinkIndicator></HeaderLinkIndicator>
                </HeaderLink>
            </HeaderCenter>
            <HeaderRight></HeaderRight>
        </HeaderDesktop>
        <div className="w-full h-1 bg-gradient-to-l from-transparent via-red-800 to-transparent"></div>
        </>
    )
}