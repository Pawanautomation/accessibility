Example: Accessibility Testing for an E-commerce Website
Project Overview:
The e-commerce website, "E-Mart," aimed to provide a seamless online shopping experience for all users, including those with disabilities. The website offered a wide range of products, including electronics, clothing, and home goods.
Accessibility Testing Approach:
We employed a combination of manual and automated testing techniques to ensure the website's accessibility.
Manual Testing:
Keyboard Navigation:
Tested navigation through the website using only the keyboard, ensuring all interactive elements (buttons, links, form fields) were accessible.
Verified that focus indicators were visible and moved logically through the page.
Screen Reader Compatibility:
Used screen readers (JAWS, NVDA) to evaluate the website's content and structure.
Checked for accurate reading order, meaningful alternative text for images, and clear labeling of form fields.
Assessed the effectiveness of screen reader navigation through menus, tables, and other complex elements.
Color Contrast:
Visually inspected the website for sufficient color contrast between text and background, especially for low-vision users.
Used color contrast checking tools to ensure compliance with WCAG 2.1 guidelines.
Alternative Text:
Verified that all non-text content (images, icons, videos) had appropriate alternative text to convey meaning to screen reader users.
Form Accessibility:
Ensured that form fields were properly labeled and had clear instructions.
Checked for error messages that were clear and informative.
Tested the behavior of form fields with screen readers and keyboard navigation.
Mobile Accessibility:
Evaluated the website's accessibility on mobile devices, focusing on touch screen interactions and screen reader compatibility.
Automated Testing:
Accessibility Scanning Tools:
Utilized automated tools like Axe, Lighthouse, and Pa11y to identify common accessibility issues, such as missing alt text, low color contrast, and keyboard trap errors.
Integrated these tools into our continuous integration and continuous delivery (CI/CD) pipeline to catch accessibility problems early in the development process.
Custom Scripts:
Developed custom scripts to automate specific accessibility tests, such as checking for ARIA attribute usage, HTML validation, and semantic HTML structure.
Collaboration and Iteration:
Worked closely with developers and designers to address accessibility issues promptly.
Regularly reviewed and updated accessibility testing procedures to align with evolving standards and best practices.
Conducted ongoing accessibility testing and monitoring to ensure the website remained accessible as new features were added or existing ones were modified.
Key Challenges and Solutions:
Complex Components: For complex components like carousels and modal dialogs, we ensured proper ARIA attributes were used to provide clear semantic information to assistive technologies.
Dynamic Content: We implemented techniques to make dynamically loaded content accessible, including using ARIA live regions and proper JavaScript event handling.
Third-Party Integrations: We carefully reviewed third-party components and plugins for accessibility compliance and worked with vendors to address any issues.
By combining manual and automated testing, we were able to identify and resolve a wide range of accessibility issues, ensuring that the E-Mart website was inclusive and accessible to all users.

