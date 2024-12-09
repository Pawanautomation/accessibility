Interview question:Explain how you did the accessibility testing using mix of manual and automation testing.Explain in detail taking any project related to education like university etc as an example
Example Project: Accessibility Testing for a University Web Portal
Overview of the Project:
I worked on a university web portal designed to support students, faculty, and staff. The platform provided access to course materials, grades, financial aid information, and administrative tasks. The goal was to ensure the platform adhered to WCAG 2.1 Level AA standards and was fully accessible to individuals with disabilities, including students using assistive technologies.

Approach:
For this project, I used a mix of manual and automated testing to cover all accessibility requirements. Below is a detailed step-by-step explanation of the process:

1. Planning and Preparation
Understanding Requirements:


Identified critical areas such as:
Student login and dashboard.
Course registration and material download.
Financial aid forms.
Faculty modules for uploading grades and assignments.
Reviewed accessibility requirements specific to higher education institutions, including WCAG 2.1, ADA compliance, and Section 508 guidelines.
Selecting Tools:


Automation Tools: Axe DevTools, Wave, Lighthouse.
Manual Tools: JAWS, NVDA, VoiceOver, and Color Contrast Analyser.
Testing Environment: Desktop and mobile devices across browsers like Chrome, Firefox, and Safari.

2. Automated Testing
Automation was used to perform a broad sweep of accessibility issues.
Tool: Axe DevTools


Steps:


Ran Axe scans on key pages:
Login page
Student dashboard
Course catalog and registration pages
Financial aid forms
Identified common issues, such as:
Missing alt attributes for images.
Poor color contrast in button text.
Misconfigured ARIA roles for navigation menus.
Wave Tool: Used Wave to cross-check findings from Axe and identify areas for manual testing, particularly for form fields and navigation.


Limitations of Automation: Automation detected technical issues, but it couldn't verify usability, keyboard operability, or assistive technology behavior.



3. Manual Testing
Manual testing was essential for uncovering issues related to real-world user interactions.
Keyboard Navigation:
Tested navigation across the platform using only the keyboard.
Ensured tab order was logical and predictable.
Verified that all interactive elements (e.g., links, buttons, dropdowns) were operable without a mouse.
Checked focus indicators were visible and consistent across pages.
Screen Reader Testing:
Used JAWS and NVDA (Windows) and VoiceOver (macOS) to evaluate:
Proper announcement of form labels and error messages.
Navigation through dynamic content, such as pop-ups and modals.
Accessibility of ARIA roles, states, and properties for menus and tables.
Live region updates for notifications (e.g., "registration successful" messages).
Color Contrast and Visual Testing:
Verified text and background contrast ratios using the Color Contrast Analyser tool.
Ensured all elements met WCAG's minimum contrast requirements (4.5:1 for normal text, 3:1 for large text).
Checked visual hierarchy and spacing for users with low vision.
Testing Dynamic Content:
Validated modals (e.g., "Add Course" or "Delete Item") to ensure proper focus management.
Focus trapped within the modal.
Returned focus to the triggering element after closing the modal.
Forms and Tables:
Tested forms for accessible labels and error handling:
Ensured every input field had a unique, descriptive label or aria-labelledby.
Verified error messages were descriptive and correctly associated with form fields.
Evaluated large data tables (e.g., grade sheets) for screen reader navigability using proper <th> tags and scope attributes.

4. Testing Specific Features
Login Page:
Verified that CAPTCHA alternatives (audio-based) were available for visually impaired users.
Ensured that incorrect password or validation errors were announced by the screen reader.
Course Registration:
Checked dropdown menus for proper ARIA roles and keyboard operability.
Ensured that registration confirmation messages were announced by live regions.
File Download for Course Materials:
Validated downloadable files (e.g., PDFs) for accessibility compliance.
Checked for proper tagging and navigability within the documents.

5. Reporting and Collaboration
Findings Documentation:


Automated Issues: Generated reports from Axe DevTools and Wave.
Manual Issues: Documented with screenshots, issue descriptions, and WCAG references.
Priority-Based Recommendations:


Categorized issues by severity (Critical, High, Medium, Low).
Provided actionable recommendations, such as:
Adding ARIA roles to dropdown menus.
Correcting form field associations with labels.
Redesigning color schemes to improve contrast.
Developer Collaboration:


Conducted sessions to explain findings and their impact.
Shared accessibility resources and best practices for HTML and ARIA usage.

6. Regression Testing
After fixes were applied, I re-tested the application using both automated tools and manual methods to ensure:
Previously identified issues were resolved.
No new issues were introduced during the fixes.

7. Outcome
The university portal achieved WCAG 2.1 Level AA compliance.
Students, including those using assistive technologies, reported significantly improved usability.
The university avoided potential legal risks by adhering to accessibility regulations.

Why Use a Mixed Approach?
Automated Testing: Quickly identifies common coding issues, saving time in large projects.
Manual Testing: Validates usability, dynamic content, and assistive technology interactions, ensuring a user-centric approach.
By combining these methods, I ensured comprehensive accessibility coverage for the university web portal.

