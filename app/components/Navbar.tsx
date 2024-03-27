"use client";
import React from "react";


const Navbar = () =>{

    return(
        <>
            <div className="flex flex-wrap place-items-center">
                <section className="relative mx-auto">
                    <nav className="flex justify-between bg-black text-white w-screen">
                    <div className="px-5 xl:px-12 py-2 flex w-full items-center">
                        <a className="text-xl font-bold font-heading" href="#">
                            KAINA
                        </a>
                    </div>
                    </nav>
                </section>
            </div>
        </>
    );
};

export default Navbar;