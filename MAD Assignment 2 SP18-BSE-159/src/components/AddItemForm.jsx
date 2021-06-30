import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    background: "gainsboro",
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const[itemName,setItemName] = React.useState('')
  const[itemQuantity,setitemQuantity] = React.useState(0)

  //   setOpen(props.open);
  React.useEffect(() => setOpen(props.open));
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <h2 id="simple-modal-title" style={{ marginBottom: "40px" }}>
          Add Item
        </h2>
        <form>
          <div style={{margin:"20px 0"}}>
            <label>Enter Item Name: </label>
            &nbsp;
            <input type="text" onChange={(e) => setItemName(e.target.value)}/>
          </div>
          <div style={{margin:"20px 0"}}>
            <label>Enter Item Quantity</label>
            &nbsp;
            <input type="number" min="1" onChange={(e) => setitemQuantity(e.target.value)} />
          </div>
        </form>
        <Button
          variant="contained"
          onClick={() => {
            props.handleClose();
            props.onAdd({itemName, itemQuantity});
          }}
          color="primary"
          style={{ marginLeft: "20px" }}
        >
          Add
        </Button>
        <Button
          variant="contained"
          onClick={() => props.handleClose()}
          color="secondary"
          style={{marginLeft:"20px"}}
        >
          Cancle
        </Button>
      </div>
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
