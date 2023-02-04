import { authUrl } from "../../../utils/url";

export function Homepage() {
  return (
    <div>
      <a href={authUrl}>
        <button type="button">API</button>
      </a>
    </div>
  );
}
