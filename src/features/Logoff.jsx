import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

function Logoff() {
  const { logout } = useAuth();
  const [error, setError] = useState("");
  const [isLoggingOff, setIsLoggingOff] = useState(false);

  async function handleLogoff() {
    setIsLoggingOff(true);
    setError("");
    try {
      const result = await logout();

      if (!result.success) {
        setError(result.error);
        setIsLoggingOff(false);
      }
    } catch (error) {
      setError(`Error: ${error.name} | ${error.message}`);
    } finally {
      setIsLoggingOff(false);
    }
  } 
  return (
    <>
      <button onClick={handleLogoff} disabled={isLoggingOff}>
        {isLoggingOff ? <>Logging off...</> : <>Log Off</>}
      </button>
      {error && <p>{error}</p>}
    </>
  );
}

export default Logoff;
