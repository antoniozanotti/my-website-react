import "@assets/styles.css";
import { beforeMount } from "@playwright/experimental-ct-react/hooks";
import { Providers } from "@/app/providers";

beforeMount(async ({ App }) => {
  const messages = (await import(`../src/messages/en.json`)).default;
  return (
    <Providers locale="en" messages={messages}>
      <App />
    </Providers>
  );
});
