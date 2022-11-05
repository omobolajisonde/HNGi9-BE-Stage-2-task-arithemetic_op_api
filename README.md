# Arithemetic operations api ⚙

## Description
A simple arithemetic operations api.

## Endpoints
`GET '/'`
- Redirects to /profile endpoint

`GET '/profile'`
- Request body: None
- Returns: a JSON response of a person's data.
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

`POST '/arithmetic_op'`
- Sends a POST request to solve an arithemetic operation
- Request body:
```json
{
  "operation_type": "subtraction",
  "x": 10,
  "y": 6
}
```
- Returns: a JSON response which includes the result of the operation and some other data.
- Sample
```bash
curl -X POST http://127.0.0.1:8000/arithmetic_op -H "Content-Type: application/json" -d '{"operation_type": "subtraction", "x": 10, "y": 6}'
```
- Response (JSON)
```json
{
  "slackUsername": "Omobolaji Sonde",
  "operation_type": "subtraction",
  "results": 4
}
```

An [HNGi9](https://internship.zuri.team/hngi9) backend task.

Built using Express.js

## Deployment
Link to live site: https://simple-api-hngi9.onrender.com/profile