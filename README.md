# news-brief — Agent showcase

Trang hồ sơ tĩnh dựa trên mẫu AgentFactory được người dùng cung cấp.

## Ranh giới bảo mật

- Chỉ gồm HTML, CSS, JavaScript tĩnh và một ví dụ tin công khai.
- Không có API, backend, khóa, OAuth, kết nối Lark/Hermes, form nhập liệu hoặc endpoint gọi Agent.
- `connect-src 'none'` trong Content Security Policy chặn các kết nối fetch/XHR/WebSocket từ trang.
- Mọi tương tác trong trang chỉ mở/đóng nội dung đã đóng gói sẵn.
- Không đưa vào Profile/SOUL, tệp `.env`, tin nhắn Lark riêng tư hay mã định danh tài khoản.

## Chạy xem cục bộ

Mở `index.html` trong trình duyệt. Để xuất bản, tải nội dung thư mục này lên một host trang tĩnh (ví dụ Cloudflare Pages hoặc GitHub Pages). Không bật Functions/Workers hoặc API cho dự án này.

## Xuất bản theo mẫu GitHub Pages

1. Tạo repository công khai tên `news-brief-showcase` trong tài khoản GitHub của bạn.
2. Đưa toàn bộ nội dung thư mục này vào nhánh `main` của repository.
3. Trong Settings → Pages, chọn build and deployment bằng GitHub Actions.
4. Workflow `.github/workflows/pages.yml` sẽ xuất bản trang tại `https://<tên-tài-khoản>.github.io/news-brief-showcase/` sau khi chạy thành công.

Repository sẽ công khai cả mã nguồn trang tĩnh. Chỉ giữ nội dung giới thiệu và ví dụ đã duyệt; tuyệt đối không thêm Profile đầy đủ, `.env`, token, dữ liệu Lark hay tệp nội bộ.

## Tình trạng được mô tả

Trang phân biệt yêu cầu thiết kế với trạng thái đã kiểm chứng: Gateway/Lark WebSocket đã kết nối và gửi DM qua Hermes thành công; chiều nhận DM sau sửa allowlist còn cần tin nhắn thử mới; xử lý nhóm đang tắt; lịch gửi chưa được cài.
