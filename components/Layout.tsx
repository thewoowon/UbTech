import React from 'react';
import { MetaProps } from '../types/layout';
import Head from './Head';
import Navigation from './Navigation';
import Link from 'next/link';
import Image from 'next/image';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = 'https://ub-tech.vercel.app';

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />
      <header className="fixed top-0 z-50 w-full bg-white" style={{"borderBottom":"1px solid rgba(200,200,200,0.5)"}}>
        <div className="max-w-5xl px-8 mx-auto flex">
          <div className="w-6/12 flex" style={{alignItems:"center"}}>
            <Link href={"/"}>
              <a style={{fontSize:"24px",fontWeight:"bold",color:"#ff7f00",lineHeight:"28px",fontFamily:"Noto_Sans"}}>
                <span className="ubcare-blog-title">유비케어</span> 
                <span style={{fontSize:"18px",fontWeight:"bold",lineHeight:"18px",fontFamily:"Noto_Sans", color:"#3B3838"}}> 기술블로그</span>
              </a>
            </Link>
          </div>
          <div className="w-6/12 flex items-center justify-end">
            <Navigation />
          </div>
        </div>
      </header>
      <main style={{paddingTop:"60px"}}>
        <div className="relative">{children}</div>
      </main>
      <footer className="py-8 h-96" style={{borderTop:"1px solid rgba(230,230,230,0.5)",backgroundColor:"#f9fafb"}}>
        <div className="m-auto w-2/5 h-full">
          <div className="h-1/4 flex items-center justify-center">
          <Link href={"/"}>
            <a style={{fontSize:"28px",fontWeight:"bold",color:"#ff7f00",lineHeight:"28px",textAlign:"center",fontFamily:"Noto_Sans"}}>
                <span className="ubcare-blog-title">유비케어</span> 
                <span style={{fontSize:"20px",fontWeight:"bold",lineHeight:"18px",fontFamily:"Noto_Sans",color:"#3B3838"}}> 기술 블로그</span>
            </a>
          </Link>
          </div>
          <div className="h-2/4 flex items-center justify-center">
            <Link href={"https://www.gccare.net/"}>
              <a target="_blank">
              <Image src={"/assets/gc_care.png"} width={100} height={50}></Image>
              </a>
            </Link>
            <Link href={"https://bbros.co.kr/"}>
              <a target="_blank">
              <Image src={"/assets/bbros.png"} width={200} height={100}></Image>
              </a>
            </Link>
            <Link href={"https://hectonproject.com/"}>
              <a target="_blank">
              <Image src={"/assets/hecton.png"} width={100} height={50}></Image>
              </a>
            </Link>
          </div>
          <div className="h-1/4 border-t-2 flex justify-center items-center">
            <p className="text-black text-center text-xs" style={{color:"rgba(200,200,200,1)",fontFamily:"Noto_Sans"}}>UBcare. ALL RIGHTS RESERVED. POWERED BY VERCEL</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
