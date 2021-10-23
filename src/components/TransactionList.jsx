import React from "react";
import { Icon, List, ListItem } from "@ui-kitten/components";

import FAB from "../components/common/FAB";

const TransactionList = ({
  transactions,
  goToAddTransaction,
  goToTransactionDetail,
}) => {
  const renderItemIcon = (props) => <Icon {...props} name="person" />;

  const renderItem = ({ item, index }) => (
    <ListItem
      title={item.name}
      accessoryLeft={renderItemIcon}
      onPress={() => goToTransactionDetail(item.id)}
    />
  );

  return (
    <>
      <List data={transactions} renderItem={renderItem} />
      <FAB onPress={goToAddTransaction} icon="plus-circle-outline" />
    </>
  );
};

export default TransactionList;
