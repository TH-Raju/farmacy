

"use client";

import { Avatar, ConfigProvider, Upload } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import { AllImages } from "../../../../../assests/images/AllImages";

export default function BlankRecipeComponent() {
  const [prescription, setprescription] = useState(null);

  const handleprescriptionUpload = (e) => {
    setprescription(e.file.originFileObj);
  };

  return (
    <div className='container mx-auto'>
      <div className='my-8 py-10 md:py-40 mx-2 border border-dashed border-primaryColor'>
        <div className="flex flex-col items-center text-center mb-10">
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
          <h1 className="text-4xl font-bold mt-6">Carica ricetta</h1>
          <p className="mt-3 text-xl text-neutral-400">
            Supportato solo JPEG, PNG, solo PDF
          </p>
        </div>
      </div>
      <div className='flex justify-end items-end mt-4 mb-10 mx-2'>
        <Link href="review-recipe">
          <button className='px-14 py-3 bg-primaryColor text-white rounded'>
            Procedi
          </button>
        </Link>
      </div>
    </div>
  );
}
