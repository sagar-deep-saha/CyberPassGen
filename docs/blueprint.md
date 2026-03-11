# **App Name**: CyberPass

## Core Features:

- Secure Password Generation: Generate high-security passwords conforming to strict rules: 3 CamelCase words (4-12 letters each from a dictionary), 2 random special symbols, and 3 random digits.
- Password Display Area: A large, centered display area to clearly present the newly generated password to the user.
- Generate Button: A dedicated button to trigger the password generation process, incorporating a tactile click animation.
- Copy to Clipboard: A button to quickly copy the generated password to the user's clipboard, with a visual 'Success' toast notification for feedback.
- Mobile-Responsive Layout: The application's interface will adapt seamlessly to different screen sizes, maintaining its sharp-edged, grid-based aesthetic on mobile devices.

## Style Guidelines:

- A dark color scheme anchored by a deep charcoal background, contrasting with vibrant 'neon' accents. Background: Deep charcoal (#121212). Primary color: Vibrant Electric Cyan (#14DEE6) for key elements and interaction. Accent color: Acidic Green (#2ECC96) for secondary actions or highlights.
- All text uses 'Space Grotesk', a proportional sans-serif font, for its techy, scientific, and slightly retro digital feel, suitable for both headlines and concise body text.
- Utilize sharp, monolithic icons, potentially with a pixelated or mono-color design, to complement the Neo-Brutalist, 90s digital aesthetic. No rounded corners or soft gradients allowed.
- All UI elements, including buttons, containers, and inputs, must strictly adhere to `border-radius: 0px;`, creating sharp, 90-degree corners. Components will feature thick, solid borders (2px-4px) in high-contrast colors and 'hard' box shadows (e.g., `box-shadow: 5px 5px 0px #000;`) to create a pronounced 3D, 'pop-out' effect. The overall layout will maintain a sharp-edged, grid-like structure even on smaller screens.
- Implement smooth CSS transitions for all hover states. Integrate a subtle glitch effect or scan-line overlay for a retro-digital background texture. The generated password will animate into view with a 'typing' or 'scrambling' effect. The 'Generate' button will have a distinct, 'heavy click' animation feedback.