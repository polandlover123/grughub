# Caveman Software - Project Overview

This document provides a detailed breakdown of the Caveman Software website, a web application built with a modern, component-based architecture. The site's aesthetic is a dark theme with vibrant purple accents, centered around a fun "caveman" or "Grug" persona.

## Tech Stack

The project is built on a foundation of industry-standard technologies chosen for their performance, scalability, and developer experience:

- **Framework**: [Next.js](https://nextjs.org/) (v15) utilizing the App Router for server-centric routing and optimized performance.
- **Language**: [TypeScript](https://www.typescriptlang.org/) for static typing, enhancing code quality and maintainability.
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/) provides a set of reusable and accessible components that form the building blocks of the user interface.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) is used for all styling, enabling a utility-first approach. The theme is customized via CSS variables in `src/app/globals.css` to create the distinct dark mode look with purple highlights.
- **Generative AI**: [Genkit](https://firebase.google.com/docs/genkit) is integrated for backend AI functionalities, with its configuration located in `src/ai/genkit.ts`.
- **Deployment**: The project is configured for deployment on [Firebase App Hosting](https://firebase.google.com/docs/app-hosting), with settings defined in `apphosting.yaml`.

## Project Structure & Key Files

The codebase is organized logically within the `src/` directory, separating pages, components, and backend logic.

### Core Application Files

- **`src/app/layout.tsx`**: The root layout for the entire application. It sets up the HTML structure, includes the global stylesheet (`globals.css`), applies the dark theme, and imports the "Inter" font from Google Fonts.
- **`src/app/globals.css`**: Defines the global styles and custom Tailwind CSS theme variables. This file is central to the site's visual identity, specifying colors for background, foreground, primary (purple), and accent elements.
- **`tailwind.config.ts`**: The configuration file for Tailwind CSS, extending the default theme with custom colors and font families defined in `globals.css`.
- **`next.config.ts`**: Configuration for Next.js, including rules for remote image optimization from `placehold.co`.

### Pages

The application consists of two primary pages:

1.  **Homepage (`src/app/page.tsx`)**:
    - **Purpose**: Serves as the main landing page.
    - **Header**: Features the "Caveman Software" logo (`Dna` icon) and name, linking back to the homepage. It also includes a static "Beta 0.0.9" tag. The header container has a constrained width to keep elements closer to the center.
    - **Hero Section**: A central, attention-grabbing section with the main heading "Caveman Software" and the witty subheading "(rhymes with grug)". It includes a placeholder image with a `data-ai-hint` for a "caveman character".
    - **Action Buttons**: Two primary call-to-action buttons: "View Tools" which smoothly scrolls to the tools section, and "Contact" which navigates to the contact page.
    - **Tools Section**: Displays three feature cards, each representing a tool:
        - "Grug Note Generation"
        - "Grug Note Chat"
        - "Grug Note Repository"
      Each card contains a title, a short, humorously written description in the "Grug" voice, and a "Go to Tool" button. The repository card uniquely mentions that its content is "made by hand, by your classmates."
    - **Footer**: A simple footer displaying the company name, a tagline, and the copyright information.

2.  **Contact Page (`src/app/contact/page.tsx`)**:
    - **Purpose**: Provides users with contact information.
    - **Layout**: Shares the same `Header` and `Footer` as the homepage for consistency.
    - **Content**: Features a main title "Contact Grug" and three cards detailing different ways to connect:
        - Instagram
        - Website (Cavemansoftware.org)
        - GitHub
      Each card includes the platform name, an icon, the handle/URL, and a button to visit the external link.

### Components

The application heavily relies on reusable components to maintain a consistent and manageable codebase.

- **`src/components/Header.tsx`**: A shared header component used across all pages.
- **`src/components/Footer.tsx`**: A shared footer component.
- **`src/components/ui/`**: This directory contains all the core ShadCN UI components like `Button.tsx`, `Card.tsx`, `Input.tsx`, etc., which are used extensively to build the UI.
- **`src/hooks/use-toast.ts`**: A custom hook for managing and displaying toast notifications.
