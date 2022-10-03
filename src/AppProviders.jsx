import { AuthProvider } from "./contexts/Auth";
import { HomeProvider } from "./contexts/Home";
import { ProfileProvider } from "./contexts/Profile";

export default function AppProviders({ children }) {
  return (
    <AuthProvider>
      <ProfileProvider>
        <HomeProvider>{children}</HomeProvider>
      </ProfileProvider>
    </AuthProvider>
  );
}
