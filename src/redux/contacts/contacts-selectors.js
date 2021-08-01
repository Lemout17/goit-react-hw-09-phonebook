import { createSelector } from "@reduxjs/toolkit";

const getContacts = (state) => state.contacts.items;

const getFilter = (state) => state.contacts.filter;

const getLoading = (state) => state.contacts.loading;

const getError = (state) => state.contacts.contactsError;

const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, value) =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(value.toLowerCase())
    )
);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getContacts,
  getFilter,
  getLoading,
  getError,
  getFilteredContacts,
};
