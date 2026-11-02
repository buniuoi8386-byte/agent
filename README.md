# news-brief — Agent showcase

Trang trưng bày công khai, chỉ đọc cho Hermes Agent news-brief.

Trang: https://buniuoi8386-byte.github.io/agent/  
Mã nguồn: https://github.com/buniuoi8386-byte/agent

Trang mô tả vai trò, quy trình, tiêu chuẩn xác minh và giới hạn của Agent. Đây là bản demo tĩnh; không có ô chat, API, backend, quyền Lark hay đường gọi vào Hermes.

## Nội dung công khai

- index.html, styles.css, layout.css, app.js: giao diện và tương tác tĩnh.
- Có một ví dụ bản tin từ các liên kết công khai.
- Không đưa vào Profile/SOUL, khóa, tệp .env, tin nhắn Lark riêng tư hay dữ liệu nội bộ.

## Triển khai

GitHub Pages đang xuất bản từ nhánh main, thư mục gốc /. Commit mới trên nhánh này sẽ kích hoạt GitHub Pages build và deployment tự động.

## An toàn

- Content Security Policy đặt connect-src none, chặn kết nối fetch, XHR và WebSocket từ trang.
- Các nút chỉ mở nội dung mẫu có sẵn; người xem không thể gửi yêu cầu hoặc gọi Agent.
- Mã nguồn trong repository là công khai. Chỉ commit nội dung đã được duyệt để trưng bày.

## Xem cục bộ

Mở index.html bằng trình duyệt.
