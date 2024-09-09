import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (e) {
      toast.error("Something went wrong. Please, try again.");
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post("/contacts", {
        name: contact.name,
        number: contact.number,
      });
      toast.success("Contact was successfully added!");
      return data;
    } catch (e) {
      toast.error("Something went wrong. Please, try again.");
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      return data;
    } catch (e) {
      toast.error("Something went wrong. Please, try again.");
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async ({ id, name, number }, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`, { name, number });
      console.log(data);
      toast.success("The contact was successfully updated.");
      return data;
    } catch (e) {
      toast.error("Something went wrong. Please, try again.");
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
