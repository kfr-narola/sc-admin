import { useEffect } from "react"
import AppRoute from "./routes/AppRoute"
import { useDispatch, useSelector } from "react-redux";
import { updateThemeMode } from "./reducers/themeSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleStorageChange = (event) => {
      console.log("Loaded.....1", event);

      if (event.key === 'themeSettings') {
        console.log("conditions..");

        const { mode = "" } = JSON.parse(event.newValue)
        if (mode) {
          console.log("dispatch....");

          if (mode === 'system') {
            document.documentElement.setAttribute('data-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
          } else {
            document.documentElement.setAttribute('data-theme', mode)
          }

          dispatch(updateThemeMode(mode))
        }
      }
    };

    window.addEventListener('storage', handleStorageChange); // cross-tab

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <AppRoute />
  )
}

export default App