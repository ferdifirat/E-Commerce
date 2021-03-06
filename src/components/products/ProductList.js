import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge,Table,Button} from "reactstrap";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";
import alertify from "alertifyjs";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

class ProductList extends Component {

    componentDidMount(){
        this.props.actions.getProducts();
    }
    addToCart =(product)=>{
      this.props.actions.addToCart({quantity:1,product})
      alertify.success(product.productName + " sepete eklendi")
    }
    deleteProduct =(product)=>{
      this.props.actions.deleteProduct(product);
      alertify.success(product.productName + " ürün silindi")
    }
  render() {
    return (
      <div>
        <h3>
          <Badge color="warning">Products</Badge>

          <Badge color="success">
            {this.props.currentCategory.categoryName}
          </Badge>
          </h3>
          <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Unit Price</th>
          <th>Quantity Per Unit</th>
          <th>Units In Stock</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
          {this.props.products.map(product =>(
     <tr key={product.id}>
     <th scope="row">{product.id}</th>
     <td><Link to={"/saveproduct/" + product.id} >{product.productName}</Link></td>
     <td>{product.unitPrice}</td>
     <td>{product.quantityPerUnit}</td>
     <td>{product.unitsInStock}</td>
     <td>
       <Button color="success" onClick={()=>this.addToCart(product)}><FontAwesomeIcon icon="plus"></FontAwesomeIcon></Button>
     </td>
     <td>
       <Button color="danger" onClick={()=>this.deleteProduct(product)}>Sil</Button>
     </td>
   </tr>
          ))}
   
      </tbody>
    </Table>
        
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart : bindActionCreators(cartActions.addToCart, dispatch),
      deleteProduct : bindActionCreators(productActions.deleteProduct, dispatch)
    },
  };
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
