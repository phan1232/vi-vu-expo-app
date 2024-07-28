import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { Box, Center, Column, FormControl, Text } from "native-base";
import moment from "moment";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

type Props = {
  value: Date;
  onChange: (value: Date) => void;
  isShowModal: Boolean;
  ExitBtn: React.FC;
  setShowModal: any;
};

const DatePickerFormModal = ({
  value,
  onChange,
  isShowModal,
  ExitBtn,
  setShowModal,
}: Props) => {
  const handleConfirm = (date: Date) => {
    onChange(date);
    setShowModal(false)
  };
  return (
    <Box
      bgColor={"gray.100"}
      position={"absolute"}
      top={0}
      bottom={0}
      left={0}
      right={0}
      justifyContent={"center"}
      alignItems={"center"}
      display={isShowModal ? "block" : "none"}
    >
      {isShowModal && (
        <Box bg={"amber.200"}>
          <DateTimePicker
            mode="date"
            display="spinner"
            value={value}
            onChange={(event: DateTimePickerEvent, date: Date | undefined) =>
              handleConfirm(date as Date)
            }
          />
          {/* <ExitBtn /> */}
        </Box>
      )}
    </Box>
  );
};

export default DatePickerFormModal;

const styles = StyleSheet.create({});
