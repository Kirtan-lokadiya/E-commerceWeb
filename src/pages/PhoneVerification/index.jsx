import React from "react";

import { Button, Img, Text } from "components";

const PhoneVerificationPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy items-center justify-start mx-auto p-[297px] md:px-10 sm:px-5 w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start p-[50px] md:px-5 rounded-[12px] w-[65%] md:w-full">
          <div className="flex flex-col gap-[15px] items-center justify-start w-2/5 md:w-full">
            <Img
              className="h-[60px] w-[22%]"
              src="images/img_mobile.svg"
              alt="mobile"
            />
            <Text
              className="text-2xl md:text-[22px] text-blue-A700 sm:text-xl"
              size="txtGilroySemiBold24BlueA700"
            >
              OTP Verification
            </Text>
          </div>
          <Text
            className="mt-[37px] text-gray-700 text-lg"
            size="txtGilroyMedium18Gray700"
          >
            <span className="text-colors2 font-gilroy text-left font-medium">
              OTP Is Send to
            </span>
            <span className="text-colors7 font-gilroy text-left font-medium">
              {" "}
            </span>
            <span className="text-colors font-gilroy text-left font-bold">
              +91 01234567890
            </span>
          </Text>
          <Img
            className="h-[52px] mt-[29px] rounded-[3px] w-[73%]"
            src="images/img_group11201.svg"
            alt="Group11201"
          />
          <Button
            className="cursor-pointer font-medium min-w-[396px] sm:min-w-full mt-[50px] text-base text-center"
            shape="round"
            size="lg"
          >
            Verify OTP
          </Button>
          <Text
            className="mb-[5px] mt-7 text-base text-blue-A700"
            size="txtGilroyMedium16BlueA700"
          >
            <span className="text-colors2 font-gilroy text-left font-medium">
              Didn’t Recieved Code ?
            </span>
            <span className="text-colors font-gilroy text-left font-medium">
              {" "}
            </span>
            <span className="text-colors font-gilroy text-left font-bold">
              Resend{" "}
            </span>
          </Text>
        </div>
      </div>
    </>
  );
};

export default PhoneVerificationPage;
