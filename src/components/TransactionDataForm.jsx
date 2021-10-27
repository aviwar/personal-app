import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Surface, Button, Title } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";

import FormInput from "../components/common/FormInput";
import FormButton from "../components/common/FormButton";
import FormSelect from "../components/common/FormSelect";
import FormDatePicker from "../components/common/FormDatePicker";

const formOptions = [
  {
    value: "gave",
    label: "Gave",
  },
  {
    value: "got",
    label: "Got",
  },
];

const TransactionForm = (props) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => console.log(data);

  const formTitle = props.id ? "Update" : "Add";

  return (
    <Surface style={styles.containerStyle}>
      <SafeAreaView style={styles.safeContainerStyle}>
        <Title style={styles.titleText}>{formTitle} Transaction</Title>

        <Controller
          control={control}
          name="amount"
          defaultValue=""
          render={({ field: { onChange, value, onBlur } }) => (
            <FormInput
              keyboardType="numeric"
              labelName="Amount"
              value={value}
              autoCapitalize="none"
              onChangeText={(value) => onChange(value)}
              onBlur={onBlur}
              error={errors.amount}
            />
          )}
          rules={{
            required: {
              value: true,
              message: "Amount is required!",
            },
          }}
        />

        <Controller
          control={control}
          name="type"
          defaultValue=""
          render={({ field: { onChange, value, onBlur } }) => (
            <FormSelect
              label="Transaction Type"
              options={formOptions}
              onChange={(value) => onChange(value)}
              value={value}
              error={errors.type}
            />
          )}
          rules={{
            required: {
              value: true,
              message: "Please select Transaction Type!",
            },
          }}
        />

        <Controller
          control={control}
          name="date"
          defaultValue={new Date()}
          render={({ field: { onChange, value } }) => (
            <FormDatePicker
              label="Date"
              value={value}
              onChange={(value) => onChange(value)}
            />
          )}
        />

        <FormButton
          title="Submit"
          modeValue="contained"
          labelStyle={styles.formButtonLabel}
          onPress={handleSubmit(onSubmit)}
          error={true}
        />
      </SafeAreaView>
    </Surface>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    padding: 12,
  },
  safeContainerStyle: {
    flex: 1,
    margin: 10,
  },
  titleText: {
    fontSize: 22,
    marginBottom: 10,
  },
  formButtonLabel: {
    fontSize: 20,
  },
});

export default TransactionForm;
