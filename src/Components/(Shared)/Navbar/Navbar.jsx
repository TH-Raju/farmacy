"use client"
import Image from "next/image"
import { Badge, Drawer, Input } from "antd"
import { IoIosSearch } from "react-icons/io"
import { RxHamburgerMenu } from "react-icons/rx"

import { useState } from "react"
import Link from "next/link"
import { AllImages } from "../../../assests/images/AllImages"

const Navbar = () => {

    // mobile header
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };


    return (
        <>
            <div className=" bg-[#fafafa] py-4 hidden md:block">
                <div className=" container mx-auto flex gap-4 items-center justify-between">
                    <Link href={`/`}>
                        <Image className="w-40 " src={AllImages.logo} height={0} width={0} alt="farmacy" />
                    </Link>
                    <div className=" flex items-center gap-6 lg:gap-20 xl:gap-64">
                        <div className=" w-[350px]">
                            <Input className=" h-12 w-[400px]" placeholder="Cerca qualsiasi cosa qui..." suffix={<IoIosSearch className=" text-[#84C9BB] w-6 h-6" />} />
                        </div>
                    </div>

                    {/* <div className=" flex items-center gap-6 lg:gap-14">
                        <Badge size="small" color="#e18787" count={5}>
                            <Image className=" w-6" src={AllImages.message} height={0} width={0} alt="farmacy" />
                        </Badge>
                        <Badge size="small" color="red" count={5}>
                            <Image className=" w-6" src={AllImages.notification} height={0} width={0} alt="farmacy" />
                        </Badge>
                        <Badge size="small" color="#84C9BB" count={5}>
                            <Image className=" w-6" src={AllImages.cart} height={0} width={0} alt="farmacy" />
                        </Badge>



                        <div className=" flex gap-2">
                            <Image className=" w-7" src={AllImages.userLogin} height={0} width={0} alt="farmacy" />
                            <button>Login/Registrati</button>
                        </div>

                    </div> */}
                </div>
            </div>
            {/* {/ mobile header /} */}
            <div className=" bg-[#fafafa] py-4 block md:hidden h-16 px-3 ">
                <div className=" h-full flex items-center justify-between gap-5">
                    <Image className="w-24" src={AllImages.logo} height={0} width={0} alt="farmacy" />
                    <div className=" flex items-center gap-6 lg:gap-20 xl:gap-64">
                        <div className="">
                            <Input className=" h-12 w-[400px]" placeholder="Cerca qualsiasi cosa qui..." suffix={<IoIosSearch className=" text-[#84C9BB] w-6 h-6" />} />
                        </div>
                    </div>
                    {/* <RxHamburgerMenu onClick={showDrawer} className="  w-6 h-6" /> */}
                </div>
                {/* <Drawer title={<Image className=" w-24" src={AllImages.logo} height={0} width={0} alt="farmacy" />} onClose={onClose} open={open}>
                    <div className=" flex items-center gap-6 lg:gap-20 xl:gap-64">
                        <div className=" w-[350px]">
                            <Input className=" h-12 w-[400px]" placeholder="Cerca qualsiasi cosa qui..." suffix={<IoIosSearch className=" text-[#84C9BB] w-6 h-6" />} />
                        </div>
                    </div>
                    <div className=" space-y-6">
                        <div className=" flex gap-2">
                            <Image className=" w-6" src={AllImages.cart} height={0} width={0} alt="farmacy" />
                            <button>Message</button>
                        </div>
                        <div className=" flex gap-2">
                            <Image className=" w-6" src={AllImages.message} height={0} width={0} alt="farmacy" />
                            <button>notification</button>
                        </div>
                        <div className=" flex gap-2">
                            <Image className=" w-6" src={AllImages.notification} height={0} width={0} alt="farmacy" />
                            <button>Cart</button>
                        </div>
                        <div className=" flex gap-2">
                            <Image className=" w-7 -ml-[2px]" src={AllImages.userLogin} height={0} width={0} alt="farmacy" />
                            <button>Login/Registrati</button>
                        </div>
                    </div>
                </Drawer> */}

            </div>

        </>
    );
};

export default Navbar;