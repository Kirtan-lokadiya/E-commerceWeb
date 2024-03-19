import React from "react";

import { Button, Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

const ShippingChargeCalculatorPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy items-center justify-start mx-auto pb-[73px] w-full">
        <div className="flex flex-col md:gap-10 gap-[70px] items-center justify-start w-full">
          <header className="flex items-center justify-center md:px-5 w-full">
            <div className="bg-white-A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs1 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
                <Img
                  className="h-[35px] w-[13%]"
                  src="images/img_group_11.svg"
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
          <div className="flex md:flex-col flex-row gap-7 items-start justify-start max-w-[1268px] mx-auto md:px-5 w-full">
            <div className="bg-white-A700 flex md:flex-1 flex-col gap-9 items-start justify-start p-8 sm:px-5 rounded-lg shadow-bs w-[68%] md:w-full">
              <div className="flex md:flex-col flex-row gap-4 items-center justify-start w-[77%] md:w-full">
                <Img
                  className="h-[194px] md:h-auto object-cover rounded w-[194px]"
                  src="images/img_pngwing1_180X180.png"
                  alt="pngwingOne"
                />
                <div className="flex flex-col items-start justify-start w-[66%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900_02 sm:text-xl"
                    size="txtGilroyMedium24"
                  >
                    Samsung Galaxy M12
                  </Text>
                  <Text
                    className="mt-[19px] text-blue_gray-400 text-xl"
                    size="txtGilroyMedium20Bluegray400"
                  >
                    (Blue,6GB RAM, 128GB Storage)
                  </Text>
                  <div className="flex flex-row items-center justify-start mt-[17px] w-[23%] md:w-full">
                    <Text
                      className="text-black-900_02 text-lg"
                      size="txtGilroyMedium18Black90002"
                    >
                      Color:
                    </Text>
                    <Text
                      className="ml-1 text-blue_gray-400 text-lg"
                      size="txtGilroyMedium18"
                    >
                      Blue
                    </Text>
                  </div>
                  <div className="flex flex-row font-opensans gap-[15px] items-end justify-start mt-[18px] w-[37%] md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900_02 sm:text-xl"
                      size="txtOpenSansMedium24"
                    >
                      <span className="text-colors font-gilroy text-left font-semibold">
                        $
                      </span>
                      <span className="text-colors1 font-gilroy text-left font-semibold">
                        555.29
                      </span>
                    </Text>
                    <Text
                      className="line-through mt-[11px] text-base text-blue_gray-400"
                      size="txtOpenSansMedium16"
                    >
                      <span className="text-colors2 font-gilroy text-left font-semibold">
                        $
                      </span>
                      <span className="text-colors2 font-gilroy text-left font-semibold">
                        55.99
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-row font-gilroy items-center justify-between mt-3 w-full">
                    <div className="flex flex-row items-center justify-evenly">
                      <Button
                        className="flex h-9 items-center justify-center rounded w-9"
                        shape="round"
                        color="blue_gray_100"
                        size="lg"
                        variant="outline"
                      >
                        <Img
                          className="h-4"
                          src="images/img_menu_36X36.svg"
                          alt="menu"
                        />
                      </Button>
                      <Button
                        className="cursor-pointer font-bold min-w-[64px] rounded text-center text-lg"
                        shape="round"
                        color="blue_gray_400"
                        size="lg"
                        variant="outline"
                      >
                        1
                      </Button>
                      <Button
                        className="flex h-9 items-center justify-center rounded w-9"
                        shape="round"
                        color="blue_gray_100"
                        size="lg"
                        variant="outline"
                      >
                        <Img
                          className="h-4"
                          src="images/img_plus_36X36.svg"
                          alt="plus"
                        />
                      </Button>
                    </div>
                    <Line className="bg-blue_gray-100 h-6 my-1.5 w-px" />
                    <Text
                      className="text-black-900_02 text-lg"
                      size="txtGilroyMedium18Black90002"
                    >
                      Save For Later
                    </Text>
                    <Line className="bg-blue_gray-100 h-6 my-1.5 w-px" />
                    <Text
                      className="text-lg text-red-700"
                      size="txtGilroyMedium18Red700"
                    >
                      Remove
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[66%] md:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900_02 sm:text-xl"
                  size="txtGilroyMedium24"
                >
                  Shipping Charges
                </Text>
                <div className="flex flex-col gap-1 items-start justify-start mt-4 w-[512px] sm:w-full">
                  <div className="flex flex-col items-start justify-start pr-[7px] pt-[7px] w-full">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroyMedium18Bluegray900"
                    >
                      Pick-up Area Pin Code
                    </Text>
                  </div>
                  <Input
                    name="zipcode"
                    placeholder="333333"
                    className="!placeholder:text-blue_gray-800 !text-blue_gray-800 font-medium md:h-auto p-0 sm:h-auto text-base text-left w-full"
                    wrapClassName="border border-blue_gray-100 border-solid rounded-lg w-full"
                    shape="round"
                  ></Input>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start mt-4 w-[512px] sm:w-full">
                  <div className="flex flex-col items-start justify-start pr-[7px] pt-[7px] w-full">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroyMedium18Bluegray900"
                    >
                      Delivery Area Pin Code
                    </Text>
                  </div>
                  <Input
                    name="zipcode One"
                    placeholder="333333"
                    className="!placeholder:text-blue_gray-800 !text-blue_gray-800 font-medium md:h-auto p-0 sm:h-auto text-base text-left w-full"
                    wrapClassName="border border-blue_gray-100 border-solid rounded-lg w-full"
                    shape="round"
                  ></Input>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start mt-4 w-[512px] sm:w-full">
                  <div className="flex flex-col items-start justify-start pr-[7px] pt-[7px] w-full">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroyMedium18Bluegray900"
                    >
                      Weight
                    </Text>
                  </div>
                  <Input
                    name="weight"
                    placeholder="0.5 KG"
                    className="!placeholder:text-blue_gray-800_01 !text-blue_gray-800_01 font-medium md:h-auto p-0 sm:h-auto text-base text-left w-full"
                    wrapClassName="border border-blue_gray-100 border-solid rounded-lg w-full"
                    shape="round"
                  ></Input>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start mt-4 w-[512px] sm:w-full">
                  <div className="flex flex-col items-start justify-start pr-[7px] pt-[7px] w-full">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroyMedium18Bluegray900"
                    >
                      Cash On Delivery and Name Pay Balance Applicable
                    </Text>
                  </div>
                  <Input
                    name="InputField One"
                    placeholder="Not Applicable"
                    className="!placeholder:text-blue_gray-800_01 !text-blue_gray-800_01 font-medium md:h-auto p-0 sm:h-auto text-base text-left w-full"
                    wrapClassName="border border-blue_gray-100 border-solid rounded-lg w-full"
                    shape="round"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[15px] items-start justify-start mt-[23px] pb-[11px] w-[62%] md:w-full">
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18Bluegray900"
                  >
                    Charge
                  </Text>
                  <div className="flex flex-row gap-4 items-center justify-start w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                      size="txtGilroyBold32"
                    >
                      $199
                    </Text>
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtGilroyMedium16Bluegray400"
                    >
                      ( Includes : Import free deposit )
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex md:flex-1 flex-col gap-8 items-center justify-start mb-[478px] p-4 rounded-lg shadow-bs w-[31%] md:w-full">
              <div className="flex flex-col gap-[15px] items-center justify-start w-[92%] md:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900_02 sm:text-xl"
                    size="txtGilroyMedium24"
                  >
                    Price Details
                  </Text>
                  <Line className="bg-blue_gray-100 h-px w-full" />
                </div>
                <div className="flex flex-col gap-7 items-center justify-start pt-[5px] w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-blue_gray-400 text-lg"
                      size="txtGilroyMedium18"
                    >
                      Price(2 iteam)
                    </Text>
                    <Text
                      className="text-black-900_02 text-lg"
                      size="txtGilroyMedium18Black90002"
                    >
                      $1110.58
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-blue_gray-400 text-lg"
                      size="txtGilroyMedium18"
                    >
                      Discount
                    </Text>
                    <Text
                      className="text-green-600 text-lg"
                      size="txtGilroyMedium18Green600"
                    >
                      -$111.98
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="text-blue_gray-400 text-lg"
                      size="txtGilroyMedium18"
                    >
                      Delivery Charges
                    </Text>
                    <Text
                      className="text-black-900_02 text-lg"
                      size="txtGilroyMedium18Black90002"
                    >
                      $199
                    </Text>
                  </div>
                </div>
                <Line className="bg-blue_gray-100 h-px w-full" />
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900_02 sm:text-xl"
                    size="txtGilroyMedium24"
                  >
                    Total Amount
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-black-900_02 sm:text-xl"
                    size="txtGilroyMedium24"
                  >
                    $1120.58
                  </Text>
                </div>
              </div>
              <Button
                className="cursor-pointer font-semibold rounded text-base text-center w-[326px]"
                shape="round"
              >
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingChargeCalculatorPage;
