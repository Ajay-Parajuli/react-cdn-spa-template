import * as React from "https://cdn.skypack.dev/react";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom";
import { HashRouter, Routes, Route, NavLink } from "https://cdn.skypack.dev/react-router-dom";

// ====== PAGES ====== //

// ====== Home ====== //

function Home() {
  const [users, setUsers] = React.useState([]);
  const [filteredUsers, setFilteredUsers] = React.useState([]);

  React.useEffect(async () => {
    const url = "https://raw.githubusercontent.com/cederdorff/react-cdn-starters/main/data/users.json";

    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
    setFilteredUsers(data);
  }, []);

  function search(event) {
    const value = event.target.value.toLowerCase();
    const results = users.filter((user) => user.name.toLowerCase().includes(value));
    setFilteredUsers(results);
  }

  return (
    <section className="page">
      <h1>Home Page</h1>
      <input type="search" placeholder="Search" onKeyUp={search} />
      <section className="grid-container">
        {filteredUsers.map((user) => (
          <article>
            <img src={user.image} />
            <h2>{user.name}</h2>
            <a href={`mailto:${user.mail}`}>{user.mail}</a>
          </article>
        ))}
      </section>
    </section>
  );
}

function UserItem({ user }) {
  
}


// ====== Post ====== //

function Posts() {
  const [posts, setPosts] = React.useState([]);
  const [filteredPosts, setFilteredPosts] = React.useState([]);

  React.useEffect(async () => {
    const url = "https://raw.githubusercontent.com/cederdorff/react-cdn-starters/main/data/posts.json";

    const response = await fetch(url);
    const data = await response.json();
    setPosts(data);
    setFilteredPosts(data);
  }, []);

  function search(event) {
    const value = event.target.value.toLowerCase();
    const results = posts.filter((post) => post.title.toLowerCase().includes(value));
    setFilteredPosts(results);
  }

  return (
    <section className="page">
      <h1>Post Page</h1>
      <input type="search" placeholder="Search" onKeyUp={search} />
      <section className="grid-container">
        {filteredPosts.map((post) => (
          <article>
            <img src={post.image} />
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        ))}
      </section>
    </section>
  );
}

// ====== About ====== //

function About() {
  const [students, setStudent] = React.useState([]);
  const [filteredStudents, setFilteredStudent] = React.useState([]);

  React.useEffect(async () => {
    const url = "https://cederdorff.github.io/mdu-frontend/canvas-users/data/users.json";

    const response = await fetch(url);
    const data = await response.json();
    setStudent(data);
    setFilteredStudent(data);
  }, []);

  function search(event) {
    const value = event.target.value.toLowerCase();
    const results = students.filter((student) => student.name.toLowerCase().includes(value));
    setFilteredStudent(results);
  }

  return (
    <section className="page">
      <h1>Student Page</h1>
      <input type="search" placeholder="Search" onKeyUp={search} />
      <section className="grid-container">
        {filteredStudents.map((student) => (
          <article>
            <img src={student.image} />
            <h2>{student.name}</h2>
            <h3>{student.course}</h3>
            <h3>{student.enrollmentType}</h3>
            <h3>{student.id}</h3>
            <h3>{student.sortableName}</h3>
            <a href={`mailto:${student.mail}`}>{student.mail}</a>
          </article>
        ))}
      </section>
    </section>
  );
}
// ====== Clients ====== //

function Clients() {
  return (
    <section className="page">
      <h1>Clients Page</h1>
    </section>
  );
}

// ====== COMPONENTS ====== //
function Nav() {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
        About
      </NavLink>
      <NavLink to="/clients" className={({ isActive }) => (isActive ? "active" : "")}>
        Clients
      </NavLink>
      <NavLink to="/Posts" className={({ isActive }) => (isActive ? "active" : "")}>
        Post
      </NavLink>
    </nav>
  );
}

// ====== APP ====== //
function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/Posts" element={<Posts />} />
      </Routes>
    </main>
  );
}







ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.querySelector("#root")
);
