import "leaflet/dist/leaflet.css";
import "@/styles/globals.css";
import { AuthProvider } from "@/context/Auth";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
