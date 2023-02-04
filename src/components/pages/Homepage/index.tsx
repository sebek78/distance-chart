const baseUrl = "http://www.strava.com/oauth/authorize";
const clientId = "client_id=123456"; // your client id
const resType = "response_type=code";
const redirect = "redirect_uri=http://localhost:5173/exchange_token";
const params = "approval_prompt=force&scope=read";

const url = `${baseUrl}?${clientId}&${resType}&${redirect}&${params}`;

export function Homepage() {
  return (
    <div>
      <a href={url}>
        <button type="button">API</button>
      </a>
    </div>
  );
}
