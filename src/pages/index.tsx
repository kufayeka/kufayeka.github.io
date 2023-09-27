import React from "react";
import HeaderComponent from "@components/HeaderComponent.tsx";

export default function HomePage(){
    return (
        <div className="flex relative flex-col">
            <HeaderComponent></HeaderComponent>
            <div className="absolute w-full h-[100vh] -z-10">
                <img className="fixed w-full h-full object-cover opacity-5" src="/img/9345037.jpg" />
            </div>

            <div className="flex flex-row p-3 items-center justify-center relative mt-10">
                <div className="w-fit h-fit flex flex-col p-3">
                    <h1 className="font-bold text-2xl text-white">Hi👋🏽</h1>
                    <h1 className="font-thin text-4xl text-white mt-3">I'm</h1>
                    <h1 className="font-bold text-5xl text-white tracking-wider">Yeka kufa</h1>
                    <div className="bg-red-800 h-1 mt-3"></div>
                    <div className="w-full">
                        <p className=" text-white">Electrical Engineer, Software Engineer</p>
                    </div>
                </div>
                <div>
                    <img src="/img/IMG-2913.jpg" className="w-80 h-80 object-contain border-2 border-white rounded-lg"></img>
                    <div className="absolute -z-10 top-[10%] ml-20 bg-red-800 w-72 h-72 rounded-full"></div>
                </div>
            </div>

            <div className="flex flex-col p-3 mt-20">
                <div className="bg-black w-full h-full flex flex-col p-3 ">
                    <div className="flex flex-row gap-3 p-3 items-center justify-center">
                        <h1 className="font-bold text-3xl text-white tracking-wide text-left">About Me</h1>

                        <div className="w-[20%] h-fit flex flex-col p-3">
                            <img src="/img/IMG-2157.jpg" className="rounded-lg object-cover border-2 border-white"></img>
                        </div>

                        <div className="w-[50%] h-fit flex flex-col p-7 text-white rounded-md">
                            <p className="font-thin">Saya lulusan baru dari UK Petra jurusan Teknik Elektro.
                                Saya memiliki kemampuan di bidang Electrical Engineer, Automation & Software Engineering (Backend, Web Development).

                            </p>

                            <div className="flex flex-row gap-5 mt-7 text-lg">
                                <div className="flex flex-col gap-2 tracking-wide">
                                    <p className="font-bold mr-3">Nama</p>
                                    <p className="font-bold mr-3">Nomor Telepon</p>
                                    <p className="font-bold mr-3">Email</p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <div className="font-bold mr-3">: <span className="font-normal">Sih Kawuryan Yulianes Kufa</span></div>
                                    <div className="font-bold mr-3">: <span className="font-normal">+6285936188776</span></div>
                                    <div className="font-bold mr-3">: <span className="font-normal">yayankufa18@gmail.com</span></div>
                                </div>

                            </div>
                            <p className="font-bold text-xl text-left mt-7">Interest</p>
                            <div className="flex flex-row gap-3 mt-3">
                                <p className="bg-gray-700 text-white rounded-full px-3">Musik</p>
                                <p className="bg-gray-700 text-white rounded-full px-3">Film / Series</p>
                                <p className="bg-gray-700 text-white rounded-full px-3">Travelling</p>
                                <p className="bg-gray-700 text-white rounded-full px-3">Gardening</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col mt-3">
                    <div className="bg-black w-full h-full flex flex-col p-3">
                        <h1 className="font-bold text-3xl text-white tracking-wide">Skill</h1>
                        <div className="flex flex-row gap-3 p-3">
                            <div className="bg-white w-fit h-fit flex flex-col p-3">
                                foto profile
                            </div>
                            <div className="bg-white w-fit h-fit flex flex-col p-3">
                                biodata
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}