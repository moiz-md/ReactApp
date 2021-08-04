import React, { Component } from "react";

class ModalBox extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div
        className="modal fade"
        id="addProductModal"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="exampleModalLabel">
                Add Product
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="name" className="col-form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="place-name" className="col-form-label">
                    Place:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="message-text" className="col-form-label">
                    Description:
                  </label>
                  <textarea
                    className="form-control"
                    id="message-text"
                  ></textarea>
                  {/* <!-- <input type="text" className="form-control" id="recipient-name"> --> */}
                </div>
              </form>

              <div className="modal-footer float-left">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={() => this.addPortalProduct()}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// ReactDOM.render(<ModalBox />, document.getElementById("portal-root"));

export default ModalBox;
