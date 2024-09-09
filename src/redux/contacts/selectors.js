import { createSelector } from "@reduxjs/toolkit";
import { selectFilterName } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;

export const selectIsLoading = (state) => state.contacts.isLoading;

export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterName],
  (contacts, valueFilter) => {
    if (Array.isArray(contacts)) {
      return contacts.filter(
        (contact) =>
          contact.name.toLowerCase().includes(valueFilter.toLowerCase()) |
          contact.number.includes(valueFilter)
      );
    } else {
      return [];
    }
  }
);
