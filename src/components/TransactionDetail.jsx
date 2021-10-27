import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import {
  Avatar,
  DataTable,
  IconButton,
  Surface,
  Text,
} from "react-native-paper";

import DialogComponent from "../components/common/DialogComponent";
import FabComponent from "../components/common/FabComponent";
import CardComponent from "../components/common/CardComponent";
import TransactionDataItem from "./TransactionDataItem";

// import {
//   deleteTransaction,
//   deleteUserTransactions,
//   deleteUser,
//   updateUserBalance,
// } from "../store/actions";

const TransactionDetail = ({
  userId,
  userName,
  userBalance,
  userStatus,
  transactionData,
  goToTransactionForm,
}) => {
  const [dialogVisible, setDialogVisible] = useState(false);

  const handleUserDeleteClick = () => {
    setDialogVisible(!dialogVisible);
  };

  const handleTransactionEditClick = (transactionId) => {
    navigation.push("TransactionForm", {
      id: transactionId,
      userId: userId,
    });
  };

  const handleTransactionDeleteClick = (transactionId) => {
    setDialogVisible(!dialogVisible);
    setTransactionId(transactionId);
  };

  const handleDialogCancelPress = () => {
    setDialogVisible(!dialogVisible);
  };

  const handleDialogConfirmPress = () => {
    setDialogVisible(!dialogVisible);

    if (transactionId) {
      dispatch(deleteTransaction(transactionId));
      dispatch(updateUserBalance(userId));
      setTransactionId("");
    } else {
      dispatch(deleteUserTransactions(userId));
      dispatch(deleteUser(userId));
    }
  };

  const userHeaderRightContent = () => {
    return (
      <Text>
        <IconButton icon="account-remove" onPress={handleUserDeleteClick} />
      </Text>
    );
  };

  return (
    <Surface style={styles.containerStyle}>
      <SafeAreaView style={styles.safeContainerStyle}>
        <ScrollView>
          <CardComponent
            style={styles.userHeader}
            title={userName}
            left={(props) => <Avatar.Icon {...props} icon="account-circle" />}
            right={userHeaderRightContent}
          />

          {userBalance > 0 && (
            <CardComponent
              style={styles.transactionList}
              title={userBalance}
              subtitle={userStatus}
              left={(props) => <Avatar.Icon {...props} icon="currency-inr" />}
            />
          )}

          <DialogComponent
            visible={dialogVisible}
            dialogContent="Are u sure?"
            handleDialogCancelPress={handleDialogCancelPress}
            handleDialogConfirmPress={handleDialogConfirmPress}
          />

          <DataTable>
            <DataTable.Header>
              <DataTable.Title style={{ flex: 1.5 }}>Date</DataTable.Title>
              <DataTable.Title style={{ flex: 1 }}>Status</DataTable.Title>
              <DataTable.Title style={{ flex: 1 }}>Amount</DataTable.Title>
              <DataTable.Title style={{ flex: 2 }}>Action</DataTable.Title>
            </DataTable.Header>
            {transactionData && transactionData.length > 0 ? (
              transactionData.map((transaction) => (
                <TransactionDataItem
                  key={transaction.id}
                  transaction={transaction}
                  handleEditClick={handleTransactionEditClick}
                  handleDeleteClick={handleTransactionDeleteClick}
                />
              ))
            ) : (
              <DataTable.Row>
                <DataTable.Cell>No Transactions!</DataTable.Cell>
              </DataTable.Row>
            )}
          </DataTable>
        </ScrollView>

        <FabComponent
          icon="plus"
          onPress={() => {
            goToTransactionForm(userId);
          }}
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
    justifyContent: "center",
  },
  userHeader: {
    padding: 10,
  },
  transactionList: {
    marginTop: 20,
    padding: 12,
  },
});

export default TransactionDetail;
