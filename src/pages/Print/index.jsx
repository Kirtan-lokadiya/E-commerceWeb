import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "components";

const PrintPage = () => {
  return (
    <>
      <div className="bg-gray-50_02 flex flex-col font-gilroy items-start justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-7 items-start justify-start md:px-5 w-[95%] md:w-full">
          <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
            <div className="bg-gray-50 flex flex-col gap-[35px] items-center justify-start p-6 sm:px-5 w-full">
              <Img
                className="h-[35px] mt-[3px] w-[65%]"
                src="images/img_group_8.svg"
                alt="Group"
              />
              <div className="flex flex-col md:gap-10 gap-[375px] items-center justify-start mb-2 w-full">
                <div className="flex flex-col gap-2 items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[49%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_save.svg"
                        alt="save"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16Bluegray700"
                      >
                        Dashboard
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-end justify-start my-2 w-[45%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_dollaraltsoli.svg"
                        alt="dollaraltSoli"
                      />
                      <Text
                        className="mt-[5px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16Bluegray700"
                      >
                        Payments
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-start pr-[17px] py-[17px] rounded-lg w-full">
                    <Line className="bg-blue-A700 h-6 w-0.5" />
                    <div className="flex flex-row gap-2 items-center justify-start w-1/2">
                      <Img
                        className="h-6 w-6"
                        src="images/img_file_24X24.svg"
                        alt="file"
                      />
                      <Text
                        className="text-base text-blue-A700"
                        size="txtGilroySemiBold16BlueA700"
                      >
                        Documents
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[61%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_walletoutline.svg"
                        alt="walletOutline"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16Bluegray700"
                      >
                        Wallet & Cards
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[54%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_car.svg"
                        alt="car"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16Bluegray700"
                      >
                        Transactions
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-[43%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                      <Text
                        className="mt-1 text-base text-blue_gray-700"
                        size="txtGilroySemiBold16Bluegray700"
                      >
                        Analytics
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-end justify-start my-2 w-[45%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_menu.svg"
                        alt="menu"
                      />
                      <Text
                        className="mt-[5px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16Bluegray700"
                      >
                        Messages
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-2/5 md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_settings.svg"
                        alt="settings"
                      />
                      <Text
                        className="mt-[5px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16Bluegray700"
                      >
                        Settings
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-opensans items-start justify-start p-2 w-full">
                  <div className="flex flex-row gap-2 items-end justify-start my-2 w-[29%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_question.svg"
                      alt="question"
                    />
                    <Text
                      className="mt-[5px] text-base text-blue_gray-700"
                      size="txtOpenSansRomanSemiBold16"
                    >
                      Help
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </Sidebar>
          <div className="flex flex-1 flex-col gap-[42px] items-center justify-start md:mt-0 mt-8 w-full">
            <header className="flex items-center justify-center w-full">
              <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                <div className="header-row mt-3.5 mb-[13px]">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900"
                    size="txtGilroySemiBold28Bluegray900"
                  >
                    Documents
                  </Text>
                  <div className="mobile-menu">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div className="flex flex-row font-opensans gap-6 sm:hidden items-center justify-between w-[14%]">
                  <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col h-14 items-end justify-start p-2 rounded-[50%] w-14">
                    <div className="md:h-9 h-[35px] mb-1 relative w-9">
                      <Img
                        className="absolute bottom-[0] h-8 left-[0] w-8"
                        src="images/img_notification.svg"
                        alt="notification"
                      />
                      <Text
                        className="absolute bg-red-700 border border-blue_gray-50 border-solid h-[18px] justify-center pb-[5px] pt-0.5 px-[5px] right-[0] rounded-[50%] text-white-A700 text-xs top-[0] w-[18px]"
                        size="txtOpenSansRomanSemiBold12"
                      >
                        2
                      </Text>
                    </div>
                  </div>
                  <div className="border border-blue-A700_01 border-solid flex flex-col h-14 items-center justify-start p-1 rounded-[50%] w-14">
                    <Img
                      className="h-12 md:h-auto rounded-[50%] w-12"
                      src="images/img_profileimglarg.png"
                      alt="ProfileImgLarg"
                    />
                  </div>
                </div>
              </div>
            </header>
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <div className="bg-gray-50 flex flex-col gap-3 h-[196px] md:h-auto items-center justify-center max-w-[1022px] outline outline-[2px] outline-blue-A700 sm:px-5 px-8 py-[15px] rounded-md w-full">
                <Img
                  className="h-[26px] w-[26px]"
                  src="images/img_file_26X26.svg"
                  alt="file One"
                />
                <Text
                  className="text-blue_gray-600 text-lg w-auto"
                  size="txtGilroyMedium18Bluegray600"
                >
                  Add a File Here or
                </Text>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[96px]"
                  leftIcon={
                    <Img
                      className="h-4 ml-3 mr-2 my-[9px]"
                      src="images/img_upload.svg"
                      alt="upload"
                    />
                  }
                  shape="round"
                  size="md"
                  variant="outline"
                >
                  <div className="font-medium text-left text-sm">Upload</div>
                </Button>
              </div>
              <List
                className="flex flex-col gap-[22.95px] items-center pb-[3px] w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-[7px] items-center justify-between w-full">
                    <div className="flex flex-row gap-[7px] items-center justify-start pr-0.5 py-0.5">
                      <Img
                        className="h-6 w-6"
                        src="images/img_file_1.svg"
                        alt="file Two"
                      />
                      <Text
                        className="text-blue_gray-900 text-lg"
                        size="txtGilroySemiBold18Bluegray900"
                      >
                        File Name
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-medium min-w-[53px] text-center text-sm"
                      shape="round"
                      size="lg"
                      variant="outline"
                    >
                      Print
                    </Button>
                  </div>
                  <Text
                    className="text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14Bluegray400"
                  >
                    2.3MB of 9.0mb
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-[7px] items-center justify-between w-full">
                    <div className="flex flex-row gap-[7px] items-center justify-start pr-0.5 py-0.5">
                      <Img
                        className="h-6 w-6"
                        src="images/img_file_1.svg"
                        alt="file Three"
                      />
                      <Text
                        className="text-blue_gray-900 text-lg"
                        size="txtGilroySemiBold18Bluegray900"
                      >
                        File Name
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-medium min-w-[53px] text-center text-sm"
                      shape="round"
                      size="lg"
                      variant="outline"
                    >
                      Print
                    </Button>
                  </div>
                  <Text
                    className="text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14Bluegray400"
                  >
                    2.3MB of 9.0mb
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-[7px] items-center justify-between w-full">
                    <div className="flex flex-row gap-[7px] items-center justify-start pr-0.5 py-0.5">
                      <Img
                        className="h-6 w-6"
                        src="images/img_file_1.svg"
                        alt="file Four"
                      />
                      <Text
                        className="text-blue_gray-900 text-lg"
                        size="txtGilroySemiBold18Bluegray900"
                      >
                        File Name
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-medium min-w-[53px] text-center text-sm"
                      shape="round"
                      size="lg"
                      variant="outline"
                    >
                      Print
                    </Button>
                  </div>
                  <Text
                    className="text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14Bluegray400"
                  >
                    2.3MB of 9.0mb
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-[7px] items-center justify-between w-full">
                    <div className="flex flex-row gap-[7px] items-center justify-start pr-0.5 py-0.5">
                      <Img
                        className="h-6 w-6"
                        src="images/img_file_1.svg"
                        alt="file Five"
                      />
                      <Text
                        className="text-blue_gray-900 text-lg"
                        size="txtGilroySemiBold18Bluegray900"
                      >
                        File Name
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-medium min-w-[53px] text-center text-sm"
                      shape="round"
                      size="lg"
                      variant="outline"
                    >
                      Print
                    </Button>
                  </div>
                  <Text
                    className="text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14Bluegray400"
                  >
                    2.3MB of 9.0mb
                  </Text>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrintPage;
