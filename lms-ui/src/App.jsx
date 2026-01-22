import { useState } from "react";

const API = "https://lms-hauk.onrender.com";

export default function App() {
  const [page, setPage] = useState("login");
  const [token, setToken] = useState("");
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const [course, setCourse] = useState({ title: "", description: "" });
  const [lessonId, setLessonId] = useState("");
  const [file, setFile] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState("");

  const signup = async () => {
  try {
    const res = await fetch(`${API}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...user, role: "INSTRUCTOR" }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Signup failed");
      return;
    }

    alert("Signup successful. Please login.");
    setPage("login");
  } catch (err) {
    alert("Signup error: " + err.message);
  }
};

  const login = async () => {
    const res = await fetch(`${API}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email, password: user.password }),
    });
    const data = await res.json();
    setToken(data.access_token);
    setPage("dashboard");
  };

  const createCourse = async () => {
    const res = await fetch(`${API}/courses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(course),
    });
    const data = await res.json();
    alert(`Course created: ${data.title}`);
  };

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch(`${API}/assets/${lessonId}/upload`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await res.json();
    setUploadedUrl(data.assetUrl);
  };

  return (
    <div style={{ padding: 40, maxWidth: 500, margin: "auto" }}>
      <h2> LMS Service</h2>

      {page === "login" && (
        <>
          <h3>Login</h3>
          <input placeholder="Email" onChange={e => setUser({ ...user, email: e.target.value })} />
          <br /><br />
          <input type="password" placeholder="Password" onChange={e => setUser({ ...user, password: e.target.value })} />
          <br /><br />
          <button onClick={login}>Login</button>
          <p>
            No account? <span onClick={() => setPage("signup")} style={{ color: "blue", cursor: "pointer" }}>Sign up</span>
          </p>
        </>
      )}

      {page === "signup" && (
        <>
          <h3>Sign Up</h3>
          <input placeholder="Name" onChange={e => setUser({ ...user, name: e.target.value })} />
          <br /><br />
          <input placeholder="Email" onChange={e => setUser({ ...user, email: e.target.value })} />
          <br /><br />
          <input type="password" placeholder="Password" onChange={e => setUser({ ...user, password: e.target.value })} />
          <br /><br />
          <button onClick={signup}>Create Account</button>
          <p>
            Already have an account? <span onClick={() => setPage("login")} style={{ color: "blue", cursor: "pointer" }}>Login</span>
          </p>
        </>
      )}

      {page === "dashboard" && (
        <>
          <h3>Instructor Dashboard</h3>

          <h4>Create Course</h4>
          <input placeholder="Title" onChange={e => setCourse({ ...course, title: e.target.value })} />
          <br /><br />
          <input placeholder="Description" onChange={e => setCourse({ ...course, description: e.target.value })} />
          <br /><br />
          <button onClick={createCourse}>Create Course</button>

          <h4>Upload Lesson Asset</h4>
          <input placeholder="Lesson ID" onChange={e => setLessonId(e.target.value)} />
          <br /><br />
          <input type="file" onChange={e => setFile(e.target.files[0])} />
          <br /><br />
          <button onClick={uploadFile}>Upload Asset</button>

          {uploadedUrl && (
            <>
              <h4>Uploaded File</h4>
              <a href={uploadedUrl} target="_blank">{uploadedUrl}</a>
            </>
          )}
        </>
      )}
    </div>
  );
}
