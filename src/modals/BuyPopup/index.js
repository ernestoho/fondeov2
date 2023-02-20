import React from "react";
import ModalProvider from "react-modal";

import { Text, Input, Button } from "components";

const BuyPopupModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[30%]"
        overlayClassName="bg-black_900_99 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto md:w-[100%] sm:w-[100%]">
          <div className="bg-gray_900 flex flex-col gap-[29px] items-center justify-start mb-[336px] p-[32px] md:px-[20px] sm:px-[20px] rounded-radius12 w-[100%]">
            <Text
              className="text-bluegray_50 text-left w-[auto]"
              as="h3"
              variant="h3"
            >
              Buy TSLA Stocks
            </Text>
            <div className="flex flex-col gap-[24px] items-center justify-start md:w-[100%] sm:w-[100%] w-[96%]">
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                  <Text
                    className="font-medium text-bluegray_100 text-left w-[auto]"
                    variant="body1"
                  >
                    ISIN Number
                  </Text>
                  <Input
                    className="font-medium p-[0] text-[16px] placeholder:text-bluegray_200 text-bluegray_200 text-left w-[100%]"
                    wrapClassName="w-[100%]"
                    type="number"
                    name="Group10198"
                    placeholder="Enter ISIN Number"
                    size="sm"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-start mt-[21px] w-[100%]">
                  <Text
                    className="font-medium text-bluegray_100 text-left w-[auto]"
                    variant="body1"
                  >
                    Price
                  </Text>
                  <Input
                    className="font-medium p-[0] text-[16px] placeholder:text-bluegray_200 text-bluegray_200 text-left w-[100%]"
                    wrapClassName="w-[100%]"
                    name="Group10198 One"
                    placeholder="Price"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-start mt-[21px] w-[100%]">
                  <Text
                    className="font-medium text-bluegray_100 text-left w-[auto]"
                    variant="body1"
                  >
                    Volume
                  </Text>
                  <Input
                    className="font-medium p-[0] text-[16px] placeholder:text-bluegray_200 text-bluegray_200 text-left w-[100%]"
                    wrapClassName="w-[100%]"
                    name="Group10198 Two"
                    placeholder="Volume"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-start mt-[21px] w-[100%]">
                  <Text
                    className="font-medium text-bluegray_100 text-left w-[auto]"
                    variant="body1"
                  >
                    Venue
                  </Text>
                  <Input
                    className="font-medium p-[0] text-[16px] placeholder:text-bluegray_200 text-bluegray_200 text-left w-[100%]"
                    wrapClassName="w-[100%]"
                    name="Group10198 Three"
                    placeholder="Venue"
                  ></Input>
                </div>
                <div className="flex flex-col items-start justify-start mt-[23px] w-[100%]">
                  <Text
                    className="font-medium text-bluegray_100 text-left w-[auto]"
                    variant="body1"
                  >
                    Expiry Date
                  </Text>
                  <Input
                    className="font-medium p-[0] text-[16px] placeholder:text-bluegray_200 text-bluegray_200 text-left w-[100%]"
                    wrapClassName="mt-[4px] w-[100%]"
                    name="Group10198 Four"
                    placeholder="Expiry Date"
                    size="lg"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-start mt-[21px] w-[100%]">
                  <Text
                    className="font-medium text-bluegray_100 text-left w-[auto]"
                    variant="body1"
                  >
                    Side
                  </Text>
                  <Input
                    className="font-medium p-[0] text-[16px] placeholder:text-bluegray_200 text-bluegray_200 text-left w-[100%]"
                    wrapClassName="w-[100%]"
                    name="Group10198 Five"
                    placeholder="Side"
                  ></Input>
                </div>
                <div className="flex flex-col items-start justify-start mt-[22px] w-[100%]">
                  <Text
                    className="font-medium text-bluegray_100 text-left w-[auto]"
                    variant="body1"
                  >
                    Quantity
                  </Text>
                  <Input
                    className="font-medium p-[0] text-[16px] placeholder:text-bluegray_200 text-bluegray_200 text-left w-[100%]"
                    wrapClassName="mt-[4px] w-[100%]"
                    name="Group10198 Six"
                    placeholder="Quantity"
                    size="lg"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-row gap-[17px] items-center justify-between w-[100%]">
                <Button
                  className="cursor-pointer font-medium min-w-[162px] text-[16px] text-bluegray_200 text-center w-[auto]"
                  size="md"
                  variant="OutlineBluegray901"
                >
                  Cancel
                </Button>
                <Button
                  className="cursor-pointer font-medium min-w-[162px] text-[16px] text-center text-white_A700 w-[auto]"
                  size="md"
                >
                  Buy now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default BuyPopupModal;
