import React from "react";

import { Button, Img, Input, List, Slider, Text, TextArea } from "components";

import { CloseSVG } from "../../assets/images";

const AuctionBIddingPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy gap-[35px] items-center justify-start mx-auto pb-[57px] w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs1 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
              <Img
                className="h-[35px] w-[13%]"
                src="images/img_group_35X162.svg"
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
        <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start max-w-[1268px] mx-auto md:px-5 w-full">
          <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-[30px] sm:px-5 rounded-lg shadow-bs w-[63%] md:w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Img
                className="h-[516px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                src="images/img_rectangle1380.png"
                alt="Rectangle1380"
              />
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[30px] pb-1 w-full">
                <div className="flex flex-col gap-[23px] items-start justify-start sm:mt-0 mt-2">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                    size="txtGilroySemiBold28"
                  >
                    Secluded intown Treehouse
                  </Text>
                  <Text
                    className="text-blue_gray-400 text-lg"
                    size="txtGilroyMedium18"
                  >
                    2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
                  </Text>
                </div>
                <div className="flex sm:flex-1 flex-row gap-[30px] items-center justify-between w-[18%] sm:w-full">
                  <Button
                    className="border border-blue-A700 border-solid cursor-pointer flex h-[50px] items-center justify-center w-[50px]"
                    onClick={() => sliderRef.current?.slidePrev?.()}
                    shape="circle"
                    color="white_A700"
                    size="lg"
                  >
                    <Img
                      className="h-6"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft"
                    />
                  </Button>
                  <Button
                    className="cursor-pointer flex h-[50px] items-center justify-center w-[50px]"
                    onClick={() => sliderRef.current?.slideNext?.()}
                    shape="circle"
                    color="white_A700"
                    size="lg"
                  >
                    <Img
                      className="h-6"
                      src="images/img_arrowright.svg"
                      alt="arrowright"
                    />
                  </Button>
                </div>
              </div>
              <Text
                className="mt-[35px] text-black-900 text-lg"
                size="txtGilroySemiBold18"
              >
                Review
              </Text>
              <div className="flex flex-row gap-2 items-end justify-start mt-[21px] w-[26%] md:w-full">
                <Img
                  className="h-14 md:h-auto rounded-[50%] w-14"
                  src="images/img_profileimglarg.png"
                  alt="ProfileImgLarg"
                />
                <div className="flex flex-col gap-[9px] items-center justify-start mb-[3px] mt-[7px] w-[66%]">
                  <Text
                    className="text-base text-black-900_02"
                    size="txtGilroyMedium16Black90002"
                  >
                    Leslie Alexander
                  </Text>
                  <div className="flex flex-row items-center justify-evenly w-[98%] md:w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_star.svg"
                      alt="star"
                    />
                    <Img
                      className="h-5 w-5"
                      src="images/img_star.svg"
                      alt="star One"
                    />
                    <Img
                      className="h-5 w-5"
                      src="images/img_star.svg"
                      alt="star Two"
                    />
                    <Img
                      className="h-5 w-5"
                      src="images/img_star.svg"
                      alt="star Three"
                    />
                    <Img
                      className="h-5 w-5"
                      src="images/img_star_20X20.svg"
                      alt="star Four"
                    />
                  </div>
                </div>
              </div>
              <Text
                className="leading-[26.00px] mt-4 text-base text-blue_gray-400 w-full"
                size="txtGilroyMedium16Bluegray400"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                congue purus sodales tincidunt. Egestas nunc habitant facilisi
                porttitor felis sit cras nulla in.
              </Text>
            </div>
          </div>
          <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-end p-[30px] sm:px-5 rounded-lg shadow-bs w-[36%] md:w-full">
            <div className="flex flex-col items-start justify-start mb-0.5 mt-[7px] w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtGilroySemiBold24Black900"
              >
                Place Your Bid
              </Text>
              <div className="flex flex-row items-start justify-between mt-[31px] pt-[5px] w-full">
                <div className="flex flex-col gap-[13px] items-start justify-start w-[45%]">
                  <Text
                    className="text-blue_gray-400 text-lg"
                    size="txtGilroyMedium18"
                  >
                    Ends In
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-between w-full">
                    <Button
                      className="cursor-pointer font-bold h-[45px] text-center text-lg w-[45px]"
                      shape="round"
                      color="blue_50"
                      size="lg"
                    >
                      00
                    </Button>
                    <Img
                      className="h-5"
                      src="images/img_group24.svg"
                      alt="GroupTwentyFour"
                    />
                    <Button
                      className="cursor-pointer font-bold h-[45px] text-center text-lg w-[45px]"
                      shape="round"
                      color="blue_50"
                      size="lg"
                    >
                      00
                    </Button>
                    <Img
                      className="h-5"
                      src="images/img_group24.svg"
                      alt="Group9828"
                    />
                    <Button
                      className="cursor-pointer font-bold h-[45px] text-center text-lg w-[45px]"
                      shape="round"
                      color="blue_50"
                      size="lg"
                    >
                      00
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-[17px] items-center justify-start">
                  <Text
                    className="text-blue_gray-400 text-lg"
                    size="txtGilroyMedium18"
                  >
                    Highest Bid
                  </Text>
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-blue-A700"
                    size="txtGilroyBold28"
                  >
                    $20,000
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center justify-start mt-8 pt-[9px] w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900_02 sm:text-xl"
                    size="txtGilroyMedium24"
                  >
                    Bids History
                  </Text>
                  <a href="javascript:" className="text-blue_gray-400 text-lg">
                    <Text size="txtGilroyMedium18">See All</Text>
                  </a>
                </div>
                <List
                  className="flex flex-col gap-4 items-center w-full"
                  orientation="vertical"
                >
                  <div className="bg-gray-50 border border-blue_gray-100 border-solid flex flex-1 flex-col items-center justify-start p-2 rounded-md w-full">
                    <div className="flex flex-row items-center justify-start rounded-[3px] w-[98%] md:w-full">
                      <Img
                        className="h-[54px] md:h-auto object-cover rounded-[3px] w-[54px]"
                        src="images/img_rectangle755.png"
                        alt="Rectangle755"
                      />
                      <Text
                        className="ml-2 text-blue_gray-400 text-lg"
                        size="txtGilroyMedium18"
                      >
                        Ralph Edwards
                      </Text>
                      <Text
                        className="ml-28 text-blue-A700 text-lg"
                        size="txtGilroyBold18"
                      >
                        $20,000
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray-50 border border-blue_gray-100 border-solid flex flex-1 flex-col items-center justify-start p-2 rounded-md w-full">
                    <div className="flex flex-row items-center justify-start rounded-[3px] w-[98%] md:w-full">
                      <Img
                        className="h-[54px] md:h-auto object-cover rounded-[3px] w-[54px]"
                        src="images/img_rectangle755.png"
                        alt="Rectangle755 One"
                      />
                      <Text
                        className="ml-2 text-blue_gray-400 text-lg"
                        size="txtGilroyMedium18"
                      >
                        Ralph Edwards
                      </Text>
                      <Text
                        className="ml-28 text-blue-A700 text-lg"
                        size="txtGilroyBold18"
                      >
                        $20,000
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray-50 border border-blue_gray-100 border-solid flex flex-1 flex-col items-center justify-start p-2 rounded-md w-full">
                    <div className="flex flex-row items-center justify-start rounded-[3px] w-[98%] md:w-full">
                      <Img
                        className="h-[54px] md:h-auto object-cover rounded-[3px] w-[54px]"
                        src="images/img_rectangle755.png"
                        alt="Rectangle755 Two"
                      />
                      <Text
                        className="ml-2 text-blue_gray-400 text-lg"
                        size="txtGilroyMedium18"
                      >
                        Ralph Edwards
                      </Text>
                      <Text
                        className="ml-28 text-blue-A700 text-lg"
                        size="txtGilroyBold18"
                      >
                        $20,000
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
              <Slider
                activeIndex={sliderState}
                responsive={{
                  0: { items: 1 },
                  550: { items: 1 },
                  1050: { items: 2 },
                }}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                ref={sliderRef}
                className="mt-8 w-full"
                items={[...Array(6)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="flex flex-col gap-1 items-start justify-start mx-2.5">
                      <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                        <Text
                          className="text-black-900_02 text-lg"
                          size="txtGilroyMedium18Black90002"
                        >
                          Your Bid Amount
                        </Text>
                      </div>
                      <Input
                        name="InputField One"
                        placeholder="Enter amount"
                        className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium md:h-auto p-0 sm:h-auto text-base text-left w-full"
                        wrapClassName="border border-blue_gray-100 border-solid w-full"
                        shape="round"
                      ></Input>
                    </div>
                  </React.Fragment>
                ))}
              />
              <Button
                className="cursor-pointer font-medium mt-10 text-base text-center w-[390px]"
                shape="round"
              >
                Place Your Bid
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuctionBIddingPage;
