# Cyber Sip - Coffee Shop Landing Page

A responsive and modern landing page for a premium café experience. 

## Live Demo
✨ **[Click here to view the live website](https://stackvarun.github.io/coffee-shop/)** *(Note: Hold Ctrl or Cmd when clicking to open in a new tab, or use the live link in the repository sidebar on the right!)*

## Key Highlights
* **Multi-Page Architecture:** Features dedicated semantic subpages for complete user navigation.
* **Fully Responsive:** Adapts flawlessly to mobile, tablet, and desktop screens using custom layout rules.
* **Legal Compliance:** Integrated standardized Privacy and Refund policies to ensure industry-standard transparency.
* **Premium UI/UX:** Clean color theory, cohesive typography, and high-quality optimized imagery.
* **Optimized Performance:** Built with pure vanilla technologies for lightning-fast load times.
* **Custom Animated Cursor:** Premium dual-layer cursor with a smooth trailing effect, interactive hover animations, and enhanced desktop user experience.

## What I Learned From This Project
* **Cross-Page Navigation:** Mastered structural linking logic (`index.html#id`) to handle navigation seamlessly from separate subpages back to the home view.
* **Style Isolation & Sandboxing:** Gained experience creating independent layout sheets (`legal-style.css`) to target document typography without breaking or bloating core global styles.
* **DOM Manipulation:** Deepened my understanding of how Vanilla JavaScript interacts with HTML elements to manage UI state changes smoothly.
* **Layout Precision:** Handled production spacing barriers by implementing CSS Flexbox sticky footers to resolve vertical rhythm anomalies.

## Technical Breakdown
### Architecture
* **Semantic HTML5:** Structured with strict accessibility-friendly elements (`<header>`, `<main>`, `<section>`, `<footer>`) for robust SEO practices.
* **Modern CSS3:** Leveraging centralized custom variables (`:root`) to maintain global theme definitions uniformly across independent files.
* **Vanilla JavaScript:** Interactive components (like carousels or form zones) driven entirely by native web APIs.

### Project Structure
```text
├── index.html          # Main landing page view
├── privacy.html        # Privacy Policy page
├── refund.html         # Refund Policy page
├── style.css           # Global core styles & homepage layouts
├── legal-style.css     # Isolated document styles for policy views
├── script.js           # Core interactivity script
└── images/             # Visual asset repository