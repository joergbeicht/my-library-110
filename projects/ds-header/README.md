
# DS Header Component Documentation

The DS Header Component is a responsive Angular header component designed for use in a library. It provides a modern and user-friendly interface, ensuring a consistent look and feel across different screen sizes.

## Features:

- **Customizable**: Various `@Input` properties allow for customization of the header's appearance and behavior.
- **Language Dropdown**: Users can switch between different languages using a dropdown menu.
- **User Menu**: Provides user-related options, including login/logout functionality.
- **Responsiveness**: The header adjusts its layout based on the screen size, ensuring a seamless experience across devices.

## @Input Properties

---

### `logoPath: string`

---

### `logoAltText: string`
Alternative text for the logo, which provides a textual alternative to visual information.

---

### `appTitle: string`
Title of the application that will be displayed prominently on the header.

---

### `appVersion: string`
Version number of the application, which provides users with information about the current version they are using.

---

### `fontFamily: string`
Font family for the header, allowing customization of the typography.

---

### `isMenuDisabled: boolean`
Boolean value to determine if the menu button should be disabled. When set to true, users cannot interact with the menu button.

---

### `isMenuHidden: boolean`
Boolean value to determine if the menu button should be hidden in the header component.

---

### `hiddenLoginButton: boolean`
Boolean value to determine whether to hide the login button in the header component.

---

### `isLogoutHidden: boolean`
Boolean value to determine if the logout option should be hidden from the user menu.

---

### `color: string`
Is a string value to determine which value is drawn from the Material Theme Palette. Usually `primary` or `accent` or `warning`.

---

### `homeRoute: string` (optional)
String value representing the route to navigate to when the logo is clicked. Defaults to the root route (`'/'`) if not provided.

---

### `languageData: LanguageData`
Sets the currently selected language in the dropdown. This input is of type `Language`, which has properties `id` and `text` representing the language code and display text, respectively.

---

### `isLanguageHidden`
Boolean value to determine if the language selection menu is showed or not.

---

### `userName: string` (optional)
String value representing the name of the user. If not provided, the default value will be empty.

---

### `isLoggedIn: boolean` (optional)
Boolean value to determine if the user is logged in. If set to `true`, the user menu will display the user's details. If set to `false` or not provided, it will display "Login".

---

### `languageData: LanguageData[]` (optional)
Array of `LanguageData` objects representing the available languages for the application. Each object should contain details about a specific language. If not provided, no language options will be displayed.

---

### `showBackspaceIcon: boolean` (optional)
Boolean value to determine if a backspace icon should be displayed. If set to `true`, the backspace icon will be visible. If set to `false` or not provided, the icon will be hidden. Note: This will change the hamburger menu to the backspace Icon. 

---


## Usage:

To use the DS Header Component in your application, follow these steps:

1. Import the component module into your application module.
2. Add the `<lib-ds-header>` tag in your component's template where you want the header to appear.
3. Bind the necessary `@Input` properties to customize the header's appearance and behavior as per your requirements.

## Notes:

- Ensure that the Angular Material library is installed and set up in your project, as the DS Header Component relies on it for styling and functionality.
- The component's responsiveness is achieved using Angular's Flex Layout module, which provides a flexible and grid-based layout system.

