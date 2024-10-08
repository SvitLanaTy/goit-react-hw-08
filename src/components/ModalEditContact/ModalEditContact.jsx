import { useState } from "react";
import {
  Dialog,
  Button,
  TextField,
  Snackbar,
  Alert,
  AlertTitle,
  DialogTitle,
  DialogContent,
  DialogActions,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

const ModalEditContact = ({ open, onClose, id, name, number }) => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState(name);
  const [phoneNumber, setPhoneNumber] = useState(number);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSave = () => {
    if (userName === "" || phoneNumber === "") {
      setOpenSnackbar(true);
      return;
    }

    dispatch(
      updateContact({ id, name: userName.trim(), number: phoneNumber.trim() })
    )
      .unwrap()
      .then(() => {
        toast.success("The contact was successfully updated.");
      });
    onClose();
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Edit Contact</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={userName}
            onChange={({ target: { value } }) => setUserName(value)}
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <TextField
            label="Number"
            value={phoneNumber}
            onChange={({ target: { value } }) => setPhoneNumber(value)}
            fullWidth
            variant="outlined"
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert severity="warning" onClose={() => setOpenSnackbar(false)}>
          <AlertTitle>Warning</AlertTitle>
          Name and Number are required!
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
};

const defaultTheme = createTheme({
  palette: {
    primary: {
      light: "#6ec6ff",
      main: "#2196f3",
      dark: "#0069c0",
      contrastText: "#fff",
    },
    secondary: {
      light: "#90a4ae",
      main: "#78909c",
      dark: "#607d8b",
      contrastText: "#fff",
    },
  },
});
export default ModalEditContact;
