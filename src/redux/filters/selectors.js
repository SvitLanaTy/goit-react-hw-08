import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";

export const selectFilterName = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterName],
  (contacts, valueFilter) => {
    if (Array.isArray(contacts)) {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(valueFilter.toLowerCase())
      );
    } else {
      return [];
    }
  }
);
