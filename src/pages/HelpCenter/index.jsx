import React from "react";

import { Button, Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

const HelpCenterPage = () => {
  const [group10270value, setGroup10270value] = React.useState("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-20 items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                className="h-[35px]"
                src="images/img_group10392_11.svg"
                alt="Group10392"
              />
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex md:flex-1 sm:flex-col flex-row gap-6 sm:hidden items-start justify-center md:ml-[0] ml-[285px] w-[30%] md:w-full">
              <div className="flex flex-row gap-[11px] items-start justify-between w-[27%] sm:w-full">
                <Text
                  className="mt-[3px] text-base text-gray-900"
                  size="txtGilroyMedium16"
                >
                  Products
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown_gray_900.svg"
                  alt="arrowdown"
                />
              </div>
              <div className="flex flex-row gap-[9px] items-start justify-center w-[28%] sm:w-full">
                <Text
                  className="mt-[3px] text-base text-gray-900"
                  size="txtGilroyMedium16"
                >
                  Resouces
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown_gray_900.svg"
                  alt="arrowdown One"
                />
              </div>
              <Text
                className="sm:mt-0 mt-1 text-base text-gray-900"
                size="txtGilroyMedium16"
              >
                Request a demo
              </Text>
            </div>
            <div className="flex md:flex-1 flex-row gap-6 sm:hidden items-center justify-between md:ml-[0] ml-[225px] rounded-md w-[18%] md:w-full">
              <a href="javascript:" className="text-base text-gray-900">
                <Text size="txtGilroyMedium16">Sign in</Text>
              </a>
              <Button
                className="cursor-pointer font-medium min-w-[148px] text-base text-center"
                shape="round"
                size="lg"
              >
                Sign up for free
              </Button>
            </div>
          </div>
        </header>
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start max-w-[940px] mb-[234px] mx-auto pt-[13px] md:px-5 w-full">
          <div className="flex flex-col gap-4 items-center justify-start w-[63%] md:w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-black-900"
              size="txtGilroySemiBold36"
            >
              Hello, how can we help?
            </Text>
            <div className="flex sm:flex-col flex-row gap-2 items-center justify-between w-full">
              <Input
                name="Group10270"
                placeholder="Search"
                value={group10270value}
                onChange={(e) => setGroup10270value(e)}
                className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                wrapClassName="border border-blue_gray-300 border-solid flex sm:flex-1 rounded-lg sm:w-full"
                suffix={
                  group10270value?.length > 0 ? (
                    <CloseSVG
                      className="mt-4 mb-[15px] cursor-pointer h-5 ml-[35px] mr-4"
                      onClick={() => setGroup10270value("")}
                      fillColor="#bac1ce"
                      height={20}
                      width={20}
                      viewBox="0 0 20 20"
                    />
                  ) : (
                    <Img
                      className="mt-4 mb-[15px] cursor-pointer h-5 ml-[35px] mr-4"
                      src="images/img_search_bluegray_900.svg"
                      alt="search"
                    />
                  )
                }
                shape="round"
              ></Input>
              <Button
                className="cursor-pointer font-medium min-w-[88px] sm:mt-0 mt-0.5 text-base text-center"
                shape="round"
              >
                Search
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-14 items-start justify-between w-full">
              <div className="flex flex-col gap-4 items-start justify-start md:mt-0 mt-1.5">
                <Text
                  className="text-blue_gray-900 text-xl"
                  size="txtGilroySemiBold20"
                >
                  What Is This App & How It Works?
                </Text>
                <Text
                  className="leading-[26.00px] text-base text-blue_gray-400 w-full"
                  size="txtGilroyRegular16"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi
                  augue at fringilla posuere ac, et diam. Augue pulvinar eget
                  purus, iaculis porta adipiscing pulvinar mi ante. Suspendisse
                  ullamcorper etiam natoque et blandit. Adipiscing lacus, vitae
                  morbi sed. Amet, enim vel nec ipsum ac sed. Nulla fermentum
                  turpis penatibus placerat.
                </Text>
              </div>
              <Img
                className="h-8 w-8"
                src="images/img_menu_32X32.svg"
                alt="menu"
              />
            </div>
            <Line className="bg-blue_gray-100 h-px mt-5 w-full" />
            <div className="flex flex-row sm:gap-10 items-end justify-between mt-[25px] w-full">
              <Text
                className="mt-1.5 text-blue_gray-900 text-xl"
                size="txtGilroySemiBold20"
              >
                What Is This App & How It Works?
              </Text>
              <Img
                className="h-8 w-8"
                src="images/img_plus_32X32.svg"
                alt="plus"
              />
            </div>
            <Line className="bg-blue_gray-100 h-px mt-5 w-full" />
            <div className="flex flex-row sm:gap-10 items-end justify-between mt-[25px] w-full">
              <Text
                className="mt-1.5 text-blue_gray-900 text-xl"
                size="txtGilroySemiBold20"
              >
                What Is This App & How It Works?
              </Text>
              <Img
                className="h-8 w-8"
                src="images/img_plus_32X32.svg"
                alt="plus One"
              />
            </div>
            <Line className="bg-blue_gray-100 h-px mt-5 w-full" />
            <div className="flex flex-row sm:gap-10 items-end justify-between mt-[25px] w-full">
              <Text
                className="mt-1.5 text-blue_gray-900 text-xl"
                size="txtGilroySemiBold20"
              >
                What Is This App & How It Works?
              </Text>
              <Img
                className="h-8 w-8"
                src="images/img_plus_32X32.svg"
                alt="plus Two"
              />
            </div>
            <Line className="bg-blue_gray-100 h-px mt-5 w-full" />
            <div className="flex flex-row sm:gap-10 items-end justify-between mt-[25px] w-full">
              <Text
                className="mt-1.5 text-blue_gray-900 text-xl"
                size="txtGilroySemiBold20"
              >
                What Is This App & How It Works?
              </Text>
              <Img
                className="h-8 w-8"
                src="images/img_plus_32X32.svg"
                alt="plus Three"
              />
            </div>
            <Line className="bg-blue_gray-100 h-px mt-5 w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpCenterPage;
