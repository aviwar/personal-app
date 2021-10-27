import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import TransactionDetail from "../components/TransactionDetail";

const TransactionDetailScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const transactions = useSelector((state) => state.transactions);

  const [transaction, setTransaction] = useState({});

  const userBalance = transaction.balance ? Math.abs(transaction.balance) : 0;
  const userStatus = transaction.balance < 0 ? "You'll get" : "You'll give";

  const goToTransactions = () => {
    navigation.navigate("Transactions");
  };

  const goToTransactionForm = (userId) => {
    navigation.navigate("TransactionData", {
      userId: userId,
    });
  };

  const filterTransaction = (userId) => {
    const res = transactions.find(({ id }) => id === userId);

    if (!res) {
      goToTransactions();
    } else {
      setTransaction(res);
    }
  };

  useEffect(() => {
    filterTransaction(id);
  }, []);

  return (
    <TransactionDetail
      userId={transaction.id}
      userName={transaction.name}
      userBalance={userBalance}
      userStatus={userStatus}
      transactionData={transaction.data}
      goToTransactionForm={goToTransactionForm}
    />
  );
};

export default TransactionDetailScreen;
