import React, { Component, createRef } from "react";
import Product from "./Product.jsx";
import productImage1 from "../assets/product-image-1.png";
import productImage2 from "../assets/product-image-2.png";
import productImage3 from "../assets/product-image-3.png";

import ModalBox from "./ModalBox";
import PortalComponent from "./PortalComponent";

class productlist extends Component {
  constructor(props) {
    super(props);
    this.inputRef = createRef();
    this.state = {
      ProductDeatails: [
        {
          Id: 1,
          Name: "SoftLand",
          Downloads: "4,206 Downloads",
          Image: productImage1,
          Description:
            "Softland is a modern and creative app landing HTML website template. Any one can use this template to showcase their app or services. Softland is an ultimate",
        },
        {
          Id: 2,
          Name: "Rapid",
          Downloads: "24,206 Downloads",
          Image: productImage2,
          Description:
            "Rapid is elegant and elegant to use multipuropse. Boostrap template with modern and simple web design .It will leave a solid impression pn everyone that",
        },
        {
          Id: 3,
          Name: "Biz Page",
          Downloads: "3,24,206 Downloads",
          Image: productImage3,
          Description:
            "BizPage is modern visually stunning and creative multipuropse coroperative . Business HTML5 template built with Bootstrap framework . The sectioining code",
        },
      ],
    };
  }
  componentDidMount() {
    const newProduct = {
      Id: 3,
      Name: "Biz Page",
      Downloads: "3,24,206 Downloads",
      Image: productImage3,
      Description: "The is website !!",
    };
    this.product(newProduct);
  }

  RemoveData = (Id) => {
    // alert("Hey", Id);
    console.log("hey", Id);
    console.log("hey", this.state.ProductDeatails);
    const UpdateData = this.state.ProductDeatails.filter(
      (product) => product.Id !== Id
    );
    this.setState({
      ProductDeatails: UpdateData,
    });
    console.log("hey", UpdateData);
  };

  // componentDidMount() {
  //   const newProduct1 = {
  //     Id: 3,
  //     Name: "Biz Page",
  //     Downloads: "3,206 Downloads",
  //     Image: productImage3,
  //     Description: "The is website !!",
  //   };
  //   this.product1(newProduct1);
  // }
  // product1 = (newProduct1) => {
  //   const plength = this.state.ProductDeatails.length;
  //   const n1pro = {
  //     Id: `${newProduct1.Id} ${newProduct1 + 1}`,
  //     Name: `${newProduct1.Name} ${newProduct1 + 1} `,
  //     Downloads: `${newProduct1.Downloads} ${newProduct1 + 1}`,
  //     Image: newProduct1.productImage1,
  //     Description: `${newProduct1.Description} ${newProduct1 + 1}`,
  //   };
  //   this.setState({
  //     ProductDeatails: [...this.state.ProductDeatails, n1pro],
  //   });
  // };
  // newProduct = {this.state.ProductDeatails(../newProduct)}
  //call addProduct function and pass object
  product = (newProduct) => {
    const prodLength = this.state.ProductDeatails.length;
    const Ntproduct = {
      Id: `${prodLength + 1}`,
      Name: `${newProduct.Name} ${prodLength + 1}`,
      Downloads: `${newProduct.Downloads} ${prodLength + 1}`,
      Image: newProduct.Image,
      Description: `${newProduct.Description} ${prodLength + 1}`,
    };
    this.setState({
      ProductDeatails: [...this.state.ProductDeatails, Ntproduct],
      shouldPortalOpen: false,
    });
  };

  shouldPortalOpen = () => {
    this.setState({
      shouldPortalOpen: true,
    });
  };

  state = {
    PortalData: [
      {
        Name: `${this.props.portalDataName}`,
        Place: `${this.props.portalDataPlace}`,
        Description: `${this.props.portalDataDes}`,
      },
    ],
  };

  // componentDidMount() {
  // addPortalProduct = () => {
  //   const addPortalProduct = {
  //     Id: 3,
  //     Name: "Biz Page",
  //     Downloads: "3,24,206 Downloads",
  //     Image: productImage1,
  //     Description: "The is website !!",
  //   };
  // };
  // // }

  addProduct = (addPortalProduct) => {
    const prodLengthPortal = this.state.ProductDeatails.length;
    // const PortalProduct = {
    //   Id: `${prodLengthPortal}`,
    //   Name: `${addPortalProduct.Name} ${prodLengthPortal + 1}`,
    //   Downloads: `${addPortalProduct.Downloads} ${prodLengthPortal + 1}`,
    //   Image: addPortalProduct.Image,
    //   Description: `${addPortalProduct.Description} ${prodLengthPortal + 1}`,
    // };
    console.log();
  };

  render() {
    return (
      <>
        <div className="row">
          <div className="button-wrapper">
            <div className="feature-Product">
              <div className="col-12 intro-layout text-center">
                <h1>Feature Products ({this.state.ProductDeatails.length})</h1>
                <div className="border">
                  <hr style={{ weight: 5, height: 2, color: "cyan" }} />
                </div>
              </div>
            </div>
            <div className="button-wrappers">
              <button
                onClick={this.shouldPortalOpen}
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#addProductModal"
                data-whatever="@mdo"
              >
                Add Product{" "}
              </button>
              {this.state.shouldPortalOpen ? (
                <PortalComponent>
                  <ModalBox addProduct={this.product}></ModalBox>
                </PortalComponent>
              ) : null}
            </div>
          </div>
        </div>
        <div className="row">
          {this.state.ProductDeatails.map((product, index) => {
            return (
              <Product
                //onClickRemove={() => this.UpdateData.bind()}
                click={this.RemoveData.bind(this, product.Id)}
                key={product.Id}
                value={product}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default productlist;
