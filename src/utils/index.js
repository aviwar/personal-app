import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import * as Contacts from "expo-contacts";

export const Uuid = () => {
  return uuidv4();
};

export const FormatDate = (timestamp) => {
  return moment(timestamp).format("DD-MM-YYYY");
};

export const LoadContacts = async () => {
  const { status } = await Contacts.requestPermissionsAsync();

  if (status !== "granted") {
    return;
  }

  const { data } = await Contacts.getContactsAsync({
    fields: [Contacts.Fields.PhoneNumbers],
  });

  return data;
};
