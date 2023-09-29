import React from "react";
import HeaderComponent from "@components/HeaderComponent.tsx";
import { SocialIcon } from 'react-social-icons/component';
import 'react-social-icons/instagram';
import 'react-social-icons/linkedin';
import 'react-social-icons/whatsapp';
import 'react-social-icons/github';
import styled from '@emotion/styled';
import {colors} from "../utils/color-pallete.ts";
import {homeContent} from "../utils/home-content.ts";

// Define breakpoints
const breakpoints = {
    sm: '480px', // Small screens
    md: '768px', // Medium screens
    lg: '1024px', // Large screens
    xl: '1280px', // Extra-large screens
};

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  gap: 1rem;
`;

const RowContainer = styled.div`
    display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

interface cardPropsInterface {
    backgroundColor: string;
    glass: boolean;
    radius: string;
}

const Card = styled.div<cardPropsInterface>`
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  gap: 1.25rem;

  background-color: ${(props) => props.backgroundColor || 'transparent'};
  backdrop-filter: ${(props) => (props.glass ? 'blur(10px)' : 'none')};
  border-radius: ${(props) => props.radius || '0'};
`;

const RedHorizontalDivider = styled.div`
    background: ${colors.red};
  height: 3px;
  width: 100%;
`;

const RedVerticalDivider = styled.div`
    background: ${colors.red};
  width: 3px;
`;

interface cardTitleInterface {
    color: string;
}

const CardTitle = styled.h2<cardTitleInterface>`
  font-size: 1.875rem/* 30px */;
  line-height: 2.25rem/* 36px */;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: ${(props) => (props.color || "none")}};
`;

const CardBodyTitle = styled.h2<cardTitleInterface>`
  font-size: 1.50rem/* 30px */;
  line-height: 1.75rem/* 36px */;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: ${(props) => (props.color || "none")}};
`;

const CardBodyText = styled.h2<cardTitleInterface>`
  font-size: 1rem/* 30px */;
  line-height: 1rem/* 36px */;
  font-weight: 300;
  letter-spacing: 0.05em;
  color: ${(props) => (props.color || "none")}};
`;

const BackgroundImage = styled.img`
  --tw-blur: blur(0px);
  filter: var(--tw-blur);
`;


export default function HomePage() {
    const handleInstagramLink = () => {
        window.location.href = 'https://instagram.com/yayankufa';
    };

    const handleLinkedInLink = () => {
        window.location.href = 'https://linkedin.com/in/yeka-kufa';
    };

    const handleWhatsAppLink = () => {
        window.location.href = 'https://wa.me/+6285936188776';
    };

    const handleGithubLink = () => {
        window.location.href = 'https://github.com/kufayeka';
    };

    return (
        <>
            <ColumnContainer>
                <HeaderComponent></HeaderComponent>
                <div className="absolute w-full h-[100vh] -z-10">
                    <BackgroundImage className="fixed w-full h-full object-cover opacity-20" src="/img/9345037.jpg" />
                </div>

                <RowContainer className="my-20">
                    <div className="w-fit h-fit flex flex-col p-3">
                        <h1 className="font-bold text-2xl text-white">Hi👋🏽</h1>
                        <h1 className="font-thin text-4xl text-white mt-7">I'm</h1>
                        <h1 className="font-bold text-5xl text-white tracking-wider">Yeka Kufa</h1>
                        <RedHorizontalDivider></RedHorizontalDivider>
                        <div className="w-full">
                            <p className=" text-white">Electrical Engineer, Software Developer</p>
                        </div>
                    </div>
                    <div>
                        <img src="/img/unnamed.jpg" className="w-72 h-80 object-cover object-bottom border-2 border-white rounded-sm"></img>
                    </div>
                    <div className="absolute -z-10 top-[25%] left-[55%] bg-red-800 w-72 h-72 rounded-full flex flex-row items-center"/>
                </RowContainer>

                <RowContainer className="w-full bg-black/5 backdrop-blur-lg border-black border-2 p-3 m-3 justify-center">
                    <ColumnContainer className="basis-1/2">
                        <div className="w-full">
                            <CardTitle color={colors.white} className="flex justify-start">About me</CardTitle>
                        </div>
                        <CardBodyText color={colors.white}>{homeContent.aboutMeText}</CardBodyText>
                    </ColumnContainer>
                    <RedVerticalDivider className="h-[30vh]"></RedVerticalDivider>
                    <ColumnContainer className="basis-1/4">
                        <CardBodyTitle color={colors.white} className="flex justify-start mt-3">Connect with me</CardBodyTitle>
                        <RowContainer>
                            <button onClick={handleLinkedInLink}>
                                <SocialIcon network="linkedin"></SocialIcon>
                            </button>
                            <button onClick={handleWhatsAppLink}>
                                <SocialIcon network="whatsapp"></SocialIcon>
                            </button>
                            <button onClick={handleInstagramLink}>
                                <SocialIcon network="instagram"></SocialIcon>
                            </button>
                            <button onClick={handleGithubLink}>
                                <SocialIcon network="github"></SocialIcon>
                            </button>
                        </RowContainer>
                    </ColumnContainer>
                </RowContainer>

                <RowContainer className="w-full bg-black/5 backdrop-blur-lg border-black border-2 p-3 justify-center">
                    <ColumnContainer>
                        <CardTitle color={colors.white} className="flex">Skills</CardTitle>
                        <div className="grid grid-cols-3 gap-2">
                            <Card backgroundColor={colors.black} glass={true} radius={"5px"}>
                                <CardBodyTitle color={colors.white} className="rounded-sm border-b-2 border-red-800 w-full p-1">Electrical Engineer</CardBodyTitle>
                                <ColumnContainer>
                                    {homeContent.mySkills.electricalEngineer.map((item, index) => {
                                        return <CardBodyText color={colors.white}>{item}</CardBodyText>
                                    })}
                                </ColumnContainer>
                            </Card>
                            <Card backgroundColor={colors.black} glass={true} radius={"5px"}>
                                <CardBodyTitle color={colors.white} className="rounded-sm border-b-2 border-red-800 w-full p-1">Programming Languages</CardBodyTitle>
                                <ColumnContainer>
                                    {homeContent.mySkills.programmingLanguages.map((item, index) => {
                                        return <CardBodyText color={colors.white}>{item}</CardBodyText>
                                    })}
                                </ColumnContainer>
                            </Card>
                            <Card backgroundColor={colors.black} glass={true} radius={"5px"}>
                                <CardBodyTitle color={colors.white} className="rounded-sm border-b-2 border-red-800 w-full p-1">Backend Frameworks</CardBodyTitle>
                                <ColumnContainer>
                                    {homeContent.mySkills.backendFrameworks.map((item, index) => {
                                        return <CardBodyText color={colors.white}>{item}</CardBodyText>
                                    })}
                                </ColumnContainer>
                            </Card>
                            <Card backgroundColor={colors.black} glass={true} radius={"5px"}>
                                <CardBodyTitle color={colors.white} className="rounded-sm border-b-2 border-red-800 w-full p-1">Database & ORM</CardBodyTitle>
                                <ColumnContainer>
                                    {homeContent.mySkills.databases.map((item, index) => {
                                        return <CardBodyText color={colors.white}>{item}</CardBodyText>
                                    })}
                                </ColumnContainer>
                            </Card>
                            <Card backgroundColor={colors.black} glass={true} radius={"5px"}>
                                <CardBodyTitle color={colors.white} className="rounded-sm border-b-2 border-red-800 w-full p-1">Frontend Web Frameworks</CardBodyTitle>
                                <ColumnContainer>
                                    {homeContent.mySkills.frontendFramework.map((item, index) => {
                                        return <CardBodyText color={colors.white}>{item}</CardBodyText>
                                    })}
                                </ColumnContainer>
                            </Card>
                        </div>
                    </ColumnContainer>
                </RowContainer>
            </ColumnContainer>
        </>
    );
}
