import React, { useState } from "react";
import "./StudentManagement.css";

const StudentManagement = () => {
  const [students] = useState([
    {
      id: 1,
      code: "SV001",
      name: "Nguyễn Văn A",
      dob: "21/12/2023",
      email: "nva@gmail.com",
      status: "active",
    },
    {
      id: 2,
      code: "SV002",
      name: "Nguyễn Thị B",
      dob: "21/11/2022",
      email: "ntb@gmail.com",
      status: "inactive",
    },
  ]);

  return (
    <div className="container mt-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold">Quản lý sinh viên</h4>
        <button className="btn btn-primary rounded-pill shadow-sm">
          Thêm mới sinh viên
        </button>
      </div>

      {/* Toolbar */}
      <div className="d-flex justify-content-between mb-3">
        <div>
          <select className="form-select d-inline-block me-2 custom-select">
            <option>Sắp xếp theo tuổi</option>
            <option>Tên</option>
            <option>Ngày sinh</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            className="form-control custom-input"
            placeholder="Tìm kiếm từ khóa theo tên hoặc email"
          />
        </div>
      </div>

      {/* Table */}
      <table className="table table-bordered align-middle text-center shadow-sm">
        <thead className="table-light">
          <tr>
            <th>STT</th>
            <th>Mã sinh viên</th>
            <th>Tên sinh viên</th>
            <th>Ngày sinh</th>
            <th>Email</th>
            <th>Trạng thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, i) => (
            <tr key={s.id}>
              <td>{i + 1}</td>
              <td>{s.code}</td>
              <td className="fw-medium">{s.name}</td>
              <td>{s.dob}</td>
              <td>{s.email}</td>
              <td>
                {s.status === "active" ? (
                  <span className="status-active">Đang hoạt động</span>
                ) : (
                  <span className="status-inactive">Ngừng hoạt động</span>
                )}
              </td>
              <td>
                <button className="btn btn-outline-secondary btn-sm rounded-pill me-2">
                  Chặn
                </button>
                <button className="btn btn-outline-warning btn-sm rounded-pill me-2">
                  Sửa
                </button>
                <button className="btn btn-outline-danger btn-sm rounded-pill">
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link rounded-circle" href="#">
              &lt;
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link rounded-circle" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link rounded-circle" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link rounded-circle" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link rounded-circle" href="#">
              4
            </a>
          </li>
          <li className="page-item">
            <a className="page-link rounded-circle" href="#">
              &gt;
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default StudentManagement;
