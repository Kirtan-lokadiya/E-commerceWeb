import React from "react";

import { Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const CouponCodeGeneratorPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy gap-[55px] items-center justify-start mx-auto pb-[97px] w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs1 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
              <Img
                className="h-[35px] w-[13%]"
                src="images/img_group_1.svg"
                alt="Group"
              />
              <Input
                name="InputField"
                placeholder="Search"
                value={inputfieldvalue}
                onChange={(e) => setInputfieldvalue(e)}
                className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                wrapClassName="border border-blue_gray-300 border-solid flex md:ml-[0] ml-[52px] w-2/5 md:w-full"
                prefix={
                  <Img
                    className="cursor-pointer h-5 my-4 mx-3"
                    src="images/img_search_black_900.svg"
                    alt="search"
                  />
                }
                suffix={
                  <CloseSVG
                    fillColor="#bac1ce"
                    className="cursor-pointer h-5 my-auto"
                    onClick={() => setInputfieldvalue("")}
                    style={{
                      visibility:
                        inputfieldvalue?.length <= 0 ? "hidden" : "visible",
                    }}
                    height={20}
                    width={20}
                    viewBox="0 0 20 20"
                  />
                }
                shape="round"
              ></Input>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-center md:ml-[0] ml-[50px] w-[33%] md:w-full">
                <div className="flex flex-row gap-[19px] items-center justify-between pl-[5px] py-[5px] w-[27%] sm:w-full">
                  <Text
                    className="ml-[9px] text-base text-gray-900"
                    size="txtGilroyMedium16"
                  >
                    Orders
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                </div>
                <Text
                  className="sm:ml-[0] ml-[51px] sm:mt-0 mt-[11px] text-base text-gray-900"
                  size="txtGilroyMedium16"
                >
                  Categories
                </Text>
                <div className="flex flex-row gap-[26px] items-center justify-between sm:ml-[0] ml-[51px] pl-[5px] py-[5px] w-[27%] sm:w-full">
                  <Text
                    className="ml-4 text-base text-gray-900"
                    size="txtGilroyMedium16"
                  >
                    More
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown One"
                  />
                </div>
              </div>
              <Img
                className="h-[26px] md:ml-[0] ml-[66px] w-[2%]"
                src="images/img_cart.svg"
                alt="cart"
              />
            </div>
          </div>
        </header>
        <div className="flex flex-col font-chivo md:gap-10 gap-[70px] items-center justify-start max-w-[1268px] mx-auto md:px-5 w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[300px] items-start justify-start p-8 sm:px-5 rounded-[16px] w-full"
            style={{ backgroundImage: "url('images/img_group6514.png')" }}
          >
            <div className="flex flex-col gap-8 justify-start mb-1 md:ml-[0] ml-[18px] w-[37%] md:w-full">
              <div className="bg-white-A700 h-20 md:h-[45px] mr-[241px] p-[17px] relative rounded-[17.14px] w-[46%]">
                <Img
                  className="absolute h-[45px] inset-[0] justify-center m-auto object-cover w-[76%]"
                  src="images/img_image62.png"
                  alt="imageSixtyTwo"
                />
              </div>
              <Text
                className="md:ml-[0] ml-[11px] sm:text-[40px] md:text-[46px] text-[50px] text-white-A700 w-[98%] sm:w-full"
                size="txtChivoBold50"
              >
                Get extra 20% off on Gadgets
              </Text>
            </div>
          </div>
          <div className="flex flex-col font-gilroy gap-[30px] items-center justify-end pt-1.5 w-full">
            <div className="flex flex-row md:gap-10 items-start justify-between w-full">
              <Text
                className="mt-1.5 md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                size="txtGilroySemiBold32"
              >
                Deals Of The Day
              </Text>
              <Img
                className="h-10 mb-1.5 w-10"
                src="images/img_clock.svg"
                alt="clock"
              />
            </div>
            <List
              className="sm:flex-col flex-row gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end py-5 rounded-lg shadow-bs w-full">
                <div className="flex flex-col items-start justify-start mt-[3px] w-full">
                  <div className="flex flex-col gap-[23px] items-start justify-start ml-6 md:ml-[0] w-[84%] md:w-full">
                    <Img
                      className="h-[194px] md:h-auto object-cover w-full"
                      src="images/img_pngwing1_3.png"
                      alt="pngwingOne"
                    />
                    <Text
                      className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                      size="txtGilroyMedium24Black90001"
                    >
                      Flat 20% OFF
                    </Text>
                  </div>
                  <div className="bg-blue-50 border-blue-A700 border-dashed border-y flex flex-col items-center justify-start mt-[15px] p-3 w-full">
                    <div className="flex flex-row items-start justify-between w-[92%] md:w-full">
                      <Text
                        className="text-blue-A700 text-lg"
                        size="txtGilroySemiBold18BlueA700"
                      >
                        32JU80P
                      </Text>
                      <Img
                        className="h-5 w-5"
                        src="images/img_file.svg"
                        alt="file"
                      />
                    </div>
                  </div>
                  <Text
                    className="ml-6 md:ml-[0] mt-[13px] text-base text-blue_gray-400"
                    size="txtGilroyMedium16Bluegray400"
                  >
                    12,Nov,2021
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end py-5 rounded-lg shadow-bs w-full">
                <div className="flex flex-col items-start justify-start mt-[3px] w-full">
                  <div className="flex flex-col gap-[23px] items-start justify-start ml-6 md:ml-[0] w-[84%] md:w-full">
                    <Img
                      className="h-[194px] md:h-auto object-cover w-full"
                      src="images/img_pngwing1_4.png"
                      alt="pngwingOne One"
                    />
                    <Text
                      className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                      size="txtGilroyMedium24Black90001"
                    >
                      Flat 20% OFF
                    </Text>
                  </div>
                  <div className="bg-blue-50 border-blue-A700 border-dashed border-y flex flex-col items-center justify-start mt-[15px] p-3 w-full">
                    <div className="flex flex-row items-start justify-between w-[92%] md:w-full">
                      <Text
                        className="text-blue-A700 text-lg"
                        size="txtGilroySemiBold18BlueA700"
                      >
                        32JU80P
                      </Text>
                      <Img
                        className="h-5 w-5"
                        src="images/img_file.svg"
                        alt="file One"
                      />
                    </div>
                  </div>
                  <Text
                    className="ml-6 md:ml-[0] mt-[13px] text-base text-blue_gray-400"
                    size="txtGilroyMedium16Bluegray400"
                  >
                    12,Nov,2021
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end py-5 rounded-lg shadow-bs w-full">
                <div className="flex flex-col items-start justify-start mt-[3px] w-full">
                  <div className="flex flex-col gap-[23px] items-start justify-start ml-6 md:ml-[0] w-[84%] md:w-full">
                    <Img
                      className="h-[194px] md:h-auto object-cover w-full"
                      src="images/img_pngwing1_5.png"
                      alt="pngwingOne Two"
                    />
                    <Text
                      className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                      size="txtGilroyMedium24Black90001"
                    >
                      Flat 20% OFF
                    </Text>
                  </div>
                  <div className="bg-blue-50 border-blue-A700 border-dashed border-y flex flex-col items-center justify-start mt-[15px] p-3 w-full">
                    <div className="flex flex-row items-start justify-between w-[92%] md:w-full">
                      <Text
                        className="text-blue-A700 text-lg"
                        size="txtGilroySemiBold18BlueA700"
                      >
                        32JU80P
                      </Text>
                      <Img
                        className="h-5 w-5"
                        src="images/img_file.svg"
                        alt="file Two"
                      />
                    </div>
                  </div>
                  <Text
                    className="ml-6 md:ml-[0] mt-[13px] text-base text-blue_gray-400"
                    size="txtGilroyMedium16Bluegray400"
                  >
                    12,Nov,2021
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end py-5 rounded-lg shadow-bs w-full">
                <div className="flex flex-col items-start justify-start mt-[3px] w-full">
                  <div className="flex flex-col gap-[23px] items-start justify-start ml-6 md:ml-[0] w-[84%] md:w-full">
                    <Img
                      className="h-[194px] md:h-auto object-cover w-full"
                      src="images/img_pngwing1_6.png"
                      alt="pngwingOne Three"
                    />
                    <Text
                      className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                      size="txtGilroyMedium24Black90001"
                    >
                      Flat 20% OFF
                    </Text>
                  </div>
                  <div className="bg-blue-50 border-blue-A700 border-dashed border-y flex flex-col items-center justify-start mt-[15px] p-3 w-full">
                    <div className="flex flex-row items-start justify-between w-[92%] md:w-full">
                      <Text
                        className="text-blue-A700 text-lg"
                        size="txtGilroySemiBold18BlueA700"
                      >
                        32JU80P
                      </Text>
                      <Img
                        className="h-5 w-5"
                        src="images/img_file.svg"
                        alt="file Three"
                      />
                    </div>
                  </div>
                  <Text
                    className="ml-6 md:ml-[0] mt-[13px] text-base text-blue_gray-400"
                    size="txtGilroyMedium16Bluegray400"
                  >
                    12,Nov,2021
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default CouponCodeGeneratorPage;
