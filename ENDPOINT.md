# FJKT48 API Endpoint

API documentation to access FJKT48 data easily and quickly.

## 📋 List of Endpoints

### 🎤 Member & Trainee Endpoints

| **Endpoint**            | **Method** | **Parameters**    | **Description**                           |
| ----------------------- | ---------- | ----------------- | ----------------------------------------- |
| `/api/v1/member`        | `GET`      | `-`               | Retrieve all members of JKT48.            |
| `/api/v1/member/id/:id` | `GET`      | `id`: _Member ID_ | Retrieve details of a member by their ID. |

---

> **Note:**  
> Replace `:id` with the actual ID of the member when accessing the endpoint.

### 🛠️ How to Use

- Base URL: `https://your-api-domain.com`
- Example request to get a member by ID: `GET https://your-api-domain.com/api/v1/member/id/marsha-lenathea`
