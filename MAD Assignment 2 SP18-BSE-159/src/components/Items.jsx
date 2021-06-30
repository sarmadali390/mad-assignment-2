import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
export class items extends Component {
    render() {
        console.log(this.props);
        const item = this.props.item;
        return (
            <div style={{display:"flex",alignItems:"center",margin:"0px 0 0 80px"}}>
                <h4 style={{width:"200px"}}>{item.name}</h4>
                <h4 style={{margin:"0 40px",padding:"10px 40px",background:"bisque",borderRadius:"30px"}}>{item.quantity}</h4>
                &nbsp;
                <Button color="primary" variant={"contained"} onClick={() => {this.props.increaseQunatity(item.id)}}>
                        <AddIcon />
                    </Button>
                    <Button variant={"contained"} style={{margin:"0 20px"}}  onClick={() => {this.props.decreaseQunatity(item.id)}}>
                        <RemoveIcon />
                    </Button>
                    <Button color='secondary' variant={"contained"} onClick={() => {this.props.deleteItem(item.id)}} >
                        <DeleteForeverIcon />
                    </Button>
            </div>
        )
    }
}

export default items
