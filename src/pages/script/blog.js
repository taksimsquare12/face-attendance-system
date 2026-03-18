// blog.js
document.addEventListener("DOMContentLoaded", () => {
  // Blog Category Filter
  const categories = document.querySelectorAll("aside ul li a");
  const articles = document.querySelectorAll("section article");

  categories.forEach(category => {
    category.addEventListener("click", (e) => {
      e.preventDefault();
      const selected = category.textContent.trim();

      let found = false;
      articles.forEach(article => {
        const title = article.querySelector("h2").textContent.trim();
        if (title.includes(selected)) {
          article.classList.remove("hidden");
          found = true;
        } else {
          article.classList.add("hidden");
        }
      });

      // If no match, show all articles again
      if (!found) {
        articles.forEach(article => article.classList.remove("hidden"));
      }
    });
  });

  // Recent Posts Click Handler
  const recentPosts = document.querySelectorAll("aside:nth-of-type(2) ul li a");

  recentPosts.forEach(post => {
    post.addEventListener("click", (e) => {
      e.preventDefault();
      // Flowbite-style alert box
      const alertBox = document.createElement("div");
      alertBox.textContent = `📖 You clicked on: ${post.textContent}`;
      alertBox.className = "p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-700 dark:text-blue-400";
      document.querySelector("section").prepend(alertBox);

      // Auto-hide after 3 seconds
      setTimeout(() => alertBox.remove(), 3000);
    });
  });
});
