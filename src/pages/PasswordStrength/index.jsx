import React from "react";

import { Button, Img, Input, Text } from "components";

const PasswordStrengthPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy items-center justify-start mx-auto p-[152px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col justify-start mb-2 w-[47%] md:w-full">
          <Img
            className="h-[35px] md:ml-[0] ml-[182px] w-[31%]"
            src="images/img_group_1.svg"
            alt="Group"
          />
          <Text
            className="md:ml-[0] ml-[90px] mt-[59px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
            size="txtGilroySemiBold32"
          >
            Password Verificatin
          </Text>
          <div className="flex flex-col items-start justify-end mt-[42px] pt-[5px] w-full">
            <div className="flex flex-col gap-1.5 items-start justify-start rounded-lg w-full">
              <Text
                className="text-blue_gray-900 text-lg"
                size="txtGilroyMedium18Bluegray900"
              >
                Email
              </Text>
              <Input
                name="Group10198"
                placeholder="Enter Your Email"
                className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                wrapClassName="border border-blue_gray-100 border-solid rounded-lg w-full"
                type="email"
                shape="round"
              ></Input>
            </div>
            <div className="flex flex-col gap-1.5 items-start justify-start mt-[29px] w-full">
              <Text
                className="text-blue_gray-900 text-lg"
                size="txtGilroyMedium18Bluegray900"
              >
                Password
              </Text>
              <Input
                name="Group10198 One"
                placeholder="Enter Password"
                className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                wrapClassName="border border-blue_gray-100 border-solid flex rounded-lg w-full"
                type="password"
                suffix={
                  <Img
                    className="h-5 ml-[35px] mr-3 my-4"
                    src="images/img_eye_1.svg"
                    alt="eye"
                  />
                }
                shape="round"
              ></Input>
            </div>
            <div className="flex flex-col items-start justify-start mt-6 w-full">
              <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                <Text
                  className="mt-[5px] text-base text-blue_gray-900"
                  size="txtGilroyMedium16Bluegray900"
                >
                  Password Strength:
                </Text>
                <div className="flex flex-row items-end justify-evenly">
                  <Img
                    className="h-6 w-6"
                    src="images/img_file_1.svg"
                    alt="file"
                  />
                  <Text
                    className="mt-1.5 text-amber-700 text-sm"
                    size="txtGilroyMedium14Amber700"
                  >
                    Average
                  </Text>
                </div>
              </div>
              <div className="h-1 mt-1 overflow-hidden relative w-full">
                <div className="w-full h-full absolute bg-gray_200"></div>
                <div
                  className="h-full absolute bg-amber_700"
                  style={{ width: "43%" }}
                ></div>
              </div>
              <Text
                className="mt-[9px] text-blue_gray-400 text-sm"
                size="txtGilroyRegular14Bluegray400"
              >
                Your password is not hard to guess.
              </Text>
            </div>
            <div className="flex flex-col gap-3.5 items-start justify-start mt-6 w-[68%] md:w-full">
              <div className="flex flex-row gap-2 items-start justify-start w-[96%] md:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_checkmark_24X24.svg"
                  alt="checkmark"
                />
                <Text
                  className="mt-[3px] text-base text-blue_gray-400"
                  size="txtGilroyMedium16Bluegray400"
                >
                  Password must contain a lower case letter
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-start justify-start w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_checkmark_24X24.svg"
                  alt="checkmark One"
                />
                <Text
                  className="mt-1 text-base text-blue_gray-400"
                  size="txtGilroyMedium16Bluegray400"
                >
                  Password must contain an upper case letter
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-start justify-start w-[98%] md:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_checkmark_24X24.svg"
                  alt="checkmark Two"
                />
                <Text
                  className="mt-1 text-base text-blue_gray-400"
                  size="txtGilroyMedium16Bluegray400"
                >
                  Password must contain a special character
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-start justify-start w-[78%] md:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_checkmark_24X24.svg"
                  alt="checkmark Three"
                />
                <Text
                  className="mt-[3px] text-base text-blue_gray-400"
                  size="txtGilroyMedium16Bluegray400"
                >
                  Password must contain a number
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-start justify-start w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_checkmark_24X24.svg"
                  alt="checkmark Four"
                />
                <Text
                  className="mt-[3px] text-base text-blue_gray-400"
                  size="txtGilroyMedium16Bluegray400"
                >
                  Password must contain at least 8 characters
                </Text>
              </div>
            </div>
            <Button
              className="cursor-pointer font-medium min-w-[528px] sm:min-w-full mt-6 text-base text-center"
              shape="round"
            >
              Reset Password
            </Button>
            <div className="flex flex-row font-poppins gap-2 items-start justify-center md:ml-[0] ml-[182px] mt-[25px] w-[31%] md:w-full">
              <Img
                className="h-6 w-6"
                src="images/img_arrowleft.svg"
                alt="arrowleft"
              />
              <Text
                className="mt-1 text-blue-A700 text-lg"
                size="txtPoppinsRegular18"
              >
                Back to Sign in
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordStrengthPage;
