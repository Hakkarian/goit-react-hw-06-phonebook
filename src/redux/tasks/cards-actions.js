import { createAction } from "@reduxjs/toolkit";

export const fetchAllContactsLoading = createAction("books/fetch/loading");

export const fetchAllContactsSuccess = createAction("books/fetch/success");

export const fetchAllContactsError = createAction('books/fetch/error');

export const fetchAddContactsLoading = createAction('books/add/loading');

export const fetchAddContactsSuccess = createAction('books/add/success');

export const fetchAddContactsError = createAction('books/add/error');

export const fetchDeleteContactsLoading = createAction('books/delete/loading');

export const fetchDeleteContactsSuccess = createAction('books/delete/success');

export const fetchDeleteContactsError = createAction('books/delete/error');