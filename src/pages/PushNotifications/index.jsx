import React from "react";

import { Img, List, Text } from "components";

const PushNotificationsPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-gilroy h-[1024px] items-center justify-end mx-auto pt-[714px] w-full"
        style={{ backgroundImage: "url('images/img_automatedemail.png')" }}
      >
        <div className="flex flex-col gap-5 justify-start w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start md:ml-[0] ml-[1014px] mr-6 p-4 md:px-5 rounded-[13px] w-[28%] md:w-full">
            <List
              className="flex flex-col gap-2.5 items-center rounded w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-col gap-1.5 items-center justify-start my-0 rounded w-full">
                <div className="flex flex-row items-end justify-between rounded w-full">
                  <div className="flex flex-row gap-1.5 items-start justify-start rounded">
                    <Img
                      className="h-5 md:h-auto object-cover rounded w-5"
                      src="images/img_image3.png"
                      alt="imageThree"
                    />
                    <Text
                      className="mt-1 text-blue_gray-900 text-xs"
                      size="txtGilroyMedium12"
                    >
                      Puffy Bakery
                    </Text>
                  </div>
                  <Text
                    className="mt-[5px] text-blue_gray-400 text-xs"
                    size="txtGilroyMedium12Bluegray400"
                  >
                    3m ago
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-start justify-between pt-0.5 rounded w-full">
                  <div className="flex flex-col items-start justify-start mt-[3px]">
                    <Text
                      className="text-base text-blue_gray-900"
                      size="txtGilroySemiBold16Bluegray900"
                    >
                      Near Puffy Bakery?
                    </Text>
                    <Text
                      className="leading-[22.00px] mt-[3px] text-blue_gray-400 text-sm w-full"
                      size="txtGilroyRegular14Bluegray400"
                    >
                      Check out review to see what other people would it here !
                    </Text>
                  </div>
                  <Img
                    className="h-9 md:h-auto object-cover rounded w-9"
                    src="images/img_image2.png"
                    alt="imageTwo"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-1.5 items-center justify-start my-0 rounded w-full">
                <div className="flex flex-row items-end justify-between rounded w-full">
                  <div className="flex flex-row gap-1.5 items-start justify-start rounded">
                    <Img
                      className="h-5 md:h-auto object-cover rounded w-5"
                      src="images/img_image3.png"
                      alt="imageThree One"
                    />
                    <Text
                      className="mt-1 text-blue_gray-900 text-xs"
                      size="txtGilroyMedium12"
                    >
                      Puffy Bakery
                    </Text>
                  </div>
                  <Text
                    className="mt-[5px] text-blue_gray-400 text-xs"
                    size="txtGilroyMedium12Bluegray400"
                  >
                    3m ago
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-start justify-between pt-0.5 rounded w-full">
                  <div className="flex flex-col items-start justify-start mt-[3px]">
                    <Text
                      className="text-base text-blue_gray-900"
                      size="txtGilroySemiBold16Bluegray900"
                    >
                      Near Puffy Bakery?
                    </Text>
                    <Text
                      className="leading-[22.00px] mt-[3px] text-blue_gray-400 text-sm w-full"
                      size="txtGilroyRegular14Bluegray400"
                    >
                      Check out review to see what other people would it here !
                    </Text>
                  </div>
                  <Img
                    className="h-9 md:h-auto object-cover rounded w-9"
                    src="images/img_image2.png"
                    alt="imageTwo One"
                  />
                </div>
              </div>
            </List>
          </div>
          <footer className="bg-blue_gray-900_7f flex font-poppins items-center justify-center md:px-5 w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between ml-[575px] mr-5 my-1 w-[59%]">
              <div className="flex flex-col items-center justify-start w-[36%] sm:w-full">
                <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                  <Img
                    className="h-[42px] md:h-auto object-cover w-[41px]"
                    src="images/img_start.png"
                    alt="Start"
                  />
                  <Img
                    className="h-[42px] md:h-auto object-cover w-[41px]"
                    src="images/img_search.png"
                    alt="Search"
                  />
                  <Img
                    className="h-[42px] md:h-auto object-cover w-[41px]"
                    src="images/img_desktop.png"
                    alt="Desktop"
                  />
                  <Img
                    className="h-[42px] md:h-auto object-cover w-[41px]"
                    src="images/img_widgets.png"
                    alt="Widgets"
                  />
                  <div className="flex flex-col items-center justify-start p-2 w-[41px]">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[25px] items-center justify-end p-0.5 w-[25px]"
                      style={{
                        backgroundImage: "url('images/img_explorericon.png')",
                      }}
                    >
                      <div className="bg-gradient  h-[7px] mt-3 w-[48%]"></div>
                    </div>
                  </div>
                  <div className="md:h-[38px] h-[41px] relative w-[41px]">
                    <div className="bg-white-A700_0c border border-solid border-white-A700_0c flex flex-col h-full items-center justify-end m-auto rounded w-[41px]">
                      <div className="bg-white-A700_87 h-0.5 mt-9 rounded-[1px] w-2/5"></div>
                    </div>
                    <Img
                      className="absolute h-[25px] inset-[0] justify-center m-auto object-cover w-[25px]"
                      src="images/img_placeyouricon.png"
                      alt="PlaceYourIcon"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-5 items-center justify-between pt-0.5 w-[26%] sm:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowup.svg"
                  alt="arrowup"
                />
                <div className="flex flex-row gap-2.5 items-center justify-center">
                  <Img
                    className="h-6 w-6"
                    src="images/img_signal.svg"
                    alt="signal"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_volume.svg"
                    alt="volume"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_videocamera.svg"
                    alt="videocamera"
                  />
                </div>
                <div className="flex flex-col items-end justify-start">
                  <Text
                    className="text-white-A700 text-xs"
                    size="txtPoppinsRegular12"
                  >
                    11:55 PM
                  </Text>
                  <Text
                    className="mt-[3px] text-white-A700 text-xs"
                    size="txtPoppinsRegular12"
                  >
                    10/6/2021
                  </Text>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default PushNotificationsPage;
