import React, { Component } from "react";
import Items from "./Items";
import AddItemForm from "./AddItemForm";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

export class MainPage extends Component {
  state = {
    items: [],
    modal: false,
  };

  componentDidMount() {
    const dummyItems = [
      { id: 1, name: "Glasses", quantity: 1 },
    ];
    this.setState({ items: dummyItems });
  }

  increaseQunatity = (id) => {
    var items = [];
    this.state.items.forEach((item) => {
      if (item.id === id) {
        item.quantity = item.quantity + 1;
      }
      items.push(item);
    });
    this.setState({ items });
  };

  decreaseQunatity = (id) => {
    var items = [];
    this.state.items.forEach((item) => {
      if (item.id === id) {
        item.quantity = item.quantity - 1;
      }
      if (item.quantity === 0) {
        return;
      }
      items.push(item);
    });
    this.setState({ items });
  };

  deleteItem = (id) => {
    var items = [];
    this.state.items.forEach((item) => {
      if (item.id === id) {
        return;
      }
      items.push(item);
    });
    this.setState({ items });
  };

  resetItems = () => {
    this.setState({ items: [] });
  }
  closeModal = () => {
    this.setState({ modal: false });
  }

addItem = (item) => {
  console.log(item);
  var addingItem = [...this.state.items, {id: this.state.items.length + 1, name: item.itemName, quantity: item.itemQuantity}]
  this.setState({items: addingItem})

}

  render() {
    var totalItems = 0;
    const { items } = this.state;
    items.forEach((item) => {
      totalItems = totalItems + Number(item.quantity);
    });
    return (
      <div>
        <div
          style={{
            display: "flex",
            margin: "30px",
            background: "aliceblue",
            borderRadius: "20px",
            alignItems: "center",
            padding: "5px 0 5px 90px",
          }}
        >
          <ShoppingCartIcon fontSize="large" color="primary" /> &nbsp;
          <h2>Total Items: {totalItems}</h2>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "420px",
            margin: "0px auto 20px auto",
            padding: "25px 200px 20px 200px",
            borderRadius: "20px",
            background: "silver",
          }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={() => this.setState({ modal: true })}
          >
            <AddIcon />
            &nbsp; Add Item
          </Button>
          <Button
            color="secondary"
            variant="contained"
            style={{ marginLeft: "20px" }}
            onClick={() => this.resetItems()}
          >
            <RotateLeftIcon />
            &nbsp; Reset Items
          </Button>
        </div>
        {items.map((item) => {
          return (
            <div>
              <Items
                item={item}
                increaseQunatity={this.increaseQunatity}
                decreaseQunatity={this.decreaseQunatity}
                deleteItem={this.deleteItem}
              />
              ;
            </div>
          );
        })}
        {this.state.modal ? <AddItemForm open={this.state.modal} handleClose={this.closeModal} onAdd={this.addItem} /> : ""}
      </div>
    );
  }
}

export default MainPage;
