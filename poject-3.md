Example Project: Accessibility Testing for a Retail Web Application
Overview of the Project:
I worked on a retail web application for a large e-commerce platform that involved complex user interfaces, dynamic content, and several accessibility challenges. The goal was to ensure compliance with WCAG 2.1 (Level AA) standards for both the desktop and mobile versions of the application.

Approach:
I adopted a mix of manual and automated testing to cover all aspects of accessibility. Here's a step-by-step breakdown of how I conducted accessibility testing:

1. Planning and Preparation
Understanding Requirements: Reviewed the application’s requirements and user flows, with a focus on critical areas like:
Home page
Product search
Product detail pages
Checkout process
Defining Scope: Created a checklist based on WCAG 2.1 guidelines, ADA compliance, and Section 508 requirements.
Selecting Tools: Decided on using:
Axe DevTools for automated testing.
Screen Readers: JAWS (Windows), NVDA (Windows), and VoiceOver (macOS).
Keyboard Navigation for testing operability.
Color Contrast Analyser for visual tests.

2. Automated Testing
Automation was used for a high-level scan of accessibility issues across the site.
Tool: Axe DevTools Browser Extension


Steps:


Ran Axe on key pages of the application (e.g., home page, product pages, checkout).
Identified issues like missing ARIA roles, lack of alternative text for images, and color contrast failures.
Exported the automated test reports for documentation.
Limitations of Automation: Automation identified issues like missing alt text or improper semantic tags but couldn't verify dynamic content, keyboard operability, or usability from a screen reader's perspective.



3. Manual Testing
Manual testing was critical for uncovering nuanced issues and validating real-world accessibility.
Keyboard Navigation:
Tested the entire application using only the keyboard:
Checked if focus indicators were visible.
Verified the navigation sequence was logical and consistent.
Ensured all interactive elements (buttons, links, forms) were operable without a mouse.
Flagged inaccessible components like pop-ups and modals where focus wasn’t managed properly.
Screen Reader Testing:
Used JAWS, NVDA, and VoiceOver to test key workflows:
Verified that all form fields had labels properly associated.
Ensured that error messages were announced correctly by the screen reader.
Checked for proper announcements of dynamic content changes (e.g., cart updates).
Tested ARIA roles and attributes for complex widgets like dropdowns and carousels.
Color Contrast and Visual Testing:
Used the Color Contrast Analyser tool to ensure that text met the required contrast ratio (4.5:1 for normal text, 3:1 for large text).
Verified that the application was visually accessible for users with low vision.
Dynamic Content Testing:
Ensured live regions (e.g., alerts) were announced correctly to assistive technologies.
Verified that modals had proper focus trapping (focus stays within the modal).

4. Testing Specific Features
Form Accessibility:
Checked that:
Each input field had a descriptive label.
Error messages were linked to the corresponding fields using ARIA attributes or aria-describedby.
Fields could be navigated and completed using only a keyboard.
Media Accessibility:
Ensured all images had meaningful alt text.
Verified video content had captions and, where applicable, audio descriptions.
Interactive Elements (Buttons, Links, and Dropdowns):
Confirmed that buttons and links were distinguishable, with clear, descriptive labels.
Verified dropdown menus and carousels supported both keyboard and screen reader interactions.

5. Reporting and Collaboration
Report Generation:
Automated Test Results: Shared detailed reports from Axe DevTools.
Manual Findings: Documented issues with screenshots, descriptions, and WCAG criteria references.
Collaboration with Development Team:
Conducted a workshop to explain issues and their impact.
Suggested fixes, such as:
Adding aria-live attributes for dynamic content.
Replacing div elements with semantic HTML5 tags like button or nav.
Adjusting color schemes to meet contrast requirements.

6. Regression Testing
After fixes were implemented, I conducted regression testing to verify that:
The identified issues were resolved.
No new accessibility issues were introduced.

7. Outcome
The retail application achieved WCAG 2.1 Level AA compliance.
Improved usability for users with disabilities, including smoother keyboard navigation and better screen reader support.
Enhanced customer satisfaction by creating an inclusive shopping experience.

Why Mix Manual and Automated Testing?
Automated tools like Axe are excellent for identifying coding-related issues, but manual testing ensures real-world usability, especially for:
Dynamic content
Keyboard navigation
Assistive technology behavior
This combination provides a comprehensive accessibility testing strategy, ensuring compliance and a positive user experience.

