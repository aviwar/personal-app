import React, { useState } from "react";
import { Keyboard, StyleSheet, View } from "react-native";
import { TextInput, TouchableRipple } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";

import { FormatDate } from "../../utils";

const FormDatePicker = ({ label, value, onChange, error }) => {
  const [visible, setVisible] = useState(false);
  const [displayValue, setDisplayValue] = useState(FormatDate(value));

  const handleDatepickerChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    const formattedDate = FormatDate(currentDate);
    setVisible(false);
    setDisplayValue(formattedDate);
    onChange(formattedDate);
  };

  return (
    <>
      <TouchableRipple
        onPress={() => {
          Keyboard.dismiss();
          setVisible(true);
        }}
      >
        <View pointerEvents={"none"}>
          <TextInput
            value={displayValue}
            mode={"outlined"}
            label={label}
            pointerEvents={"none"}
            right={<TextInput.Icon name="calendar-range" />}
            style={styles.textInputStyle}
          />
        </View>
      </TouchableRipple>

      {visible && (
        <DateTimePicker
          value={value}
          display="default"
          mode={"date"}
          onChange={handleDatepickerChange}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default FormDatePicker;
