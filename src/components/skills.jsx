const Skills = () => {
  const skillImages = {
    html: "/src/assets/htmlcss.jpeg",
    css: "/src/assets/htmlcss.jpeg",
    javascript: "/src/assets/javanode.jpeg",
  };

  const handleRedirect = (skill) => {
    window.open(skillImages[skill], "_blank");
  };

  return (
    <section id="skills" className="skills container">
      <h2>Skills</h2>
      <button onClick={() => handleRedirect("html")}>HTML</button>
      <button onClick={() => handleRedirect("css")}>CSS</button>
      <button onClick={() => handleRedirect("javascript")}>JavaScript</button>
    </section>
  );
};

export default Skills;
