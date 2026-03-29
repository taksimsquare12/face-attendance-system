// blog.js
document.addEventListener("DOMContentLoaded", () => {
  const categories = document.querySelectorAll("aside ul li a");
  const articles = document.querySelectorAll("section article");
  const searchInput = document.querySelector("input[type='text']");
  const recentPosts = document.querySelectorAll("aside:nth-of-type(2) ul li a");

  // CATEGORY FILTER 🔥
  categories.forEach(category => {
    category.addEventListener("click", e => {
      e.preventDefault();
      const selected = category.textContent.trim();

      // Active highlight
      categories.forEach(c => c.classList.remove("text-cyan-400"));
      category.classList.add("text-cyan-400");

      let found = false;
      articles.forEach(article => {
        const text = article.textContent.toLowerCase();
        if (text.includes(selected.toLowerCase())) {
          showArticle(article);
          found = true;
        } else {
          hideArticle(article);
        }
      });

      // If nothing found → show all
      if (!found) articles.forEach(a => showArticle(a));
    });
  });

  // SEARCH FUNCTION 🔍
  searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();
    articles.forEach(article => {
      const text = article.textContent.toLowerCase();
      text.includes(value) ? showArticle(article) : hideArticle(article);
    });
  });

  // RECENT POSTS CLICK 📖
  recentPosts.forEach(post => {
    post.addEventListener("click", e => {
      e.preventDefault();
      showAlert(`📖 Opening: ${post.textContent}`);
    });
  });

  // ANIMATION FUNCTIONS ✨
  const showArticle = article => {
    article.classList.remove("hidden");
    article.style.opacity = "0";
    article.style.transform = "translateY(20px)";
    setTimeout(() => {
      article.style.transition = "all 0.4s ease";
      article.style.opacity = "1";
      article.style.transform = "translateY(0)";
    }, 100);
  };

  const hideArticle = article => {
    article.style.opacity = "0";
    article.style.transform = "translateY(20px)";
    setTimeout(() => article.classList.add("hidden"), 300);
  };

  // ALERT FUNCTION 🔔
  const showAlert = message => {
    const alertBox = document.createElement("div");
    alertBox.textContent = message;
    alertBox.className =
      "p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-700 dark:text-blue-400";
    document.querySelector("section").prepend(alertBox);
    setTimeout(() => alertBox.remove(), 3000);
  };

  // ✅ Object CRUD demo (Task 5)
  const blogInfo = {
    title: "AI Blog",
    posts: 2,
    active: true
  };

  blogInfo.category = "Education"; // Create
  console.log(`Blog Title: ${blogInfo.title}`); // Read
  blogInfo.active = false; // Update
  delete blogInfo.posts; // Delete

  // ✅ String Methods demo (Task 6)
  const rawString = "   AI Automation Blog   ";
  console.log(rawString.trim().toUpperCase());   // TRIM + UPPERCASE
  console.log(rawString.includes("Blog"));       // INCLUDES
  console.log(rawString.replace("Automation", "Attendance")); // REPLACE
  console.log(rawString.slice(0,10));            // SLICE
  console.log(rawString.startsWith("AI"));       // STARTSWITH
  console.log(rawString.endsWith("Blog   "));    // ENDSWITH
  console.log(rawString.split(" "));             // SPLIT
  console.log(rawString.concat(" - Latest"));    // CONCAT
});
