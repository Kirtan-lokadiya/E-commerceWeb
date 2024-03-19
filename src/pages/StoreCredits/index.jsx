import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import { Link } from "react-router-dom";

import { CloseSVG } from "../../assets/images";

const StoreCreditsPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto pb-[294px] w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs1 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
            <Link to="/">
                <Text
                  className="ml-[9px] text-base text-gray-900"
                  size="txtGilroyMedium16"
                >
                  Home
                </Text>
              </Link>
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
                <Link to="/orderdetailview" className="flex flex-row gap-[19px] items-center justify-between pl-[5px] py-[5px] w-[27%] sm:w-full">
                    <Text
                      className="ml-[9px] text-base text-gray-900"
                      size="txtGilroyMedium16"
                    >
                      Orders
                    </Text>
                  </Link>
                
                </div>
                <Text
                  className="sm:ml-[0] ml-[51px] sm:mt-0 mt-[11px] text-base text-gray-900"
                  size="txtGilroyMedium16"
                >
                  Electronics
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
          <div className="bg-white-A700 flex md:flex-1 flex-col gap-[31px] items-start justify-start p-4 rounded-lg shadow-bs w-[68%] md:w-full">
            <Input
              name="Group1541"
              placeholder="Order Summary"
              className="font-medium leading-[normal] md:text-[22px] p-0 placeholder:text-black-900_02 sm:pr-5 sm:text-xl text-2xl text-left w-full"
              wrapClassName="ml-4 md:ml-[0] pr-[35px] w-[97%]"
              color="blue_gray_100"
              size="2xl"
              variant="underline"
            ></Input>
            <List
              className="flex flex-col gap-8 mb-4 ml-4 md:ml-[0] w-[74%]"
              orientation="vertical"
            >
              <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                <Img
                  className="h-[194px] md:h-auto object-cover rounded w-[194px]"
                  src="images/img_pngwing1_180X180.png"
                  alt="pngwingOne"
                />
                <div className="flex flex-col gap-[19px] items-start justify-start pb-12 md:pr-10 pr-12 sm:pr-5">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900_02 sm:text-xl"
                    size="txtGilroyMedium24"
                  >
                    Samsung Galaxy M12
                  </Text>
                  <Text
                    className="text-blue_gray-400 text-xl"
                    size="txtGilroyMedium20Bluegray400"
                  >
                    (Blue,6GB RAM, 128GB Storage)
                  </Text>
                  <div className="flex flex-row items-center justify-start w-[26%] md:w-full">
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
                  <div className="flex flex-row font-opensans gap-[15px] items-end justify-start w-[43%] md:w-full">
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
                </div>
              </div>
              <Line className="self-center h-px bg-blue_gray-100 w-full" />
              <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                <Img
                  className="h-[194px] md:h-auto object-cover rounded w-[194px]"
                  src="images/img_pngwing1_180X180.png"
                  alt="pngwingOne One"
                />
                <div className="flex flex-col gap-[19px] items-start justify-start pb-12 md:pr-10 pr-12 sm:pr-5">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900_02 sm:text-xl"
                    size="txtGilroyMedium24"
                  >
                    Samsung Galaxy M12
                  </Text>
                  <Text
                    className="text-blue_gray-400 text-xl"
                    size="txtGilroyMedium20Bluegray400"
                  >
                    (Blue,6GB RAM, 128GB Storage)
                  </Text>
                  <div className="flex flex-row items-center justify-start w-[26%] md:w-full">
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
                  <div className="flex flex-row font-opensans gap-[15px] items-end justify-start w-[43%] md:w-full">
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
                </div>
              </div>
            </List>
          </div>
          <div className="bg-white-A700 flex md:flex-1 flex-col gap-8 items-center justify-start mb-[257px] p-4 rounded-lg shadow-bs w-[31%] md:w-full">
            <div className="flex flex-col gap-[15px] items-center justify-start w-[92%] md:w-full">
              <Input
                name="Group1543"
                placeholder="Price Details"
                className="font-medium leading-[normal] md:text-[22px] p-0 placeholder:text-black-900_02 sm:pr-5 sm:text-xl text-2xl text-left w-full"
                wrapClassName="pr-[35px] w-full"
                color="blue_gray_100"
                size="md"
                variant="underline"
              ></Input>
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
                    className="text-green-600 text-lg"
                    size="txtGilroyMedium18Green600"
                  >
                    Store Credits
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
                    $10
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
    </>
  );
};

export default StoreCreditsPage;
