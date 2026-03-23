// blog.js

document.addEventListener("DOMContentLoaded", () => {

  const categories = document.querySelectorAll("aside ul li a");
  const articles = document.querySelectorAll("section article");
  const searchInput = document.querySelector("input[type='text']");


  // CATEGORY FILTER 🔥
  categories.forEach(category => {
    category.addEventListener("click", (e) => {
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
      if (!found) {
        articles.forEach(a => showArticle(a));
      }
    });
  });


  // SEARCH FUNCTION 🔍
  searchInput.addEventListener("input", () => {

    const value = searchInput.value.toLowerCase();

    articles.forEach(article => {
      const text = article.textContent.toLowerCase();

      if (text.includes(value)) {
        showArticle(article);
      } else {
        hideArticle(article);
      }
    });

  });


  // RECENT POSTS CLICK 📖
  const recentPosts = document.querySelectorAll("aside:nth-of-type(2) ul li a");

  recentPosts.forEach(post => {
    post.addEventListener("click", (e) => {
      e.preventDefault();

      showAlert(`📖 Opening: ${post.textContent}`);
    });
  });


  // ANIMATION FUNCTIONS ✨
  function showArticle(article) {
    article.classList.remove("hidden");
    article.style.opacity = "0";
    article.style.transform = "translateY(20px)";

    setTimeout(() => {
      article.style.transition = "all 0.4s ease";
      article.style.opacity = "1";
      article.style.transform = "translateY(0)";
    }, 100);
  }

  function hideArticle(article) {
    article.style.opacity = "0";
    article.style.transform = "translateY(20px)";

    setTimeout(() => {
      article.classList.add("hidden");
    }, 300);
  }


  // ALERT FUNCTION 🔔
  function showAlert(message) {

    const alertBox = document.createElement("div");

    alertBox.textContent = message;

    alertBox.className =
      "p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-700 dark:text-blue-400";

    document.querySelector("section").prepend(alertBox);

    setTimeout(() => {
      alertBox.remove();
    }, 3000);
  }

});