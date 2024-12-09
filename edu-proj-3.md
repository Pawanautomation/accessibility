Interview question:Explain how you did the accessibility testing using mix of manual and automation testing.Explain in detail taking any project related to education like university etc as an example
Accessibility Testing for a University Website
Project Overview:
The university website, "UniLearn," aimed to provide a comprehensive online platform for students, faculty, and staff. It included features like course catalogs, online learning modules, student portals, and faculty resources.
Accessibility Testing Approach:
We employed a multifaceted approach, combining manual and automated testing techniques to ensure the website's accessibility.
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
Specific Considerations for an Educational Website:
PDF Accessibility:
Ensured that PDFs were accessible by checking for tagged PDFs, alternative text for images, and proper reading order.
Online Learning Modules:
Verified that video content had captions and transcripts.
Tested the accessibility of interactive elements within online courses, such as quizzes and simulations.
Student Portals:
Ensured that student portals were accessible to students with disabilities, including those who rely on screen readers.
Tested the accessibility of features like course registration, grade viewing, and document submission.
Collaboration and Iteration:
Worked closely with developers, designers, and content creators to address accessibility issues promptly.
Regularly reviewed and updated accessibility testing procedures to align with evolving standards and best practices.
Conducted ongoing accessibility testing and monitoring to ensure the website remained accessible as new features were added or existing ones were modified.
By combining manual and automated testing, we were able to identify and resolve a wide range of accessibility issues, ensuring that the UniLearn website was inclusive and accessible to all students, faculty, and staff.

