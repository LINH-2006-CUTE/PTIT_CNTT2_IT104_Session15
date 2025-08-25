    import React, { Component } from 'react'
    
    export default class Bai5 extends Component {
      render() {
        return (
          <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Quản lý danh mục sản phẩm</title>
  <link rel="stylesheet" href="../css/category_manader.css" />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.4/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-DQvkBjpPgn7RC31MCQoOeC9TI2kdqa4+BSgNMNj8v77fdC77Kj5zpWFTJaaAoMbC"
    crossOrigin="anonymous"
  />
  {/* Quản lý danh mục sản phẩm */}
  <section className="category-management">
    <div className="section-header">
      <h2>Danh mục</h2>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#myModal"
      >
        Thêm mới danh mục
      </button>
      {/* Modal Thêm mới */}
      <div
        className="modal fade modal-lg"
        id="myModal"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Thêm mới danh mục</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form id="addCategoryForm">
                <div className="mb-3">
                  <label htmlFor="categoryCode" className="form-label">
                    Mã danh mục
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="categoryCode"
                    aria-describedby="codeHelp"
                  />
                  <div id="codeHelp" className="form-text text-danger" />
                </div>
                <div className="mb-3">
                  <label htmlFor="categoryName" className="form-label">
                    Tên danh mục
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="categoryName"
                  />
                  <div id="nameHelp" className="form-text text-danger" />
                </div>
                {/* Trạng thái hoạt động */}
                <div className="mb-3 form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="categoryActive"
                    name="status"
                    defaultChecked=""
                  />
                  <label
                    className="form-check-label-active"
                    htmlFor="categoryActive"
                  >
                    Đang hoạt động
                  </label>
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="categoryInactive"
                    name="status"
                  />
                  <label
                    className="form-check-label-inactive"
                    htmlFor="categoryInactive"
                  >
                    Ngừng hoạt động
                  </label>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Hủy
              </button>
              <button
                type="button"
                className="btn btn-primary"
                id="addCategoryBtn"
              >
                Thêm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Thanh lọc, tìm kiếm và sắp xếp */}
    <div className="filter-bar">
      <select id="statusFilter">
        <option value="">Tất cả trạng thái</option>
        <option className="active" value="active">
          Đang hoạt động
        </option>
        <option className="inactive" value="inactive">
          Ngừng hoạt động
        </option>
      </select>
      <input
        type="text"
        id="searchInput"
        placeholder="Tìm kiếm danh mục theo tên"
      />
      <select id="sortOption">
        <option value="name-asc">Sắp xếp: Tên (A-Z)</option>
        <option value="date-asc">Sắp xếp:Thời gian</option>
        {/* <option value="price-asc">Sắp xếp:Giá</option> */}
      </select>
    </div>
    {/* Table */}
    <table className="category-table">
      <thead>
        <tr>
          <th>Mã danh mục</th>
          <th>Tên danh mục</th>
          <th>Thời gian tạo</th>
          <th>Trạng thái</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody id="categoryTableBody" />
    </table>
    {/* Phân trang */}
    <div className="pagination" id="pagination" />
  </section>
  {/* Modal Cập nhật */}
  <div
    className="modal fade modal-lg"
    id="editModal"
    tabIndex={-1}
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Cập nhật danh mục</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <form id="editCategoryForm">
            <div className="mb-3">
              <label htmlFor="editCategoryCode" className="form-label">
                Mã danh mục
              </label>
              <input
                type="text"
                className="form-control"
                id="editCategoryCode"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="editCategoryName" className="form-label">
                Tên danh mục
              </label>
              <input
                type="text"
                className="form-control"
                id="editCategoryName"
              />
              <div id="editNameHelp" className="form-text text-danger" />
            </div>
            <div className="mb-3 form-check">
              <div className="mb-3 form-check-activeactive">
                <div className="mb-3 form-check">
                  <input
                    className="form-check-input"
                    id="categoryActive"
                    name="status-label"
                    type="radio"
                    defaultChecked=""
                  />
                  <label className="form-check-label" htmlFor="categoryActive">
                    Đang hoạt động
                  </label>
                </div>
                <div className="mb-3 form-check-inactive">
                  <input
                    t=""
                    name="status-label"
                    type="radio"
                    className="form-check-input"
                    id="categoryInactive"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="categoryInactive"
                  >
                    Ngừng hoạt động
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Hủy
          </button>
          <button
            type="button"
            className="btn btn-primary"
            id="updateCategoryBtn"
          >
            Cập nhật
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* Modal Xóa */}
  <div className="modal fade" id="deleteModal" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <div className="action-check">
            <p>Xác Nhận</p>
            <p>Bạn có chắc chắn muốn xóa danh mục này khỏi hệ thống không?</p>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Hủy
          </button>
          <button
            type="button"
            className="btn btn-primary delete-btn"
            id="confirmDeleteBtn"
          >
            Xóa
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* Bootstrap JS */}
  {/* SweetAlert2 */}
</>

        )
      }
    }
    