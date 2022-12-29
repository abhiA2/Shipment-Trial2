import React from "react";

const Drafts = () => {
  return (
    <div className="post d-flex flex-column-fluid" id="kt_post">
      <div id="kt_content_container" className="container-xxl">
        <div id="root-table">
          <div className="card mb-5 mb-xl-8">
            <div className="fv-row row mt-10 mb-5 align-items-center ps-10 pe-5">
              <div className="col-lg-9">
                <h3 className="m-0">Draft Orders</h3>
              </div>
              <div className="col-lg-3 align-items-center d-flex">
                <button id="export_csv" className="btn btn-sm btn-success me-5">
                  CSV
                </button>
                <label className="form-label m-0 me-3">Search:</label>
                <input
                  name="searchdt"
                  type="text"
                  className="form-control form-control-sm"
                  id="searchdt"
                />
              </div>
            </div>
            <div className="card-body py-3">
              <div className="table-responsive">
                <div
                  id="sg_datatable_wrapper"
                  className="dataTables_wrapper dt-bootstrap4 no-footer"
                >
                  <div className="dt-buttons btn-group flex-wrap">
                    <button
                      className="btn btn-secondary buttons-csv buttons-html5 csvbutton dt-hide"
                      tabindex="0"
                      aria-controls="sg_datatable"
                      type="button"
                    >
                      <span>Export CSV</span>
                    </button>{" "}
                  </div>
                  <div className="row">
                    <div className="position-absolute top-0 end-0 align-items-center justify-content-end"></div>
                  </div>
                  <div className="table-responsive">
                    <table
                      id="sg_datatable"
                      className="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3 dataTable no-footer"
                      aria-describedby="sg_datatable_info"
                    >
                      <thead>
                        <tr className="text-dark fw-bolder fs-6">
                          <th
                            className="w-25px sorting_disabled"
                            data-orderable="false"
                            rowspan="1"
                            colspan="1"
                            aria-label="
											
												
											
										"
                            style={{ width: " 25px" }}
                          >
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="1"
                                data-kt-check="true"
                                data-kt-check-target=".widget-13-check"
                              />
                            </div>
                          </th>
                          <th
                            className="text-hover-primary sorting sorting_desc"
                            tabindex="0"
                            aria-controls="sg_datatable"
                            rowspan="1"
                            colspan="1"
                            aria-sort="descending"
                            aria-label="Order Date: activate to sort column ascending"
                            style={{ width: "100.234px" }}
                          >
                            Order Date
                          </th>
                          <th
                            className="text-hover-primary sorting"
                            tabindex="0"
                            aria-controls="sg_datatable"
                            rowspan="1"
                            colspan="1"
                            aria-label="Order ID: activate to sort column ascending"
                            style={{ width: "76.75px" }}
                          >
                            Order ID
                          </th>
                          <th
                            className="text-hover-primary sorting"
                            tabindex="0"
                            aria-controls="sg_datatable"
                            rowspan="1"
                            colspan="1"
                            aria-label="Customer Details: activate to sort column ascending"
                            style={{ width: "155.141px" }}
                          >
                            Customer Details
                          </th>
                          <th
                            className="text-hover-primary sorting"
                            tabindex="0"
                            aria-controls="sg_datatable"
                            rowspan="1"
                            colspan="1"
                            aria-label="Package Details: activate to sort column ascending"
                            style={{ width: "144.703px" }}
                          >
                            Package Details
                          </th>
                          <th
                            className="text-hover-primary sorting"
                            tabindex="0"
                            aria-controls="sg_datatable"
                            rowspan="1"
                            colspan="1"
                            aria-label="Shipping: activate to sort column ascending"
                            style={{ width: "83.4375px" }}
                          >
                            Shipping
                          </th>
                          <th
                            className="text-end sorting"
                            tabindex="0"
                            aria-controls="sg_datatable"
                            rowspan="1"
                            colspan="1"
                            aria-label="Actions: activate to sort column ascending"
                            style={{ width: "65.9844px" }}
                          >
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd">
                          <td
                            valign="top"
                            colspan="7"
                            className="dataTables_empty"
                          >
                            No data available in table
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start">
                      <div
                        className="dataTables_length"
                        id="sg_datatable_length"
                      >
                        <label>
                          <select
                            name="sg_datatable_length"
                            aria-controls="sg_datatable"
                            className="form-select form-select-sm form-select-solid"
                          >
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                          </select>
                        </label>
                      </div>
                      <div
                        className="dataTables_info"
                        id="sg_datatable_info"
                        role="status"
                        aria-live="polite"
                      >
                        Showing no records
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end">
                      <div
                        className="dataTables_paginate paging_simple_numbers"
                        id="sg_datatable_paginate"
                      >
                        <ul className="pagination">
                          <li
                            className="paginate_button page-item previous disabled"
                            id="sg_datatable_previous"
                          >
                            <a
                              href="#"
                              aria-controls="sg_datatable"
                              data-dt-idx="0"
                              tabindex="0"
                              className="page-link"
                            >
                              <i className="previous"></i>
                            </a>
                          </li>
                          <li
                            className="paginate_button page-item next disabled"
                            id="sg_datatable_next"
                          >
                            <a
                              href="#"
                              aria-controls="sg_datatable"
                              data-dt-idx="1"
                              tabindex="0"
                              className="page-link"
                            >
                              <i className="next"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drafts;
