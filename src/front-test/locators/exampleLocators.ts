// Registro
export const camponame = 'input[data-qa="signup-name"]';
export const campoemail = 'input[data-qa="signup-email"]';
export const signup = 'button[data-qa="signup-button"]';


//login
export const EmailInput = 'input[data-qa="login-email"]';
export const PasswordInput = 'input[data-qa="login-password"]';
export const LoginButton = 'button[data-qa="login-button"]';
export const LoggedUser = '.nav.navbar-nav li:nth-child(10) a';
export const ErrorMessage = (texto: string) => `p:has-text("${texto}")`;


//registro completo
// Account Information
export const TitleMr = 'input[id="id_gender1"]';          // Mr
export const TitleMrs = 'input[id="id_gender2"]';         // Mrs
export const NameInput = 'input[data-qa="name"]';         // Name
export const AccountEmailInput = 'input[name="email_address"]'; // Email (hidden real value)
export const AccountPasswordInput = 'input[data-qa="password"]'; // Password
export const DaySelect = 'select[data-qa="days"]';        // Day
export const MonthSelect = 'select[data-qa="months"]';    // Month
export const YearSelect = 'select[data-qa="years"]';      // Year
export const NewsletterCheckbox = 'input[id="newsletter"]'; // Newsletter
export const OffersCheckbox = 'input[id="optin"]';       // Offers

// Address Information
export const FirstNameInput = 'input[data-qa="first_name"]'; // First Name
export const LastNameInput = 'input[data-qa="last_name"]';   // Last Name
export const CompanyInput = 'input[data-qa="company"]';      // Company
export const Address1Input = 'input[data-qa="address"]';     // Address 1
export const Address2Input = 'input[data-qa="address2"]';    // Address 2
export const CountrySelect = 'select[data-qa="country"]';    // Country
export const StateInput = 'input[data-qa="state"]';          // State
export const CityInput = 'input[data-qa="city"]';            // City
export const ZipcodeInput = 'input[data-qa="zipcode"]';      // Zipcode
export const MobileNumberInput = 'input[data-qa="mobile_number"]'; // Mobile Number
export const CreateAccountButton = 'button[data-qa="create-account"]'; // Create Account Button

// Success message
export const AccountCreated = 'h2:has-text("Account Created!")'; // Confirmation
