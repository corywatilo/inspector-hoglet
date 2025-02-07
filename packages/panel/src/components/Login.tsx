import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";

type LoginProps = {
  next: () => void;
};

const Login: FunctionComponent<LoginProps> = ({ next }) => {
  const [location, setLocation] = useState<string>("cloud-us");
  const [host, setHost] = useState<string>("https://app.posthog.com");
  const [apiKey, setApiKey] = useState<string>("");

  const handleSubmit = (event: any) => {
    event.preventDefault();

    next();
  };

  return (
    <div class="h-full px-6 flex flex-col justify-center space-y-12">
      <form onSubmit={handleSubmit}>
        <div class="space-y-2">
          <h1 class="text-2xl font-bold">Meet Inspector Hoglet</h1>
          <h5>
            By <a href="https://posthog.com">PostHog</a>
          </h5>

          <p>
            He shows important customer info from PostHog on certain websites.
          </p>
        </div>

        <div class="space-y-6">
          <h3 class="text-lg font-bold">Get started</h3>

          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Where do you run PostHog?
            </label>
            <select
              id="location"
              name="location"
              className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              defaultValue="cloud-us"
              onInput={(event) =>
                setLocation((event.target as HTMLSelectElement).value)
              }
            >
              <option value="cloud-us">PostHog Cloud (US)</option>
              <option value="cloud-eu">PostHog Cloud (EU)</option>
              <option value="self-hosted">Self-hosted</option>
            </select>
          </div>

          {location === "self-hosted" ? (
            <div>
              <label
                htmlFor="company-website"
                className="block text-sm font-medium text-gray-700"
              >
                Your PostHog URL
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm">https://</span>
                </div>
                <input
                  type="text"
                  name="company-website"
                  id="company-website"
                  className="block w-full rounded-md border-gray-300 pl-16 focus:border-indigo-500 focus:ring-indigo-500 sm:pl-14 sm:text-sm"
                  placeholder="www.example.com"
                />
              </div>
            </div>
          ) : null}

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Your Personal API Key
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="email"
                id="email"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                onInput={(event) =>
                  setApiKey((event.target as HTMLInputElement).value)
                }
                placeholder=""
              />
            </div>
            <p className="mt-2 text-sm text-gray-500" id="email-description">
              Get one at{" "}
              <a class="text-blue-500" href="https://app.posthog.com">
                https://app.posthog.com
              </a>
            </p>
          </div>
        </div>

        <button
          disabled={!(location && host && apiKey)}
          class="bg-blue-500 rounded w-full py-2 text-white disabled:bg-blue-200"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default Login;
