![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)
![Security](https://img.shields.io/badge/security-clean-brightgreen?style=for-the-badge)

# 🛡️ GhostMetadata - Privacy Cleaner Tool

**GhostMetadata** is a lightweight, mobile-friendly Node.js utility designed to strip sensitive EXIF data and metadata from your images. This tool ensures your privacy by removing GPS coordinates, device information, and timestamps before you share your photos online.

---

## ✨ Features
* **Deep Metadata Removal:** Cleans GPS locations, camera settings, and software tags.
* **Privacy First:** Process is 100% local. No data ever leaves your device.
* **Mobile Optimized:** Specifically tested to run on mobile terminals like **iSH** (iOS) and **Termux** (Android).
* **Lightweight:** Built with minimal dependencies for maximum performance.

---

## 🚀 Getting Started

### Prerequisites
* **Node.js**: Version 14 or higher recommended.
* **Image File**: An image (e.g., `photo.jpg`) placed in the project directory.

### Installation
1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Zakariaghoudi/Privacy-Cleaner-Tool-.git](https://github.com/Zakariaghoudi/Privacy-Cleaner-Tool-.git)
   cd Privacy-Cleaner-Tool-
2. Install dependencies
    ```bash
    npm install
3. Usage
    ```bash 
    node index.js 

🛠 Built With

* Node.js – JavaScript Runtime
* Exif-be-gone – إزالة بيانات الـ metadata
* FileSystem (FS) – التعامل مع الملفات
  
📱 Mobile Usage (iSH / Termux)
This tool is perfect for on-the-go privacy:
1.	Install Node.js: Run apk add nodejs npm in iSH.
2.	Setup: Move your photos to the project folder using your file manager.
3.	Execute: Run the script and get your "Cleaned" version instantly.
🤝 Contributing & License
• License: This project is licensed under the MIT License.
• Contributing: Contributions, issues, and feature requests are welcome!
Created with 🛡️ by Zakaria Ghoudi
 ## 🗺️ Roadmap
- [ ] Add support for bulk processing (cleaning entire folders).
- [ ] Create a simple Web UI for non-technical users.
- [ ] Add support for PDF metadata stripping.

