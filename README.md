# TodoList

## 📋 Mô tả dự án
Đây là một ứng dụng Todo List đơn giản được xây dựng bằng React và Vite, tập trung vào trải nghiệm quản lý công việc hàng ngày. Ứng dụng cho phép người dùng thêm, hoàn thành và xóa nhiệm vụ, đồng thời lọc danh sách theo trạng thái: tất cả, đang làm và đã hoàn thành.

## ✨ Tính năng chính
### 📝 Quản lý nhiệm vụ
- Thêm nhiệm vụ mới với nội dung tùy ý
- Đánh dấu nhiệm vụ là hoàn thành/không hoàn thành
- Xóa nhiệm vụ đã hoàn thành

### 📌 Lọc công việc
- Hiển thị tất cả nhiệm vụ
- Hiển thị nhiệm vụ đang hành động
- Hiển thị nhiệm vụ đã hoàn thành

### 🎯 Giao diện người dùng
- UI thân thiện, sử dụng Ant Design cho component
- Tích hợp Tailwind CSS để tùy chỉnh layout và kiểu dáng
- Layout đơn giản, phù hợp cho ứng dụng quản lý công việc cá nhân

## 🛠️ Công nghệ sử dụng
- React 18
- Vite
- Tailwind CSS
- Ant Design
- JavaScript (ES Modules)

## 📁 Cấu trúc dự án
```
TodoList/
├── README.md
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── index.html
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── TodoList/
│       └── TodoList.jsx
└── public/
```

## 🚀 Cài đặt và chạy
### Yêu cầu hệ thống
- Node.js >= 16
- npm hoặc yarn

### Thiết lập
```bash
npm install
```

### Chạy ứng dụng
```bash
npm run dev
```

### Build production
```bash
npm run build
```

## 💡 Cách sử dụng
1. Nhập nội dung nhiệm vụ vào ô nhập liệu.
2. Nhấn `Add` để thêm nhiệm vụ vào danh sách.
3. Sử dụng checkbox để đánh dấu hoàn thành.
4. Chọn tab `All`, `Active` hoặc `Completed` để lọc nhiệm vụ.
5. Trong tab `Completed`, sử dụng nút `delete all` để xóa tất cả nhiệm vụ đã hoàn thành.

## 🤝 Đóng góp
1. Fork dự án
2. Tạo branch feature mới: `git checkout -b feature/your-feature`
3. Commit thay đổi: `git commit -m "Add some feature"`
4. Push lên branch của bạn
5. Tạo pull request

## 📝 License
Dự án hiện tại chưa có license cụ thể. Nếu muốn, bạn có thể thêm file `LICENSE` theo chuẩn MIT hoặc giấy phép khác.

## 📞 Liên hệ
Nếu cần hỗ trợ hoặc có góp ý, vui lòng mở issue trong repository hoặc liên hệ với người phát triển.
