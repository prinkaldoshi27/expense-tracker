const AddedToast = () => {
  return (
      <div style={{ width: "40%", margin: "auto", alignSelf: "center", justifyContent: "center", marginTop: "2%" }}>
      <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
          <div className="toast-header">
              <strong className="me-auto">Successfull</strong>
                  <small>Just Now</small>
              <button type="button" className="btn-close ms-2 mb-1" data-bs-dismiss="toast" aria-label="Close">
                      <span aria-hidden="true"></span>
              </button>
          </div>
          <div className="toast-body">
                  Item Added Successfully
          </div>
      </div>
      </div>
  )
}
export default AddedToast