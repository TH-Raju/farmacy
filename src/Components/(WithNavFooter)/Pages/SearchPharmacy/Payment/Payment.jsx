'use client'

import { AllImages } from '@/assests/images/AllImages'
import { ConfigProvider, Form, Input, message } from 'antd'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

export default function Payment() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const router = useRouter();
    const handleback = () => {
        router.back()
    }

    return (
        <div className='container mx-auto mt-20'>
            <button onClick={handleback} className='mb-6 mx-2'>
                <FaArrowLeft />
                <p className='text-xl font-semibold text-textColor'>Prenota un servizio</p>
            </button>

            {/* form */}
            <div className="mx-2">

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
                    <div className='w-full md:w-[50%] pb-7 pt-5 px-7 bg-[#fafafa]'>
                        <p className='text-xl font-semibold text-textColor'>Inserisci i tuoi dati</p>
                        <p className='flex justify-start items-center gap-2 my-2'><Image src={AllImages.check} alt='check' height={0} width={0} className='object-cover' />Compila con i dati della tua ultima richiesta</p>
                    </div>
                    <div className='w-full flex flex-col md:flex-row justify-between items-start gap-4'>
                        <div className=' w-full md:w-[50%] bg-[#fafafa]  px-7 pb-56'>
                            <Form
                                name="contact"
                                initialValues={{ remember: false }}
                                //   style={{ maxWidth: 800 }}
                                onFinish={onFinish}
                                layout="vertical"
                                className=" py-10 mx-4 md:mx-0 px-6 md:px-10  "
                            >

                                <Form.Item
                                    name="name"
                                    label={<p className=" text-md">Name</p>}
                                    style={{}}
                                >
                                    <Input
                                        required
                                        style={{ padding: "6px" }}
                                        className=" text-md"
                                        placeholder="Your Name"
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="Surname"
                                    label={<p className=" text-md">Cognome</p>}
                                    style={{}}
                                >
                                    <Input
                                        required
                                        style={{ padding: "6px" }}
                                        className=" text-md"
                                        placeholder="Your Surname"
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="email"
                                    label={<p className=" text-md">Email</p>}
                                >
                                    <Input
                                        required
                                        style={{ padding: "6px" }}
                                        className=" text-md"
                                        type="email "
                                        placeholder="lamiaemail@gmail.com"
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    label={<p className=" text-md">Codice fiscale</p>}
                                >
                                    <Input
                                        required
                                        style={{ padding: "6px" }}
                                        className=" text-md"
                                        type="password "
                                        placeholder="********"
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="confirmPassword"
                                    label={<p className=" text-md">Cellulare</p>}
                                >
                                    <Input
                                        required
                                        style={{ padding: "6px" }}
                                        className=" text-md"
                                        type="confirmPassword "
                                        placeholder="********"
                                    />
                                </Form.Item>



                            </Form>
                        </div>
                        <div className='w-full md:w-[50%] '>
                            <Form
                                name="contact"
                                initialValues={{ remember: false }}
                                //   style={{ maxWidth: 800 }}
                                onFinish={onFinish}
                                layout="vertical"
                                className=" py-10 mx-4 md:mx-0 px-6 md:px-10  "
                            >

                                <Form.Item
                                    name="servizio"
                                    label={<p className=" text-md">Servizio</p>}
                                    style={{}}
                                >
                                    <Input
                                        required
                                        style={{ padding: "6px" }}
                                        className=" text-md"
                                        placeholder="Mario"
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="data"
                                    label={<p className=" text-md">Data</p>}
                                    style={{}}
                                >
                                    <Input
                                        required
                                        style={{ padding: "6px" }}
                                        className=" text-md"
                                        placeholder="Rossi"
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="orario"
                                    label={<p className=" text-md">Orario</p>}
                                >
                                    <Input
                                        required
                                        style={{ padding: "6px" }}
                                        className=" text-md"
                                        type="email "
                                        placeholder="lamiaemail@gmail.com"
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="stduio"
                                    label={<p className=" text-md">Studio medico </p>}
                                >
                                    <Input
                                        required
                                        style={{ padding: "6px" }}
                                        className=" text-md"
                                        type="stduio "
                                        placeholder="Mario"
                                    />
                                </Form.Item>




                            </Form>
                        </div>
                    </div>

                </ConfigProvider>


            </div>
            <div className='mx-2 flex justify-end items-end mt-4 mb-10'>
                <button onClick={() => {
                    message.success("Reservation Save")
                }} className='px-14 py-3 bg-primaryColor text-white rounded' >Salva</button>
            </div>


        </div>
    )
}
