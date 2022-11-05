# Simple API ⚙

## Description
A simple API with a GET /profile endpoint.

## Endpoints
`GET '/'`
- Redirects to /profile endpoint

`GET '/profile'`
- Returns: a JSON response of a person's data.
- Request parameter: None
- Sample
```bash
curl https://simple-api-hngi9.onrender.com/profile
```
- Response (JSON)
```json
{
    "slackUsername":"Jon Doe",
    "backend":true,
    "age":15,
    "bio":"Building highly performant web apps with React.js ☸ x Node.js ⚙"
}
```

An [HNGi9](https://internship.zuri.team/hngi9) backend task.

Built using Express.js

## Deployment
Link to live site: https://simple-api-hngi9.onrender.com/profile