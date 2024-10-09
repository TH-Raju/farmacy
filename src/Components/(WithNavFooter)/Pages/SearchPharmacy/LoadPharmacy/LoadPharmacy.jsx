"use client";
import { AllImages } from "@/assests/images/AllImages";
import { Avatar, ConfigProvider, Form, Input, Upload } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaCamera } from "react-icons/fa";

export default function LoadPharmacy() {
    const [prescription, setprescription] = useState(null);

    const handleprescriptionUpload = (e) => {
        setprescription(e.file.originFileObj);
    };


    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div className='container mx-auto'>
            <div className='my-8 py-16 md:py-40 border border-dashed border-primaryColor mx-2'>
                <div className="flex flex-col items-center text-center md:mb-10 ">
                    <div className="relative">
                        <ConfigProvider
                            theme={{
                                components: {
                                    "Avatar": {
                                        "colorTextLightSolid": "rgb(132,201,187)",
                                        "colorTextPlaceholder": "rgb(214,243,237)"
                                    }
                                },
                            }}
                        >


                            <Avatar
                                size={140}
                                src={
                                    prescription
                                        ? URL.createObjectURL(prescription)
                                        : AllImages.defaultAvatar
                                }
                            // className="bg-[#d6f3ed]"
                            />
                            <Upload
                                showUploadList={false}
                                onChange={handleprescriptionUpload}
                                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                            >
                                <FaCamera className="h-10 w-10 text-[#84c9bb]" />
                            </Upload>
                        </ConfigProvider>
                    </div>
                    <h1 className="text-4xl font-bold mt-6">Scansiona</h1>

                </div>
            </div>

            {/*  Form*/}

            <ConfigProvider
                theme={{
                    components: {
                        Form: {
                            borderRadius: 0,
                        },
                        Input: {
                            borderRadius: 0,
                        },
                    },
                }}
            >

                <div className='w-full px-2'>
                    <Form
                        name="contact"
                        initialValues={{ remember: false }}
                        //   style={{ maxWidth: 800 }}
                        onFinish={onFinish}
                        layout="vertical"
                        className=" py-10 mx-4 md:mx-0 px-6 md:px-10  "
                    >

                        <div >
                            <Form.Item
                                name="nre"
                                label={<div className="flex justify-start items-center gap-3">
                                    <p className=" text-md">NRE</p>
                                    <Image src={AllImages.warning} alt="warning" height={0} width={0} className="object-cover" />
                                </div>}
                                className="w-full"
                            >
                                <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                                    <Input
                                        required
                                        style={{ padding: "6px" }}
                                        className=" text-md"
                                        placeholder="Es. 1500 A"
                                    />
                                    <Input
                                        required
                                        style={{ padding: "6px" }}
                                        className=" text-md"
                                        type="stduio "
                                        placeholder="123456789"
                                    />
                                </div>

                            </Form.Item>

                        </div>

                        <Form.Item
                            name="cf"
                            label={
                                <div className="flex justify-start items-center gap-3">
                                    <p className="text-md">C.F</p>
                                    <Image
                                        src={AllImages.warning}
                                        alt="warning"
                                        height={16}
                                        width={16}
                                        className="object-cover"
                                    />
                                </div>
                            }
                            className="w-[50%]"
                        >
                            <div className="relative w-full">

                                <Input
                                    required
                                    // style={{ paddingLeft: "60px" }} 
                                    className="text-md"
                                />

                                <div className="absolute px-2 top-1/2 transform -translate-y-1/2 flex   items-center justify-between text-neutral-500 ">
                                    <div>
                                        <p>RAMKJG56655544</p>
                                    </div>
                                    <div>
                                        <Image
                                            src={AllImages.x}
                                            alt="close"
                                            width={0}
                                            height={0}
                                            className="object-cover h-5 w-5"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Form.Item>
                    </Form>
                </div>


            </ConfigProvider>



            <div className='flex flex-col md:flex-row md:justify-between items-center gap-5 md:gap-0 mt-4 mb-10'>
                <button className='flex justify-start items-center gap-2 px-2 py-4 border border-[#a1a29b] rounded'>
                    <Image src={AllImages.plus} alt="warning" height={0} width={0} className="object-cover" />
                    Aggiungi ricetta
                </button>
                <Link href='/search-pharmacy/third-party-recipe'>
                    <button className='px-14 py-3 bg-primaryColor text-white rounded'>
                        Procedi
                    </button>
                </Link>
                {/* <Link href='/search-pharmacy/error-recipe'>
                    <button className='px-14 py-3 bg-primaryColor text-white rounded'>
                        Procedi
                    </button>
                </Link> */}
                {/* <Link href='/search-pharmacy/sucess-recipe'>
          <button className='px-14 py-3 bg-primaryColor text-white rounded'>
            Procedi
          </button>
        </Link> */}
            </div>
        </div>
    );
}