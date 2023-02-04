const baseUrl = "http://www.strava.com/oauth";
const clientId = "client_id=12345678"; // your client id

const resType = "response_type=code";
const redirect = "redirect_uri=http://localhost:5173/exchange_token";
const params = "approval_prompt=force&scope=read";

const authUrl = `${baseUrl}/authorize?${clientId}&${resType}&${redirect}&${params}`;

const clientSecret = "client_secret=abcdef1234567890abcdef"; // your client secret
const grantType = "grant_type=authorization_code";

const tokensUrl = (code: string) =>
  `${baseUrl}/token?${clientId}&${clientSecret}&code=${code}&${grantType}`;

export { authUrl, tokensUrl };
