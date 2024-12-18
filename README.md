# Tool-Box

 **language: [English](README.md), [中文](README_zh.md)**

## Project Introduction
Tool-Box is a feature-rich local toolset application developed based on Electron and Vue. Its core objective is to provide users with convenient, efficient office assistance tools that can be used without network connection. By integrating a variety of practical functions, it deeply meets the diverse needs of users in various office scenarios, thereby significantly enhancing office efficiency and user experience.

## Feature Highlights
- **Rich Tool Integration**:
    - It comprehensively covers numerous key areas such as document processing, data calculation, and format conversion. For example, its fast text editing tool supports batch text processing operations. Whether it is adjusting text format or replacing keywords, it can be accomplished easily and efficiently. The powerful data calculation module can handle complex formula operations and data analysis tasks, perfectly meeting the data processing requirements in daily office work. The format conversion function performs outstandingly, enabling rapid and accurate conversion between various formats such as documents, images, and audio, effectively solving work troubles caused by format incompatibility.
- **Offline Stable Operation**:
    - It completely breaks free from network constraints and can run stably and smoothly in any network environment. This feature ensures that users can still carry out work without hindrance in offline scenarios such as during business trips or in areas with network failures. It effectively avoids work delays due to network problems and strongly guarantees the security and privacy of user data, making users feel at ease.
- **Simple and Intuitive Interface Design**:
    - It adopts a simple, clear, and user-friendly interaction interface with carefully arranged functional modules. As a result, both new users who are using it for the first time and experienced proficient users can quickly get started and operate efficiently, greatly optimizing user experience and improving work efficiency.

## Technology Stack
- **Main Technology Stack**: Vue 3.4.30, Electron 31.0.2, vite 5.3.1, node.js 20.17.0
- **Other Related Technologies**: There is a detailed list of dependent packages in the software's about interface.

## Project Structure Explanation
- The `src/renderer/vite/tool/projects` directory stores the source code of all tools. Each tool has its own independent folder, which contains an `index.vue` file. This file is the entry file of the tool. If the tool is relatively small, all the logic code is placed in the `index.vue` file. If the tool is more complex and large, its logic code can be split into the `index.vue` file and multiple sub-components in the `modules` folder.
- The `main/ipc` directory stores the files for IPC communication between all tools and the main process. Each tool corresponds to a folder, which contains an `index.js` file. It is the entry for tool communication with the main process. Only when a tool needs to communicate with the main process, the corresponding file will be created. By default, a `js` file handles the communication of one function and interacts with the main process through the `ipc.js` file.

## Installation and Operation

### Install Dependencies
Execute the `npm install` command in the project root directory. This command will accurately install all the dependent packages required by the project according to the `package.json` and `package-lock.json` files, building a complete operating environment. During this process, it will automatically handle the compatibility issues of dependent package versions, complete the download and decompression of related files, and build a dependency tree, laying a solid foundation for the smooth startup of the project.

### Run in Development Mode
Execute the `npm run dev` command to start the development server and enable the hot update function. During the development process, once the code is modified, the changes will be immediately displayed in the browser or Electron application window without the need to manually refresh the page to view the latest effects. This greatly shortens the development feedback cycle, accelerates the development process, helps developers quickly verify and iterate functional features, and effectively improves development efficiency.

### Build the Project
#### Currently, only windows builds and adaptations are available
#### Windows System
Run the `npm run build:win` command to build executable files and installation packages suitable for the Windows system. This build process is based on the `electron-builder.yml` configuration file and will integrate application icons, copyright information, file associations, and other settings. Eventually, a standard `.exe` installation file and related resource files will be generated, facilitating distribution and deployment on the Windows platform and ensuring that the application runs stably in the Windows environment and complies with the system interaction specifications.
#### macOS System
Execute the `npm run build:mac` command to build an application package suitable for the macOS system. This build follows Apple's official specifications and the `electron-builder.yml` configuration, properly handling key aspects such as icons, signatures, and permission settings, generating a standard `.app` package structure. This ensures that the application has good compatibility, security, and user experience on the macOS system, supporting listing on the Mac App Store or internal deployment and distribution within an enterprise.
#### Linux System
Run the `npm run build:linux` command to build executable files and installation packages for various Linux distributions. The build process will adjust the configuration according to the characteristics of the target distribution (such as different package management systems and desktop environments), generating installation packages in formats such as `.deb` or `.rpm` and binary executable files, ensuring that the application can be smoothly installed and run stably on mainstream Linux platforms such as Ubuntu and CentOS, and adapting to the interaction specifications and system settings of different desktop environments (such as GNOME and KDE).

## Contribution Guide
Welcome developers to contribute to Tool-Box! Whether you are committed to fixing bugs, optimizing performance, adding new features, or improving documentation, it will inject strong impetus into the continuous development of the project. Please follow the following process:
1. **Fork the Project**: Click the Fork button of the project repository on the GitHub platform to create a personal copy of the project. In this way, you can carry out development and testing modifications in an independent environment without affecting the integrity and stability of the original project.
2. **Create a Branch**: Create a feature branch from the master branch of the project and give it a clear and descriptive name, such as `feature/awesome-tool` or `bugfix/issue-123-fix`. Ensure that the branch has a single and clear function to facilitate code management and subsequent merge and backtracking operations.
3. **Submit Code**: Complete the code writing and testing work within the created branch. Please be sure to follow the existing code style and specification requirements of the project. When submitting code, write clear, concise, and accurate commit messages, detailing the intention of the code modification and its impact on the function, so that team members can easily understand and review the code changes.
4. **Initiate a Pull Request**: After the development work is completed, submit a Pull Request to the master branch of the original project on GitHub. When submitting, please describe the modification content, motivation, and testing situation in detail. The team will conduct a comprehensive review of the submitted code, including code quality, functional integrity, compatibility, and whether it complies with the overall planning and design principles of the project. Once approved, your code will be merged into the project, and your contribution will officially become part of the project.

### Simple Tool Writing Process
1. Create a folder corresponding to the tool in the `src/renderer/vite/tool/projects` directory.
2. Create an `index.vue` file in the tool folder as the entry file of the tool.
3. If necessary, create a folder with the same name as the tool in the `main/ipc` directory and create an `index.js` file in it for communication with the main process.
4. After the tool is written, create a reference to the tool folder in the `src/renderer/vite/tool/index.vue` file and add it to the `typelists` according to the tool type.
5. Create a corresponding route in the `src/router/index.ts` file.
6. To achieve multi-language adaptation, modify the display text to `t('tool_name')`. It is necessary to import `import { useI18n } from 'vue-i18n'` in advance and use `const { t } = useI18n()` in the `setup` function.
7. For main process communication, if the communication content is less, it can be directly written in the api file; if the content is more, a separate file can be created and imported in the api.
8. Please try to use the `element-plus` component library. If it is necessary to use `element-ui`, it needs to be imported in the `main/preload.js` file to ensure the consistency of the interface style.