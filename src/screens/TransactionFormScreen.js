import React, { useEffect, useState } from "react";

import TransactionForm from "../components/TransactionDataForm";

const TransactionFormScreen = ({ route, navigation }) => {
  const { id, userId } = route.params;

  return <TransactionForm id={id} userId={userId} />;
};

export default TransactionFormScreen;
