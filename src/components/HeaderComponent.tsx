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
        <HeaderDesktop className="w-full">
            <HeaderLeft></HeaderLeft>
            <HeaderCenter>
                <HeaderLink>
                    <a className="text-white">Home</a>
                    <HeaderLinkIndicator active={true}></HeaderLinkIndicator>
                </HeaderLink>
                <HeaderLink>
                    <a className="text-white">Portfolio</a>
                    <HeaderLinkIndicator></HeaderLinkIndicator>
                </HeaderLink>
                <HeaderLink>
                    <a className="text-white">Others</a>
                    <HeaderLinkIndicator></HeaderLinkIndicator>
                </HeaderLink>
            </HeaderCenter>
            <HeaderRight></HeaderRight>
        </HeaderDesktop>
        </>
    )
}