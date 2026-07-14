# User Story Template

**Title:**

**As a** [type of user],
**I want** [an action or feature],
**so that** [a benefit or value].

**Acceptance Criteria:**
1.
2.
3.

**Priority:** [High / Medium / Low]
**Story Points:** [1 / 2 / 3 / 5 / 8]
**Notes:**

---

# Example User Stories

## 1. Search gifts by category
**As a** user,
**I want** to search for gifts by category,
**so that** I can quickly find items relevant to what I'm looking for.

**Acceptance Criteria:**
1. User can enter a category or keyword in the search bar.
2. Results display only items matching the search criteria.
3. A "no results found" message appears if nothing matches.

**Priority:** High
**Story Points:** 3
**Label:** new

---

## 2. View gift item details
**As a** user,
**I want** to view detailed information about a specific gift item,
**so that** I can decide whether it's the right choice.

**Acceptance Criteria:**
1. Clicking an item opens a detail view.
2. The detail view shows name, description, category, and image.
3. A "back to results" link is available.

**Priority:** High
**Story Points:** 2
**Label:** new

---

## 3. Register for an account
**As a** user,
**I want** to register for an account,
**so that** I can save preferences and access personalized features.

**Acceptance Criteria:**
1. Registration form collects email and password.
2. Duplicate emails are rejected with a clear error.
3. Successful registration redirects to the login page.

**Priority:** High
**Story Points:** 3
**Label:** new

---

## 4. Log in to an existing account
**As a** user,
**I want** to log in to my account,
**so that** I can access features tied to my profile.

**Acceptance Criteria:**
1. Login form accepts email and password.
2. Invalid credentials show an error message.
3. Successful login stores an auth token and redirects to the home page.

**Priority:** High
**Story Points:** 3
**Label:** new

---

## 5. Update profile information
**As a** user,
**I want** to update my profile information,
**so that** my account details stay accurate.

**Acceptance Criteria:**
1. User can edit name and contact details from a profile page.
2. Changes are saved and confirmed with a success message.
3. Invalid input is rejected with a validation error.

**Priority:** Medium
**Story Points:** 2
**Label:** backlog

---

## 6. Refactor database connection logic
**As a** developer,
**I want** to refactor the MongoDB connection logic into a single reusable module,
**so that** all routes share one connection instead of duplicating setup code.

**Acceptance Criteria:**
1. A shared `connectToDatabase()` function exists in `db.js`.
2. All route files import and reuse this function.
3. No route opens its own separate database connection.

**Priority:** Medium
**Story Points:** 3
**Label:** technical debt

---

## 7. Natural language search
**As a** user,
**I want** to search using everyday language instead of exact keywords,
**so that** I can find gifts even if I don't know the precise category name.

**Acceptance Criteria:**
1. Search interprets common phrases (e.g., "gift for mom") and maps them to relevant categories.
2. Results are ranked by relevance.
3. This is a future enhancement, not required for MVP.

**Priority:** Low
**Story Points:** 5
**Label:** icebox

---

## 8. Landing page overview
**As a** user,
**I want** to see a landing page describing what the site offers,
**so that** I understand the purpose of the site before exploring further.

**Acceptance Criteria:**
1. Landing page includes a title, tagline, and short description.
2. A "Get Started" button navigates to the main app.
3. Page is responsive on mobile and desktop.

**Priority:** High
**Story Points:** 2
**Label:** new
