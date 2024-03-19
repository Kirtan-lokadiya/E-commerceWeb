import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";
import { Link } from "react-router-dom";

const frame9870OptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const FavouritesPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy gap-[50px] items-center justify-end mx-auto w-full">
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
                <Link to="/pricingengine">
                  <Text
                    className="sm:ml-[0] ml-[51px] sm:mt-0 mt-[11px] text-base text-gray-900"
                    size="txtGilroyMedium16"
                  >
                    Electronics
                  </Text>
                </Link>
                <div className="flex flex-row gap-[26px] items-center justify-between sm:ml-[0] ml-[51px] pl-[5px] py-[5px] w-[27%] sm:w-full">
                <Text
                      className="ml-4 text-base text-gray-900"
                      size="txtGilroyMedium16"
                    >
                      Favourites
                    </Text>

                 
                </div>
              </div>
              <Link to="/invoicebilling">
                <Img
                  className="h-[26px] md:ml-[0] ml-[66px] w-[2%]"
                  src="images/img_cart.svg"
                  alt="cart"
                  style={{ width: '26px', height: '26px' }}
                />
              </Link>
            </div>
          </div>
        </header>
        <div className="bg-white-A700 flex flex-col items-center justify-end max-w-[1120px] mx-auto pt-[30px] md:px-5 px-[30px] rounded-md shadow-bs1 w-full">
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <div className="flex flex-col gap-[26px] items-center justify-start pt-[9px] w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                  size="txtGilroySemiBold32"
                >
                  Favourites
                </Text>
                <SelectBox
                  className="sm:flex-1 font-medium text-base text-blue_gray-900 text-left w-[11%] sm:w-full"
                  placeholderClassName="text-blue_gray-900"
                  indicator={
                    <Img
                      className="h-6 mr-[0] w-6"
                      src="images/img_arrowdown_bluegray_900.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="Frame9870"
                  options={frame9870OptionsList}
                  isSearchable={false}
                  placeholder="Filter & Sort"
                  size="xs"
                />
              </div>
              <Line className="bg-blue_gray-100 h-px w-full" />
            </div>
            <List
              className="flex flex-col font-opensans gap-[23px] items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                <div className="flex md:flex-col flex-row gap-4 items-center justify-between w-full">
                  <Img
                    className="h-[180px] md:h-auto object-cover rounded w-[180px]"
                    src="images/img_pngwing1_180X180.png"
                    alt="pngwingOne"
                  />
                  <div className="flex flex-col items-center justify-start">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                          size="txtOpenSansMedium24Bluegray900"
                        >
                          Samsung Galaxy M12 | 6000 mAh with 8nm Processor
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_trash.svg"
                          alt="trash"
                        />
                      </div>
                      <Text
                        className="mt-5 text-blue_gray-400 text-xl"
                        size="txtOpenSansMedium20"
                      >
                        (Blue,6GB RAM, 128GB Storage)
                      </Text>
                      <div className="flex flex-row sm:gap-10 items-end justify-between mt-[18px] w-full">
                        <div className="flex flex-col font-opensans gap-[17px] items-start justify-start">
                          <div className="flex flex-row items-center justify-start w-[61%] md:w-full">
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtOpenSansMedium18"
                            >
                              Color:
                            </Text>
                            <Text
                              className="ml-1 text-blue_gray-400 text-lg"
                              size="txtOpenSansMedium18Bluegray400"
                            >
                              Blue
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[15px] items-end justify-between w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                              size="txtOpenSansMedium24Bluegray900"
                            >
                              <span className="text-colors font-opensans text-left font-semibold">
                                $
                              </span>
                              <span className="text-colors4 font-opensans text-left font-semibold">
                                555.29
                              </span>
                            </Text>
                            <Text
                              className="line-through mt-[11px] text-base text-blue_gray-400"
                              size="txtOpenSansMedium16"
                            >
                              <span className="text-colors2 font-opensans text-left font-semibold">
                                $
                              </span>
                              <span className="text-colors2 font-opensans text-left font-semibold">
                                55.99
                              </span>
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer font-gilroy font-semibold mb-[5px] mt-2.5 text-base text-center w-[164px]"
                          shape="round"
                        >
                          Move to cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <Line className="bg-blue_gray-100 h-px w-full" />
              </div>
              <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                <div className="flex md:flex-col flex-row gap-4 items-center justify-between w-full">
                  <Img
                    className="h-[180px] md:h-auto object-cover rounded w-[180px]"
                    src="images/img_pngwing1_180X180.png"
                    alt="pngwingOne One"
                  />
                  <div className="flex flex-col items-center justify-start">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                          size="txtOpenSansMedium24Bluegray900"
                        >
                          Samsung Galaxy M12 | 6000 mAh with 8nm Processor
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_trash.svg"
                          alt="trash One"
                        />
                      </div>
                      <Text
                        className="mt-5 text-blue_gray-400 text-xl"
                        size="txtOpenSansMedium20"
                      >
                        (Blue,6GB RAM, 128GB Storage)
                      </Text>
                      <div className="flex flex-row sm:gap-10 items-end justify-between mt-[18px] w-full">
                        <div className="flex flex-col font-opensans gap-[17px] items-start justify-start">
                          <div className="flex flex-row items-center justify-start w-[61%] md:w-full">
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtOpenSansMedium18"
                            >
                              Color:
                            </Text>
                            <Text
                              className="ml-1 text-blue_gray-400 text-lg"
                              size="txtOpenSansMedium18Bluegray400"
                            >
                              Blue
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[15px] items-end justify-between w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                              size="txtOpenSansMedium24Bluegray900"
                            >
                              <span className="text-colors font-opensans text-left font-semibold">
                                $
                              </span>
                              <span className="text-colors4 font-opensans text-left font-semibold">
                                555.29
                              </span>
                            </Text>
                            <Text
                              className="line-through mt-[11px] text-base text-blue_gray-400"
                              size="txtOpenSansMedium16"
                            >
                              <span className="text-colors2 font-opensans text-left font-semibold">
                                $
                              </span>
                              <span className="text-colors2 font-opensans text-left font-semibold">
                                55.99
                              </span>
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer font-gilroy font-semibold mb-[5px] mt-2.5 text-base text-center w-[164px]"
                          shape="round"
                        >
                          Move to cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <Line className="bg-blue_gray-100 h-px w-full" />
              </div>
              <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                <div className="flex md:flex-col flex-row gap-4 items-center justify-between w-full">
                  <Img
                    className="h-[180px] md:h-auto object-cover rounded w-[180px]"
                    src="images/img_pngwing1_180X180.png"
                    alt="pngwingOne Two"
                  />
                  <div className="flex flex-col items-center justify-start">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                          size="txtOpenSansMedium24Bluegray900"
                        >
                          Samsung Galaxy M12 | 6000 mAh with 8nm Processor
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_trash.svg"
                          alt="trash Two"
                        />
                      </div>
                      <Text
                        className="mt-5 text-blue_gray-400 text-xl"
                        size="txtOpenSansMedium20"
                      >
                        (Blue,6GB RAM, 128GB Storage)
                      </Text>
                      <div className="flex flex-row sm:gap-10 items-end justify-between mt-[18px] w-full">
                        <div className="flex flex-col font-opensans gap-[17px] items-start justify-start">
                          <div className="flex flex-row items-center justify-start w-[61%] md:w-full">
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtOpenSansMedium18"
                            >
                              Color:
                            </Text>
                            <Text
                              className="ml-1 text-blue_gray-400 text-lg"
                              size="txtOpenSansMedium18Bluegray400"
                            >
                              Blue
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[15px] items-end justify-between w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                              size="txtOpenSansMedium24Bluegray900"
                            >
                              <span className="text-colors font-opensans text-left font-semibold">
                                $
                              </span>
                              <span className="text-colors4 font-opensans text-left font-semibold">
                                555.29
                              </span>
                            </Text>
                            <Text
                              className="line-through mt-[11px] text-base text-blue_gray-400"
                              size="txtOpenSansMedium16"
                            >
                              <span className="text-colors2 font-opensans text-left font-semibold">
                                $
                              </span>
                              <span className="text-colors2 font-opensans text-left font-semibold">
                                55.99
                              </span>
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer font-gilroy font-semibold mb-[5px] mt-2.5 text-base text-center w-[164px]"
                          shape="round"
                        >
                          Move to cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <Line className="bg-blue_gray-100 h-px w-full" />
              </div>
              <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                <div className="flex md:flex-col flex-row gap-4 items-center justify-between w-full">
                  <Img
                    className="h-[180px] md:h-auto object-cover rounded w-[180px]"
                    src="images/img_pngwing1_180X180.png"
                    alt="pngwingOne Three"
                  />
                  <div className="flex flex-col items-center justify-start">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                          size="txtOpenSansMedium24Bluegray900"
                        >
                          Samsung Galaxy M12 | 6000 mAh with 8nm Processor
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_trash.svg"
                          alt="trash Three"
                        />
                      </div>
                      <Text
                        className="mt-5 text-blue_gray-400 text-xl"
                        size="txtOpenSansMedium20"
                      >
                        (Blue,6GB RAM, 128GB Storage)
                      </Text>
                      <div className="flex flex-row sm:gap-10 items-end justify-between mt-[18px] w-full">
                        <div className="flex flex-col font-opensans gap-[17px] items-start justify-start">
                          <div className="flex flex-row items-center justify-start w-[61%] md:w-full">
                            <Text
                              className="text-blue_gray-900 text-center text-lg"
                              size="txtOpenSansMedium18"
                            >
                              Color:
                            </Text>
                            <Text
                              className="ml-1 text-blue_gray-400 text-center text-lg"
                              size="txtOpenSansMedium18Bluegray400"
                            >
                              Blue
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[15px] items-end justify-between w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl"
                              size="txtOpenSansMedium24Bluegray900"
                            >
                              <span className="text-colors font-opensans font-semibold">
                                $
                              </span>
                              <span className="text-colors4 font-opensans font-semibold">
                                555.29
                              </span>
                            </Text>
                            <Text
                              className="line-through mt-2 text-base text-blue_gray-400 text-center"
                              size="txtOpenSansMedium16"
                            >
                              <span className="text-colors2 font-opensans font-semibold">
                                $
                              </span>
                              <span className="text-colors2 font-opensans font-semibold">
                                55.99
                              </span>
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer font-gilroy font-semibold mb-[5px] mt-2.5 text-base text-center w-[164px]"
                          shape="round"
                          size="lg"
                        >
                          Move to cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <Line className="bg-blue_gray-100 h-px w-full" />
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavouritesPage;
